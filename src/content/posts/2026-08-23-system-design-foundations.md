---
title: System Design Foundations
date: 2026-08-22 09:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: Learn the requirements, numbers, data, and failure questions that should come before an architecture diagram.
categories: [System Design]
tags: [system-design, fundamentals, scalability, reliability]
topic: system-design
series: system-design-foundations
learningSection: system-design-foundations
difficulty: basics
contentType: concept
order: 2
---

The first step in system design is not choosing a database. It is understanding what the system must do and which qualities matter most.

## Functional requirements

Functional requirements describe user visible behavior. For a URL shortener, the core requirements may be creating a short link and redirecting it to the original URL.

Keep the first list small. Optional features can be discussed after the core path is clear.

## Quality requirements

Ask which qualities are important:

* Availability
* Latency
* Durability
* Consistency
* Security
* Cost
* Operability

These qualities can conflict. Stronger consistency may add latency. More replicas may improve availability while increasing cost and operational work.

## Capacity

Estimate requests per second, peak traffic, object size, retention, and expected growth. Estimates do not need to be exact. They need to reveal whether one machine is enough and which resource is likely to become the limit.

## Data and access patterns

Choose storage by starting with the data and queries:

* Which values are written together?
* Which lookups must be fast?
* Does the workload read much more than it writes?
* Which operations require transactions?
* How long must the data survive?

## Failure questions

For every important dependency, ask what happens when it is slow, unavailable, duplicated, or returns an error.

Timeouts, retries, idempotency, rate limits, and circuit breakers should answer specific failure modes rather than appear as decoration on a diagram.

## A useful final check

Explain the main request path, the most important failure path, and the first bottleneck you expect. If those three stories are clear, the design is usually moving in the right direction.
