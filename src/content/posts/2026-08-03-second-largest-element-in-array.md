---
title: Find the Second Largest Element in an Array
date: 2026-08-03 09:00:00 +0530
description: Track the two largest distinct values in one pass without sorting the array.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, easy, traversal]
topic: dsa
series: arrays
difficulty: easy
contentType: problem
order: 11
---

## Problem

Given an integer array, return the second largest distinct value. Return `null` when a second distinct value does not exist.

For `[7, 2, 7, 5]`, the answer is `5`.

## Intuition

Sorting works, but it costs `O(n log n)`. We only need the two best distinct values, so keep them while scanning.

When a new largest value appears, the old largest becomes second largest. Otherwise, the current value may fit between them.

## Java solution

```java
public static Integer secondLargest(int[] values) {
    if (values == null || values.length < 2) {
        return null;
    }

    Integer largest = null;
    Integer second = null;

    for (int value : values) {
        if (largest == null || value > largest) {
            second = largest;
            largest = value;
        } else if (value < largest && (second == null || value > second)) {
            second = value;
        }
    }
    return second;
}
```

## Complexity

Time is `O(n)`. Extra space is `O(1)`.

## Common mistakes

* Treating a duplicate of the largest value as the second largest distinct value
* Using a fixed sentinel such as `Integer.MIN_VALUE` without thinking about valid input values
* Sorting even though the original order may need to stay unchanged

## Next step

Practice maintaining an invariant with [Check Whether an Array Is Sorted](/posts/check-array-sorted/).
