---
title: Binary Search Fundamentals in Java
date: 2026-08-11 09:00:00 +0530
description: Understand the search invariant, safe midpoint calculation, boundaries, and a reusable Java template.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, java, fundamentals]
topic: dsa
series: binary-search
difficulty: basics
contentType: concept
order: 2
---

Binary search works when the search space has order. In a sorted array, comparing the middle value with the target tells us which half cannot contain the answer.

## The invariant

At the beginning of every loop, if the target exists, it is somewhere between `low` and `high`, inclusive.

That sentence explains every pointer update.

## Java template

```java
public static int binarySearch(int[] values, int target) {
    int low = 0;
    int high = values.length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (values[mid] == target) {
            return mid;
        }
        if (values[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}
```

## Why the midpoint uses this formula

`low + (high - low) / 2` avoids the overflow risk of `(low + high) / 2`.

## Complexity

Each comparison removes roughly half of the remaining search space. Time is `O(log n)` and extra space is `O(1)`.

## Boundary checklist

* Is the interval inclusive or half open?
* Should the loop use `low <= high` or `low < high`?
* Can the middle position still be the answer after the comparison?
* What should be returned when no exact match exists?

## Common mistakes

* Updating `low = mid` when `mid` has already been ruled out
* Mixing rules from inclusive and half open intervals
* Applying binary search to data without a monotonic condition
* Memorizing pointer updates without stating the invariant

## Next step

Learn how binary search returns a useful boundary even when an exact target is absent in [Search Insert Position](/posts/search-insert-position/).
