---
title: Check Whether an Array Is Sorted
date: 2026-08-04 09:00:00 +0530
description: Verify nondecreasing order by checking each adjacent pair once.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, easy, traversal]
topic: dsa
series: arrays
difficulty: easy
contentType: problem
order: 12
---

## Problem

Return `true` when an integer array is sorted in nondecreasing order. Equal neighboring values are allowed.

`[1, 2, 2, 5]` is sorted. `[1, 4, 3]` is not.

## Intuition

The entire array is sorted only if every neighboring pair is in the correct order. The first pair where `values[i]` is smaller than `values[i - 1]` proves that the answer is false.

## Java solution

```java
public static boolean isSorted(int[] values) {
    if (values == null) {
        return false;
    }

    for (int index = 1; index < values.length; index++) {
        if (values[index] < values[index - 1]) {
            return false;
        }
    }
    return true;
}
```

## Complexity

Time is `O(n)` in the worst case and extra space is `O(1)`. The method can return early when it finds a violation.

## Common mistake

Use `<` rather than `<=` when duplicates are valid in nondecreasing order.

## Next step

Sorted input allows stronger techniques. Continue with [Remove Duplicates from a Sorted Array](/posts/remove-duplicates-sorted-array/).
