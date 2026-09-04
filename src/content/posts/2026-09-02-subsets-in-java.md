---
title: "Subsets in Java: From Brute Force to Optimal"
date: 2026-09-02 09:00:00 +0530
lastReviewed: 2026-09-03 09:00:00 +0530
javaVersion: "Java 21+"
description: "Generate every subset of a distinct integer set in Java using bitmasks and backtracking, with a visual dry run and honest complexity analysis."
categories: [Data Structures and Algorithms]
tags: [dsa, java, recursion, backtracking]
topic: dsa
series: recursion-backtracking
learningSection: recursion-backtracking
difficulty: medium
contentType: problem
patterns: [recursion, backtracking]
order: 2
mermaid: false
interactive: subsets-backtracking
draft: false
---

## 🎯 Problem statement

You are given a set of positive integers. Return every subset that can be formed from those values.

A subset may contain any number of elements. It may contain all the values, just one value, or no values at all. The subset with no values is the empty subset, written as `[]`.

The important input rules are:

* The values are positive integers.
* The input is a set, so its values are distinct. Duplicate handling is outside this problem's contract.
* Negative values are not part of the official input.
* The official task starts with a nonempty set. A defensive implementation can still return `[[]]` for an empty input.
* Every element keeps its identity from the input. We choose each position at most once.

If the input contains `n` values, the result always contains exactly `2^n` subsets. That output size is the main constraint. Even the best solution must create every one of those subsets.

