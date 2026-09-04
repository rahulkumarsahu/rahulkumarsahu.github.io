---
title: Find the Missing Number
date: 2026-08-09 09:00:00 +0530
lastReviewed: 2026-09-04 09:00:00 +0530
javaVersion: "Java 21+"
description: Find the missing value from 1 through n using XOR without overflow.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, easy, xor]
topic: dsa
series: arrays
learningSection: arrays
difficulty: easy
contentType: problem
patterns: [array-traversal, xor]
order: 15
---

## Problem

An array contains `n - 1` distinct numbers from `1` through `n`. Return the missing number.

For `n = 5` and `[1, 2, 4, 5]`, the answer is `3`.

## Intuition

XOR has two useful properties: `x ^ x` is zero, and `x ^ 0` is `x`. If we XOR every expected number with every number in the array, matching values cancel and the missing value remains.

## Java solution

```java
public static int missingNumber(int[] values, int n) {
    int answer = n;

    for (int index = 0; index < values.length; index++) {
        answer ^= index + 1;
        answer ^= values[index];
    }
    return answer;
}
```

## Complexity

Time is `O(n)` and extra space is `O(1)`.

## Why not use the sum formula

The expected sum minus the actual sum is also correct, but an `int` sum can overflow for large input. XOR avoids that issue.

## Common mistake

Make sure the expected range matches the problem. Some versions use values from `0` through `n`, while this version uses `1` through `n`.
