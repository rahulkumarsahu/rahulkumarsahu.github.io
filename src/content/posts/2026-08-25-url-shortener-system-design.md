---
title: URL Shortener System Design
date: 2026-08-22 09:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: Design a reliable URL shortening service from requirements through storage, caching, and failure handling.
categories: [System Design]
tags: [system-design, case-study, caching, databases]
topic: system-design
series: system-design-case-studies
learningSection: system-design-case-studies
difficulty: medium
contentType: case-study
order: 10
---

## Requirements

The core write path accepts a long URL and returns a short code. The core read path accepts that code and redirects the visitor to the original URL.

The first production version supports optional expiry and custom aliases. Click analytics can arrive asynchronously because analytics should never delay a redirect.

The important quality requirements are low redirect latency, high read availability, durable mappings and protection against abusive link creation. Rich analytics dashboards and active-active multi-region writes remain outside the first release.

## Scale assumptions

Assume the service creates 10 million links each day and receives roughly 100 redirects for every new link. Traffic is uneven, so plan for a peak that reaches five times the daily average.

Use an average stored record size of 500 bytes after including the destination, code, timestamps, ownership fields and database overhead. These numbers are assumptions for exploring the design. Real capacity planning must use measured traffic and record sizes.

## Estimation

The assumptions produce the following baseline:

| Measure | Calculation | Estimate |
|---|---:|---:|
| Average link creation | 10,000,000 ÷ 86,400 | 116 writes per second |
| Average redirects | 116 × 100 | 11,574 reads per second |
| Peak redirects | 11,574 × 5 | 57,870 reads per second |
| New mapping storage per year | 10,000,000 × 500 bytes × 365 | About 1.66 TiB |

The read-to-write ratio makes redirect latency and cache behavior more important than optimizing the creation path first. Storage growth is large enough to plan for partitioning, but it does not require adding that complexity before one database approaches its measured limit.

You can change these assumptions in the [interactive system design lab](/projects/production-url-shortener/system-design-lab/).

## API contracts

```text
POST /links
{ "url": "https://example.com/a/long/path" }

201 Created
{ "code": "aZ91k", "shortUrl": "https://sho.rt/aZ91k" }

GET /{code}
302 Location: https://example.com/a/long/path
```

The creation endpoint validates the destination, optional expiry and requested alias. An idempotency key can prevent retries from creating several links accidentally. The redirect endpoint returns `404` for an unknown code and `410` for an expired mapping.

## Data model

The main record needs a unique short code, destination URL, creation time, optional expiry, and owner when accounts are supported.

The primary lookup is by short code, so that value should be indexed or used as the key.

```text
LinkMapping
  code            primary key
  destination     required URL
  created_at      timestamp
  expires_at      optional timestamp
  owner_id        optional identifier
  status          active | disabled
```

Analytics events belong in a separate append-only stream or store. Keeping them outside the mapping record prevents a popular link from turning every redirect into a write to the main database.

## Simple design

Begin with a load balancer, stateless application instances and one durable relational database. This version is easy to operate and already allows the application tier to scale horizontally.

### Short-code generation

One approach is to generate a unique numeric identifier and encode it with Base62. Another is to create random codes and retry on collision.

Sequential identifiers are simple but can reveal traffic patterns. Random codes avoid that leak but need collision handling.

### Redirect path

1. Receive the short code.
2. Look up the mapping in the database.
3. Verify that the link is active and not expired.
4. Return the redirect response.

This simple design is the baseline. Each additional component must remove a measured bottleneck or protect an explicit reliability goal.

## Bottlenecks

The database becomes the first likely bottleneck because every redirect performs a point lookup. A sudden burst can also exhaust application threads, database connections or network capacity before autoscaling adds instances.

Popular links create hot keys. Analytics updates on the redirect path would amplify that problem by turning a read-heavy workload into repeated writes. A single application instance or database also creates an availability risk during failures and deployments.

## Improved architecture

Add a distributed cache using cache-aside reads. On a cache miss, read the durable mapping, populate the cache with an appropriate expiry and return the redirect. The database remains the source of truth, so losing the cache does not lose links.

Place a token-bucket rate limiter near the edge and use separate policies for link creation and redirects. Health checks allow the load balancer to stop routing traffic to unhealthy application instances.

Read replicas can increase database read capacity. When one database can no longer hold or write the mapping set safely, partition by a stable hash of the short code. Analytics events should be published asynchronously so processing failures do not increase redirect latency.

```text
Client
  → API edge and rate limiter
  → Load balancer
  → Stateless redirect service
  → Distributed cache
  → Primary mapping store and read replicas

Every service emits metrics, structured logs and traces.
```

## Failure scenarios

| Failure | Expected response | Important tradeoff |
|---|---|---|
| Cache becomes unavailable | Open the cache circuit and fall back to rate-limited database reads | Redirect latency and database load increase |
| Application server becomes unhealthy | Remove it through health checks, drain requests and replace it | Requires spare capacity in healthy instances |
| Traffic suddenly increases | Protect dependencies with rate limits and scale the stateless tier | Some low-priority traffic may be rejected |
| Database replica falls behind | Stop sending freshness-sensitive reads to the lagging replica | Primary load increases temporarily |
| A popular URL becomes a hot key | Replicate the cached value and collapse concurrent cache fills | Hot-key controls add cache complexity |

A cache failure should not make durable mappings unavailable. Retries need short timeouts, limits and jitter, otherwise they can turn a small dependency failure into a retry storm.

Try these scenarios directly in the [URL Shortener System Design Lab](/projects/production-url-shortener/system-design-lab/#failure-scenarios).

## Tradeoff matrix

| Decision | Benefit | Cost |
|---|---|---|
| Random Base62 code | Does not expose a simple traffic sequence | Must detect and retry collisions |
| Cache-aside redirects | Low latency and lower database read load | Cold misses and invalidation rules remain |
| Read replicas | Adds read capacity without immediate sharding | Replica lag can return stale state |
| Hash partitioning | Distributes storage and point lookups evenly | Rebalancing and cross-partition operations are harder |
| Asynchronous analytics | Keeps analytics work outside redirect latency | Events can be delayed or delivered more than once |
| Multi-AZ deployment | Survives common machine and zone failures | Costs more and needs automated failover testing |

## Interview discussion

Start by fixing the scope and workload assumptions instead of drawing components immediately. Explain that the short-code lookup is the dominant access path, then build the simple version before introducing cache, replicas and partitioning.

Expect follow-up questions about collisions, custom-alias uniqueness, expiry, hot keys, stale replicas, cache failure, abusive traffic and analytics delivery. For every new component, state the benefit, the new failure mode and the signal that would justify operating it.

The central design argument is simple: keep redirects fast, keep the mapping durable, move analytics off the critical path and choose a code-generation strategy whose operational cost is understood.

## Production checklist

- Validate destination URLs and block unsafe schemes.
- Define alias uniqueness, expiry and disabled-link behavior.
- Use bounded timeouts, limited retries, jitter and circuit breakers.
- Protect creation and redirect paths with separate rate limits.
- Monitor request rate, error rate, duration, saturation and cache hit ratio.
- Alert on database connection pressure and replica lag.
- Back up the mapping store and rehearse restoration.
- Use multi-zone application instances and health-based routing.
- Test cache loss, instance failure, traffic spikes, replica lag and hot keys.
- Roll out changes gradually and keep a tested rollback path.
- Review privacy and retention rules for click analytics.
- Run load tests with realistic popular-link traffic before launch.
