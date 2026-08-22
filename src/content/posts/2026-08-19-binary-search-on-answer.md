---
title: Binary Search on the Answer
date: 2026-08-19 09:00:00 +0530
description: Learn how to search a numeric answer space with a monotonic feasibility check.
categories: [Data Structures and Algorithms]
tags: [dsa, binary-search, answer-space, pattern]
topic: dsa
series: binary-search
difficulty: basics
contentType: pattern
order: 3
---

Some problems do not give us a sorted array to search. Instead, they ask for the smallest or largest value that satisfies a condition.

Examples include minimum ship capacity, minimum eating speed, maximum minimum distance, and minimum time to finish work.

## The pattern

1. Define the possible range of answers.
2. Write a function that checks whether one candidate is feasible.
3. Prove that feasibility is monotonic.
4. Binary search for the first or last feasible candidate.

## First feasible template

```java
public static int firstFeasible(int low, int high) {
    int answer = high;

    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (isFeasible(mid)) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return answer;
}
```

The specific problem decides how `low`, `high`, and `isFeasible` are defined.

## The monotonic condition

Suppose a ship can deliver every package within the deadline when its capacity is `20`. Any capacity above `20` is also feasible. The answer space looks like this:

`false false false true true true`

Binary search finds the first `true`.

## Common mistakes

* Choosing bounds that do not include every possible answer
* Writing an expensive feasibility check that destroys the expected complexity
* Using `int` when the range or accumulated total needs `long`
* Starting binary search before proving the condition is monotonic

## Practice

Start with [Koko Eating Bananas](/posts/koko-eating-bananas/), then solve [Ship Packages Within D Days](/posts/ship-packages-within-days/).
