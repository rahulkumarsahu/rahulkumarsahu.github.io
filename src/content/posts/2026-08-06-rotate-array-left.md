---
title: Rotate an Array to the Left
date: 2026-08-06 09:00:00 +0530
description: Rotate an array by k positions in place with the reversal technique.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, medium, rotation, in-place]
topic: dsa
series: arrays
difficulty: medium
contentType: problem
order: 20
---

## Problem

Rotate an array of length `n` to the left by `k` positions.

For `[1, 2, 3, 4, 5]` and `k = 2`, the result is `[3, 4, 5, 1, 2]`.

## Intuition

Split the array into two parts: `A = [1, 2]` and `B = [3, 4, 5]`. The answer is `BA`.

We can build `BA` in place by reversing `A`, reversing `B`, and then reversing the entire array.

## Java solution

```java
public static void rotateLeft(int[] values, int k) {
    if (values == null || values.length == 0) {
        return;
    }

    int n = values.length;
    k = ((k % n) + n) % n;

    reverse(values, 0, k - 1);
    reverse(values, k, n - 1);
    reverse(values, 0, n - 1);
}

private static void reverse(int[] values, int left, int right) {
    while (left < right) {
        int temporary = values[left];
        values[left] = values[right];
        values[right] = temporary;
        left++;
        right--;
    }
}
```

## Complexity

Time is `O(n)` and extra space is `O(1)`.

## Common mistakes

* Forgetting to reduce `k` with modulo `n`
* Dividing by zero when the array is empty
* Mixing the steps for left rotation with the steps for right rotation

## Alternative

Using a temporary array is easier to derive and also takes `O(n)` time, but it needs `O(n)` extra space. Start with that solution if it helps you understand the index mapping, then learn the reversal method.
