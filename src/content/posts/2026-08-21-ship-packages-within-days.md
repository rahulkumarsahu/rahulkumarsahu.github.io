---
title: Ship Packages Within D Days
date: 2026-08-21 09:00:00 +0530
description: Find the smallest ship capacity that preserves package order and meets the deadline.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, answer-space]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 26
---

## Problem

Packages must be shipped in the given order within a fixed number of days. Return the smallest daily capacity that can meet the deadline.

## Search space

The ship must hold the heaviest package, so the lower bound is the maximum package weight. One ship that carries every package in a single day needs capacity equal to the total weight, so that total is the upper bound.

## Java solution

```java
public static int shipWithinDays(int[] weights, int dayLimit) {
    int low = 0;
    int high = 0;

    for (int weight : weights) {
        low = Math.max(low, weight);
        high += weight;
    }

    int answer = high;
    while (low <= high) {
        int capacity = low + (high - low) / 2;
        if (daysNeeded(weights, capacity) <= dayLimit) {
            answer = capacity;
            high = capacity - 1;
        } else {
            low = capacity + 1;
        }
    }
    return answer;
}

private static int daysNeeded(int[] weights, int capacity) {
    int days = 1;
    int currentLoad = 0;

    for (int weight : weights) {
        if (currentLoad + weight > capacity) {
            days++;
            currentLoad = 0;
        }
        currentLoad += weight;
    }
    return days;
}
```

## Complexity

Let `s` be the sum of package weights. The feasibility check takes `O(n)`, and the answer search takes `O(log s)` checks. Total time is `O(n log s)` with `O(1)` extra space.

## Common mistakes

* Starting the lower bound at zero instead of the heaviest package
* Reordering packages even though the original order must be preserved
* Forgetting that the first day already exists before the loop begins

## Pattern connection

This problem uses the same first feasible template as [Koko Eating Bananas](/posts/koko-eating-bananas/). Only the feasibility check changes.
