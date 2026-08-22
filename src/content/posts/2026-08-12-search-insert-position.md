---
title: Search Insert Position
date: 2026-08-12 09:00:00 +0530
description: Find the first position whose value is greater than or equal to a target.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, easy, lower-bound]
topic: dsa
series: binary-search
difficulty: easy
contentType: problem
order: 10
---

## Problem

Given a sorted array of distinct integers and a target, return its index when present. Otherwise, return the index where it should be inserted.

For `[1, 3, 5, 6]` and target `2`, return `1`.

## Intuition

We are looking for the first position whose value is greater than or equal to the target. Keep a candidate answer and continue searching to the left whenever the current value can satisfy that condition.

## Java solution

```java
public static int searchInsert(int[] values, int target) {
    int low = 0;
    int high = values.length - 1;
    int answer = values.length;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (values[mid] >= target) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return answer;
}
```

## Complexity

Time is `O(log n)` and extra space is `O(1)`.

## Common mistake

Returning `-1` when the target is missing loses the useful insertion position. The array length is a valid answer when the target belongs after every element.
