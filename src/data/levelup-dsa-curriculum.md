# LevelUp DSA Master Sheet - Complete Curriculum Index

This document contains a structured, high-quality index of all **726 Data Structures and Algorithms questions** from the **LevelUp DSA Master Sheet** (https://levelup.codeforsuccess.in/).

Each question is grouped strictly by its **18 topics** and categorized by difficulty (**Easy**, **Medium**, and **Hard**). It features problem names, detailed patterns, external practice links, progress checklist checkboxes, and marks key/important problems with a ⭐.

## Curriculum Stats
- **Total Problems:** 726
- **Easy Problems:** 115 (🟩 Green)
- **Medium Problems:** 441 (🟨 Yellow)
- **Hard Problems:** 170 (🟥 Red)
- **Total Topics:** 18

## Table of Contents
- [Array](#array) (111 questions: 22 Easy, 74 Medium, 15 Hard)
- [Strings](#strings) (64 questions: 15 Easy, 31 Medium, 18 Hard)
- [Linked List](#linked_list) (37 questions: 8 Easy, 27 Medium, 2 Hard)
- [2D Array](#twod_array) (29 questions: 3 Easy, 22 Medium, 4 Hard)
- [Searching](#searching) (52 questions: 11 Easy, 29 Medium, 12 Hard)
- [Sorting](#sorting) (44 questions: 5 Easy, 27 Medium, 12 Hard)
- [Recursion](#recursion) (57 questions: 6 Easy, 31 Medium, 20 Hard)
- [Stack](#stack) (29 questions: 5 Easy, 19 Medium, 5 Hard)
- [Queue](#queue) (20 questions: 4 Easy, 10 Medium, 6 Hard)
- [Heap](#heap) (20 questions: 1 Easy, 11 Medium, 8 Hard)
- [Hashing](#hashing) (16 questions: 7 Easy, 8 Medium, 1 Hard)
- [Binary Tree](#binary_tree) (34 questions: 5 Easy, 24 Medium, 5 Hard)
- [Binary Search Tree](#binary_search_tree) (17 questions: 4 Easy, 13 Medium, 0 Hard)
- [Advanced Trees](#advanced_trees) (20 questions: 0 Easy, 6 Medium, 14 Hard)
- [Graph](#graph) (49 questions: 10 Easy, 30 Medium, 9 Hard)
- [DP (Dynamic Programming)](#dp) (62 questions: 3 Easy, 30 Medium, 29 Hard)
- [Greedy Algorithms](#greedy) (39 questions: 6 Easy, 29 Medium, 4 Hard)
- [Backtracking](#backtracking) (26 questions: 0 Easy, 20 Medium, 6 Hard)

---

<a id="array"></a>
## Array
**Total Questions:** 111 | 🟩 Easy: 22 | 🟨 Medium: 74 | 🟥 Hard: 15

### Easy (22 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Reverse the array**<br>*Reverse in-place using two pointers from both ends.* | Two Pointers | [🔗 Practice](https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array/) | ⭐ |
| [ ] | **Find max & min in array**<br>*Single pass tracking current minimum and maximum.* | General | [🔗 Practice](https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/) | ⭐ |
| [ ] | **Cyclically rotate by 1**<br>*Rotate array by one position using temp+shift or reverse trick.* | Two Pointers | [🔗 Practice](https://www.geeksforgeeks.org/c-program-cyclically-rotate-array-one/) | ⭐ |
| [ ] | **Rotate Array by k steps**<br>*Rotate array right by k steps using shifting or reversal (O(1) space).* | General | [🔗 Practice](https://leetcode.com/problems/rotate-array/description/) | ⭐ |
| [ ] | **Move all negative elements to end**<br>*Partition array so negatives move to one side; order irrelevant.* | Sorting & Two Pointers | [🔗 Practice](https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1) | ⭐ |
| [ ] | **Merge two sorted arrays in place (gap method)**<br>*Use Shell gap method to merge with O(1) extra space.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/merge-sorted-array/description/) | ⭐ |
| [ ] | **Find Common Elements Between Two Arrays**<br>*Three-pointer walk to gather common elements.* | Two Pointers & HashSet | [🔗 Practice](https://leetcode.com/problems/find-common-elements-between-two-arrays/description/) | ⭐ |
| [ ] | **Common elements in 3 sorted arrays**<br>*Three-pointer walk to gather common elements.* | Three Pointers | [🔗 Practice](https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/) | ⭐ |
| [ ] | **Minimum Absolute Difference (sorted)**<br>*Sort and scan adjacent pairs to get minimal difference.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/minimum-absolute-difference/) |  |
| [ ] | **Max sum subarray of size K (fixed window)**<br>*Fixed-size sliding window tracking running sum.* | Sliding Window | [🔗 Practice](https://www.geeksforgeeks.org/max-sum-subarray-of-size-k/) | ⭐ |
| [ ] | **Best Time to Buy and Sell Stock I**<br>*Track running minimum and best profit in one pass.* | Greedy | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | ⭐ |
| [ ] | **Two Sum**<br>*Use a hash map to store seen values and their indices; check complement each step.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/two-sum/) | ⭐ |
| [ ] | **Move Zeroes**<br>*Stable compaction using two pointers to keep relative order.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/move-zeroes/) | ⭐ |
| [ ] | **Remove Duplicates from Sorted Array**<br>*Overwrite in-place while keeping one occurrence of each value.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-array/) |  |
| [ ] | **Majority Element**<br>*Boyer–Moore voting to find element > n/2.* | Boyer–Moore Voting (Majority) | [🔗 Practice](https://leetcode.com/problems/majority-element/) | ⭐ |
| [ ] | **Range Sum Query - Immutable**<br>*Build prefix sums to answer range queries in O(1).* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/range-sum-query-immutable/) |  |
| [ ] | **Single Number**<br>*XOR all elements to isolate the unique value.* | Bit Manipulation | [🔗 Practice](https://leetcode.com/problems/single-number/) |  |
| [ ] | **Missing Number**<br>*Use XOR fold (or Gauss sum) to find the missing value from 0..n.* | Bit Manipulation | [🔗 Practice](https://leetcode.com/problems/missing-number/) |  |
| [ ] | **Find All Numbers Disappeared in an Array**<br>*Index-as-hash: mark presence by negating at mapped index; collect unmarked.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/) |  |
| [ ] | **Find Kth Missing Positive Number**<br>*Binary search on the index where missing_count(index) ≥ k.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/kth-missing-positive-number/) |  |
| [ ] | **Next Greater Element I**<br>*Precompute next greater using a decreasing stack; map results for queries.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/next-greater-element-i/) |  |
| [ ] | **Maximum Average Subarray I**<br>*Find the maximum average of any contiguous subarray of length k.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/maximum-average-subarray-i/description/) | ⭐ |

### Medium (74 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Kth Largest Element in an Array**<br>*Single pass tracking current minimum and maximum.* | General | [🔗 Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/description/) |  |
| [ ] | **Move negatives (order preserved / stable)**<br>*Stable partition to keep the relative order of elements.* | Sorting & Two Pointers | [🔗 Practice](https://www.geeksforgeeks.org/stable-approach-to-segregate-positive-and-negative-numbers/) |  |
| [ ] | **Rearrange +/- alternately**<br>*Alternate positives and negatives in-place with O(1) extra space.* | Two Pointers | [🔗 Practice](https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/) |  |
| [ ] | **Minimum swaps required to bring all elements less than or equal to k together**<br>*Sliding window to minimize swaps grouping elements ≤ K together.* | Sliding Window | [🔗 Practice](https://www.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1) |  |
| [ ] | **Minimum Swaps to Group All 1's Together II**<br>*Sliding window to minimize swaps grouping elements ≤ K together.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii/description/) |  |
| [ ] | **Two Sum II (sorted)**<br>*Two pointers from both ends to find target sum in a sorted array.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) | ⭐ |
| [ ] | **Subarray sum = 0 (existence)**<br>*Use prefix-sum set/map to detect a zero-sum subarray.* | Prefix Sum | [🔗 Practice](https://www.geeksforgeeks.org/find-if-there-is-a-subarray-with-0-sum/) | ⭐ |
| [ ] | **Longest subarray sum = K (pos+neg)**<br>*Prefix-sum hashmap storing earliest index per sum.* | Prefix Sum | [🔗 Practice](https://www.geeksforgeeks.org/longest-sub-array-sum-k/) | ⭐ |
| [ ] | **Stock Span**<br>*Use a decreasing stack of indices; pop when a greater price appears.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/online-stock-span/) | ⭐ |
| [ ] | **Min Days to**<br>*Make m Bouquets Binary search the day; check feasibility via contiguous flowers.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) |  |
| [ ] | **Magnetic Force Between Two Balls (Aggressive Cows)**<br>*Binary search the max minimum distance with greedy placement.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/magnetic-force-between-two-balls/) |  |
| [ ] | **Best Time to Buy and Sell Stock II**<br>*Greedy: sum of all positive price differences.* | Greedy | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | ⭐ |
| [ ] | **Minimise the Maximum Difference Between Heights**<br>*Greedy adjustments (+/− k) to minimize the range.* | Greedy | [🔗 Practice](https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/) |  |
| [ ] | **Chocolate Distribution**<br>*Sort and slide window of size m to minimize difference.* | Greedy | [🔗 Practice](https://www.geeksforgeeks.org/chocolate-distribution-problem/) |  |
| [ ] | **Sort Colors**<br>*Three-way partitioning to sort an array of 0s, 1s, and 2s.* | Three Pointers | [🔗 Practice](https://leetcode.com/problems/sort-colors/description/) | ⭐ |
| [ ] | **Range Frequency Queries**<br>*Preprocess to answer frequency queries over ranges efficiently.* | Range Queries (Segment Tree) | [🔗 Practice](https://leetcode.com/problems/range-frequency-queries/) |  |
| [ ] | **Longest Increasing Subsequence (O(n log n))**<br>*Patience sorting with binary search for tails; optionally record parents.* | LIS / Patience Sorting | [🔗 Practice](https://leetcode.com/problems/longest-increasing-subsequence/) | ⭐ |
| [ ] | **Number of Longest Increasing Subsequence (path/duplicates)**<br>*Count LIS and handle duplicates; track lengths and counts.* | LIS / Patience Sorting | [🔗 Practice](https://leetcode.com/problems/number-of-longest-increasing-subsequence/) |  |
| [ ] | **3Sum**<br>*Sort, fix one index, and use two pointers to find unique triplets that sum to zero.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/3sum/) | ⭐ |
| [ ] | **Container With Most Water**<br>*Two pointers from ends; move the shorter line to maximize area.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/container-with-most-water/) | ⭐ |
| [ ] | **Minimum Size Subarray Sum**<br>*Variable-size sliding window over positives; shrink while sum ≥ target.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/minimum-size-subarray-sum/) | ⭐ |
| [ ] | **Product of Array Except Self**<br>*Compute prefix and suffix products to avoid division and use O(1) extra space.* | Prefix/Suffix Products | [🔗 Practice](https://leetcode.com/problems/product-of-array-except-self/) | ⭐ |
| [ ] | **Maximum Subarray**<br>*Kadane's algorithm: track current best ending here and global max.* | Kadane / Subarray | [🔗 Practice](https://leetcode.com/problems/maximum-subarray/) | ⭐ |
| [ ] | **Find Minimum in Rotated Sorted Array**<br>*Binary search the pivot by comparing mid with right.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | ⭐ |
| [ ] | **Top K Frequent Elements**<br>*Build frequency map; use heap or bucket sort to extract top K.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/top-k-frequent-elements/) | ⭐ |
| [ ] | **3Sum Closest**<br>*Sort, then fix i and two-pointer from both ends to track the closest sum.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/3sum-closest/) | ⭐ |
| [ ] | **4Sum**<br>*Generalize k-sum: sort, fix two indices, then two-pointer for the rest; dedupe carefully.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/4sum/) | ⭐ |
| [ ] | **Maximum Product Subarray**<br>*Track max and min products because negatives can flip signs.* | Kadane / Subarray | [🔗 Practice](https://leetcode.com/problems/maximum-product-subarray/) | ⭐ |
| [ ] | **Subarray Sums Divisible by K**<br>*Use prefix mod counts; two prefixes with same mod form a divisible subarray.* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/subarray-sums-divisible-by-k/) | ⭐ |
| [ ] | **Find First and Last Position of Element in Sorted Array**<br>*Binary search lower and upper bounds to get the range.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | ⭐ |
| [ ] | **Find K Pairs with Smallest Sums**<br>*Min-heap seeded with first column; expand by pushing next candidate pairs.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) | ⭐ |
| [ ] | **Daily Temperatures**<br>*Use a decreasing stack of indices; pop when a warmer day appears.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/daily-temperatures/) |  |
| [ ] | **Remove Duplicates from Sorted Array II**<br>*Allow at most two occurrences; controlled overwrite with write pointer.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/) |  |
| [ ] | **Next Greater Element II**<br>*Use a monotonic stack over a circular array (iterate twice).* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/next-greater-element-ii/) |  |
| [ ] | **Sum of Subarray Minimums**<br>*Monotonic stack counts each element's contribution as the minimum.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/sum-of-subarray-minimums/) |  |
| [ ] | **Koko Eating Bananas**<br>*Binary search minimal integer speed with greedy feasibility check.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/koko-eating-bananas/) |  |
| [ ] | **Capacity To Ship Packages Within D Days**<br>*Binary search minimal capacity; greedy simulate days needed.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) |  |
| [ ] | **Find**<br>*Peak Element Binary search on slope; always a peak exists.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-peak-element/) |  |
| [ ] | **Merge Intervals**<br>*Sort by start; merge overlapping ranges greedily.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/merge-intervals/) |  |
| [ ] | **Insert Interval**<br>*Insert then merge overlaps while scanning.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/insert-interval/) |  |
| [ ] | **Minimum Number of Arrows to Burst Balloons**<br>*Greedy by end coordinate; shoot when an interval ends.* | Greedy | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) |  |
| [ ] | **Gas Station**<br>*Greedy: if total gas ≥ cost, start after any negative prefix.* | Greedy | [🔗 Practice](https://leetcode.com/problems/gas-station/) |  |
| [ ] | **H-Index**<br>*Sort citations and find max h with count ≥ h.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/h-index/) |  |
| [ ] | **H-Index II**<br>*Binary search on the sorted citations array.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/h-index-ii/) |  |
| [ ] | **Shortest Unsorted Continuous Subarray**<br>*Detect the minimal window to sort using scans or stack.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/) |  |
| [ ] | **Binary Subarrays With**<br>*Sum Prefix sum over 0/1 array; count matches with a hashmap.* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/binary-subarrays-with-sum/) |  |
| [ ] | **Count Number of Nice Subarrays**<br>*Count subarrays with exactly k odds using prefix sums.* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/count-number-of-nice-subarrays/) |  |
| [ ] | **Maximum Sum Circular Subarray**<br>*Kadane on normal and inverted array; handle all-negative case.* | Kadane / Subarray | [🔗 Practice](https://leetcode.com/problems/maximum-sum-circular-subarray/) |  |
| [ ] | **Longest Consecutive Sequence**<br>*Use a hash set and grow only from sequence starts.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/longest-consecutive-sequence/) |  |
| [ ] | **Search in Rotated Sorted Array**<br>*Binary search while identifying which half is sorted.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-in-rotated-sorted-array/) |  |
| [ ] | **K Closest Points to Origin**<br>*Use a heap (or quickselect) to keep the K smallest distances.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/k-closest-points-to-origin/) |  |
| [ ] | **Minimum Operations to Reduce X to Zero**<br>*Convert to longest subarray with sum = total − x; two-pointer/window.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/) |  |
| [ ] | **Longest Mountain in Array**<br>*Scan peaks and expand left/right (or two pointers) to measure mountain length.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/longest-mountain-in-array/) |  |
| [ ] | **Sort Colors**<br>*Dutch National Flag: three-way partition with low/mid/high pointers.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-colors/) |  |
| [ ] | **Non-overlapping Intervals**<br>*Greedy by end time to keep maximum non-overlapping intervals.* | Greedy | [🔗 Practice](https://leetcode.com/problems/non-overlapping-intervals/) |  |
| [ ] | **Single Number II**<br>*Bit counts modulo 3 (or state machine) to isolate the unique value.* | Bit Manipulation | [🔗 Practice](https://leetcode.com/problems/single-number-ii/) |  |
| [ ] | **Majority Element II**<br>*Generalized Boyer–Moore to track candidates occurring more than n/3 times.* | Boyer–Moore Voting (Majority) | [🔗 Practice](https://leetcode.com/problems/majority-element-ii/) |  |
| [ ] | **Non-decreasing Array**<br>*At most one modification; check local violations and fix greedily.* | Greedy | [🔗 Practice](https://leetcode.com/problems/non-decreasing-array/) |  |
| [ ] | **Car Pooling**<br>*Use a difference array / sweep-line over positions to track capacity.* | Difference Array | [🔗 Practice](https://leetcode.com/problems/car-pooling/) |  |
| [ ] | **Find the Duplicate Number**<br>*Use Floyd's cycle detection (fast & slow pointers) on index graph.* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/find-the-duplicate-number/) |  |
| [ ] | **Find All Duplicates in an Array**<br>*Mark visited indices by sign flipping to detect duplicates in O(1) extra space.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/find-all-duplicates-in-an-array/) |  |
| [ ] | **Subarray Product Less Than K**<br>*Sliding window over positives; expand/shrink maintaining product < K.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/subarray-product-less-than-k/) | ⭐ |
| [ ] | **Next Permutation**<br>*Find first decreasing pair from right, swap with next larger, then reverse suffix.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/next-permutation/) | ⭐ |
| [ ] | **Rotate Array**<br>*Use three reversals (or cyclic replacements) to rotate by k in-place.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/rotate-array/) |  |
| [ ] | **Jump Game**<br>*Greedy: track farthest reachable index; ensure we never get stuck.* | Greedy | [🔗 Practice](https://leetcode.com/problems/jump-game/) | ⭐ |
| [ ] | **Jump Game II**<br>*Greedy level traversal (like BFS on ranges) to minimize jumps.* | Greedy | [🔗 Practice](https://leetcode.com/problems/jump-game-ii/) | ⭐ |
| [ ] | **Search in Rotated Sorted Array II**<br>*Binary search with duplicates; shrink equals on the edges to restore order detection.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) |  |
| [ ] | **Sum of Subarray Ranges**<br>*Monotonic stacks to count each element's contribution as max and as min.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/sum-of-subarray-ranges/) |  |
| [ ] | **Longest Subarray With Positive Product**<br>*Track sign and first/last negative positions; greedy segment logic.* | Greedy | [🔗 Practice](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/) |  |
| [ ] | **Range Sum Query - Mutable**<br>*Support point updates + range sum queries via Fenwick Tree or Segment Tree.* | Fenwick Tree (BIT) | [🔗 Practice](https://leetcode.com/problems/range-sum-query-mutable/) |  |
| [ ] | **Maximum Erasure Value**<br>*Sliding window with a set/map to keep a subarray of distinct values and max sum.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/maximum-erasure-value/) |  |
| [ ] | **Subarray Sum Equals K**<br>*Find the number of subarrays that sum to K using a prefix sum and hash map.* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/subarray-sum-equals-k/) | ⭐ |
| [ ] | **Continuous Subarray Sum**<br>*Check if array has a continuous subarray of size at least 2 with sum divisible by k.* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/continuous-subarray-sum/) | ⭐ |
| [ ] | **Longest Consecutive Sequence**<br>*Find the length of the longest consecutive elements sequence in an unsorted array.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/longest-consecutive-sequence/) | ⭐ |

