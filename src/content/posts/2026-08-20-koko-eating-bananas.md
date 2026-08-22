---
title: Koko Eating Bananas
date: 2026-08-20 09:00:00 +0530
description: Find the minimum feasible eating speed with binary search on the answer.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, answer-space]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 25
---

## Problem

Koko has piles of bananas and `h` hours. At a speed of `k` bananas per hour, she chooses one pile each hour and eats up to `k` bananas from it. Return the minimum speed that finishes every pile within `h` hours.

## Search space

The smallest possible speed is `1`. The largest speed we need to consider is the largest pile because eating faster than that cannot reduce a pile below one hour.

If a speed is feasible, every faster speed is also feasible.

## Java solution

```java
public static int minEatingSpeed(int[] piles, int hoursLimit) {
    int low = 1;
    int high = 0;
    for (int pile : piles) {
        high = Math.max(high, pile);
    }

    int answer = high;
    while (low <= high) {
        int speed = low + (high - low) / 2;
        if (canFinish(piles, hoursLimit, speed)) {
            answer = speed;
            high = speed - 1;
        } else {
            low = speed + 1;
        }
    }
    return answer;
}

private static boolean canFinish(int[] piles, int limit, int speed) {
    long hours = 0;
    for (int pile : piles) {
        hours += (pile + (long) speed - 1) / speed;
        if (hours > limit) {
            return false;
        }
    }
    return true;
}
```

## Complexity

Let `m` be the largest pile. Each feasibility check takes `O(n)`, and binary search runs `O(log m)` checks. Total time is `O(n log m)` with `O(1)` extra space.

## Common mistake

Use ceiling division for each pile. Ordinary integer division rounds down and undercounts the required hours.