**Practice problem:** [Subsets](https://www.geeksforgeeks.org/problems/subsets-1613027340/1?itm_source=geeksforgeeks&itm_medium=article&itm_campaign=practice_card)

## 🧪 Example

```text
Input:  [1, 2, 3]
Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
```

Each value has two choices: include it or leave it out. Three independent choices produce `2^3 = 8` subsets. The empty subset is valid because choosing nothing is still one possible selection.

A single value gives the smallest useful example:

```text
Input:  [7]
Output: [[], [7]]
```

## 🧠 Understanding the problem

The task is not asking for one subset with a special property. It asks for the complete power set, which means every possible selection.

For `[1, 2, 3]`, a valid answer may choose `1` and `3`, giving `[1, 3]`. It may choose only `2`, giving `[2]`. It must also include the two boundary choices: choose everything and choose nothing.

Only the choice made for each element matters. The sum of a subset, the order in which values were discovered and the size of the subset are not selection rules in this problem.

The challenge is completeness. We need a process that reaches every valid selection exactly once without losing track of earlier choices.

## 💡 Building the intuition

The most direct idea is to label every possible selection with a binary number.

For `[1, 2, 3]`, the mask `101` means choose the first and third values. The mask `010` means choose only the second value. Walking from `000` to `111` covers all eight choices.

That idea is correct, but each mask makes us scan all `n` positions to ask which bits are set. If ordered output is required, we also have to sort the completed list afterward.

Recursion gives us another view. Instead of describing a subset after it has already been encoded, we build one selection at a time. We save the current selection, choose one unused value, explore everything that can follow it, then remove that value before trying the next choice.

The invariant is simple: `currentSubset` always contains exactly the values chosen on the path from the first call to the active call.

It remains true because we add one value immediately before the recursive call and remove that same value immediately after the call returns.

### The key observation

Every subset can be represented by one unique sequence of increasing input indices. If recursion only moves forward, it reaches that sequence once and cannot build the same subset through another path.

This choose, explore and undo pattern is the foundation of backtracking.

## 🐢 Brute force approach

A bitmask uses one bit for every input position. A `1` means the value is included, and a `0` means it is excluded.

For three values, the masks are:

```text
000 -> []
001 -> [1]
010 -> [2]
011 -> [1, 2]
100 -> [3]
101 -> [1, 3]
110 -> [2, 3]
111 -> [1, 2, 3]
```

The algorithm is:

1. Copy and sort the input so values inside each subset are ordered without modifying the caller's list.
2. Enumerate every mask from `0` to `2^n - 1`.
3. Scan every input position for the current mask.
4. Add the value when its bit is set.
5. Store the completed subset.
6. Sort all generated subsets lexicographically to match the order shown in the problem examples.

This is correct because every element has one bit, and every possible arrangement of those bits appears exactly once.

### Brute force Java solution

```java
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public ArrayList<ArrayList<Integer>> subsets(ArrayList<Integer> numbers) {
        ArrayList<Integer> sortedNumbers = new ArrayList<>(numbers);
        Collections.sort(sortedNumbers);

        ArrayList<ArrayList<Integer>> allSubsets = new ArrayList<>();
        int size = sortedNumbers.size();
        long totalMasks = 1L << size;

        for (long mask = 0; mask < totalMasks; mask++) {
            ArrayList<Integer> currentSubset = new ArrayList<>();

            for (int index = 0; index < size; index++) {
                if ((mask & (1L << index)) != 0) {
                    currentSubset.add(sortedNumbers.get(index));
                }
            }

            allSubsets.add(currentSubset);
        }

        allSubsets.sort(this::compareSubsets);
        return allSubsets;
    }

    private int compareSubsets(
        ArrayList<Integer> first,
        ArrayList<Integer> second
    ) {
        int sharedLength = Math.min(first.size(), second.size());

        for (int index = 0; index < sharedLength; index++) {
            int comparison = Integer.compare(first.get(index), second.get(index));
            if (comparison != 0) {
                return comparison;
            }
        }

        return Integer.compare(first.size(), second.size());
    }
}
```

`totalMasks` is a `long` so the shift is not limited to the 31 usable magnitude bits of an `int`. In practice, the returned power set becomes too large long before a 64 bit mask is exhausted.

The copied input protects the caller from an unexpected sort. The comparator first checks corresponding values. If one subset is a prefix of another, the shorter subset comes first.

Generating the subsets takes `Θ(n × 2^n)` time because every mask checks all `n` positions. Sorting `2^n` lists can take `O(n² × 2^n)` time in the worst case because there are `O(2^n log 2^n)` comparisons and a comparison may inspect `O(n)` values.

The returned output stores `Θ(n × 2^n)` integers. Excluding that output, the current subset and sorted input use `O(n)` space, while Java's list sort may need `O(2^n)` temporary references.

This version is useful when learning bit manipulation, but the mask scan and final ordering work make it less natural for a recursion lesson.

## ⚡ Optimal approach

Backtracking constructs subsets directly in lexicographic order after sorting the values.

At each recursive call, the current selection is already a valid subset, so we save a copy. Then we try every value from `startIndex` onward. Moving the next call to `index + 1` prevents a value from being chosen twice and prevents the search from moving backward.

The algorithm is:

1. Copy and sort the input.
2. Start with an empty `currentSubset` and `startIndex = 0`.
3. Save a copy of the current subset.
4. For each available index, choose its value.
5. Recurse with the next index as the new starting point.
6. Remove the chosen value after the recursive call returns.
7. Continue with the next choice at the current level.

The maintained invariant is: before every call to `buildSubsets`, `currentSubset` contains the values selected by that call's unique increasing sequence of indices.

The algorithm is correct because every valid subset has one such sequence. The empty sequence produces `[]`, and every nonempty sequence is reached by choosing its indices from left to right.

### Optimal Java solution

```java
import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public ArrayList<ArrayList<Integer>> subsets(ArrayList<Integer> numbers) {
        ArrayList<Integer> sortedNumbers = new ArrayList<>(numbers);
        Collections.sort(sortedNumbers);

        ArrayList<ArrayList<Integer>> allSubsets = new ArrayList<>();
        buildSubsets(
            0,
            sortedNumbers,
            new ArrayList<>(),
            allSubsets
        );
        return allSubsets;
    }

    private void buildSubsets(
        int startIndex,
        ArrayList<Integer> numbers,
        ArrayList<Integer> currentSubset,
        ArrayList<ArrayList<Integer>> allSubsets
    ) {
        allSubsets.add(new ArrayList<>(currentSubset));

        for (int index = startIndex; index < numbers.size(); index++) {
            currentSubset.add(numbers.get(index));
            buildSubsets(index + 1, numbers, currentSubset, allSubsets);
            currentSubset.remove(currentSubset.size() - 1);
        }
    }
}
```

The copy in `allSubsets.add(new ArrayList<>(currentSubset))` is essential. Adding `currentSubset` itself would store the same mutable list reference many times. Later backtracking would then change every saved entry.

The last removal is equally important. It restores the path to the state owned by the current call before the loop tries another value.

The algorithm takes `Θ(n × 2^n)` time when output creation is counted accurately. There are `2^n` subsets, and copying a subset may take `O(n)` time. Across the complete power set, exactly `n × 2^(n - 1)` values are copied.

The returned output uses `Θ(n × 2^n)` space. Excluding that output, the sorted copy, current path and recursive call stack use `O(n)` auxiliary space.

Backtracking does not beat the output lower bound. Its advantage is that it generates each path directly, avoids an extra global result sort and extends naturally to problems where invalid branches can be stopped early.

## 🔍 Visual dry run

Use the optimal solution with `numbers = [1, 2, 3]`. The stack is written from the oldest call on the left to the active call on the right.

| Step | Call stack | Current subset | Action | Stored subsets |
|---:|---|---|---|---|
| 1 | `build(0, [])` | `[]` | Save the current path | `[[]]` |
| 2 | `build(0, [])` | `[1]` | Choose `1` | `[[]]` |
| 3 | `build(0, []) → build(1, [1])` | `[1]` | Save the current path | `[[], [1]]` |
| 4 | `build(0, []) → build(1, [1])` | `[1, 2]` | Choose `2` | `[[], [1]]` |
| 5 | `… → build(2, [1, 2])` | `[1, 2]` | Save the current path | `[[], [1], [1, 2]]` |
| 6 | `… → build(2, [1, 2])` | `[1, 2, 3]` | Choose `3` | `[[], [1], [1, 2]]` |
| 7 | `… → build(3, [1, 2, 3])` | `[1, 2, 3]` | Save the current path | `[[], [1], [1, 2], [1, 2, 3]]` |
| 8 | `… → build(2, [1, 2])` | `[1, 2]` | Return and remove `3` | unchanged |
| 9 | `build(0, []) → build(1, [1])` | `[1]` | Return and remove `2` | unchanged |
| 10 | `build(0, []) → build(1, [1])` | `[1, 3]` | Choose `3` | unchanged |
| 11 | `… → build(3, [1, 3])` | `[1, 3]` | Save the current path | `… [1, 3]` |
| 12 | `build(0, [])` | `[]` | Finish the `1` branch and remove `1` | unchanged |
| 13 | `build(0, []) → build(2, [2])` | `[2]` | Choose and save `2` | `… [2]` |
| 14 | `… → build(3, [2, 3])` | `[2, 3]` | Choose and save `3` | `… [2, 3]` |
| 15 | `build(0, []) → build(3, [3])` | `[3]` | Backtrack to root, choose and save `3` | `… [3]` |
| 16 | empty | `[]` | All loops are complete | all 8 subsets |

The current path follows this shape:

```text
[]
└── [1]
    ├── [1, 2]
    │   └── [1, 2, 3]
    └── [1, 3]
└── [2]
    └── [2, 3]
└── [3]
```

The return from `[1, 2, 3]` does not erase that saved answer. It only removes `3` from the reusable working list, restoring `[1, 2]` so the caller can continue.

## 🎞️ Visualization or animation

Animation is useful here because the same list changes during both the forward and return phases. A static tree shows the possible subsets, but it does not make the undo step feel concrete.

The interactive explorer attached to this article keeps four states synchronized: the highlighted Java line, the current subset, the recursive call stack and the subsets already copied into the answer.

```text
choose 1     choose 2     choose 3
[] ───────> [1] ───────> [1, 2] ───────> [1, 2, 3]
                               <───────── remove 3
                  <────────────────────── remove 2
```

<!--
ANIMATION BRIEF
Visual type: Step through backtracking explorer with a changing subset path and a real call stack.
Values to display: Input [1, 2, 3], startIndex, loop index, currentSubset and copied allSubsets.
Controls: Previous, Next, Play, Reset
State highlighted at each step: Active Java line, chosen or removed value, newest stack frame, current subset and newly saved result.
Explanation shown beside each step: One short sentence explaining whether the algorithm saves, chooses, recurses, returns or removes.
Mobile behaviour: Stack the code, subset state and call stack vertically; keep controls in a two column grid and never require horizontal page scrolling.
Accessibility description: An announced text description reports the current operation, subset, recursion depth and number of saved subsets after each control action.
-->

## 📊 Complexity comparison

| Approach | Time complexity | Space complexity | Main tradeoff |
|---|---:|---:|---|
| Brute force with bitmasks and result sorting | `O(n² × 2^n)` worst case | `Θ(n × 2^n)` output, `O(2^n + n)` auxiliary | Simple mapping from bits to choices, but scans every position and sorts the full result |
| Backtracking | `Θ(n × 2^n)` | `Θ(n × 2^n)` output, `O(n)` auxiliary | Requires careful undo logic, but generates ordered subsets directly |

Here, `n` is the number of input values. The returned output is separated from auxiliary working space because any solution must store `2^n` lists when the full answer is returned.

If result order is not required, the bitmask version can skip its final sort. Its time then becomes `Θ(n × 2^n)`, the same asymptotic bound as backtracking. Backtracking is still the more reusable pattern for later constraint based problems.

## ✅ Why the optimal solution works

Every active call owns one valid path. That remains true because the method chooses only values at or after `startIndex`, so indices are always increasing.

The method saves the current path before making another choice. This includes the empty path and every partial path, so subsets of every possible size are recorded.

No subset is skipped because its increasing index sequence is available as one route through the loops. No subset is repeated because a different route would require the same index sequence, which is impossible.

Each recursive call increases `startIndex`. Eventually there are no later positions to choose, the loop ends and the call returns. When the root loop ends, every valid route has been explored and the stored result is complete.

## ⚠️ Common mistakes

* **Forgetting the empty subset.** Save `currentSubset` at the start of every call, including the first call where it is empty.
* **Saving the mutable list itself.** Store `new ArrayList<>(currentSubset)`. Otherwise every result entry points to the same list.
* **Forgetting to undo the choice.** Remove the last value after recursion returns. Without that line, sibling branches inherit values that do not belong to them.
* **Recursing with the wrong index.** Pass `index + 1`, not `startIndex + 1`. The next call must begin after the value that was just chosen.
* **Modifying the caller's input.** Sort a copy unless the problem explicitly allows the method to change the supplied list.
* **Adding duplicate handling to a distinct set problem.** It is unnecessary here. If duplicates are allowed, sort first and skip equal values at the same recursion depth.
* **Calling auxiliary space `O(1)`.** The current path, sorted copy and call stack can all grow to `n`.
* **Claiming `O(2^n)` without explaining output copies.** Java creates lists containing a total of `n × 2^(n - 1)` values, so the materialized result takes `Θ(n × 2^n)` time and space.

## 🧪 Edge cases and test cases

| Test case | Input | Expected output | What it verifies |
|---|---|---|---|
| Smallest valid set | `[7]` | `[[], [7]]` | Empty subset and one chosen value |
| Two values | `[2, 4]` | `[[], [2], [2, 4], [4]]` | Both branches and the undo step |
| Unsorted set | `[3, 1, 2]` | `[[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]` | Input copy is sorted without changing the caller's list |
| Three values | `[1, 2, 3]` | 8 subsets | The result count equals `2^3` |
| Four values | `[1, 2, 3, 4]` | 16 subsets | Every added value doubles the result count |

Duplicate and negative value cases are intentionally absent because they are outside the official contract for this problem.

## 🧩 Pattern recognition

Look for phrases such as “all subsets,” “every combination,” “choose any number of elements” or “include or exclude each value.” They signal a decision tree where each element creates a choice.

Backtracking is especially useful when the problem later adds a rule such as a target sum, fixed subset size or validity constraint. The current subset becomes the state, choosing a value moves forward, and removing it restores the state for the next branch.

Remember the pattern as four actions:

```text
save -> choose -> explore -> undo
```

## 🔗 Related topics and problems

### Prerequisites

Before solving this problem, be comfortable with:

* [Recursion in Java: A Beginner's Guide to Thinking in Smaller Problems](/posts/recursion-in-java-beginners-guide/)
* Java `ArrayList` operations and copying a list
* The call stack and base conditions
* Binary numbers and bitwise AND for the brute force version

### Practice next

1. **Subset Sums, Easy.** Keep the same include or exclude tree, but store a sum instead of the whole path.
2. **[Distinct Subsets](https://www.geeksforgeeks.org/problems/subset-sum-ii/1), Medium.** Add duplicate values and learn how to skip equal choices at the same recursion depth.
3. **Combination Sum, Medium.** Reuse backtracking while allowing a value to be chosen again and stopping branches that exceed a target.
4. **[All String Permutations in Sorted Order](https://www.geeksforgeeks.org/problems/permutations-of-a-given-string-1587115620/1), Hard.** Move from choosing any number of values to arranging every value.
5. **[Word Search](https://www.geeksforgeeks.org/problems/word-search/1), Medium.** Apply choose, explore and undo to positions in a grid.

## 📝 Final takeaway

Bitmasks describe each subset with binary choices, which makes a clear first solution. Backtracking builds the same choices directly and restores the current path after every recursive call.

The reusable idea is not just “use recursion.” It is to keep one valid state, make one choice, explore everything below that choice and undo it before moving to the next branch.