### Hard (15 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Find Median from Data Stream**<br>*Maintain two heaps to support streaming median queries.* | Two Heaps (Median maintenance) | [🔗 Practice](https://leetcode.com/problems/find-median-from-data-stream/) | ⭐ |
| [ ] | **Count Inversions (merge sort)**<br>*Augment merge sort to count cross-inversions.* | Merge Sort | [🔗 Practice](https://www.geeksforgeeks.org/counting-inversions/) | ⭐ |
| [ ] | **Sliding Window Maximum**<br>*Maintain a decreasing deque of indices to get the max for each window in O(n).* | Monotonic Queue | [🔗 Practice](https://leetcode.com/problems/sliding-window-maximum/) | ⭐ |
| [ ] | **Trapping Rain Water**<br>*Two pointers or a monotonic stack to accumulate trapped water between bars.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/trapping-rain-water/) | ⭐ |
| [ ] | **Split Array Largest Sum**<br>*Binary search the answer (max subarray sum) and greedily count partitions.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/split-array-largest-sum/) | ⭐ |
| [ ] | **Largest Rectangle in Histogram**<br>*Maintain increasing heights stack; compute area on pops.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/largest-rectangle-in-histogram/) | ⭐ |
| [ ] | **Kth Smallest Pair Distance**<br>*Binary search the distance and count pairs via two pointers.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) |  |
| [ ] | **Median of Two Sorted Arrays**<br>*Binary partition both arrays to balance left/right halves.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/median-of-two-sorted-arrays/) |  |
| [ ] | **Candy**<br>*Two passes (left→right, right→left) to satisfy rating constraints.* | Greedy | [🔗 Practice](https://leetcode.com/problems/candy/) |  |
| [ ] | **Subarrays With K Different Integers**<br>*AtMost(K) − AtMost(K−1) via sliding window with counts.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/subarrays-with-k-different-integers/) | ⭐ |
| [ ] | **Minimum Number of Operations to Make Array Continuous**<br>*Sort unique values and use sliding window/two pointers to fit into length-n range.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/) |  |
| [ ] | **First Missing Positive**<br>*Place each value at its index (1-based) to find the smallest missing positive in O(n) time, O(1) space.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/first-missing-positive/) |  |
| [ ] | **Find Minimum in Rotated Sorted Array II**<br>*Find pivot with duplicates by trimming equals and comparing mid with right.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) |  |
| [ ] | **Shortest Subarray with**<br>*Sum ≥ K Prefix sums + monotonic deque to maintain increasing prefix indices.* | Monotonic Queue | [🔗 Practice](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) |  |
| [ ] | **Minimum Removals to Make Mountain Array**<br>*LIS left and right to form a mountain; minimize removals.* | LIS / Patience Sorting | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/) |  |


---

<a id="strings"></a>
## Strings
**Total Questions:** 64 | 🟩 Easy: 15 | 🟨 Medium: 31 | 🟥 Hard: 18

### Easy (15 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Isomorphic Strings**<br>*Check bijection between characters using two maps (s→t and t→s).* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/isomorphic-strings/) | ⭐ |
| [ ] | **Word Pattern**<br>*Verify a bijection between pattern letters and words split by spaces.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/word-pattern/) |  |
| [ ] | **Valid Palindrome**<br>*Two pointers skipping non-alphanumerics; compare lowercase ends.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/valid-palindrome/) | ⭐ |
| [ ] | **Reverse Only Letters**<br>*Two pointers; swap letters while skipping non-letters.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/reverse-only-letters/) |  |
| [ ] | **Roman to Integer**<br>*Scan with value map; subtract when a smaller precedes a larger.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/roman-to-integer/) |  |
| [ ] | **Valid Anagram**<br>*Compare frequency counts (or sort both strings).* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/valid-anagram/) |  |
| [ ] | **Find the Index of the First Occurrence in a String (strStr)**<br>*KMP prefix-function (LPS) to search pattern in O(n+m).* | String Matching (KMP / Z / Rabin–Karp) | [🔗 Practice](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/) |  |
| [ ] | **Repeated Substring Pattern**<br>*Check by KMP prefix table or (s+s).find(s) trick; rolling hash also works.* | String Matching (KMP / Z / Rabin–Karp) | [🔗 Practice](https://leetcode.com/problems/repeated-substring-pattern/) |  |
| [ ] | **Valid Parentheses**<br>*Use a stack; push opens and match on close, ensure final stack empty.* | Stack | [🔗 Practice](https://leetcode.com/problems/valid-parentheses/) | ⭐ |
| [ ] | **Valid Palindrome II**<br>*Two pointers; allow one deletion and check either side.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/valid-palindrome-ii/) | ⭐ |
| [ ] | **Longest Common Prefix**<br>*Scan character-by-character (or sort then compare first/last) to find the shared prefix.* | General | [🔗 Practice](https://leetcode.com/problems/longest-common-prefix/) | ⭐ |
| [ ] | **Backspace String Compare**<br>*Two pointers from the end, skip deleted characters using a skip counter.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/backspace-string-compare/) |  |
| [ ] | **Reorder Data in Log Files**<br>*Custom sort: letter-logs come first sorted by content then id; digit-logs keep original order.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/reorder-data-in-log-files/) |  |
| [ ] | **Implement strStr()**<br>*Find first occurrence of needle in haystack using KMP or brute force.* | String Matching (KMP / Z / Rabin–Karp) | [🔗 Practice](https://leetcode.com/problems/implement-strstr/) |  |
| [ ] | **Add Binary**<br>*Add two binary strings and return their sum as binary string.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/add-binary/) |  |

### Medium (31 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Remove K Digits**<br>*Monotonic stack to keep increasing digits; pop when next is smaller.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/remove-k-digits/) |  |
| [ ] | **Remove All Adjacent Duplicates in String II**<br>*Stack pairs (char,count); pop when count reaches k; rebuild result.* | Stack | [🔗 Practice](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/) |  |
| [ ] | **Custom Sort String**<br>*Count characters and output in the custom order then the rest.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/custom-sort-string/) |  |
| [ ] | **Integer to Roman**<br>*Greedy: subtract largest symbol values and append symbols.* | Greedy | [🔗 Practice](https://leetcode.com/problems/integer-to-roman/) |  |
| [ ] | **String to Integer (atoi)**<br>*Parse with trimming, sign, digits, and clamp to 32-bit range.* | General | [🔗 Practice](https://leetcode.com/problems/string-to-integer-atoi/) |  |
| [ ] | **Longest Substring Without Repeating Characters**<br>*Sliding window with last-seen index map to keep a unique window.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/longest-substring-without-repeating-characters/) | ⭐ |
| [ ] | **Longest Repeating Character Replacement**<br>*Window with counts; keep most-frequent char and shrink when replacements exceed k.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/longest-repeating-character-replacement/) | ⭐ |
| [ ] | **Find All Anagrams in a String**<br>*Fixed-size sliding window with frequency diff to match anagrams.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/find-all-anagrams-in-a-string/) | ⭐ |
| [ ] | **Group Anagrams**<br>*Hash words by sorted key or letter frequency signature.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/group-anagrams/) |  |
| [ ] | **Longest Palindromic Substring**<br>*Expand around centers; track best left/right bounds.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/longest-palindromic-substring/) |  |
| [ ] | **Palindromic Substrings**<br>*Count palindromes by expanding around every center (odd/even).* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/palindromic-substrings/) | ⭐ |
| [ ] | **Longest Substring with At Least K Repeating Characters**<br>*Divide & conquer or sliding partitions by invalid chars; ensure each char freq ≥ k.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/) | ⭐ |
| [ ] | **Implement Trie (Prefix Tree)**<br>*Design insert/search/startsWith using a node map or array children.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/implement-trie-prefix-tree/) |  |
| [ ] | **Decode String**<br>*Stack for counts and partial strings; expand on closing bracket.* | Stack | [🔗 Practice](https://leetcode.com/problems/decode-string/) | ⭐ |
| [ ] | **Longest Substring with At Most Two Distinct Characters**<br>*Special case K=2; sliding window with last-seen positions.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/) |  |
| [ ] | **Permutation in String**<br>*Fixed-size window; match an anagram using frequency diffs.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/permutation-in-string/) | ⭐ |
| [ ] | **Reorganize String**<br>*Greedy with max-heap to avoid adjacent equal characters.* | Greedy | [🔗 Practice](https://leetcode.com/problems/reorganize-string/) | ⭐ |
| [ ] | **Remove Duplicate Letters**<br>*Monotonic stack with last-occurrence tracking to build smallest lexicographic string.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/remove-duplicate-letters/) |  |
| [ ] | **Reverse Words in a String**<br>*Trim spaces and reverse words order (two-pointer parsing).* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/reverse-words-in-a-string/) |  |
| [ ] | **Add and Search Word - Data structure design**<br>*Trie with '.' wildcard support via DFS over children at wildcard positions.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/add-and-search-word-data-structure-design/) | ⭐ |
| [ ] | **Minimum Remove to Make Valid Parentheses**<br>*Stack (or two-pass counts) to remove the minimum invalid parentheses.* | Stack | [🔗 Practice](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/) | ⭐ |
| [ ] | **Smallest Subsequence of Distinct Characters**<br>*Monotonic stack with last-occurrence tracking and a visited set to build lexicographically smallest result.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/smallest-subsequence-of-distinct-characters/) |  |
| [ ] | **Encode and Decode Strings**<br>*Design a robust length-prefixed format to join/split arbitrary strings.* | General | [🔗 Practice](https://leetcode.com/problems/encode-and-decode-strings/) |  |
| [ ] | **Multiply Strings**<br>*Grade-school multiplication with carry; build partial products and sum.* | General | [🔗 Practice](https://leetcode.com/problems/multiply-strings/) |  |
| [ ] | **Word Break**<br>*Determine if string can be segmented into words from dictionary using DP.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/word-break/) | ⭐ |
| [ ] | **Smallest String With Swaps**<br>*Lexicographically smallest string after applying swaps on pairs of indices.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/smallest-string-with-swaps/) |  |
| [ ] | **Interleaving String**<br>*Determine if s3 is formed by interleaving s1 and s2 using DP.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/interleaving-string/) |  |
| [ ] | **Repeated DNA Sequences**<br>*Find repeated DNA sequences of length 10 using rolling hash or hash set.* | Rolling Hash | [🔗 Practice](https://leetcode.com/problems/repeated-dna-sequences/) |  |
| [ ] | **Longest Word in Dictionary Through Deleting**<br>*Find longest word in dictionary that can be formed by deleting characters from string.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/) |  |
| [ ] | **Basic Calculator II**<br>*Evaluate expression with addition, subtraction, multiplication, division.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/basic-calculator-ii/) |  |
| [ ] | **Longest Happy String**<br>*Construct longest possible string without 'aaa', 'bbb' or 'ccc' using greedy approach.* | Greedy | [🔗 Practice](https://leetcode.com/problems/longest-happy-string/) |  |

### Hard (18 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Minimum Window Substring**<br>*Expand/contract window while tracking required character counts.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/minimum-window-substring/) | ⭐ |
| [ ] | **Longest Substring with At Most K Distinct Characters**<br>*Sliding window with counts; shrink until distinct ≤ K.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/) | ⭐ |
| [ ] | **Longest Happy Prefix**<br>*Use KMP prefix function to find longest prefix equal to a suffix.* | String Matching (KMP / Z / Rabin–Karp) | [🔗 Practice](https://leetcode.com/problems/longest-happy-prefix/) |  |
| [ ] | **Shortest Palindrome**<br>*KMP (or rolling hash) on s + '#' + reverse(s) to find mirror length.* | String Matching (KMP / Z / Rabin–Karp) | [🔗 Practice](https://leetcode.com/problems/shortest-palindrome/) |  |
| [ ] | **Longest Duplicate Substring**<br>*Binary search length + rolling hash (Rabin–Karp) or suffix array.* | Rolling Hash | [🔗 Practice](https://leetcode.com/problems/longest-duplicate-substring/) |  |
| [ ] | **Substring with Concatenation of All Words**<br>*Sliding window over word-sized chunks; count matches with a hashmap per starting offset.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/substring-with-concatenation-of-all-words/) |  |
| [ ] | **Valid Number**<br>*Implement a parser or DFA to validate integers, decimals, and exponent forms with optional signs/spaces.* | General | [🔗 Practice](https://leetcode.com/problems/valid-number/) |  |
| [ ] | **Palindrome Pairs**<br>*Find all pairs of distinct indices that form palindromes using Trie or brute force.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/palindrome-pairs/) |  |
| [ ] | **Edit Distance**<br>*Find minimum operations to convert one string to another using DP.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/edit-distance/) | ⭐ |
| [ ] | **Text Justification**<br>*Justify text by padding spaces between words.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/text-justification/) |  |
| [ ] | **Distinct Subsequences**<br>*Count number of distinct subsequences of one string in another using DP.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/distinct-subsequences/) | ⭐ |
| [ ] | **Word Ladder**<br>*Find shortest transformation sequence from start to end word.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/word-ladder/) |  |
| [ ] | **Count Unique Characters of All Substrings**<br>*Sum of count of unique characters in all substrings using mathematical approach.* | Rolling Hash | [🔗 Practice](https://leetcode.com/problems/count-unique-characters-of-all-substrings-of-a-given-string/) |  |
| [ ] | **Wildcard Matching**<br>*Implement wildcard pattern matching with '?' and '*' using DP.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/wildcard-matching/) | ⭐ |
| [ ] | **Design Search Autocomplete System**<br>*Design a search autocomplete system that supports searching and storing using Trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/design-search-autocomplete-system/) |  |
| [ ] | **Word Search II**<br>*Find all words from dictionary in board using Trie and DFS.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/word-search-ii/) |  |
| [ ] | **Integer to English Words**<br>*Convert non-negative integer to its English words representation.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/integer-to-english-words/) |  |
| [ ] | **Stream of Characters Query system for stream of characters using reversed**<br>*Trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/stream-of-characters/) |  |


---

<a id="linked_list"></a>
## Linked List
**Total Questions:** 37 | 🟩 Easy: 8 | 🟨 Medium: 27 | 🟥 Hard: 2

