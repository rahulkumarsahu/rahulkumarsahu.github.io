---
title: Search a Rotated Sorted Array
date: 2026-08-15 09:00:00 +0530
description: Identify the sorted half on every step and keep only the half that can contain the target.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, rotated-array]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 21
---

## Problem

A sorted array of distinct integers has been rotated. Return the index of a target in `O(log n)` time, or `-1` when it is absent.

For `[4, 5, 6, 7, 0, 1, 2]` and target `0`, return `4`.

## Intuition

At least one half around `mid` is sorted. Identify that half, check whether the target falls inside its value range, and discard the other half when it does.

## Java solution

```java
public static int searchRotated(int[] values, int target) {
    int low = 0;
    int high = values.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (values[mid] == target) {
            return mid;
        }

        if (values[low] <= values[mid]) {
            boolean targetInLeft = values[low] <= target && target < values[mid];
            if (targetInLeft) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            boolean targetInRight = values[mid] < target && target <= values[high];
            if (targetInRight) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}
```

## Complexity

Time is `O(log n)` and extra space is `O(1)`.

## Common mistake

The range checks need careful inclusive and exclusive boundaries. The middle value has already been checked, so it should not remain in either range.

## Note about duplicates

This version assumes distinct values. With duplicates, it may be impossible to identify the sorted half immediately, and the worst case can become `O(n)`.
