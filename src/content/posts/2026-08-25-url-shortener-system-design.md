---
title: URL Shortener System Design
date: 2026-08-22 09:00:00 +0530
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

The core write path accepts a long URL and returns a short code. The core read path accepts that code and redirects the user to the original URL.

Assume redirects are much more frequent than new link creation. Redirect latency and availability matter more than immediate consistency for analytics.

## API

```text
POST /links
{ "url": "https://example.com/a/long/path" }

GET /{code}
302 Location: https://example.com/a/long/path
```

## Data model

The main record needs a unique short code, destination URL, creation time, optional expiry, and owner when accounts are supported.

The primary lookup is by short code, so that value should be indexed or used as the key.

## Code generation

One approach is to generate a unique numeric identifier and encode it with Base62. Another is to create random codes and retry on collision.

Sequential identifiers are simple but can reveal traffic patterns. Random codes avoid that leak but need collision handling.

## Read path

1. Receive the short code.
2. Check a distributed cache.
3. Read the database on a cache miss.
4. Cache the mapping with an appropriate expiry.
5. Return the redirect.

Popular links create a read heavy workload, so caching is valuable. The database remains the source of truth.

## Reliability

Use timeouts on cache and database calls. A cache failure should fall back to the database. Rate limit link creation and protect redirects from abusive traffic.

Analytics should be asynchronous so event processing does not increase redirect latency. Duplicate analytics events should be acceptable or deduplicated later.

## Growth path

Start with one relational database when the scale allows it. Add read replicas, partitioning, or a different key value store only when measured traffic and data size require them.

## Main tradeoff

The shortest design explanation is this: keep redirects simple and fast, move analytics off the critical path, and choose a code generation strategy whose operational cost you understand.