### Easy (8 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Reverse Linked List**<br>*Iteratively reverse pointers (prev, curr, next) to invert the list.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/reverse-linked-list/) | ⭐ |
| [ ] | **Merge Two Sorted Lists**<br>*Walk both lists and append the smaller node; return merged head.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/merge-two-sorted-lists/) | ⭐ |
| [ ] | **Linked List Cycle**<br>*Detect a cycle with Floyd's tortoise–hare algorithm.* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/linked-list-cycle/) |  |
| [ ] | **Intersection of Two Linked Lists**<br>*Two pointers switch heads at list end; meet at intersection or null.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/intersection-of-two-linked-lists/) |  |
| [ ] | **Palindrome Linked List**<br>*Find middle, reverse second half, compare halves, optionally restore.* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/palindrome-linked-list/) |  |
| [ ] | **Remove Duplicates from Sorted List**<br>*Skip equal-valued nodes to keep one copy in a sorted list.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-list/) |  |
| [ ] | **Remove Linked List Elements**<br>*Use a dummy head and skip nodes with the target value.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/remove-linked-list-elements/) |  |
| [ ] | **Middle of the Linked List**<br>*Fast/slow pointers to find the middle (second middle for even length).* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/middle-of-the-linked-list/) |  |

### Medium (27 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Reverse Linked List II**<br>*Reverse a sublist between left and right using in-place pointer rewiring.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/reverse-linked-list-ii/) |  |
| [ ] | **Add Two Numbers**<br>*Simulate digit-by-digit addition with carry across two lists.* | General | [🔗 Practice](https://leetcode.com/problems/add-two-numbers/) | ⭐ |
| [ ] | **Remove Nth Node From End of List**<br>*Fast/slow pointers; move fast n steps, then advance together to delete target.* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/remove-nth-node-from-end-of-list/) |  |
| [ ] | **Linked List Cycle II**<br>*After meeting point, move one pointer to head; step both to find cycle start.* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/linked-list-cycle-ii/) |  |
| [ ] | **Swap Nodes in Pairs**<br>*Iteratively swap neighbors with a dummy head; update prev/first/second pointers.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/swap-nodes-in-pairs/) |  |
| [ ] | **Reorder List**<br>*Find middle, reverse second half, then merge alternating nodes L0→Ln→L1→Ln-1…* | Fast & Slow Pointers | [🔗 Practice](https://leetcode.com/problems/reorder-list/) |  |
| [ ] | **Rotate List**<br>*Connect tail to head to make a cycle, move (n - k % n) steps, break the cycle.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/rotate-list/) |  |
| [ ] | **Partition List**<br>*Build* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/partition-list/) |  |
| [ ] | **Odd Even Linked List**<br>*Rewire next pointers to group odd-index nodes followed by even-index nodes.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/odd-even-linked-list/) |  |
| [ ] | **Remove Duplicates from Sorted List II**<br>*Delete all nodes that have duplicates; use a dummy and lookahead to skip runs.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/) |  |
| [ ] | **Copy List with Random Pointer**<br>*Clone nodes interleaved with originals, set randoms, then split the lists.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/copy-list-with-random-pointer/) |  |
| [ ] | **Sort List**<br>*Top-down merge sort on linked list: split by middle, sort halves, merge.* | Merge Sort | [🔗 Practice](https://leetcode.com/problems/sort-list/) |  |
| [ ] | **Add Two Numbers II**<br>*Use stacks (or reverse lists) to add from tail to head, carrying over as needed.* | Stack | [🔗 Practice](https://leetcode.com/problems/add-two-numbers-ii/) |  |
| [ ] | **Delete Node in a Linked List**<br>*Overwrite current node with next node's value and bypass next.* | General | [🔗 Practice](https://leetcode.com/problems/delete-node-in-a-linked-list/) |  |
| [ ] | **Remove Zero**<br>*Sum Consecutive Nodes from Linked List Prefix sum + hashmap of first occurrence to skip zero-sum spans.* | Prefix Sum | [🔗 Practice](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/) |  |
| [ ] | **Flatten a Multilevel Doubly Linked List**<br>*DFS/stack to splice child lists into the main doubly list.* | Stack | [🔗 Practice](https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/) |  |
| [ ] | **Insertion Sort List**<br>*Iterate nodes and insert each into the sorted prefix using a dummy.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/insertion-sort-list/) |  |
| [ ] | **Split Linked List in Parts**<br>*Compute length, divide into k parts with first r parts one node longer.* | General | [🔗 Practice](https://leetcode.com/problems/split-linked-list-in-parts/) |  |
| [ ] | **Plus One Linked List**<br>*Reverse, add one with carry (or recurse), then reverse back.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/plus-one-linked-list/) |  |
| [ ] | **LRU Cache**<br>*Design with a hashmap + doubly linked list for O(1) get/put.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/lru-cache/) |  |
| [ ] | **Convert Sorted List to Binary Search Tree**<br>*Build BST by splitting the list at the middle (fast/slow) and recursing on halves.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/) |  |
| [ ] | **Linked List Random Node**<br>*Reservoir sampling to pick a node uniformly in one pass with O(1) space.* | General | [🔗 Practice](https://leetcode.com/problems/linked-list-random-node/) |  |
| [ ] | **Remove Duplicates from Unsorted Linked List**<br>*Use a hash set to track seen values and splice out duplicates.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/) |  |
| [ ] | **Swapping Nodes in a Linked List**<br>*Find kth from start and kth from end (two pointers) and swap their values.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/) |  |
| [ ] | **Remove Nodes From Linked List**<br>*Monotonic stack from the right to remove nodes with a greater value later.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/remove-nodes-from-linked-list/) |  |
| [ ] | **Flatten Binary Tree to Linked List**<br>*Convert a binary tree to a flattened linked list in-place using preorder traversal.* | Tree to List | [🔗 Practice](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) | ⭐ |
| [ ] | **Design Linked List**<br>*Implement a singly linked list with basic operations like get, add, and delete.* | List Design | [🔗 Practice](https://leetcode.com/problems/design-linked-list/) | ⭐ |

### Hard (2 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Merge k Sorted Lists**<br>*Push list heads into a min-heap; pop/push to build sorted output.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/merge-k-sorted-lists/) | ⭐ |
| [ ] | **Reverse Nodes in k-Group**<br>*Reverse every k nodes using pointer rewiring; leave tail if < k nodes remain.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/reverse-nodes-in-k-group/) |  |


---

<a id="twod_array"></a>
## 2D Array
**Total Questions:** 29 | 🟩 Easy: 3 | 🟨 Medium: 22 | 🟥 Hard: 4

### Easy (3 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Flood Fill**<br>*Implement the flood fill algorithm (like paint bucket tool) using DFS or BFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/flood-fill/) |  |
| [ ] | **Island Perimeter**<br>*Calculate the perimeter of an island in a grid by counting boundaries.* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/island-perimeter/) |  |
| [ ] | **Toeplitz Matrix**<br>*Check if every diagonal from top-left to bottom-right has the same element.* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/toeplitz-matrix/) |  |

### Medium (22 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Set Matrix Zeroes**<br>*If a cell is 0, set its entire row and column to 0. Do it in-place with O(1) extra space.* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/set-matrix-zeroes/) | ⭐ |
| [ ] | **Spiral Matrix**<br>*Return all elements of the matrix in spiral order (right, down, left, up).* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/spiral-matrix/) | ⭐ |
| [ ] | **Rotate Image**<br>*Rotate the matrix 90 degrees clockwise in-place (transpose + reflect).* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/rotate-image/) | ⭐ |
| [ ] | **Search a 2D Matrix**<br>*Search for a target in a matrix where rows are sorted and first element > last element of previous row.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-a-2d-matrix/) | ⭐ |
| [ ] | **Search a 2D Matrix II**<br>*Search in a matrix where rows and columns are sorted independently (staircase search).* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-a-2d-matrix-ii/) | ⭐ |
| [ ] | **Number of Islands**<br>*Count the number of islands (connected 1's) in a grid using DFS or BFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/number-of-islands/) | ⭐ |
| [ ] | **Pacific Atlantic Water Flow**<br>*Find cells where water can flow to both Pacific and Atlantic oceans using DFS or BFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/pacific-atlantic-water-flow/) |  |
| [ ] | **Game of Life**<br>*Simulate Conway's Game of Life with in-place updates using bit manipulation.* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/game-of-life/) |  |
| [ ] | **Word Search**<br>*Find if a word exists in a grid by exploring adjacent cells with backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/word-search/) | ⭐ |
| [ ] | **Surrounded Regions**<br>*Capture regions of 'O' surrounded by 'X' using boundary DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/surrounded-regions/) |  |
| [ ] | **Valid Sudoku**<br>*Check if a partially filled Sudoku board is valid using hash sets.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/valid-sudoku/) | ⭐ |
| [ ] | **Diagonal**<br>*Traverse Return all elements in diagonal order, alternating up-right and down-left.* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/diagonal-traverse/) |  |
| [ ] | **Max Area of Island**<br>*Find the maximum area of an island in a grid using DFS or BFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/max-area-of-island/) | ⭐ |
| [ ] | **Minimum Path Sum**<br>*Find path with minimum sum from top-left to bottom-right using dynamic programming.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/minimum-path-sum/) | ⭐ |
| [ ] | **Unique Paths**<br>*Count unique paths from top-left to bottom-right with only right and down moves.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/unique-paths/) | ⭐ |
| [ ] | **Unique Paths II**<br>*Count paths with obstacles blocking certain cells using dynamic programming.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/unique-paths-ii/) | ⭐ |
| [ ] | **The Maze**<br>*Determine if ball can reach destination by rolling in four directions until hitting a wall.* | BFS | [🔗 Practice](https://leetcode.com/problems/the-maze/) |  |
| [ ] | **Walls and Gates Fill each empty room with distance to nearest gate using multi-source**<br>*BFS.* | BFS | [🔗 Practice](https://leetcode.com/problems/walls-and-gates/) |  |
| [ ] | **Minesweeper**<br>*Implement Minesweeper game mechanics using BFS or DFS.* | BFS | [🔗 Practice](https://leetcode.com/problems/minesweeper/) |  |
| [ ] | **Largest Plus Sign**<br>*Find the largest plus sign of 1's in a binary matrix using DP on four directions.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/largest-plus-sign/) |  |
| [ ] | **01 Matrix**<br>*Find distance of nearest 0 for each cell using BFS or dynamic programming.* | BFS | [🔗 Practice](https://leetcode.com/problems/01-matrix/) | ⭐ |
| [ ] | **Shortest Path in Binary Matrix**<br>*Find shortest path from top-left to bottom-right in a binary matrix with BFS.* | BFS | [🔗 Practice](https://leetcode.com/problems/shortest-path-in-binary-matrix/) |  |

### Hard (4 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Maximal Rectangle**<br>*Find the largest rectangle containing only 1's in a binary matrix using histogram technique.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/maximal-rectangle/) | ⭐ |
| [ ] | **Sudoku Solver**<br>*Solve a Sudoku puzzle using backtracking with constraint propagation.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/sudoku-solver/) |  |
| [ ] | **Shortest Distance from All Buildings**<br>*Find the shortest distance for a point to reach all buildings using multi-source BFS.* | BFS | [🔗 Practice](https://leetcode.com/problems/shortest-distance-from-all-buildings/) |  |
| [ ] | **Word Search II**<br>*Find all words from a dictionary in a grid using Trie + DFS backtracking.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/word-search-ii/) | ⭐ |


---

<a id="searching"></a>
## Searching
**Total Questions:** 52 | 🟩 Easy: 11 | 🟨 Medium: 29 | 🟥 Hard: 12

### Easy (11 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Binary Search (Standard)**<br>*Implement the classic binary search on a sorted array to find a target element.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/binary-search/) |  |
| [ ] | **First Bad Version**<br>*Find the first occurrence of an element using binary search with a condition.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/first-bad-version/) |  |
| [ ] | **Search Insert Position**<br>*Find insertion point using binary search (essentially lower bound implementation).* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-insert-position/) |  |
| [ ] | **Guess Number Higher or Lower**<br>*Binary search with external API calls to find the correct number.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/guess-number-higher-or-lower/) |  |
| [ ] | **Peak Index in Mountain Array**<br>*Find the peak element in a bitonic array using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/peak-index-in-a-mountain-array/) |  |
| [ ] | **Find Smallest Letter Greater Than Target**<br>*Find the smallest element greater than target (circular wrap-around).* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-smallest-letter-greater-than-target/) |  |
| [ ] | **Two Sum (Sorted)**<br>*Find two elements that sum to target in a sorted array using two pointers.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/) |  |
| [ ] | **Two Sum Less Than K**<br>*Find the maximum sum less than K using two pointers after sorting.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/two-sum-less-than-k/) | ⭐ |
| [ ] | **Count Negative Numbers in a Sorted Matrix**<br>*Count negative numbers in a row-column sorted matrix using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/) |  |
| [ ] | **Valid Perfect Square**<br>*Check if number is perfect square without using sqrt function using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/valid-perfect-square/) |  |
| [ ] | **Kth Missing Positive Number**<br>*Find kth positive integer missing from array using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/kth-missing-positive-number/) |  |

### Medium (29 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Time Based Key-Value Store**<br>*Design a data structure to retrieve values by timestamp using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/time-based-key-value-store/) | ⭐ |
| [ ] | **Single Element in a Sorted Array**<br>*Find the single non-duplicated element in an array where all other elements appear exactly twice.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/single-element-in-a-sorted-array/) | ⭐ |
| [ ] | **Search for a Range (First and Last Position)**<br>*Find the starting and ending positions of a target value using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/) | ⭐ |
| [ ] | **Koko Eating Bananas**<br>*Binary search the minimum eating speed to finish bananas within h hours.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/koko-eating-bananas/) | ⭐ |
| [ ] | **Capacity To Ship Packages Within D Days**<br>*Binary search the minimum capacity needed to ship all packages within D days.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/) | ⭐ |
| [ ] | **Minimum Number of Days to Make m Bouquets**<br>*Binary search the minimum days required to make m bouquets.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/) | ⭐ |
| [ ] | **Magnetic Force Between Two Balls (Aggressive Cows)**<br>*Binary search the maximum minimum distance between placed balls.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/magnetic-force-between-two-balls/) |  |
| [ ] | **Find the Duplicate Number**<br>*Find the duplicate in an array using Floyd's Tortoise and Hare (cycle detection).* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/find-the-duplicate-number/) | ⭐ |
| [ ] | **3Sum Closest**<br>*Find three integers that sum closest to target using two pointers.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/3sum-closest/) |  |
| [ ] | **Kth Largest Element in an Array**<br>*Find the kth largest element using Quickselect algorithm (average O(n)).* | Order Statistics (Quickselect) | [🔗 Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/) | ⭐ |
| [ ] | **Kth Smallest Element in a Sorted Matrix**<br>*Find the kth smallest element in a row and column sorted matrix.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |  |
| [ ] | **Top K Frequent Elements**<br>*Find the k most frequent elements using bucket sort or quickselect.* | Order Statistics (Quickselect) | [🔗 Practice](https://leetcode.com/problems/top-k-frequent-elements/) | ⭐ |
| [ ] | **Find K Closest Elements**<br>*Find k closest elements to x in sorted array using binary search + two pointers.* | Binary Search & Two Pointers | [🔗 Practice](https://leetcode.com/problems/find-k-closest-elements/) |  |
| [ ] | **Search in Rotated Sorted Array**<br>*Search in rotated sorted array by identifying the sorted half.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-in-rotated-sorted-array/) | ⭐ |
| [ ] | **Search in Rotated Sorted Array II**<br>*Search in rotated sorted array with duplicates by handling the edge case.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/) | ⭐ |
| [ ] | **Maximum Value at a Given Index in a Bounded Array**<br>*Binary search the answer with mathematical verification of constraints.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/) |  |
| [ ] | **Minimum Limit of Balls in a Bag**<br>*Binary search the minimum possible maximum penalty after operations.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/) |  |
| [ ] | **Find Peak Element**<br>*Find any peak element in O(log n) time using binary search on slopes.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-peak-element/) | ⭐ |
| [ ] | **Minimum Size Subarray Sum**<br>*Find the minimum length subarray with a sum at least k using two pointers or binary search.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/minimum-size-subarray-sum/) | ⭐ |
| [ ] | **Find Minimum in Rotated Sorted Array**<br>*Find the minimum element in a rotated sorted array using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/) | ⭐ |
| [ ] | **Missing Element in Sorted Array**<br>*Binary search to find the kth missing positive integer in a sorted array.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/missing-element-in-sorted-array/) |  |
| [ ] | **Search a 2D Matrix**<br>*Search in a 2D matrix with sorted rows by treating it as a 1D array.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/search-a-2d-matrix/) | ⭐ |
| [ ] | **Jump Game VII**<br>*Determine if you can reach the end of an array using given jump rules and greedy approach.* | Greedy | [🔗 Practice](https://leetcode.com/problems/jump-game-vii/) | ⭐ |
| [ ] | **Longest Increasing Subsequence**<br>*Find length of longest increasing subsequence using binary search with patience sort.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/longest-increasing-subsequence/) | ⭐ |
| [ ] | **Find the Smallest Divisor Given a Threshold**<br>*Find smallest divisor such that sum of division results <= threshold using binary search.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/) | ⭐ |
| [ ] | **Find Right Interval**<br>*For each interval, find rightmost interval with start >= current end using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-right-interval/) |  |
| [ ] | **Heaters**<br>*Find minimum radius to cover houses with heaters using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/heaters/) |  |
| [ ] | **Random Pick with Weight**<br>*Pick random index proportional to weight using binary search with prefix sums.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/random-pick-with-weight/) |  |
| [ ] | **Peak Index in a Mountain Array**<br>*Find peak index in a mountain array using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/peak-index-in-a-mountain-array/) |  |

