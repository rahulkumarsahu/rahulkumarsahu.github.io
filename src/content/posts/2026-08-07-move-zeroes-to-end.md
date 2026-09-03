---
title: Move Zeroes to the End
date: 2026-08-07 09:00:00 +0530
lastReviewed: 2026-09-03 09:00:00 +0530
javaVersion: "Java 21+"
description: Move every zero to the end while preserving the order of nonzero values.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, easy, two-pointers, in-place]
topic: dsa
series: arrays
learningSection: arrays
difficulty: easy
contentType: problem
order: 14
---

## Problem

Move every zero to the end of an integer array while keeping the nonzero values in their original order.

`[0, 1, 0, 3, 12]` becomes `[1, 3, 12, 0, 0]`.

## Intuition

The write pointer marks the next position for a nonzero value. The read pointer scans the array. After copying every nonzero value forward, fill the remaining positions with zeroes.

## Java solution

```java
public static void moveZeroes(int[] values) {
    if (values == null) {
        return;
    }

    int write = 0;
    for (int value : values) {
        if (value != 0) {
            values[write] = value;
            write++;
        }
    }

    while (write < values.length) {
        values[write] = 0;
        write++;
    }
}
```

## Complexity

Time is `O(n)` and extra space is `O(1)`.

## Why order is preserved

The read pointer sees nonzero values from left to right, and the write pointer places them in exactly that order.

## Common mistake

Repeatedly shifting elements whenever a zero is found can take `O(n²)` time. Use a write position instead.
