---
title: Valid Perfect Square with Binary Search
date: 2026-08-14 09:00:00 +0530
description: Check whether an integer is a perfect square without using a square root function.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, easy, math]
topic: dsa
series: binary-search
difficulty: easy
contentType: problem
order: 11
---

## Problem

Given a positive integer, return `true` when it is a perfect square. Do not use a built in square root function.

`16` is a perfect square. `14` is not.

## Intuition

The possible root is between `1` and the number. The square of each candidate increases as the candidate increases, so the condition is monotonic and binary search applies.

## Java solution

```java
public static boolean isPerfectSquare(int number) {
    if (number < 1) {
        return false;
    }

    long low = 1;
    long high = number;

    while (low <= high) {
        long mid = low + (high - low) / 2;
        long square = mid * mid;

        if (square == number) {
            return true;
        }
        if (square < number) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return false;
}
```

## Complexity

Time is `O(log n)` and extra space is `O(1)`.

## Common mistake

Use `long` for `mid` and `square`. Multiplying two large `int` values can overflow before the comparison.