### Hard (12 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Median of Two Sorted Arrays**<br>*Find the median of two sorted arrays in O(log(min(n, m))) time.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/median-of-two-sorted-arrays/) | ⭐ |
| [ ] | **Count of Range Sum**<br>*Count range sums using prefix sums and modified merge sort.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/count-of-range-sum/) |  |
| [ ] | **Minimize Max Distance to Gas Station**<br>*Binary search the answer (maximum distance) with feasibility check.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/minimize-max-distance-to-gas-station/) |  |
| [ ] | **Split Array Largest Sum**<br>*Find the minimized largest sum of the subarray partitions with binary search.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/split-array-largest-sum/) | ⭐ |
| [ ] | **Find in Mountain Array**<br>*Search in a mountain array with minimal API calls using binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-in-mountain-array/) | ⭐ |
| [ ] | **Find Minimum in Rotated Sorted Array II**<br>*Find the minimum element in a rotated sorted array with duplicates.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/) | ⭐ |
| [ ] | **Divide Chocolate**<br>*Binary search the maximum minimum sweetness by cutting the chocolate bar.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/divide-chocolate/) |  |
| [ ] | **Find K-th Smallest Pair Distance**<br>*Binary search the kth smallest distance between pairs with two pointers verification.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/find-k-th-smallest-pair-distance/) | ⭐ |
| [ ] | **Count of Smaller Numbers After Self**<br>*Use merge sort, BST, or BIT to count smaller elements after each position.* | Order Statistics (Quickselect) | [🔗 Practice](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | ⭐ |
| [ ] | **Shortest Subarray with Sum at Least K**<br>*Find the shortest subarray with sum at least K using monotonic queue.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | ⭐ |
| [ ] | **Russian Doll Envelopes**<br>*Find maximum number of envelopes that can be nested using 2D LIS and binary search.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/russian-doll-envelopes/) |  |
| [ ] | **Longest Duplicate Substring**<br>*Find longest substring that occurs more than once using binary search and Rabin-Karp.* | Binary Search on Answer | [🔗 Practice](https://leetcode.com/problems/longest-duplicate-substring/) |  |


---

<a id="sorting"></a>
## Sorting
**Total Questions:** 44 | 🟩 Easy: 5 | 🟨 Medium: 27 | 🟥 Hard: 12

### Easy (5 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **The K Weakest Rows in a Matrix**<br>*Find the k weakest rows in a binary matrix using sorting and heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/) |  |
| [ ] | **Last Stone Weight**<br>*Simulate smashing stones together using a max heap until only one or none remains.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/last-stone-weight/) |  |
| [ ] | **Maximum Units on a Truck**<br>*Maximize total units on truck by sorting boxes by units per box and using greedy approach.* | Greedy | [🔗 Practice](https://leetcode.com/problems/maximum-units-on-a-truck/) |  |
| [ ] | **Relative**<br>*Sort Array Sort first array relative to the second array's element order using counting sort or custom comparator.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/relative-sort-array/) |  |
| [ ] | **Sort Array by Increasing Frequency**<br>*Sort elements by frequency and value using custom sorting with a hashmap.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-array-by-increasing-frequency/) |  |

### Medium (27 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Merge Sort Implementation**<br>*Implement merge sort algorithm with a focus on the merge step and divide-and-conquer approach.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-an-array/) | ⭐ |
| [ ] | **Quick Sort Implementation**<br>*Implement quick sort algorithm with a focus on efficient partitioning and pivot selection.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-an-array/) | ⭐ |
| [ ] | **Sort Colors (Dutch National Flag)**<br>*Sort an array with only three distinct values using the Dutch National Flag algorithm.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-colors/) | ⭐ |
| [ ] | **Merge Intervals**<br>*Merge all overlapping intervals after sorting by start time.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/merge-intervals/) | ⭐ |
| [ ] | **K Closest Points to Origin**<br>*Find the k closest points to origin using a min heap or quickselect algorithm.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/k-closest-points-to-origin/) | ⭐ |
| [ ] | **Top K Frequent Elements**<br>*Find k most frequent elements using a heap, bucket sort, or quickselect.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/top-k-frequent-elements/) | ⭐ |
| [ ] | **Kth Largest Element in an Array**<br>*Find the kth largest element in an unsorted array using quickselect or heap.* | Order Statistics (Quickselect) | [🔗 Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/) | ⭐ |
| [ ] | **Sort List**<br>*Sort a linked list using merge sort in O(n log n) time and O(1) space.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-list/) | ⭐ |
| [ ] | **Meeting Rooms II**<br>*Find the minimum number of conference rooms required by sorting and using a min heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/meeting-rooms-ii/) | ⭐ |
| [ ] | **Largest Number**<br>*Arrange numbers to form the largest possible number using custom sorting.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/largest-number/) |  |
| [ ] | **Wiggle Sort II**<br>*Reorder array so nums[0] < nums[1] > nums[2] < nums[3]... using sorting and median finding.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/wiggle-sort-ii/) |  |
| [ ] | **Insertion**<br>*Sort List Sort a linked list using insertion sort to understand the basic sorting algorithm.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/insertion-sort-list/) |  |
| [ ] | **Reorganize String**<br>*Rearrange characters in string so no adjacent characters are the same using greedy approach with max heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/reorganize-string/) | ⭐ |
| [ ] | **Heap Sort Implementation**<br>*Implement heap sort algorithm to understand heapification and sorting using heap properties.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/sort-an-array/) |  |
| [ ] | **Car Pooling**<br>*Determine if it's possible to pick up and drop off all passengers using sorting and greedy approach.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/car-pooling/) |  |
| [ ] | **K Closest Elements**<br>*Find k closest elements to a given value in a sorted array using binary search and two pointers.* | Binary Search & Two Pointers | [🔗 Practice](https://leetcode.com/problems/find-k-closest-elements/) |  |
| [ ] | **Sort Colors**<br>*Sort array with only three distinct values (Dutch National Flag problem) using one-pass algorithm.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-colors/) | ⭐ |
| [ ] | **Pancake Sorting**<br>*Sort array using only pancake flips (reversing prefix of array) with minimum flips.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/pancake-sorting/) |  |
| [ ] | **Car Fleet**<br>*Determine number of car fleets that will arrive at destination using sorting and stack.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/car-fleet/) |  |
| [ ] | **Task Scheduler**<br>*Schedule tasks with cooldown period minimizing total time using priority queue and greedy.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/task-scheduler/) |  |
| [ ] | **Split Array into Consecutive Subsequences**<br>*Check if array can be split into consecutive subsequences of length ≥ 3 using greedy approach.* | Greedy | [🔗 Practice](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) |  |
| [ ] | **Bucket Sort Implementation**<br>*Implement bucket sort algorithm for uniformly distributed data to achieve linear time complexity.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/sort-an-array/) |  |
| [ ] | **Sort Characters By Frequency**<br>*Sort characters by decreasing frequency using bucket sort or heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/sort-characters-by-frequency/) |  |
| [ ] | **Find K Pairs with Smallest Sums**<br>*Find the k pairs with the smallest sums from two arrays using min heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) |  |
| [ ] | **Most Profit Assigning Work**<br>*Assign work to maximize profit by sorting difficulty and using two pointers.* | Sorting & Two Pointers | [🔗 Practice](https://leetcode.com/problems/most-profit-assigning-work/) |  |
| [ ] | **Super Ugly Number**<br>*Find the nth super ugly number using multiple pointers or a min heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/super-ugly-number/) |  |
| [ ] | **Partition Array According to Given Pivot**<br>*Rearrange elements based on their relation to pivot value using partitioning technique.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/partition-array-according-to-given-pivot/) |  |

### Hard (12 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Find Median from Data Stream**<br>*Design a data structure that supports finding the median of a stream of numbers using two heaps.* | Two Heaps (Median maintenance) | [🔗 Practice](https://leetcode.com/problems/find-median-from-data-stream/) | ⭐ |
| [ ] | **Count of Smaller Numbers After Self**<br>*Count smaller elements after each position using merge sort, BST, or BIT.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | ⭐ |
| [ ] | **Count of Range Sum**<br>*Count range sums within a given range using merge sort.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/count-of-range-sum/) |  |
| [ ] | **Maximum Gap**<br>*Find the maximum gap between consecutive elements after sorting using bucket sort.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/maximum-gap/) |  |
| [ ] | **Maximum Performance of a Team**<br>*Find maximum performance of team selecting k engineers using sorting and min heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/maximum-performance-of-a-team/) |  |
| [ ] | **Sliding Window Median**<br>*Find median in sliding window of size k using two heaps or multiset.* | Two Heaps (Median maintenance) | [🔗 Practice](https://leetcode.com/problems/sliding-window-median/) |  |
| [ ] | **Minimum Cost to Hire K Workers**<br>*Find minimum cost to hire K workers with quality and wage constraints using sorting and heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) |  |
| [ ] | **IPO**<br>*Find maximum capital after completing at most k projects using sorting and priority queue.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/ipo/) |  |
| [ ] | **Merge k Sorted Lists**<br>*Merge k sorted linked lists using a min heap or divide and conquer approach.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/merge-k-sorted-lists/) |  |
| [ ] | **Smallest Range Covering Elements from K Lists**<br>*Find smallest range that includes at least one number from each list using k-way merge with heap.* | Heap / Priority Queue | [🔗 Practice](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |  |
| [ ] | **Employee Free Time**<br>*Find all free time intervals for all employees using sorting and scanning.* | Sorting & Partitioning | [🔗 Practice](https://leetcode.com/problems/employee-free-time/) |  |
| [ ] | **Median of Two Sorted Arrays**<br>*Find the median of two sorted arrays in O(log(min(n,m))) time using binary search.* | Two Heaps (Median maintenance) | [🔗 Practice](https://leetcode.com/problems/median-of-two-sorted-arrays/) |  |


---

<a id="recursion"></a>
## Recursion
**Total Questions:** 57 | 🟩 Easy: 6 | 🟨 Medium: 31 | 🟥 Hard: 20

### Easy (6 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Fibonacci Number**<br>*Calculate the nth Fibonacci number using recursion with optimization.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/fibonacci-number/) | ⭐ |
| [ ] | **Flood Fill Fill connected pixels with the same color using**<br>*DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/flood-fill/) |  |
| [ ] | **Path Sum**<br>*Check if a binary tree has a root-to-leaf path that sums to a target.* | DFS | [🔗 Practice](https://leetcode.com/problems/path-sum/) |  |
| [ ] | **Maximum Depth of Binary Tree**<br>*Find the maximum depth of a binary tree using recursive DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | ⭐ |
| [ ] | **Reverse Linked List**<br>*Reverse a linked list using recursion.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/reverse-linked-list/) |  |
| [ ] | **Balanced Binary Tree**<br>*Check if a binary tree is height-balanced using recursive approach.* | DFS | [🔗 Practice](https://leetcode.com/problems/balanced-binary-tree/) |  |

### Medium (31 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Pow(x, n)**<br>*Implement pow(x, n), which calculates x raised to power n using recursive divide and conquer.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/powx-n/) | ⭐ |
| [ ] | **Generate Parentheses**<br>*Generate all combinations of well-formed parentheses given n pairs.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/generate-parentheses/) | ⭐ |
| [ ] | **Letter Combinations of a Phone Number**<br>*Map digits to letters and generate all possible letter combinations.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | ⭐ |
| [ ] | **Palindrome Partitioning**<br>*Partition a string so that every substring is a palindrome using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/palindrome-partitioning/) | ⭐ |
| [ ] | **Combination Sum**<br>*Find all unique combinations that sum to a target using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/combination-sum/) | ⭐ |
| [ ] | **Subsets**<br>*Generate all possible subsets of a given set using recursion.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/subsets/) | ⭐ |
| [ ] | **Permutations**<br>*Generate all possible permutations of a given array using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/permutations/) | ⭐ |
| [ ] | **Word Search**<br>*Search for a word in a 2D grid by exploring adjacent cells using DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/word-search/) | ⭐ |
| [ ] | **Merge Sort**<br>*Implement merge sort algorithm using divide and conquer approach.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/sort-an-array/) |  |
| [ ] | **Quick Sort**<br>*Implement quick sort algorithm using divide and conquer approach.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/sort-an-array/) |  |
| [ ] | **Tower of Hanoi**<br>*Solve the classic Tower of Hanoi puzzle using recursion.* | Recursion / Divide & Conquer | [🔗 Practice](https://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/) |  |
| [ ] | **Validate Binary Search Tree**<br>*Check if a binary tree is a valid BST using recursive validation.* | DFS | [🔗 Practice](https://leetcode.com/problems/validate-binary-search-tree/) | ⭐ |
| [ ] | **Combinations**<br>*Return all possible combinations of k numbers chosen from 1 to n.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/combinations/) |  |
| [ ] | **All Paths From Source to Target**<br>*Find all possible paths from node 0 to node n-1 in a directed acyclic graph.* | DFS | [🔗 Practice](https://leetcode.com/problems/all-paths-from-source-to-target/) |  |
| [ ] | **Decode String**<br>*Decode a string with repeating patterns using recursive approach.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/decode-string/) | ⭐ |
| [ ] | **Unique Binary Search Trees II**<br>*Generate all structurally unique BSTs with n nodes using recursion.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/unique-binary-search-trees-ii/) |  |
| [ ] | **K-th Symbol in Grammar**<br>*Find the kth symbol in the nth row of a recursively defined grammar.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/k-th-symbol-in-grammar/) |  |
| [ ] | **Different Ways to Add Parentheses**<br>*Compute all possible results by placing parentheses in different positions.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/different-ways-to-add-parentheses/) |  |
| [ ] | **Beautiful Arrangement**<br>*Count all beautiful arrangements using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/beautiful-arrangement/) |  |
| [ ] | **Strobogrammatic Number II**<br>*Generate all strobogrammatic numbers of a given length using recursion.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/strobogrammatic-number-ii/) |  |
| [ ] | **Number of Islands**<br>*Count the number of islands in a 2D grid using DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/number-of-islands/) |  |
| [ ] | **Restore IP Addresses**<br>*Restore all possible valid IP addresses from a string using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/restore-ip-addresses/) |  |
| [ ] | **Binary Tree Path Sum II**<br>*Find all root-to-leaf paths where the sum equals the target.* | DFS | [🔗 Practice](https://leetcode.com/problems/path-sum-ii/) |  |
| [ ] | **Partition to K Equal Sum Subsets**<br>*Determine if array can be divided into k subsets with equal sums using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) |  |
| [ ] | **Construct Binary Tree from Preorder and Inorder**<br>*Reconstruct binary tree from preorder and inorder traversals using divide and conquer.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) | ⭐ |
| [ ] | **Course Schedule II**<br>*Find order to take courses with prerequisites using topological sort (DFS).* | DFS | [🔗 Practice](https://leetcode.com/problems/course-schedule-ii/) |  |
| [ ] | **Nested List Weight Sum II**<br>*Calculate sum of nested list elements with depth weighting using recursion.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/nested-list-weight-sum-ii/) |  |
| [ ] | **Android Unlock Patterns**<br>*Count unlock patterns of Android lockscreen with given constraints using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/android-unlock-patterns/) |  |
| [ ] | **Increasing Subsequences**<br>*Find all increasing subsequences in array using backtracking with duplicate handling.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/increasing-subsequences/) |  |
| [ ] | **Solve the Equation**<br>*Solve linear equation with variables on both sides using recursion for parsing.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/solve-the-equation/) |  |
| [ ] | **Regions Cut By Slashes**<br>*Count regions formed by slashes in grid using recursive graph expansion and DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/regions-cut-by-slashes/) |  |

