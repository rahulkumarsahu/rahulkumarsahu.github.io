---
title: Union of Two Sorted Arrays
date: 2026-08-08 09:00:00 +0530
lastReviewed: 2026-09-04 09:00:00 +0530
javaVersion: "Java 21+"
description: Merge two sorted arrays into a sorted list of distinct values with two pointers.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, medium, two-pointers, merge]
topic: dsa
series: arrays
learningSection: arrays
difficulty: medium
contentType: problem
patterns: [two-pointers]
order: 21
---

## Problem

Return the sorted union of two sorted integer arrays. Each value should appear once in the result.

For `[1, 1, 3, 5]` and `[2, 3, 4]`, return `[1, 2, 3, 4, 5]`.

## Intuition

The smallest unprocessed value must be at one of the two current pointers. Add that value when it differs from the last value in the result, then move the matching pointer.

## Java solution

```java
import java.util.ArrayList;
import java.util.List;

public static List<Integer> sortedUnion(int[] first, int[] second) {
    List<Integer> union = new ArrayList<>();
    int left = 0;
    int right = 0;

    while (left < first.length && right < second.length) {
        int value;
        if (first[left] <= second[right]) {
            value = first[left++];
        } else {
            value = second[right++];
        }
        addIfNew(union, value);
    }

    while (left < first.length) {
        addIfNew(union, first[left++]);
    }
    while (right < second.length) {
        addIfNew(union, second[right++]);
    }
    return union;
}

private static void addIfNew(List<Integer> values, int value) {
    if (values.isEmpty() || values.get(values.size() - 1) != value) {
        values.add(value);
    }
}
```

## Complexity

Time is `O(n + m)`. The result uses `O(n + m)` space in the worst case.

## Common mistake

Using a set and sorting the result works, but it ignores the fact that both inputs are already sorted. The two pointer solution uses that information directly.
