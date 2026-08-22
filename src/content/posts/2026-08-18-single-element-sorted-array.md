---
title: Single Element in a Sorted Array
date: 2026-08-18 09:00:00 +0530
description: Use the pairing pattern to find the one unpaired value in logarithmic time.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, medium, pairing]
topic: dsa
series: binary-search
difficulty: medium
contentType: problem
order: 24
---

## Problem

In a sorted array, every value appears exactly twice except one. Return the single value in `O(log n)` time and `O(1)` space.

For `[1, 1, 2, 3, 3, 4, 4]`, return `2`.

## Intuition

Before the single value, each pair begins at an even index. After the single value, that alignment shifts. Make `mid` even and compare it with `mid + 1` to decide which side still contains the broken pair.

## Java solution

```java
public static int singleNonDuplicate(int[] values) {
    int low = 0;
    int high = values.length - 1;

    while (low < high) {
        int mid = low + (high - low) / 2;
        if (mid % 2 == 1) {
            mid--;
        }

        if (values[mid] == values[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return values[low];
}
```

## Complexity

Time is `O(log n)` and extra space is `O(1)`.

## Common mistake

The XOR solution is `O(n)` and correct, but it does not meet the logarithmic time requirement that sorted input makes possible.