### Hard (20 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **N-Queens**<br>*Place N queens on an NxN chessboard so no two queens attack each other.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/n-queens/) | ⭐ |
| [ ] | **Sudoku Solver**<br>*Solve a partially filled Sudoku puzzle using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/sudoku-solver/) | ⭐ |
| [ ] | **Word**<br>*Break II Break a string into space-separated words from a dictionary using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/word-break-ii/) |  |
| [ ] | **Regular Expression Matching**<br>*Implement regex pattern matching with '.' and '*' using recursive approach.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/regular-expression-matching/) | ⭐ |
| [ ] | **The Skyline Problem**<br>*Merge building outlines to create a city skyline using divide and conquer.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/the-skyline-problem/) |  |
| [ ] | **Count of Smaller Numbers After Self**<br>*Count smaller elements after each element using modified merge sort.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) |  |
| [ ] | **Binary Tree Maximum Path Sum**<br>*Find the maximum path sum in a binary tree using DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | ⭐ |
| [ ] | **Expression Add Operators**<br>*Add operators between digits to form target value using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/expression-add-operators/) |  |
| [ ] | **Word Search II**<br>*Find all words in a board from a given dictionary using Trie and DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/word-search-ii/) |  |
| [ ] | **Largest Rectangle in Histogram**<br>*Find the largest rectangle area in a histogram using divide and conquer.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/largest-rectangle-in-histogram/) |  |
| [ ] | **Longest Increasing Path in a Matrix**<br>*Find the length of longest increasing path in matrix using DFS with memoization.* | DFS | [🔗 Practice](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/) |  |
| [ ] | **Remove Invalid Parentheses**<br>*Remove minimum number of parentheses to make string valid using backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/remove-invalid-parentheses/) |  |
| [ ] | **Serialize and Deserialize Binary Tree**<br>*Design algorithm to serialize and deserialize binary tree using recursion.* | DFS | [🔗 Practice](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | ⭐ |
| [ ] | **Cracking the Safe**<br>*Find shortest string that contains all possible k-length combinations of n digits using de Bruijn sequence and backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/cracking-the-safe/) |  |
| [ ] | **Redundant Connection II Remove edge that causes directed graph to have root with two parents or cycle using union-find and**<br>*DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/redundant-connection-ii/) |  |
| [ ] | **24 Game**<br>*Determine if 4 cards can form 24 using arithmetic operations with backtracking.* | Backtracking | [🔗 Practice](https://leetcode.com/problems/24-game/) |  |
| [ ] | **Binary Tree Cameras**<br>*Place minimum number of cameras to monitor binary tree using DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-cameras/) |  |
| [ ] | **Closest Binary Search Tree Value II**<br>*Find k values in BST closest to target using inorder traversal.* | DFS | [🔗 Practice](https://leetcode.com/problems/closest-binary-search-tree-value-ii/) |  |
| [ ] | **Similar String Groups**<br>*Count groups of similar strings using DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/similar-string-groups/) |  |
| [ ] | **Stream of Characters**<br>*Implement query system for stream of characters using reversed Trie with DFS.* | DFS | [🔗 Practice](https://leetcode.com/problems/stream-of-characters/) |  |


---

<a id="stack"></a>
## Stack
**Total Questions:** 29 | 🟩 Easy: 5 | 🟨 Medium: 19 | 🟥 Hard: 5

### Easy (5 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Next Greater Element I**<br>*Find the next greater element for each element in an array using a monotonic stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/next-greater-element-i/) | ⭐ |
| [ ] | **Implement Stack using Queues**<br>*Implement a stack using only queues with push, pop, top, and empty operations.* | Stack Design | [🔗 Practice](https://leetcode.com/problems/implement-stack-using-queues/) | ⭐ |
| [ ] | **Maximum Nesting Depth of the Parentheses**<br>*Find the maximum nesting depth of a valid parentheses string using a counter or stack.* | Stack | [🔗 Practice](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/) | ⭐ |
| [ ] | **Remove All Adjacent Duplicates In String**<br>*Remove all adjacent duplicates from a string using a stack.* | Stack | [🔗 Practice](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/) | ⭐ |
| [ ] | **Implement Queue using Stacks**<br>*Implement a queue using only stack data structure with O(1) amortized operations.* | Stack Design | [🔗 Practice](https://leetcode.com/problems/implement-queue-using-stacks/) | ⭐ |

### Medium (19 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Daily Temperatures**<br>*Find how many days to wait for a warmer temperature using a monotonic stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/daily-temperatures/) | ⭐ |
| [ ] | **Basic Calculator II**<br>*Implement a calculator to evaluate expressions with +, -, *, / using stack.* | Expression Evaluation | [🔗 Practice](https://leetcode.com/problems/basic-calculator-ii/) | ⭐ |
| [ ] | **Min Stack**<br>*Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.* | Stack Design | [🔗 Practice](https://leetcode.com/problems/min-stack/) | ⭐ |
| [ ] | **Evaluate Reverse Polish Notation**<br>*Evaluate expressions in Reverse Polish Notation (postfix) using a stack.* | Expression Evaluation | [🔗 Practice](https://leetcode.com/problems/evaluate-reverse-polish-notation/) | ⭐ |
| [ ] | **Remove K Digits**<br>*Remove k digits from a number to make it the smallest possible using a monotonic stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/remove-k-digits/) | ⭐ |
| [ ] | **132 Pattern**<br>*Determine if there exists a 132 pattern in the array using a stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/132-pattern/) | ⭐ |
| [ ] | **Asteroid Collision**<br>*Determine the state of asteroids after collisions using a stack.* | Stack | [🔗 Practice](https://leetcode.com/problems/asteroid-collision/) | ⭐ |
| [ ] | **Exclusive Time of Functions**<br>*Find the exclusive time of each function using a stack to track function calls.* | Stack | [🔗 Practice](https://leetcode.com/problems/exclusive-time-of-functions/) | ⭐ |
| [ ] | **Simplify Path**<br>*Convert a path to canonical form using a stack to handle directories and special path elements.* | Stack | [🔗 Practice](https://leetcode.com/problems/simplify-path/) | ⭐ |
| [ ] | **Online Stock Span**<br>*Return the span of stock prices on consecutive days using a monotonic stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/online-stock-span/) | ⭐ |
| [ ] | **Next Greater Element II**<br>*Find the next greater element in a circular array using a monotonic stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/next-greater-element-ii/) | ⭐ |
| [ ] | **Sum of Subarray Minimums**<br>*Find the sum of minimum elements from all subarrays using monotonic stacks.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/sum-of-subarray-minimums/) | ⭐ |
| [ ] | **Valid Parenthesis String**<br>*Determine if a string can be valid with wildcard characters using stacks or greedy approach.* | Stack | [🔗 Practice](https://leetcode.com/problems/valid-parenthesis-string/) | ⭐ |
| [ ] | **Score of Parentheses**<br>*Calculate the score of a balanced parentheses string using a stack.* | Stack | [🔗 Practice](https://leetcode.com/problems/score-of-parentheses/) | ⭐ |
| [ ] | **Design Browser History**<br>*Implement browser history with visit, back and forward operations using stacks.* | Stack Design | [🔗 Practice](https://leetcode.com/problems/design-browser-history/) | ⭐ |
| [ ] | **Decode String**<br>*Decode a string with nested repeated patterns using a stack.* | Stack | [🔗 Practice](https://leetcode.com/problems/decode-string/) | ⭐ |
| [ ] | **Pattern 132**<br>*Find a pattern where i < j < k and nums[i] < nums[k] < nums[j] using stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/132-pattern/) | ⭐ |
| [ ] | **Next Greater Node In Linked List**<br>*Find the next greater value for each node in a linked list using a stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/next-greater-node-in-linked-list/) | ⭐ |
| [ ] | **Car Fleet**<br>*Determine the number of car fleets that will arrive at destination using stack.* | Stack | [🔗 Practice](https://leetcode.com/problems/car-fleet/) | ⭐ |

### Hard (5 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Largest Rectangle in Histogram**<br>*Find the largest rectangle area in a histogram using a monotonic stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/largest-rectangle-in-histogram/) | ⭐ |
| [ ] | **Trapping Rain Water**<br>*Calculate how much water can be trapped between bars using stack or two pointers.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/trapping-rain-water/) | ⭐ |
| [ ] | **Basic Calculator**<br>*Implement a basic calculator to evaluate expressions with +, -, (, and ) using stack.* | Expression Evaluation | [🔗 Practice](https://leetcode.com/problems/basic-calculator/) | ⭐ |
| [ ] | **Maximum Frequency Stack**<br>*Implement FreqStack that allows pushing elements and popping the most frequent element.* | Stack Design | [🔗 Practice](https://leetcode.com/problems/maximum-frequency-stack/) | ⭐ |
| [ ] | **Maximal Rectangle**<br>*Find the largest rectangle containing only 1's in a binary matrix using histogram approach and stack.* | Monotonic Stack | [🔗 Practice](https://leetcode.com/problems/maximal-rectangle/) | ⭐ |


---

<a id="queue"></a>
## Queue
**Total Questions:** 20 | 🟩 Easy: 4 | 🟨 Medium: 10 | 🟥 Hard: 6

### Easy (4 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Implement Stack using Queues**<br>*Implement a last-in-first-out stack using only standard queue operations.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/implement-stack-using-queues/) | ⭐ |
| [ ] | **Moving Average from Data Stream**<br>*Implement a moving average window that calculates the average of elements.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/moving-average-from-data-stream/) | ⭐ |
| [ ] | **First Unique Character in a String**<br>*Find the first non-repeating character in a string using queue and map.* | Queue | [🔗 Practice](https://leetcode.com/problems/first-unique-character-in-a-string/) | ⭐ |
| [ ] | **Number of Recent Calls**<br>*Design a counter that counts recent requests within a certain time frame using queue.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/number-of-recent-calls/) | ⭐ |

### Medium (10 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Design Circular Queue**<br>*Design your implementation of the circular queue data structure.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/design-circular-queue/) | ⭐ |
| [ ] | **Design Hit Counter**<br>*Design a hit counter that counts the number of hits received in the past 5 minutes.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/design-hit-counter/) | ⭐ |
| [ ] | **First Unique Number**<br>*Implement FirstUnique class that tracks unique numbers in a queue.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/first-unique-number/) | ⭐ |
| [ ] | **Dota2 Senate**<br>*Determine the winner of the Dota2 senate using queue.* | Queue | [🔗 Practice](https://leetcode.com/problems/dota2-senate/) | ⭐ |
| [ ] | **Task Scheduler**<br>*Arrange tasks with cooldown periods to minimize idle time using priority queue and greedy approach.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/task-scheduler/) | ⭐ |
| [ ] | **Design Twitter**<br>*Design a simplified version of Twitter using queues and hash maps.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/design-twitter/) | ⭐ |
| [ ] | **K Closest Points to Origin**<br>*Find the k closest points to the origin using a priority queue (min heap).* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/k-closest-points-to-origin/) | ⭐ |
| [ ] | **Kth Largest Element in an Array**<br>*Find the kth largest element in an unsorted array using priority queue.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/) | ⭐ |
| [ ] | **Top K Frequent Elements**<br>*Find the k most frequent elements using priority queue or bucket sort.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/top-k-frequent-elements/) | ⭐ |
| [ ] | **Design Snake Game**<br>*Design the Snake game that is played on a device with screen using queue.* | Queue Design | [🔗 Practice](https://leetcode.com/problems/design-snake-game/) | ⭐ |

### Hard (6 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Sliding Window Maximum**<br>*Find the maximum element in each sliding window using a deque.* | Monotonic Queue | [🔗 Practice](https://leetcode.com/problems/sliding-window-maximum/) | ⭐ |
| [ ] | **Shortest Subarray with Sum at Least K**<br>*Find the length of shortest subarray with sum >= k using monotonic queue.* | Monotonic Queue | [🔗 Practice](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/) | ⭐ |
| [ ] | **Maximum Frequency Stack**<br>*Design a stack-like data structure that pushes elements that occur most frequently to the top.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/maximum-frequency-stack/) | ⭐ |
| [ ] | **Find Median from Data Stream**<br>*Design a data structure that supports adding integers and finding the median using priority queues.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/find-median-from-data-stream/) | ⭐ |
| [ ] | **Merge k Sorted Lists**<br>*Merge k sorted linked lists into one sorted list using a priority queue.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/merge-k-sorted-lists/) | ⭐ |
| [ ] | **Minimum Cost to Hire K Workers**<br>*Find the minimum cost to hire K workers using priority queue and sorting.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/minimum-cost-to-hire-k-workers/) | ⭐ |


---

<a id="heap"></a>
## Heap
**Total Questions:** 20 | 🟩 Easy: 1 | 🟨 Medium: 11 | 🟥 Hard: 8

### Easy (1 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Last Stone Weight**<br>*Find the weight of the last stone after smashing together the heaviest stones using a max heap.* | Heap Operations | [🔗 Practice](https://leetcode.com/problems/last-stone-weight/) | ⭐ |

