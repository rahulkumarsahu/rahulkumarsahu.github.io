---
title: Array Fundamentals in Java
date: 2026-08-01 09:00:00 +0530
description: Build a clear mental model for array indexing, traversal, updates, and common problem solving patterns.
categories: [Data Structures and Algorithms]
tags: [dsa, arrays, java, fundamentals]
topic: dsa
series: arrays
difficulty: basics
contentType: concept
patterns: [array-traversal]
order: 2
---

An array stores values of the same type in a fixed sequence. Every element has an index, so reading or updating a known position takes constant time.

## Mental model

Think of an array as a numbered row of boxes. The index tells Java how far to move from the beginning of the array.

```java
int[] values = {4, 7, 1, 9};

int first = values[0];
values[2] = 6;
```

After the update, the array contains `[4, 7, 6, 9]`.

## Core operations

| Operation | Time |
| --- | --- |
| Read by index | `O(1)` |
| Update by index | `O(1)` |
| Scan all elements | `O(n)` |
| Search an unsorted array | `O(n)` |
| Insert in the middle | `O(n)` |

Insertion is expensive because the elements after the insertion point may need to move.

## The traversal template

```java
for (int index = 0; index < values.length; index++) {
    int current = values[index];
    // Use current to update the answer.
}
```

Use an enhanced loop when you only need the value. Use an index based loop when the position matters or when you need to update the array.

## Patterns to recognize

### Running answer

Keep the best value seen so far. Largest element and maximum consecutive ones use this idea.

### Two pointers

Use one pointer to read and another to write. Removing duplicates and moving zeroes use this idea.

### Hashing

Store values or frequencies when repeated lookup is slowing the solution down.

### Prefix information

Precompute information from the beginning of the array so a later range question can be answered quickly.

## Common mistakes

* Starting a loop at the wrong index
* Reading `array[array.length]`
* Forgetting that an empty array has no first element
* Changing the array before saving a value that will be needed later
* Sorting even when the original order must be preserved

## Next step

Practice the basic running answer pattern with [Find the Largest Element](/posts/largest-element-in-array/).
