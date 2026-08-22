---
title: Find a Peak Element
date: 2026-08-17 09:00:00 +0530
description: Follow the rising slope to find any peak in logarithmic time.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, peak]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 23
---

## Problem

A peak is an element greater than its neighbors. Return the index of any peak. Values outside the array can be treated as negative infinity.

## Intuition

Compare `values[mid]` with the next value. When the slope is rising, a peak exists to the right. When the slope is falling, `mid` itself may be a peak, so keep the left side including `mid`.

## Java solution

```java
public static int findPeak(int[] values) {
    int low = 0;
    int high = values.length - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;
        if (values[mid] < values[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
```

## Complexity

Time is `O(log n)` and extra space is `O(1)`.

## Common mistake

The loop uses `low < high`, which guarantees that `mid + 1` is a valid index.