### Medium (11 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Kth Largest Element in an Array**<br>*Find the kth largest element in an unsorted array using heap or quickselect.* | Heap Operations | [🔗 Practice](https://leetcode.com/problems/kth-largest-element-in-an-array/) | ⭐ |
| [ ] | **Top K Frequent Elements**<br>*Find the k most frequent elements in an array using a heap or bucket sort.* | Top K Pattern | [🔗 Practice](https://leetcode.com/problems/top-k-frequent-elements/) | ⭐ |
| [ ] | **K Closest Points to Origin**<br>*Find the k closest points to the origin using a max-heap or quickselect.* | Top K Pattern | [🔗 Practice](https://leetcode.com/problems/k-closest-points-to-origin/) |  |
| [ ] | **Meeting Rooms II**<br>*Find the minimum number of meeting rooms required using a min heap.* | Merge Intervals | [🔗 Practice](https://leetcode.com/problems/meeting-rooms-ii/) | ⭐ |
| [ ] | **Reorganize String**<br>*Rearrange characters in a string so no adjacent characters are the same using a max heap.* | Frequency Sort | [🔗 Practice](https://leetcode.com/problems/reorganize-string/) | ⭐ |
| [ ] | **Ugly Number II**<br>*Find the nth ugly number (only divisible by 2, 3, 5) using dynamic programming or min heap.* | Heap Operations | [🔗 Practice](https://leetcode.com/problems/ugly-number-ii/) |  |
| [ ] | **Super Ugly Number**<br>*Find the nth super ugly number (only divisible by given prime numbers) using min heap.* | Heap Operations | [🔗 Practice](https://leetcode.com/problems/super-ugly-number/) | ⭐ |
| [ ] | **Minimum Cost to Connect Sticks**<br>*Connect sticks with minimum cost where cost is the sum of stick lengths being connected using min heap.* | Greedy with Heap | [🔗 Practice](https://leetcode.com/problems/minimum-cost-to-connect-sticks/) |  |
| [ ] | **Task Scheduler**<br>*Arrange tasks with cooldown constraints to minimize idle time using greedy approach with a heap.* | Greedy with Heap | [🔗 Practice](https://leetcode.com/problems/task-scheduler/) | ⭐ |
| [ ] | **Furthest Building You Can Reach**<br>*Determine how far you can go with limited ladders and bricks using a min heap.* | Greedy with Heap | [🔗 Practice](https://leetcode.com/problems/furthest-building-you-can-reach/) | ⭐ |
| [ ] | **Kth Smallest Element in a Sorted Matrix**<br>*Find the kth smallest element in a sorted matrix using binary search or min heap.* | K-way Merge | [🔗 Practice](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/) |  |

### Hard (8 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Find Median from Data Stream**<br>*Design a data structure that supports adding integers and finding the median using two heaps.* | Two Heaps Pattern | [🔗 Practice](https://leetcode.com/problems/find-median-from-data-stream/) | ⭐ |
| [ ] | **Merge k Sorted Lists**<br>*Merge k sorted linked lists into one sorted list using a min-heap.* | K-way Merge | [🔗 Practice](https://leetcode.com/problems/merge-k-sorted-lists/) | ⭐ |
| [ ] | **Sliding Window Median**<br>*Find the median of all sliding windows of size k in an array using two heaps.* | Two Heaps Pattern | [🔗 Practice](https://leetcode.com/problems/sliding-window-median/) | ⭐ |
| [ ] | **Smallest Range Covering Elements from K Lists**<br>*Find the smallest range that includes at least one number from each sorted list using a min heap.* | K-way Merge | [🔗 Practice](https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/) |  |
| [ ] | **Rearrange String k Distance Apart**<br>*Rearrange a string such that the same characters are at least distance k from each other using a heap.* | Frequency Sort | [🔗 Practice](https://leetcode.com/problems/rearrange-string-k-distance-apart/) | ⭐ |
| [ ] | **The Skyline Problem**<br>*Find the skyline formed by buildings using a max heap or segment tree.* | Sweepline | [🔗 Practice](https://leetcode.com/problems/the-skyline-problem/) |  |
| [ ] | **Maximum Frequency Stack**<br>*Implement a stack that always pops the most frequent element using heap with timestamps.* | Frequency Stack | [🔗 Practice](https://leetcode.com/problems/maximum-frequency-stack/) |  |
| [ ] | **IPO**<br>*Find maximum capital after finishing k projects using two heaps.* | Two Heaps Pattern | [🔗 Practice](https://leetcode.com/problems/ipo/) |  |


---

<a id="hashing"></a>
## Hashing
**Total Questions:** 16 | 🟩 Easy: 7 | 🟨 Medium: 8 | 🟥 Hard: 1

### Easy (7 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Two Sum**<br>*Find two numbers in an array that add up to a target value.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/two-sum/) | ⭐ |
| [ ] | **Valid Anagram**<br>*Determine if a string is an anagram of another string.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/valid-anagram/) | ⭐ |
| [ ] | **Majority Element**<br>*Find the majority element that appears more than ⌊n/2⌋ times using Boyer-Moore voting algorithm.* | Boyer–Moore Voting (Majority) | [🔗 Practice](https://leetcode.com/problems/majority-element/) | ⭐ |
| [ ] | **First Unique Character in a String**<br>*Find the index of the first unique character in a string.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/first-unique-character-in-a-string/) | ⭐ |
| [ ] | **Design HashSet**<br>*Design a HashSet without using any built-in hash table libraries.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/design-hashset/) | ⭐ |
| [ ] | **Isomorphic Strings**<br>*Determine if two strings are isomorphic (characters can be replaced to get another string).* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/isomorphic-strings/) | ⭐ |
| [ ] | **Word Pattern**<br>*Determine if a pattern and a string match the same pattern.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/word-pattern/) | ⭐ |

### Medium (8 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Group Anagrams**<br>*Group an array of strings based on whether they are anagrams of one another.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/group-anagrams/) | ⭐ |
| [ ] | **LRU Cache**<br>*Design and implement a Least Recently Used (LRU) cache with O(1) operations.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/lru-cache/) | ⭐ |
| [ ] | **Majority Element II**<br>*Find all elements that appear more than ⌊n/3⌋ times using Boyer-Moore voting algorithm.* | Boyer–Moore Voting (Majority) | [🔗 Practice](https://leetcode.com/problems/majority-element-ii/) | ⭐ |
| [ ] | **4Sum II**<br>*Count tuples (i,j,k,l) such that A[i] + B[j] + C[k] + D[l] = 0 using hash maps.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/4sum-ii/) | ⭐ |
| [ ] | **Top K Frequent Elements**<br>*Find the k most frequent elements in an array using hash map and bucket sort.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/top-k-frequent-elements/) | ⭐ |
| [ ] | **Find All Anagrams in a String**<br>*Find all anagrams of a pattern in a given string.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/find-all-anagrams-in-a-string/) |  |
| [ ] | **Longest Substring Without Repeating Characters**<br>*Find the length of the longest substring without repeating characters.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/longest-substring-without-repeating-characters/) |  |
| [ ] | **Design HashMap**<br>*Design a HashMap without using any built-in hash table libraries.* | Hash Map / Set | [🔗 Practice](https://leetcode.com/problems/design-hashmap/) | ⭐ |

### Hard (1 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Minimum Window Substring**<br>*Find the minimum window in a string which contains all characters from another string.* | Sliding Window | [🔗 Practice](https://leetcode.com/problems/minimum-window-substring/) |  |


---

<a id="binary_tree"></a>
## Binary Tree
**Total Questions:** 34 | 🟩 Easy: 5 | 🟨 Medium: 24 | 🟥 Hard: 5

### Easy (5 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Maximum Depth of Binary Tree**<br>*Find the maximum depth (height) of a binary tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/maximum-depth-of-binary-tree/) | ⭐ |
| [ ] | **Invert Binary Tree**<br>*Invert a binary tree (mirror transformation).* | DFS | [🔗 Practice](https://leetcode.com/problems/invert-binary-tree/) | ⭐ |
| [ ] | **Symmetric Tree**<br>*Check if a binary tree is a mirror of itself.* | DFS | [🔗 Practice](https://leetcode.com/problems/symmetric-tree/) | ⭐ |
| [ ] | **Path Sum**<br>*Check if the tree has a root-to-leaf path with a specified sum.* | DFS | [🔗 Practice](https://leetcode.com/problems/path-sum/) | ⭐ |
| [ ] | **Diameter of Binary Tree**<br>*Find the length of the longest path between any two nodes in a binary tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/diameter-of-binary-tree/) | ⭐ |

### Medium (24 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Binary Tree Level Order Traversal**<br>*Return the level order traversal of a binary tree's values as an array.* | BFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-level-order-traversal/) | ⭐ |
| [ ] | **Construct Binary Tree from Preorder and Inorder Traversal**<br>*Build a binary tree from preorder and inorder traversal arrays.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) |  |
| [ ] | **Binary Tree Zigzag Level Order Traversal**<br>*Return the zigzag level order traversal of a binary tree's values.* | BFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/) | ⭐ |
| [ ] | **Binary Tree Right Side View**<br>*Return the values visible from the right side of a binary tree.* | BFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-right-side-view/) | ⭐ |
| [ ] | **Lowest Common Ancestor of a Binary Tree**<br>*Find the lowest common ancestor (LCA) of two given nodes in the tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/) | ⭐ |
| [ ] | **Count Complete Tree Nodes**<br>*Count the number of nodes in a complete binary tree.* | Binary Search | [🔗 Practice](https://leetcode.com/problems/count-complete-tree-nodes/) |  |
| [ ] | **Flatten Binary Tree to Linked List**<br>*Flatten a binary tree into a linked list in-place.* | DFS | [🔗 Practice](https://leetcode.com/problems/flatten-binary-tree-to-linked-list/) |  |
| [ ] | **Populating Next Right Pointers in Each Node**<br>*Populate each next pointer to point to its next right node.* | BFS | [🔗 Practice](https://leetcode.com/problems/populating-next-right-pointers-in-each-node/) | ⭐ |
| [ ] | **Sum Root to Leaf Numbers**<br>*Calculate the sum of all root-to-leaf paths in a binary tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/sum-root-to-leaf-numbers/) |  |
| [ ] | **Path Sum II**<br>*Find all root-to-leaf paths where the sum equals a given value.* | DFS | [🔗 Practice](https://leetcode.com/problems/path-sum-ii/) |  |
| [ ] | **Path Sum III**<br>*Find paths in binary tree that sum to a given value (not necessarily root-to-leaf).* | DFS | [🔗 Practice](https://leetcode.com/problems/path-sum-iii/) | ⭐ |
| [ ] | **Binary Tree Vertical Order Traversal**<br>*Return the vertical order traversal of a binary tree.* | BFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-vertical-order-traversal/) |  |
| [ ] | **Construct Binary Tree from Inorder and Postorder Traversal**<br>*Build a binary tree from inorder and postorder traversal arrays.* | Recursion / Divide & Conquer | [🔗 Practice](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/) |  |
| [ ] | **Find Duplicate Subtrees**<br>*Find all duplicate subtrees in a binary tree.* | Tree Traversal | [🔗 Practice](https://leetcode.com/problems/find-duplicate-subtrees/) | ⭐ |
| [ ] | **All Nodes Distance K in Binary Tree**<br>*Find all nodes at distance K from a given target node.* | BFS | [🔗 Practice](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/) |  |
| [ ] | **Maximum Width of Binary Tree**<br>*Compute the maximum width of a binary tree.* | BFS | [🔗 Practice](https://leetcode.com/problems/maximum-width-of-binary-tree/) | ⭐ |
| [ ] | **N-ary Tree Level Order Traversal**<br>*Level order traversal of an n-ary tree, returning values at each level.* | BFS | [🔗 Practice](https://leetcode.com/problems/n-ary-tree-level-order-traversal/) | ⭐ |
| [ ] | **Boundary of Binary Tree**<br>*Return the boundary of a binary tree, which is the concatenation of left boundary, leaves, and right boundary.* | Tree Traversal | [🔗 Practice](https://leetcode.com/problems/boundary-of-binary-tree/) |  |
| [ ] | **Binary Tree Coloring Game**<br>*Strategic node selection in a binary tree game to maximize score.* | DFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-coloring-game/) | ⭐ |
| [ ] | **Count Good Nodes in Binary Tree**<br>*Count nodes where the path from root has no larger value than the node.* | DFS | [🔗 Practice](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) | ⭐ |
| [ ] | **House Robber III**<br>*Find maximum amount to rob without alerting police in a binary tree structure.* | DP on Trees | [🔗 Practice](https://leetcode.com/problems/house-robber-iii/) | ⭐ |
| [ ] | **Binary Tree Pruning**<br>*Prune a binary tree removing all subtrees that don't contain a 1.* | DFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-pruning/) | ⭐ |
| [ ] | **Check Completeness of a Binary Tree**<br>*Determine if a binary tree is a complete binary tree.* | BFS | [🔗 Practice](https://leetcode.com/problems/check-completeness-of-a-binary-tree/) | ⭐ |
| [ ] | **Smallest String Starting From Leaf**<br>*Find lexicographically smallest string formed by a path from a leaf to root.* | DFS | [🔗 Practice](https://leetcode.com/problems/smallest-string-starting-from-leaf/) | ⭐ |

### Hard (5 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Serialize and Deserialize Binary Tree**<br>*Design an algorithm to serialize and deserialize a binary tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) | ⭐ |
| [ ] | **Binary Tree Maximum Path Sum**<br>*Find the maximum path sum between any two nodes in a binary tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-maximum-path-sum/) | ⭐ |
| [ ] | **Recover Binary Search Tree**<br>*Recover a BST where two nodes are swapped.* | Tree Traversal | [🔗 Practice](https://leetcode.com/problems/recover-binary-search-tree/) | ⭐ |
| [ ] | **Vertical Order Traversal of a Binary Tree**<br>*Return the vertical order traversal of the nodes' values with column and row ordering.* | Tree Traversal | [🔗 Practice](https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/) |  |
| [ ] | **Binary Tree Cameras**<br>*Place minimum number of cameras in a binary tree so that all nodes are monitored.* | DFS | [🔗 Practice](https://leetcode.com/problems/binary-tree-cameras/) |  |


---

<a id="binary_search_tree"></a>
## Binary Search Tree
**Total Questions:** 17 | 🟩 Easy: 4 | 🟨 Medium: 13 | 🟥 Hard: 0

### Easy (4 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Lowest Common Ancestor of a Binary Search Tree**<br>*Find the lowest common ancestor (LCA) of two nodes in a BST.* | BST Properties | [🔗 Practice](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | ⭐ |
| [ ] | **Convert Sorted Array to Binary Search Tree**<br>*Convert a sorted array into a height-balanced BST.* | BST Operations | [🔗 Practice](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/) |  |
| [ ] | **Range Sum of BST**<br>*Find the sum of values of all nodes with value between low and high.* | BST Properties | [🔗 Practice](https://leetcode.com/problems/range-sum-of-bst/) | ⭐ |
| [ ] | **Balanced Binary Tree**<br>*Determine if a binary tree is height-balanced (AVL property).* | Self-Balancing | [🔗 Practice](https://leetcode.com/problems/balanced-binary-tree/) |  |

### Medium (13 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Validate Binary Search Tree**<br>*Determine if a given binary tree is a valid BST.* | BST Properties | [🔗 Practice](https://leetcode.com/problems/validate-binary-search-tree/) | ⭐ |
| [ ] | **Kth Smallest Element in a BST**<br>*Find the kth smallest element in a BST using inorder traversal.* | BST Properties | [🔗 Practice](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) | ⭐ |
| [ ] | **Insert into a Binary Search Tree**<br>*Insert a new node into a binary search tree.* | BST Operations | [🔗 Practice](https://leetcode.com/problems/insert-into-a-binary-search-tree/) | ⭐ |
| [ ] | **Delete Node in a**<br>*BST Delete a node in a BST while maintaining BST properties.* | BST Operations | [🔗 Practice](https://leetcode.com/problems/delete-node-in-a-bst/) |  |
| [ ] | **Convert BST to Greater Tree**<br>*Transform each node's value to be the sum of all nodes greater than it.* | BST Properties | [🔗 Practice](https://leetcode.com/problems/convert-bst-to-greater-tree/) | ⭐ |
| [ ] | **Trim a Binary Search Tree**<br>*Trim a BST so that all elements are in a given range.* | BST Operations | [🔗 Practice](https://leetcode.com/problems/trim-a-binary-search-tree/) | ⭐ |
| [ ] | **Binary Search Tree Iterator**<br>*Implement a BST iterator with next() and hasNext() operations.* | Tree Traversal | [🔗 Practice](https://leetcode.com/problems/binary-search-tree-iterator/) |  |
| [ ] | **Unique Binary Search Trees**<br>*Count the number of structurally unique BSTs with n nodes.* | DP on BST | [🔗 Practice](https://leetcode.com/problems/unique-binary-search-trees/) | ⭐ |
| [ ] | **Unique Binary Search Trees II**<br>*Generate all structurally unique BSTs with n nodes.* | Recursion / DP | [🔗 Practice](https://leetcode.com/problems/unique-binary-search-trees-ii/) |  |
| [ ] | **Recover Binary Search Tree Restore a**<br>*BST where two nodes are swapped.* | BST Properties | [🔗 Practice](https://leetcode.com/problems/recover-binary-search-tree/) |  |
| [ ] | **Construct Binary Search Tree from Preorder Traversal**<br>*Build a BST from a preorder traversal array.* | BST Construction | [🔗 Practice](https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/) |  |
| [ ] | **Serialize and Deserialize BST**<br>*Design an algorithm to serialize and deserialize a BST (more efficient than general binary tree).* | BST Properties | [🔗 Practice](https://leetcode.com/problems/serialize-and-deserialize-bst/) | ⭐ |
| [ ] | **Convert Binary Search Tree to Sorted Doubly Linked List**<br>*Convert a BST into a circular doubly linked list in-place.* | BST Operations | [🔗 Practice](https://leetcode.com/problems/convert-binary-search-tree-to-sorted-doubly-linked-list/) |  |


---

<a id="advanced_trees"></a>
## Advanced Trees
**Total Questions:** 20 | 🟩 Easy: 0 | 🟨 Medium: 6 | 🟥 Hard: 14

### Medium (6 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Implement Trie (Prefix Tree)**<br>*Implement a trie data structure with insert, search, and startsWith operations.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/implement-trie-prefix-tree/) | ⭐ |
| [ ] | **Range Sum Query - Mutable**<br>*Implement range sum queries with mutable values using Segment Tree or Fenwick Tree.* | Segment Tree | [🔗 Practice](https://leetcode.com/problems/range-sum-query-mutable/) | ⭐ |
| [ ] | **Longest Word in Dictionary**<br>*Find the longest word that can be built one character at a time from dictionary.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/longest-word-in-dictionary/) | ⭐ |
| [ ] | **Design Add and Search Words Data Structure**<br>*Design a data structure that supports adding new words and finding if a string matches any previously added string.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/design-add-and-search-words-data-structure/) | ⭐ |
| [ ] | **Replace Words**<br>*Replace words in a sentence with their root from a dictionary using Trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/replace-words/) | ⭐ |
| [ ] | **Implement Magic Dictionary**<br>*Implement a dictionary that supports searching with one character replacement using Trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/implement-magic-dictionary/) | ⭐ |

### Hard (14 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Word Search II**<br>*Find all words in a board using a trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/word-search-ii/) | ⭐ |
| [ ] | **Count of Range Sum**<br>*Count the number of range sums that lie in a given range using Binary Indexed Tree.* | Fenwick Tree (BIT) | [🔗 Practice](https://leetcode.com/problems/count-of-range-sum/) | ⭐ |
| [ ] | **Palindrome Pairs**<br>*Find all pairs of words that form a palindrome when concatenated, optimally solved using Trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/palindrome-pairs/) | ⭐ |
| [ ] | **Stream of Characters**<br>*Design a data structure that supports querying the last characters of a stream for dictionary words.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/stream-of-characters/) | ⭐ |
| [ ] | **Word Squares**<br>*Find all word squares you can build from a given set of words using Trie.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/word-squares/) | ⭐ |
| [ ] | **A Range Module**<br>*Design a data structure to track ranges of numbers, efficiently implemented using Segment Tree.* | Segment Tree | [🔗 Practice](https://leetcode.com/problems/range-module/) | ⭐ |
| [ ] | **Falling Squares**<br>*Track heights after placing squares, optimally solved using Segment Tree.* | Segment Tree | [🔗 Practice](https://leetcode.com/problems/falling-squares/) | ⭐ |
| [ ] | **My Calendar III**<br>*Count maximum concurrent events using Segment Tree with lazy propagation.* | Segment Tree | [🔗 Practice](https://leetcode.com/problems/my-calendar-iii/) | ⭐ |
| [ ] | **Count of Smaller Numbers After Self**<br>*Count smaller elements after each element in an array using BST or Segment Tree.* | Self-Balancing BST | [🔗 Practice](https://leetcode.com/problems/count-of-smaller-numbers-after-self/) | ⭐ |
| [ ] | **Design a Data Structure for Managing Flight Bookings**<br>*Design a system to efficiently handle bookings with AVL Tree for balance.* | AVL Tree | [🔗 Practice](https://leetcode.com/problems/design-a-flight-booking-system/) | ⭐ |
| [ ] | **Design In-Memory File System**<br>*Design a file system that supports ls, mkdir, addContentToFile, and readContentFromFile operations.* | Tree Design | [🔗 Practice](https://leetcode.com/problems/design-in-memory-file-system/) | ⭐ |
| [ ] | **Prefix and Suffix Search**<br>*Design a data structure for searching words by prefix and suffix simultaneously.* | Trie / Prefix Tree | [🔗 Practice](https://leetcode.com/problems/prefix-and-suffix-search/) | ⭐ |
| [ ] | **Implement Interval Tree**<br>*Implement an interval tree data structure for efficient interval queries.* | Self-Balancing BST | [🔗 Practice](https://www.geeksforgeeks.org/interval-tree/) | ⭐ |
| [ ] | **Sliding Window Median**<br>*Find the median of all sliding window subsets using Self-Balancing BST.* | Self-Balancing BST | [🔗 Practice](https://leetcode.com/problems/sliding-window-median/) | ⭐ |


---

<a id="graph"></a>
## Graph
**Total Questions:** 49 | 🟩 Easy: 10 | 🟨 Medium: 30 | 🟥 Hard: 9

### Easy (10 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Find the Town Judge**<br>*Find the town judge who is trusted by everyone but trusts nobody.* | Graph Properties | [🔗 Practice](https://leetcode.com/problems/find-the-town-judge/) | ⭐ |
| [ ] | **Find Center of Star Graph**<br>*Find the center of a star graph.* | Graph Properties | [🔗 Practice](https://leetcode.com/problems/find-center-of-star-graph/) | ⭐ |
| [ ] | **Flood Fill**<br>*Perform a flood fill on an image represented by a 2D array.* | DFS | [🔗 Practice](https://leetcode.com/problems/flood-fill/) | ⭐ |
| [ ] | **Number of Provinces**<br>*Find the number of connected components in an undirected graph.* | DFS | [🔗 Practice](https://leetcode.com/problems/number-of-provinces/) | ⭐ |
| [ ] | **Keys and Rooms**<br>*Determine if you can enter all rooms starting from room 0.* | DFS | [🔗 Practice](https://leetcode.com/problems/keys-and-rooms/) | ⭐ |
| [ ] | **Minimum Depth of Binary Tree**<br>*Find the shortest path from the root to any leaf node.* | BFS | [🔗 Practice](https://leetcode.com/problems/minimum-depth-of-binary-tree/) | ⭐ |
| [ ] | **Employee Importance**<br>*Calculate the total importance value of an employee and all their subordinates.* | BFS | [🔗 Practice](https://leetcode.com/problems/employee-importance/) | ⭐ |
| [ ] | **Find If Path Exists in Graph**<br>*Determine if there is a valid path between two nodes.* | BFS | [🔗 Practice](https://leetcode.com/problems/find-if-path-exists-in-graph/) | ⭐ |
| [ ] | **Island Perimeter**<br>*Calculate the perimeter of an island in a grid.* | DFS | [🔗 Practice](https://leetcode.com/problems/island-perimeter/) | ⭐ |
| [ ] | **Verifying an Alien Dictionary**<br>*Check if words are sorted lexicographically by alien language.* | Topological Sort | [🔗 Practice](https://leetcode.com/problems/verifying-an-alien-dictionary/) | ⭐ |

### Medium (30 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Number of Islands**<br>*Count the number of islands in a 2D grid, where 1 is land and 0 is water.* | DFS | [🔗 Practice](https://leetcode.com/problems/number-of-islands/) | ⭐ |
| [ ] | **Clone Graph**<br>*Deep copy a connected undirected graph, returning a clone of the input node.* | DFS | [🔗 Practice](https://leetcode.com/problems/clone-graph/) |  |
| [ ] | **Pacific Atlantic Water Flow**<br>*Find cells where water can flow to both Pacific and Atlantic oceans.* | DFS | [🔗 Practice](https://leetcode.com/problems/pacific-atlantic-water-flow/) | ⭐ |
| [ ] | **Graph Valid Tree**<br>*Determine if an undirected graph is a valid tree.* | DFS | [🔗 Practice](https://leetcode.com/problems/graph-valid-tree/) |  |
| [ ] | **Course Schedule**<br>*Determine if it's possible to finish all courses given prerequisites (cycle detection).* | Topological Sort | [🔗 Practice](https://leetcode.com/problems/course-schedule/) | ⭐ |
| [ ] | **Course Schedule II**<br>*Return the ordering of courses to take to finish all courses.* | Topological Sort | [🔗 Practice](https://leetcode.com/problems/course-schedule-ii/) |  |
| [ ] | **Shortest Path in Binary Matrix**<br>*Find the shortest path from top-left to bottom-right in a binary matrix.* | BFS | [🔗 Practice](https://leetcode.com/problems/shortest-path-in-binary-matrix/) |  |
| [ ] | **Network Delay Time**<br>*Find the time it takes for all nodes to receive a signal from the source.* | Shortest Path (Dijkstra / 0-1 BFS) | [🔗 Practice](https://leetcode.com/problems/network-delay-time/) | ⭐ |
| [ ] | **Cheapest Flights Within K Stops**<br>*Find the cheapest price from src to dst with at most k stops.* | Shortest Path (Dijkstra / 0-1 BFS) | [🔗 Practice](https://leetcode.com/problems/cheapest-flights-within-k-stops/) |  |
| [ ] | **Path With Minimum Effort**<br>*Find the minimum effort path from top-left to bottom-right of a grid.* | Shortest Path (Dijkstra / 0-1 BFS) | [🔗 Practice](https://leetcode.com/problems/path-with-minimum-effort/) | ⭐ |
| [ ] | **Min Cost to Connect All Points**<br>*Connect all points with minimum cost using Manhattan distance.* | Minimum Spanning Tree (Kruskal / Prim) | [🔗 Practice](https://leetcode.com/problems/min-cost-to-connect-all-points/) |  |
| [ ] | **Number of Connected Components in an Undirected Graph**<br>*Count the number of connected components in an undirected graph.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/) |  |
| [ ] | **Redundant Connection**<br>*Find an edge that can be removed so that the graph is a tree.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/redundant-connection/) | ⭐ |
| [ ] | **Accounts**<br>*Merge Merge accounts that belong to the same person.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/accounts-merge/) |  |
| [ ] | **Evaluate Division**<br>*Evaluate equations and return results or -1.0 if impossible.* | DFS | [🔗 Practice](https://leetcode.com/problems/evaluate-division/) | ⭐ |
| [ ] | **Minimum Height Trees**<br>*Find all nodes that can be the root of a minimum height tree.* | Greedy | [🔗 Practice](https://leetcode.com/problems/minimum-height-trees/) | ⭐ |
| [ ] | **Find the City With the Smallest Number of Neighbors at a Threshold Distance**<br>*Find the city with the smallest number of reachable cities within threshold distance.* | Shortest Path (Dijkstra / 0-1 BFS) | [🔗 Practice](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/) | ⭐ |
| [ ] | **Is Graph Bipartite?**<br>*Determine if a graph can be colored with two colors with no adjacent nodes having the same color.* | BFS | [🔗 Practice](https://leetcode.com/problems/is-graph-bipartite/) | ⭐ |
| [ ] | **Parallel Courses**<br>*Find the minimum number of semesters needed to take all courses.* | Topological Sort | [🔗 Practice](https://leetcode.com/problems/parallel-courses/) | ⭐ |
| [ ] | **Surrounded Regions**<br>*Capture all regions surrounded by 'X' on a board by flipping 'O's to 'X's.* | DFS | [🔗 Practice](https://leetcode.com/problems/surrounded-regions/) | ⭐ |
| [ ] | **Number of Operations to Make Network Connected**<br>*Find the minimum number of operations to make all computers connected.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/number-of-operations-to-make-network-connected/) | ⭐ |
| [ ] | **Satisfiability of Equality Equations**<br>*Determine if a system of equations is satisfiable.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/satisfiability-of-equality-equations/) | ⭐ |
| [ ] | **Regions Cut By Slashes**<br>*Count the number of regions formed by slashes in a grid.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/regions-cut-by-slashes/) | ⭐ |
| [ ] | **Possible Bipartition**<br>*Determine if the nodes can be partitioned into two groups with no dislikes within a group.* | BFS | [🔗 Practice](https://leetcode.com/problems/possible-bipartition/) | ⭐ |
| [ ] | **Walls and Gates**<br>*Fill each empty room with the distance to the nearest gate.* | BFS | [🔗 Practice](https://leetcode.com/problems/walls-and-gates/) | ⭐ |
| [ ] | **Connecting Cities With Minimum Cost**<br>*Connect all cities with minimum cost.* | Minimum Spanning Tree (Kruskal / Prim) | [🔗 Practice](https://leetcode.com/problems/connecting-cities-with-minimum-cost/) | ⭐ |
| [ ] | **Find Eventual Safe States**<br>*Find all safe nodes in a directed graph.* | DFS | [🔗 Practice](https://leetcode.com/problems/find-eventual-safe-states/) | ⭐ |
| [ ] | **Shortest Path with Alternating Colors**<br>*Find shortest paths using alternating colored edges.* | BFS | [🔗 Practice](https://leetcode.com/problems/shortest-path-with-alternating-colors/) | ⭐ |
| [ ] | **Path With Maximum Probability**<br>*Find path with maximum probability of success.* | Shortest Path (Dijkstra / 0-1 BFS) | [🔗 Practice](https://leetcode.com/problems/path-with-maximum-probability/) | ⭐ |
| [ ] | **Open the Lock**<br>*Find minimum number of turns to open a combination lock.* | BFS | [🔗 Practice](https://leetcode.com/problems/open-the-lock/) | ⭐ |

### Hard (9 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Alien Dictionary**<br>*Derive the order of letters in an alien language from a dictionary.* | Topological Sort | [🔗 Practice](https://leetcode.com/problems/alien-dictionary/) | ⭐ |
| [ ] | **Word Ladder**<br>*Find the length of shortest transformation sequence from beginWord to endWord.* | BFS | [🔗 Practice](https://leetcode.com/problems/word-ladder/) |  |
| [ ] | **Word Ladder II**<br>*Find all shortest transformation sequences from beginWord to endWord.* | BFS | [🔗 Practice](https://leetcode.com/problems/word-ladder-ii/) | ⭐ |
| [ ] | **Optimize Water Distribution in a Village**<br>*Optimize the cost of building wells and laying pipes.* | Minimum Spanning Tree (Kruskal / Prim) | [🔗 Practice](https://leetcode.com/problems/optimize-water-distribution-in-a-village/) | ⭐ |
| [ ] | **Critical Connections in a Network**<br>*Find all critical connections in a network (bridges in graph).* | DFS | [🔗 Practice](https://leetcode.com/problems/critical-connections-in-a-network/) |  |
| [ ] | **Reconstruct Itinerary**<br>*Reconstruct flight itinerary from airport tickets in lexical order.* | Greedy | [🔗 Practice](https://leetcode.com/problems/reconstruct-itinerary/) | ⭐ |
| [ ] | **Largest Component Size by Common Factor**<br>*Find the size of the largest component in the graph where two integers are connected if they share a common factor > 1.* | Union-Find (DSU) | [🔗 Practice](https://leetcode.com/problems/largest-component-size-by-common-factor/) | ⭐ |
| [ ] | **Swim in Rising Water**<br>*Find the least time to reach the bottom right corner as water rises.* | Binary Search + DFS | [🔗 Practice](https://leetcode.com/problems/swim-in-rising-water/) | ⭐ |
| [ ] | **Reachable Nodes in Subdivided Graph**<br>*Find the maximum number of nodes that can be reached with limited moves.* | Dijkstra | [🔗 Practice](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/) | ⭐ |


---

<a id="dp"></a>
## DP (Dynamic Programming)
**Total Questions:** 62 | 🟩 Easy: 3 | 🟨 Medium: 30 | 🟥 Hard: 29

### Easy (3 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Climbing Stairs**<br>*Count the number of ways to climb to the top of n stairs.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/climbing-stairs/) | ⭐ |
| [ ] | **Maximum Subarray**<br>*Find the contiguous subarray with the largest sum.* | Kadane / Subarray | [🔗 Practice](https://leetcode.com/problems/maximum-subarray/) | ⭐ |
| [ ] | **Best Time to Buy and Sell Stock**<br>*Find the maximum profit from a single transaction.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/) | ⭐ |

### Medium (30 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **House Robber**<br>*Find the maximum amount of money you can rob without alerting the police.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/house-robber/) | ⭐ |
| [ ] | **House Robber II**<br>*Same as House Robber, but houses are arranged in a circle.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/house-robber-ii/) | ⭐ |
| [ ] | **Coin Change**<br>*Find the fewest number of coins that you need to make up a given amount.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/coin-change/) | ⭐ |
| [ ] | **Coin Change 2**<br>*Find the number of combinations that make up a given amount.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/coin-change-2/) | ⭐ |
| [ ] | **Longest Increasing Subsequence**<br>*Find the length of the longest strictly increasing subsequence.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/longest-increasing-subsequence/) | ⭐ |
| [ ] | **Longest Common Subsequence**<br>*Find the length of longest subsequence common to two sequences.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/longest-common-subsequence/) | ⭐ |
| [ ] | **Word Break**<br>*Determine if a string can be segmented into space-separated words from a dictionary.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/word-break/) | ⭐ |
| [ ] | **Unique Paths**<br>*Find the number of unique paths from top-left to bottom-right in a grid.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/unique-paths/) | ⭐ |
| [ ] | **Unique Paths II**<br>*Find the number of unique paths from top-left to bottom-right in a grid with obstacles.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/unique-paths-ii/) | ⭐ |
| [ ] | **Jump Game**<br>*Determine if you can reach the last index of an array.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/jump-game/) | ⭐ |
| [ ] | **Jump Game II**<br>*Find the minimum number of jumps to reach the last index.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/jump-game-ii/) | ⭐ |
| [ ] | **Edit Distance**<br>*Find the minimum number of operations to convert one string to another.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/edit-distance/) | ⭐ |
| [ ] | **Minimum Path Sum**<br>*Find a path from top-left to bottom-right with the minimum sum.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/minimum-path-sum/) | ⭐ |
| [ ] | **Decode Ways**<br>*Count the number of ways to decode a message.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/decode-ways/) | ⭐ |
| [ ] | **Palindrome Partitioning**<br>*Partition a string into palindromic substrings.* | DP on Intervals | [🔗 Practice](https://leetcode.com/problems/palindrome-partitioning/) |  |
| [ ] | **Partition Equal Subset Sum**<br>*Determine if an array can be partitioned into two equal sum subsets.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/partition-equal-subset-sum/) | ⭐ |
| [ ] | **Target Sum**<br>*Find the number of ways to assign + and - to make the sum equal to target.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/target-sum/) | ⭐ |
| [ ] | **Longest Palindromic Subsequence**<br>*Find the length of the longest palindromic subsequence.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/longest-palindromic-subsequence/) | ⭐ |
| [ ] | **Best Time to Buy and Sell Stock II**<br>*Find the maximum profit from multiple transactions.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/) | ⭐ |
| [ ] | **Best Time to Buy and Sell Stock with Cooldown**<br>*Find the maximum profit with a cooldown period.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/) | ⭐ |
| [ ] | **Longest Palindromic Substring**<br>*Find the longest palindromic substring in a string.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/longest-palindromic-substring/) | ⭐ |
| [ ] | **Minimum Cost Tree From Leaf Values**<br>*Given an array, create a tree with minimum non-leaf node sum.* | DP on Intervals | [🔗 Practice](https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/) | ⭐ |
| [ ] | **Minimum Falling Path Sum**<br>*Find the minimum sum of falling path through the matrix.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/minimum-falling-path-sum/) | ⭐ |
| [ ] | **Stone Game**<br>*Determine if Alex can win a game of picking stones.* | DP on Intervals | [🔗 Practice](https://leetcode.com/problems/stone-game/) |  |
| [ ] | **Bitwise ORs of Subarrays**<br>*Count the number of distinct results from bitwise OR of all subarrays.* | Bitmask DP | [🔗 Practice](https://leetcode.com/problems/bitwise-ors-of-subarrays/) |  |
| [ ] | **Partition to K Equal Sum Subsets**<br>*Determine if an array can be partitioned into k subsets with equal sum.* | Bitmask DP | [🔗 Practice](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) | ⭐ |
| [ ] | **Interleaving String**<br>*Determine if s3 is formed by interleaving s1 and s2.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/interleaving-string/) |  |
| [ ] | **Maximal Square**<br>*Find the largest square containing only 1's in a binary matrix.* | 2D DP | [🔗 Practice](https://leetcode.com/problems/maximal-square/) | ⭐ |
| [ ] | **Minimum ASCII Delete Sum for Two Strings**<br>*Find the lowest ASCII sum of deleted characters to make two strings equal.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/) | ⭐ |
| [ ] | **Out of Boundary Paths**<br>*Count the number of paths to move the ball out of grid boundary.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/out-of-boundary-paths/) |  |

### Hard (29 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Burst Balloons**<br>*Maximum coins you can collect by bursting balloons.* | DP on Intervals | [🔗 Practice](https://leetcode.com/problems/burst-balloons/) | ⭐ |
| [ ] | **Regular Expression Matching**<br>*Implement regular expression matching with support for '.' and '*'.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/regular-expression-matching/) | ⭐ |
| [ ] | **Maximum Sum of 3 Non-Overlapping Subarrays**<br>*Find three non-overlapping subarrays with maximum sum.* | Kadane / Subarray | [🔗 Practice](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/) | ⭐ |
| [ ] | **Minimum Insertion Steps to Make a String Palindrome**<br>*Find the minimum number of insertions to make a string palindrome.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/) | ⭐ |
| [ ] | **Profitable Schemes**<br>*Count the number of schemes with at least a given profit.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/profitable-schemes/) |  |
| [ ] | **Count Different Palindromic Subsequences**<br>*Count different palindromic subsequences in a string.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/count-different-palindromic-subsequences/) |  |
| [ ] | **Number of Ways to Form a Target String Given a Dictionary**<br>*Count ways to form target using characters at respective positions in dictionary.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/) |  |
| [ ] | **Russian Doll Envelopes**<br>*Find the maximum number of envelopes that can be nested inside each other.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/russian-doll-envelopes/) | ⭐ |
| [ ] | **Longest Valid Parentheses**<br>*Find the length of the longest valid parentheses substring.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/longest-valid-parentheses/) | ⭐ |
| [ ] | **Maximum Profit in Job Scheduling**<br>*Find the maximum profit from jobs with start time, end time, and profit.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | ⭐ |
| [ ] | **Distinct Subsequences**<br>*Count distinct subsequences that form a given string.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/distinct-subsequences/) | ⭐ |
| [ ] | **Number of Ways to Wear Different Hats to Each Other**<br>*Count ways for people to wear different hats.* | Bitmask DP | [🔗 Practice](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/) |  |
| [ ] | **Minimum Number of Taps to Open to Water a Garden**<br>*Find the minimum number of taps to water the entire garden.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/) | ⭐ |
| [ ] | **Count All Valid Pickup and Delivery Options**<br>*Count ways to pick up and deliver n orders.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/) |  |
| [ ] | **Wildcard Matching**<br>*Implement wildcard pattern matching with support for '?' and '*'.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/wildcard-matching/) | ⭐ |
| [ ] | **Palindrome Partitioning II**<br>*Find the minimum cuts needed to partition a string into palindromes.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/palindrome-partitioning-ii/) | ⭐ |
| [ ] | **Maximal Rectangle**<br>*Find the largest rectangle containing only 1's in a binary matrix.* | 2D DP | [🔗 Practice](https://leetcode.com/problems/maximal-rectangle/) | ⭐ |
| [ ] | **Dungeon Game**<br>*Calculate the minimum initial health needed to rescue the princess.* | 2D DP | [🔗 Practice](https://leetcode.com/problems/dungeon-game/) | ⭐ |
| [ ] | **Cherry Pickup**<br>*Collect maximum cherries in a grid by going there and back.* | 2D DP | [🔗 Practice](https://leetcode.com/problems/cherry-pickup/) |  |
| [ ] | **Frog Jump**<br>*Determine if the frog can cross the river by jumping on stones.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/frog-jump/) | ⭐ |
| [ ] | **Student Attendance Record II**<br>*Count the number of possible attendance records with constraints.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/student-attendance-record-ii/) |  |
| [ ] | **Freedom Trail**<br>*Find the minimum number of rotations to spell a word.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/freedom-trail/) |  |
| [ ] | **Minimum Cost to Merge Stones**<br>*Find the minimum cost to merge piles of stones.* | DP on Intervals | [🔗 Practice](https://leetcode.com/problems/minimum-cost-to-merge-stones/) |  |
| [ ] | **Best Time to Buy and Sell Stock III**<br>*Find the maximum profit with at most two transactions.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/) | ⭐ |
| [ ] | **Best Time to Buy and Sell Stock IV**<br>*Find the maximum profit with at most k transactions.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/) | ⭐ |
| [ ] | **Arithmetic Slices II - Subsequence**<br>*Count the number of arithmetic subsequences in an array.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/) |  |
| [ ] | **Super Egg Drop**<br>*Find the minimum number of moves to determine floor F.* | Dynamic Programming | [🔗 Practice](https://leetcode.com/problems/super-egg-drop/) | ⭐ |
| [ ] | **Scramble String**<br>*Determine if one string can become another through scrambling.* | DP on Strings | [🔗 Practice](https://leetcode.com/problems/scramble-string/) |  |
| [ ] | **Stickers to Spell Word**<br>*Find the minimum number of stickers needed to spell out a target word.* | Bitmask DP | [🔗 Practice](https://leetcode.com/problems/stickers-to-spell-word/) |  |


---

<a id="greedy"></a>
## Greedy Algorithms
**Total Questions:** 39 | 🟩 Easy: 6 | 🟨 Medium: 29 | 🟥 Hard: 4

### Easy (6 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Activity Selection**<br>*Select maximum number of activities that can be performed by a single person.* | Activity Selection | [🔗 Practice](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/) | ⭐ |
| [ ] | **Maximum Subarray**<br>*Find the contiguous subarray with the largest sum (Kadane's Algorithm).* | Array Traversal | [🔗 Practice](https://leetcode.com/problems/maximum-subarray/) | ⭐ |
| [ ] | **Lemonade Change**<br>*Determine if enough change can be made for customers buying lemonade.* | Coin Change | [🔗 Practice](https://leetcode.com/problems/lemonade-change/) |  |
| [ ] | **Maximum Units on a Truck**<br>*Maximize the total number of units on a truck with box constraints.* | Sorting | [🔗 Practice](https://leetcode.com/problems/maximum-units-on-a-truck/) |  |
| [ ] | **Assign Cookies**<br>*Maximize the number of content children with cookies.* | Sorting | [🔗 Practice](https://leetcode.com/problems/assign-cookies/) |  |
| [ ] | **Maximize Sum Of Array After K Negations**<br>*Apply K negations to maximize the sum of the array.* | Array Manipulation | [🔗 Practice](https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/) |  |

### Medium (29 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Job Sequencing Problem**<br>*Maximize profit by selecting jobs with deadlines and profits.* | Job Scheduling | [🔗 Practice](https://leetcode.com/problems/maximum-profit-in-job-scheduling/) | ⭐ |
| [ ] | **Gas Station**<br>*Find a starting gas station to complete a circular route.* | Circular Array | [🔗 Practice](https://leetcode.com/problems/gas-station/) | ⭐ |
| [ ] | **Jump Game**<br>*Determine if you can reach the last index in the array.* | Array Traversal | [🔗 Practice](https://leetcode.com/problems/jump-game/) | ⭐ |
| [ ] | **Fractional Knapsack Problem**<br>*Fill knapsack with items to maximize value with fractional items allowed.* | Knapsack | [🔗 Practice](https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1) | ⭐ |
| [ ] | **Minimum Number of Coins**<br>*Find the minimum number of coins needed to make change.* | Coin Change | [🔗 Practice](https://leetcode.com/problems/coin-change/) | ⭐ |
| [ ] | **Task Scheduler**<br>*Schedule tasks with cooldown constraints to minimize idle time.* | Scheduling | [🔗 Practice](https://leetcode.com/problems/task-scheduler/) | ⭐ |
| [ ] | **Meeting Rooms II**<br>*Find the minimum number of meeting rooms required.* | Interval Scheduling | [🔗 Practice](https://leetcode.com/problems/meeting-rooms-ii/) | ⭐ |
| [ ] | **Non-overlapping Intervals**<br>*Remove the minimum number of intervals to make the rest non-overlapping.* | Interval Scheduling | [🔗 Practice](https://leetcode.com/problems/non-overlapping-intervals/) | ⭐ |
| [ ] | **Minimum Platforms**<br>*Find minimum number of platforms required for a railway station.* | Interval Scheduling | [🔗 Practice](https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1) | ⭐ |
| [ ] | **Container With Most Water**<br>*Find two lines that together with the x-axis form a container that holds the most water.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/container-with-most-water/) | ⭐ |
| [ ] | **Minimum Cost to Connect Sticks**<br>*Connect sticks with minimum cost where cost is the sum of stick lengths being connected.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/minimum-cost-to-connect-sticks/) |  |
| [ ] | **Queue Reconstruction by Height**<br>*Reconstruct queue based on heights and number of people in front.* | Sorting | [🔗 Practice](https://leetcode.com/problems/queue-reconstruction-by-height/) |  |
| [ ] | **Minimum Deletions to Make Character Frequencies Unique**<br>*Delete minimum characters to make all character frequencies unique.* | String Manipulation | [🔗 Practice](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/) |  |
| [ ] | **Jump Game II**<br>*Find minimum number of jumps to reach the end of the array.* | Array Traversal | [🔗 Practice](https://leetcode.com/problems/jump-game-ii/) | ⭐ |
| [ ] | **Shortest Job**<br>*First (SJF) CPU Scheduling Schedule processes to minimize average waiting time.* | Scheduling | [🔗 Practice](https://www.geeksforgeeks.org/program-for-shortest-job-first-or-sjf-cpu-scheduling-set-1-non-preemptive/) |  |
| [ ] | **Smallest String With A Given Numeric Value**<br>*Create the lexicographically smallest string with a given numeric value.* | String Construction | [🔗 Practice](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/) |  |
| [ ] | **Partition Labels**<br>*Partition a string such that each letter appears in at most one part.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/partition-labels/) | ⭐ |
| [ ] | **Boats to Save People**<br>*Find the minimum number of boats to save all people with weight limit.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/boats-to-save-people/) |  |
| [ ] | **Score After Flipping Matrix**<br>*Maximize the score of a binary matrix by flipping rows and columns.* | Matrix Manipulation | [🔗 Practice](https://leetcode.com/problems/score-after-flipping-matrix/) |  |
| [ ] | **Reorganize String**<br>*Rearrange characters so no adjacent characters are the same.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/reorganize-string/) | ⭐ |
| [ ] | **Remove Duplicate Letters**<br>*Remove duplicate letters to form smallest lexicographical result.* | Stack | [🔗 Practice](https://leetcode.com/problems/remove-duplicate-letters/) |  |
| [ ] | **Minimum Add to Make Parentheses Valid**<br>*Find minimum number of parentheses to add to make a string valid.* | Stack | [🔗 Practice](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/) |  |
| [ ] | **Minimum Arrows to Burst Balloons**<br>*Find minimum number of arrows to burst all balloons.* | Interval Scheduling | [🔗 Practice](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/) | ⭐ |
| [ ] | **Break a Palindrome**<br>*Replace one character to make a palindrome into a non-palindrome with lexicographically smallest result.* | String Manipulation | [🔗 Practice](https://leetcode.com/problems/break-a-palindrome/) |  |
| [ ] | **Find the Most Competitive Subsequence**<br>*Find the most competitive (lexicographically smallest) subsequence of a specified length.* | Stack | [🔗 Practice](https://leetcode.com/problems/find-the-most-competitive-subsequence/) |  |
| [ ] | **Reduce Array Size to The Half**<br>*Find minimum number of distinct integers to remove to reduce array size by half.* | Frequency Counting | [🔗 Practice](https://leetcode.com/problems/reduce-array-size-to-the-half/) |  |
| [ ] | **Wiggle Subsequence**<br>*Find the length of the longest wiggle subsequence.* | Array Traversal | [🔗 Practice](https://leetcode.com/problems/wiggle-subsequence/) | ⭐ |
| [ ] | **Bag of Tokens**<br>*Maximize score by playing tokens optimally.* | Two Pointers | [🔗 Practice](https://leetcode.com/problems/bag-of-tokens/) |  |
| [ ] | **Split Array into Consecutive Subsequences**<br>*Determine if array can be split into consecutive subsequences of length at least 3.* | Hash Map | [🔗 Practice](https://leetcode.com/problems/split-array-into-consecutive-subsequences/) |  |

### Hard (4 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Candy**<br>*Distribute minimum candies to children based on ratings.* | Array Traversal | [🔗 Practice](https://leetcode.com/problems/candy/) |  |
| [ ] | **Huffman Coding**<br>*Implement Huffman coding for data compression.* | Priority Queue | [🔗 Practice](https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1) | ⭐ |
| [ ] | **Rearrange**<br>*String k Distance Apart Rearrange a string such that same characters are at least k distance apart.* | Priority Queue | [🔗 Practice](https://leetcode.com/problems/rearrange-string-k-distance-apart/) |  |
| [ ] | **Create Maximum Number**<br>*Create maximum number from two arrays with specific length constraints.* | Stack | [🔗 Practice](https://leetcode.com/problems/create-maximum-number/) |  |


---

<a id="backtracking"></a>
## Backtracking
**Total Questions:** 26 | 🟩 Easy: 0 | 🟨 Medium: 20 | 🟥 Hard: 6

### Medium (20 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **Subsets**<br>*Find all possible subsets (power set) of a given set.* | Combinations | [🔗 Practice](https://leetcode.com/problems/subsets/) | ⭐ |
| [ ] | **Permutations**<br>*Generate all possible permutations of an array of distinct integers.* | Permutations | [🔗 Practice](https://leetcode.com/problems/permutations/) | ⭐ |
| [ ] | **Combination Sum**<br>*Find all combinations of candidates that sum to a target.* | Combinations | [🔗 Practice](https://leetcode.com/problems/combination-sum/) | ⭐ |
| [ ] | **Word Search**<br>*Find if a word exists in a 2D board of characters.* | Grid Traversal | [🔗 Practice](https://leetcode.com/problems/word-search/) | ⭐ |
| [ ] | **Generate Parentheses**<br>*Generate all combinations of well-formed parentheses.* | String Generation | [🔗 Practice](https://leetcode.com/problems/generate-parentheses/) | ⭐ |
| [ ] | **Letter Combinations of a Phone Number**<br>*Return all possible letter combinations from a phone number.* | String Generation | [🔗 Practice](https://leetcode.com/problems/letter-combinations-of-a-phone-number/) | ⭐ |
| [ ] | **Palindrome Partitioning**<br>*Partition a string into substrings such that each is a palindrome.* | String Partitioning | [🔗 Practice](https://leetcode.com/problems/palindrome-partitioning/) | ⭐ |
| [ ] | **Restore IP Addresses**<br>*Restore all possible valid IP addresses from a string of digits.* | String Partitioning | [🔗 Practice](https://leetcode.com/problems/restore-ip-addresses/) |  |
| [ ] | **Subsets II**<br>*Find all possible subsets of a set with duplicates.* | Combinations | [🔗 Practice](https://leetcode.com/problems/subsets-ii/) |  |
| [ ] | **Permutations II**<br>*Generate all possible unique permutations of an array with duplicates.* | Permutations | [🔗 Practice](https://leetcode.com/problems/permutations-ii/) |  |
| [ ] | **Combination Sum II**<br>*Find all combinations where candidates sum to target, with no duplicates.* | Combinations | [🔗 Practice](https://leetcode.com/problems/combination-sum-ii/) |  |
| [ ] | **Combination Sum III**<br>*Find all combinations of k numbers that sum to n.* | Combinations | [🔗 Practice](https://leetcode.com/problems/combination-sum-iii/) |  |
| [ ] | **Rat in a Maze**<br>*Find paths for a rat to reach the destination in a maze.* | Grid Traversal | [🔗 Practice](https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1) |  |
| [ ] | **Path With Maximum Gold**<br>*Collect maximum amount of gold, starting from any cell.* | Grid Traversal | [🔗 Practice](https://leetcode.com/problems/path-with-maximum-gold/) |  |
| [ ] | **All Paths From Source to Target**<br>*Find all paths from source to target in a directed acyclic graph.* | Graph Traversal | [🔗 Practice](https://leetcode.com/problems/all-paths-from-source-to-target/) |  |
| [ ] | **Gray Code**<br>*Generate a sequence where adjacent numbers differ by one bit.* | Bit Manipulation | [🔗 Practice](https://leetcode.com/problems/gray-code/) |  |
| [ ] | **Partition to K Equal Sum Subsets**<br>*Determine if array can be partitioned into k subsets of equal sum.* | Partitioning | [🔗 Practice](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/) | ⭐ |
| [ ] | **Matchsticks to Square**<br>*Determine if matchsticks can form a square.* | Partitioning | [🔗 Practice](https://leetcode.com/problems/matchsticks-to-square/) |  |
| [ ] | **Beautiful Arrangement**<br>*Count the number of beautiful arrangements of integers.* | Permutations | [🔗 Practice](https://leetcode.com/problems/beautiful-arrangement/) |  |
| [ ] | **Different Ways to Add Parentheses**<br>*Compute all possible results from different ways to add parentheses.* | String Expression | [🔗 Practice](https://leetcode.com/problems/different-ways-to-add-parentheses/) |  |

### Hard (6 Questions)

| Status | Problem | Pattern | Resource | Key |
| :---: | :--- | :--- | :--- | :---: |
| [ ] | **N-Queens**<br>*Place N queens on an N×N chessboard so that no queens can attack each other.* | Board Configurations | [🔗 Practice](https://leetcode.com/problems/n-queens/) | ⭐ |
| [ ] | **Sudoku Solver**<br>*Solve a 9x9 Sudoku puzzle using backtracking.* | Board Configurations | [🔗 Practice](https://leetcode.com/problems/sudoku-solver/) | ⭐ |
| [ ] | **Word Break II**<br>*Find all possible ways to break a string into dictionary words.* | String Partitioning | [🔗 Practice](https://leetcode.com/problems/word-break-ii/) |  |
| [ ] | **Word Search II**<br>*Find all words from a dictionary in a 2D board of characters using Trie.* | Grid Traversal | [🔗 Practice](https://leetcode.com/problems/word-search-ii/) | ⭐ |
| [ ] | **Expression Add Operators**<br>*Add operators +, -, * to form a target number from a string of digits.* | String Expression | [🔗 Practice](https://leetcode.com/problems/expression-add-operators/) |  |
| [ ] | **The Knight's Tour Problem**<br>*Find a sequence of moves that allows a knight to visit every square exactly once.* | Grid Traversal | [🔗 Practice](https://www.geeksforgeeks.org/the-knights-tour-problem-backtracking-1/) |  |


---

