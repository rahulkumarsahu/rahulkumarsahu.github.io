---
title: Back of the Envelope Estimation
date: 2026-08-22 09:00:00 +0530
description: Estimate traffic, storage, bandwidth, and concurrency with simple numbers that guide design choices.
categories: [System Design]
tags: [system-design, estimation, capacity-planning]
topic: system-design
series: system-design-foundations
learningSection: capacity-estimation
difficulty: basics
contentType: concept
order: 3
---

Estimation helps us understand the shape of a system before choosing components. The result is not a promise. It is a working model.

## Requests per second

If a service receives 86 million requests per day, the average is roughly 1,000 requests per second because a day has about 86,400 seconds.

Real traffic is uneven, so apply a peak factor. If peak traffic is five times the average, design the request path for about 5,000 requests per second.

## Storage

Multiply objects per day by average object size and retention.

For 10 million records per day at 500 bytes each:

`10,000,000 × 500 bytes ≈ 5 GB per day`

One year is roughly 1.8 TB before indexes, replication, metadata, and growth margin.

## Bandwidth

Bandwidth is request rate multiplied by average payload size.

At 5,000 responses per second and 20 KB per response, outbound traffic is about 100 MB per second.

## Concurrency

Little's Law gives a useful approximation:

`concurrency = throughput × latency`

At 2,000 requests per second and 200 milliseconds per request, about 400 requests are in flight.

## Use ranges

Write down assumptions and use a range when the input is uncertain. A design that works only when every guess is perfect is fragile.

The value of estimation is not arithmetic precision. It is knowing which choices matter now and which can wait.
