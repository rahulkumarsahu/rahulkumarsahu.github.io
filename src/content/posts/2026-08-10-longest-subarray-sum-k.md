---
title: Longest Subarray with Sum K
date: 2026-08-10 09:00:00 +0530
description: Use prefix sums and earliest indexes to handle positive and negative values in linear time.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, medium, prefix-sum, hashing]
topic: dsa
series: arrays
difficulty: medium
contentType: problem
order: 22
---

## Problem

Given an integer array and a target `k`, return the maximum length of a contiguous subarray whose sum is `k`.

For `[1, -1, 5, -2, 3]` and `k = 3`, the answer is `4` because `[1, -1, 5, -2]` sums to `3`.

## Intuition

Let `prefix` be the sum from the beginning through the current index. A previous prefix of `prefix - k` means the values between that earlier position and the current position sum to `k`.

Store the earliest index for each prefix sum because the earliest position produces the longest subarray.

## Java solution

```java
import java.util.HashMap;
import java.util.Map;

public static int longestSubarrayWithSum(int[] values, long k) {
    Map<Long, Integer> firstIndex = new HashMap<>();
    firstIndex.put(0L, -1);

    long prefix = 0;
    int longest = 0;

    for (int index = 0; index < values.length; index++) {
        prefix += values[index];

        Integer start = firstIndex.get(prefix - k);
        if (start != null) {
            longest = Math.max(longest, index - start);
        }

        firstIndex.putIfAbsent(prefix, index);
    }
    return longest;
}
```

## Complexity

Expected time is `O(n)` and extra space is `O(n)`.

## Common mistakes

* Replacing the earliest index for a prefix sum
* Using a sliding window when negative values are allowed
* Using `int` for prefix sums when the total may overflow

## When a sliding window works

If every value is nonnegative, a sliding window can solve the problem with `O(1)` extra space. With negative values, the window sum is not monotonic, so prefix sums are safer.
