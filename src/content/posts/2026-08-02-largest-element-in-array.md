---
title: Find the Largest Element in an Array
date: 2026-08-02 09:00:00 +0530
lastReviewed: 2026-09-03 09:00:00 +0530
javaVersion: "Java 21+"
description: Learn the running maximum pattern with a simple one pass Java solution.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, easy, traversal]
topic: dsa
series: arrays
learningSection: arrays
difficulty: easy
contentType: problem
order: 10
---

## Problem

Given a nonempty integer array, return its largest element.

For `[4, 7, 2, 9, 3]`, the answer is `9`.

## Intuition

After reading each element, keep the largest value seen so far. The important invariant is simple: after processing index `i`, `largest` is the maximum value from index `0` through `i`.

## Java solution

```java
public static int largestElement(int[] values) {
    if (values == null || values.length == 0) {
        throw new IllegalArgumentException("Array must not be empty");
    }

    int largest = values[0];
    for (int index = 1; index < values.length; index++) {
        if (values[index] > largest) {
            largest = values[index];
        }
    }
    return largest;
}
```

## Complexity

Time is `O(n)` because every element is inspected once. Extra space is `O(1)`.

## Common mistake

Do not initialize `largest` to `0`. That fails when every number is negative. Initialize it with the first element.

## Next step

Extend the running answer idea to [Find the Second Largest Element](/posts/second-largest-element-in-array/).
