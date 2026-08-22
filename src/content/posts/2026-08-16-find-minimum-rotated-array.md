---
title: Find the Minimum in a Rotated Sorted Array
date: 2026-08-16 09:00:00 +0530
description: Find the rotation point by comparing the middle value with the right boundary.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, rotated-array]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 22
---

## Problem

Return the minimum value in a rotated sorted array of distinct integers.

For `[4, 5, 6, 7, 0, 1, 2]`, return `0`.

## Intuition

Compare the middle value with the rightmost value. If `values[mid]` is larger, the minimum must be strictly to the right of `mid`. Otherwise, `mid` may be the minimum, so keep it in the search space.

## Java solution

```java
public static int findMinimum(int[] values) {
    if (values == null || values.length == 0) {
        throw new IllegalArgumentException("Array must not be empty");
    }

    int low = 0;
    int high = values.length - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;
        if (values[mid] > values[high]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return values[low];
}
```

## Complexity

Time is `O(log n)` and extra space is `O(1)`.

## Why `high = mid`

When `values[mid] <= values[high]`, the minimum is at `mid` or to its left. Setting `high = mid - 1` could discard the answer.
