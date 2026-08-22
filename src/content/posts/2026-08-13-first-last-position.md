---
title: First and Last Position in a Sorted Array
date: 2026-08-13 09:00:00 +0530
description: Use two boundary searches to find the complete range of a repeated target.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, boundaries]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 20
---

## Problem

Given a sorted array and a target, return the first and last indexes where the target appears. Return `[-1, -1]` when it is absent.

For `[5, 7, 7, 8, 8, 10]` and target `8`, return `[3, 4]`.

## Intuition

An ordinary binary search may find any matching position. Run one search that keeps moving left after a match, then another that keeps moving right.

## Java solution

```java
public static int[] searchRange(int[] values, int target) {
    return new int[] {
        boundary(values, target, true),
        boundary(values, target, false)
    };
}

private static int boundary(int[] values, int target, boolean findFirst) {
    int low = 0;
    int high = values.length - 1;
    int answer = -1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (values[mid] == target) {
            answer = mid;
            if (findFirst) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else if (values[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return answer;
}
```

## Complexity

Two binary searches still take `O(log n)` time. Extra space is `O(1)`.

## Common mistake

Stopping at the first match gives a valid occurrence, not necessarily the requested boundary.
