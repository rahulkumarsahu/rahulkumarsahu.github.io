---
title: Remove Duplicates from a Sorted Array
date: 2026-08-05 09:00:00 +0530
description: Use read and write pointers to keep one copy of each value in place.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, easy, two-pointers, in-place]
topic: dsa
series: arrays
difficulty: easy
contentType: problem
order: 13
---

## Problem

Given a sorted array, keep one copy of each distinct value at the beginning of the same array. Return the number of distinct values.

For `[1, 1, 2, 2, 3]`, return `3`. The first three positions become `[1, 2, 3]`.

## Intuition

Because the array is sorted, equal values are next to one another. A read pointer scans every value. A write pointer marks the position where the next distinct value belongs.

The invariant is that positions `0` through `write` already contain the unique prefix.

## Java solution

```java
public static int removeDuplicates(int[] values) {
    if (values == null || values.length == 0) {
        return 0;
    }

    int write = 0;
    for (int read = 1; read < values.length; read++) {
        if (values[read] != values[write]) {
            write++;
            values[write] = values[read];
        }
    }
    return write + 1;
}
```

## Complexity

Time is `O(n)` and extra space is `O(1)`.

## Common mistakes

* Returning `write` instead of `write + 1`
* Comparing with the previous read position instead of the last unique value
* Creating another array when the problem asks for an in place update

## Next step

Use a similar read and write idea in [Move Zeroes to the End](/posts/move-zeroes-to-end/).
