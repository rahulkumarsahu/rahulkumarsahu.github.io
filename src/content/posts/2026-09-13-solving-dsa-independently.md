---
title: "Solved 200 DSA Problems, So Why Does the Next One Still Feel Impossible?"
date: 2026-09-13 09:00:00 +0530
lastReviewed: 2026-09-13 09:00:00 +0530
description: "A practical guide to escaping passive DSA study, recognizing algorithm patterns, debugging independently, and building a practice routine that lasts."
categories: [Data Structures and Algorithms]
tags: [dsa, problem-solving, algorithm-patterns, interview-preparation, learning]
topic: dsa
series: dsa-foundations
learningSection: complexity
difficulty: basics
contentType: concept
order: 1
mermaid: false
draft: false
personalNote:
  why: "I wrote this because completing more questions does not always make unfamiliar problems easier. The missing skill is often independent reasoning, not another playlist."
  surprise: "Tracking the help needed for each solution tells you more than the total number of accepted problems."
---

*A practical guide to escaping the playlist loop, recognizing problem signals, and learning to solve unfamiliar questions on your own.*

![A student moves from watching tutorials to independently solving a coding problem](/images/dsa/practice-guide/01-cover.png)

It’s 9 a.m. ☕

You open your laptop, play the next DSA video, and get your notebook ready.

The instructor explains the problem. You understand the approach. The code makes sense. You write everything down, tick a box on your sheet, and move to the next video.

Three videos later, it feels like a productive morning. ✅

Then you open a new LeetCode problem.

You read it once. Twice. You recognize the words *array*, *subarray*, and *maximum*. But the editor is still empty.

“Is this sliding window? Or dynamic programming? I’ve definitely seen something like this…” 😵‍💫

Twenty minutes later, you search for a solution. And halfway through the explanation, you think:

**“Oh! That’s so simple. Why didn’t I think of that?”**

If this sounds familiar, the next thing to examine is how you practice.

Watching someone solve a problem exercises a different skill from finding the approach yourself. And finding an approach is different from turning it into working code.

Let’s give each of those skills some actual practice. ✍️

## 1. 📺 Why the playlist loop feels so productive

Imagine trying to learn to ride a bicycle by watching someone cycle every morning. You could understand balance, braking, and steering perfectly—and still wobble the moment you get on a bike. 🚲

DSA has the same problem. A good explanation makes the reasoning easy to follow. Because it makes sense while you watch, you may assume you could produce it yourself.

But during the video, the instructor is doing several jobs for you:

- Interpreting the problem and its constraints.
- Choosing an approach and rejecting alternatives.
- Deciding what each variable represents.
- Translating the idea into code.
- Handling the awkward cases where the first version breaks.

Those are exactly the jobs you need practice doing.

A playlist can teach a new concept beautifully. The trouble starts when every difficult moment sends you straight back to the next explanation.

Here’s how that loop usually shows up:

| What we often do 😬 | What needs more practice | A better next step 🔧 |
|---|---|---|
| Keep searching for the “best” sheet | Spending time with actual problems | Choose one suitable resource and start using it |
| Watch a solution before attempting the question | Generating an approach | Write down your own observations first |
| Copy code after understanding the explanation | Implementation | Close the code and build your version |
| Give every wrong answer to AI | Debugging | Trace a failing example and find the first wrong step |
| Memorize ten sliding-window solutions in a row | Choosing a technique without a label | Follow topic practice with mixed, unlabeled questions |
| Collect pages of solution notes | Recalling and applying ideas | Keep short failure notes and re-solve the problem |
| Count completed questions | Checking independence | Track how much help you needed |

There’s a comforting thought behind a lot of this: *“Kuch toh kar raha hoon”—at least I’m doing something.*

Effort deserves a useful feedback loop. If your routine keeps producing the same difficulty, change the routine. You don’t have to finish another entire playlist before doing that.

![The watch, copy, tick, repeat loop with an exit toward independent practice](/images/dsa/practice-guide/02-1-why-the-playlist-loop-feels-so-productive.png)

## 2. 🪜 Know which skill you’re actually building

It helps to think of preparation in stages. You can move between them as you discover gaps.

**First, get comfortable with one language.** Learn to use loops, functions, arrays or lists, strings, maps, sets, and your language’s basic library tools. You should be able to express a simple idea without every line becoming a syntax search.

**Next, learn the foundations.** Understand the main data structures, basic algorithms, complexity, and a few classic problems. Playlists, books, and topic sheets are useful here. Learn what a tool does and why it works.

**Then, practice using those tools independently.** Mix topics, implement without a reference, debug your mistakes, and solve unfamiliar questions with a time limit. This is where you find out whether an idea is available to you when nobody tells you which chapter it belongs to.

**Go further into competitive programming if it fits your goal.** Harder contests and advanced topics can become a separate, rewarding pursuit. You don’t need to make an elite contest rating a requirement for every software job.

For interview preparation, a useful target is concrete: can you understand an unfamiliar problem, explain a sound approach, write the code, and check it within the available time? 🎯

![Learning stages from language basics through independent practice and optional advanced contests](/images/dsa/practice-guide/03-2-know-which-skill-you-re-actually-building.png)

## 3. ✍️ What to do when you open a problem

Let’s replace “read, get stuck, watch video” with a routine you can actually follow.

### Read until you can explain the task in your own words 🔎

Before choosing an algorithm, answer these questions:

- What is the input, and what exactly must I return?
- Am I returning a count, an index, a value, a path, or every possible result?
- Must the elements be contiguous? Does their order matter?
- Can there be duplicates, negative numbers, or empty input?
- How large can the input be?

The constraints are part of the problem. An approach that works for 20 elements may be unusable for 200,000. Sorting might help with one question and destroy information you need in another.

### Put a first idea on paper—even a slow one 📝

Draw the array. Trace a small tree. List a few possible choices.

Start with a straightforward solution if you can. Then ask where it repeats work.

“For every number, I scan the entire array for its partner.”

That observation gives you a useful next question: could you remember the numbers you’ve already seen?

You now have a reason to consider a hash map.

### Give yourself a real attempt ⏳

Around **20–30 focused minutes** is a useful starting point before seeking help. During that time, create something: an example, a brute-force approach, a possible invariant, or a counterexample to your idea.

Staring at the screen for an hour is different from testing and improving an approach for an hour.

Keep the timer flexible. If you are learning a concept for the first time, you may need a lesson before meaningful practice is possible. If you are making progress, continuing can be worthwhile. During a timed mock interview, use the interview’s actual limit.

The timer helps you notice unproductive loops. It doesn’t decide whether you are capable of solving the question.

### If you’re stuck, take the smallest useful piece of help 💡

Try a hint or the first part of a written editorial. Pause as soon as you have a new direction.

If the approach still doesn’t make sense, walk through an example or discuss it with a friend. A video can help too—especially when you know the exact part you want explained.

Before moving on, finish this sentence:

**“I missed this approach because I didn’t notice ______.”**

That answer is much more useful than “This problem was hard.”

### Write the code yourself, then debug it 🛠️

Understanding an explanation is your cue to attempt implementation. Keep the reference code closed while you work out the variables, loop conditions, updates, and return value.

When your version fails, find a small example that exposes the mistake. Write the expected result. Trace your variables, step by step, until your program’s behavior first differs from your intention.

Maybe the idea is right and a boundary is wrong. Maybe your code is faithful to an approach that doesn’t actually work. Learning to distinguish those cases is part of becoming a stronger programmer.

### Close the solution and check what stayed with you 🔁

Explain why the approach works, give its time and space complexity, and note the missed insight. Revisit the problem later without the reference.

If you can only reproduce the code immediately after reading it, mark it for another attempt. You’re still learning it, and that is useful information.

![Six-step practice flow: read, sketch, try, take a small hint, code and debug, then revisit](/images/dsa/practice-guide/04-close-the-solution-and-check-what-stayed-with-you.png)

## 4. 🤖 Give your brain the first turn

There’s a very tempting routine now: paste the problem into AI, read the explanation, paste your code when it fails, and submit the repaired version.

You get an accepted answer. But which decisions did you practice making?

For independent attempts, keep AI and tutorials closed. First reason on paper, write your own code, and investigate your own failures.

After that, ask for help that leaves some work for you:

- “Give me one hint without naming the algorithm.”
- “What question should I ask about my brute-force approach?”
- “Ask me a question about what should remain true as my loop runs.”
- “Explain this syntax feature with a different example.”

Try explaining your approach to a study partner, too. Saying “then I just move the pointer” out loud often reveals the missing question: **why is that move safe?** 🗣️

Keep timed assessments free of outside help, and follow the platform’s rules. Afterwards, use your mistakes to choose what to study next.

![A student attempts a problem first while a helpful robot waits with a hint](/images/dsa/practice-guide/05-4-give-your-brain-the-first-turn.png)

## 5. 🧩 How patterns help you face unfamiliar problems

You don’t need to treat thousands of LeetCode problems as thousands of unrelated tricks.

Many problems reuse a smaller collection of ideas: remember what you’ve seen, maintain a useful window, discard impossible candidates, explore connected states, or reuse answers to smaller subproblems.

Patterns give you a starting point. To use them well, look for **signals and the reason they matter**.

Consider “find a pair with a target sum.” If the array is sorted, moving a pointer can change the sum predictably. That gives two pointers a justification. In an unsorted array, a hash map may be a more useful first candidate.

Likewise, “minimum” doesn’t automatically mean binary search, and “subarray” doesn’t automatically mean sliding window.

For every question, connect three things:

**What is given? → Which concept fits, and why? → What must I adapt to produce the required output?**

The guides below bring several overlapping pattern lists together. There are eighteen practical families here. Fast-and-slow pointers live inside two pointers, frequency counting lives inside hash maps, and the main tree traversal orders live inside BFS and DFS. Keeping related ideas together makes the list easier to learn without hiding any important technique.

This is a starting toolkit. Some problems combine techniques; others require ideas beyond this list. There’s no reliable promise that memorizing a fixed number of patterns unlocks a fixed number of questions.

![Connect problem clues to an explanation of why an approach works, then adapt the idea](/images/dsa/practice-guide/06-5-how-patterns-help-you-face-unfamiliar-problems.png)

### 1) 🗺️ Hash maps and sets: remember useful information

**When to use it:** Use a hash map or set when you need fast membership checks, duplicate detection, frequency counting, grouping, or information about values you have already visited.

In **Two Sum**, each number tells you the partner you need. A map can remember previously seen values and their indices, saving a repeated scan. A set is useful when you only need to know whether something exists.

Practice with **Two Sum**, **Contains Duplicate**, **Group Anagrams**, and **Longest Consecutive Sequence**.

Ask yourself: “What should I store—existence, a count, an index, or a group?” Hash operations are typically expected or average O(1); that isn’t an unconditional worst-case guarantee.

![Use a hash map to remember useful values and find a missing complement](/images/dsa/practice-guide/07-1-hash-maps-and-sets-remember-useful-information.png)

### 2) 👈👉 Two pointers: move with a reason

**When to use it:** Use two pointers when movement from one or both ends helps remove impossible choices, when you need an in-place scan, or when two traversal speeds reveal a cycle or middle point.

In a sorted two-sum problem, a sum that is too small tells you to move the left pointer right. Explain why that move safely rules out candidates before memorizing the loop.

Practice with **Two Sum II**, **3Sum**, **Move Zeroes**, **Container With Most Water**, and **Linked List Cycle**.

Two pointers don’t always require sorted input. Opposite ends, scan-and-write boundaries, and slow-and-fast pointers are different forms of the idea, each with its own reasoning.

![Two pointers move inward through a sorted array, with a second example of slow and fast traversal](/images/dsa/practice-guide/08-2-two-pointers-move-with-a-reason.png)

### 3) 🪟 Sliding window: maintain a contiguous range

**When to use it:** Use a sliding window when the answer comes from a contiguous range and you can update that range efficiently as its left or right boundary moves.

A fixed window can add the incoming element and remove the outgoing one. A variable window needs a rule for when to expand or shrink. For the longest substring without repeated characters, you can shrink until the duplicate conflict is gone.

Practice with **Maximum Average Subarray I**, **Longest Substring Without Repeating Characters**, **Longest Repeating Character Replacement**, and **Minimum Window Substring**.

Be careful with the signal “subarray.” Negative values, for example, can break the usual sum-based rule that expanding increases the sum and shrinking decreases it. You may need a different approach.

![A highlighted contiguous window expands on the right and removes elements from the left when needed](/images/dsa/practice-guide/09-3-sliding-window-maintain-a-contiguous-range.png)

### 4) 🔍 Binary search: discard a provably wrong region

**When to use it:** Use binary search when the data is ordered, or when possible answers have a monotonic rule where one side is definitely valid and the other side is definitely invalid.

In **Koko Eating Bananas**, if a speed is sufficient, every greater speed is sufficient too. That one-way change in feasibility makes it possible to search for the first valid speed.

First understand ordinary binary search and boundary searches such as `bisect_left` and `bisect_right`. Then try **Search in Rotated Sorted Array**, **Search a 2D Matrix**, **Koko Eating Bananas**, and **Capacity to Ship Packages Within D Days**.

For rotated arrays, identify which portion is sorted before discarding a half. For answer-space problems, explain the monotonic condition. A min/max request or a cheap checking function alone isn’t enough.

![Binary search checks midpoint 4, discards candidates 1 through 4, and keeps feasible candidates 5 through 8](/images/dsa/practice-guide/10-4-binary-search-discard-a-provably-wrong-region.png)

### 5) ➕ Prefix sums: turn a range into a difference

**When to use it:** Use prefix sums when you need many range totals or need to relate a subarray to totals seen earlier, especially when negative values make a normal sliding window unreliable.

Let `P[0] = 0`, and let `P[i + 1]` be the sum through array index `i`. Then the inclusive range from `l` to `r` has sum `P[r + 1] - P[l]`.

Practice with **Find Pivot Index**, **Range Sum Query – Immutable**, and **Subarray Sum Equals K**.

For the last problem, count how many earlier prefix sums equal `currentSum - K`. You need a frequency map to count all matches, including repeated prefix sums. Initialize the empty prefix with frequency one, and count matches before recording the current prefix.

![Prefix sums for the array 2, 3, 1 show that the last two values sum to 6 minus 2, or 4](/images/dsa/practice-guide/11-5-prefix-sums-turn-a-range-into-a-difference.png)

### 6) 📚 Monotonic stacks: keep useful candidates in order

**When to use it:** Use a monotonic stack when unresolved elements are waiting for the next greater or smaller value, or when a problem asks for spans and boundaries controlled by height or order.

In **Daily Temperatures**, unresolved days wait in a stack. A warmer day can answer several of them, so they are removed as their answers become known.

Practice with **Next Greater Element I**, **Daily Temperatures**, and later **Largest Rectangle in Histogram**.

Define what your stack stores and whether its values increase or decrease. Each index is pushed and popped at most once in the standard linear-time form. Monotonic stacks are a separate technique from prefix sums, even though both often appear in array problems.

![An incoming temperature of 74 resolves stack entries 71 and 73 while 75 remains](/images/dsa/practice-guide/12-6-monotonic-stacks-keep-useful-candidates-in-order.png)

### 7) 🌳 BFS and DFS: explore structure systematically

**When to use it:** Use BFS or DFS when you need to explore a tree, graph, grid, connected component, reachable state, or a specific tree-processing order.

**BFS** uses a queue and explores level by level. It finds shortest paths by number of edges in unweighted or equal-weight graphs. **DFS** explores one branch before returning, using recursion or an explicit stack.

On a binary tree, DFS also gives you three useful processing orders: **preorder** visits root-left-right, **inorder** visits left-root-right, and **postorder** visits left-right-root. The order is part of the solution. Inorder traversal of a valid binary search tree, for example, produces values in sorted order.

Practice with **Binary Tree Level Order Traversal**, **Binary Tree Inorder Traversal**, **Maximum Depth of Binary Tree**, **Number of Islands**, and **Word Ladder**.

For grids, use the neighbor rules given by the problem; four-direction movement is common, but not universal. In graphs, track visited states appropriately. Directed cycle detection with DFS requires distinguishing nodes still on the active path from nodes whose exploration has finished.

![The same binary tree explored level by level with BFS and down a branch with DFS](/images/dsa/practice-guide/13-7-bfs-and-dfs-explore-structure-systematically.png)

### 8) 🌱 Backtracking: build choices, explore, undo

**When to use it:** Use backtracking when you must generate or test many possible choices, such as subsets, combinations, permutations, paths, or arrangements with constraints.

Build a partial answer, make a choice, explore it, then undo the choice before trying another branch. Subsets often involve include-or-skip decisions; permutations require tracking which elements have already been used.

Practice with **Subsets**, **Combinations**, **Permutations**, and **Combination Sum**.

Some results can also be built iteratively, level by level. The central skill is defining valid choices and avoiding unwanted duplicates. “Count all ways” may call for DP instead of explicitly generating every result. When you do need every subset or permutation, the output itself can be very large.

![A choose-and-skip decision tree generates all four subsets of the elements 1 and 2](/images/dsa/practice-guide/14-8-backtracking-build-choices-explore-undo.png)

### 9) 🗓️ Topological sort: respect dependencies

**When to use it:** Use topological sort when directed dependencies create a required order, such as courses, builds, jobs, or tasks that must happen before other tasks.

Model a prerequisite as a directed edge toward the task that depends on it. One approach repeatedly processes nodes with zero remaining prerequisites, then reduces the prerequisite counts of their dependents.

Practice with **Course Schedule** and **Course Schedule II**.

A complete topological ordering exists only for a directed acyclic graph. If this process handles fewer nodes than the graph contains, some dependencies form a cycle. That makes the technique useful both for finding an order and checking whether an order is possible.

![Prerequisite arrows order basics, intermediate work, and a project, with a cycle shown as invalid](/images/dsa/practice-guide/15-9-topological-sort-respect-dependencies.png)

### 10) 💾 Dynamic programming: define the state before the cache

**When to use it:** Use dynamic programming when the same smaller states repeat and the problem asks for a count, possibility, minimum, maximum, or best sequence of choices.

Start by explaining what one state means, which smaller states determine it, and where the process stops. Then store results with top-down memoization or compute them in a bottom-up order.

Practice with **Climbing Stairs**, **House Robber**, **Coin Change**, and **Longest Common Subsequence**.

“Store what you computed” is the caching step. The difficult part is choosing a state that contains enough information and deriving a correct recurrence. A useful self-check is: “If two calls have this same state, do they always have the same answer?”

![Repeated dynamic-programming states reuse one saved answer](/images/dsa/practice-guide/16-10-dynamic-programming-define-the-state-before-the-cache.png)

### 11) ⛰️ Heaps: keep the next priority available

**When to use it:** Use a heap when you repeatedly need the current smallest or largest item, must process changing priorities, or only need to keep the best K candidates.

To find the kth largest value, maintain a min-heap containing the K largest values seen so far. Once you have K values, its smallest value is the current kth largest. The heap uses O(K) space, and each update only works with those K candidates.

Practice with **Kth Largest Element in an Array**, **Top K Frequent Elements**, and **Last Stone Weight**.

For a binary heap, inspecting the top is O(1); inserting or removing the top is O(log n). Top-K wording suggests a heap, but sorting, quickselect, or frequency buckets may fit better depending on the task.

![A min-heap keeps the largest three values as an incoming 8 replaces the old minimum 4](/images/dsa/practice-guide/17-11-heaps-keep-the-next-priority-available.png)

### 12) 🔄 Linked-list reversal: change links without losing the rest

**When to use it:** Use linked-list reversal when links must change direction for a whole list, a sub-list, fixed-size groups, reordering, or a constant-space palindrome check.

The core move uses three references: `previous`, `current`, and `next`. Save `next` before changing `current.next`; otherwise, you can lose access to the unprocessed part of the list. Then reverse one link and advance both working references.

Practice with **Reverse Linked List**, **Reverse Linked List II**, **Swap Nodes in Pairs**, **Reverse Nodes in K-Group**, and **Palindrome Linked List**.

Before coding a partial reversal, draw the boundaries. Decide which node comes before the reversed segment, which node becomes its tail, and where that tail reconnects. Most bugs in this pattern are connection mistakes rather than reversal mistakes.

![Linked-list reversal uses previous, current, and next pointers without losing the remaining nodes](/images/dsa/practice-guide/24-12-linked-list-reversal-change-links-without-losing-the-rest.png)

### 13) 🧮 Bit manipulation: work with binary properties directly

**When to use it:** Use bit manipulation when binary properties directly represent the task, such as finding one unique value, testing powers of two, counting set bits, building masks, or storing on/off states compactly.

Useful identities include `x ^ x = 0`, `x ^ 0 = x`, and `n & (n - 1)`, which clears the lowest set bit. These properties can remove the need for extra storage, but only when the problem’s structure matches the identity.

Practice with **Single Number**, **Number of 1 Bits**, **Counting Bits**, **Power of Two**, and **Missing Number**.

Write small numbers in binary while learning. Also check how your language handles signed integers and right shifts; bit operations are precise, so assumptions about representation matter.

![Bit manipulation uses XOR cancellation, clearing the lowest set bit, and bitmasks](/images/dsa/practice-guide/25-13-bit-manipulation-work-with-binary-properties-directly.png)

### 14) 📅 Overlapping intervals: sort, compare, and merge ranges

**When to use it:** Use the interval pattern when the input represents ranges in time or space and you need to merge them, find conflicts, insert a range, count overlap, or select compatible ranges.

Sorting by start time places possible overlaps next to each other. For closed intervals, the next interval overlaps the current merged interval when its start is less than or equal to the current end. Then you extend the end to the larger endpoint.

Practice with **Merge Intervals**, **Insert Interval**, **Non-overlapping Intervals**, **Interval List Intersections**, and **Meeting Rooms II**.

Clarify whether touching endpoints count as overlap. `[1, 3]` and `[3, 5]` overlap when endpoints are inclusive, but scheduling problems may treat an event ending at 3 and another starting at 3 as compatible.

![Sorted overlapping intervals merge into a smaller set of non-overlapping ranges](/images/dsa/practice-guide/26-14-overlapping-intervals-sort-compare-and-merge-ranges.png)

### 15) 🛣️ Shortest paths: match the algorithm to the edge costs

**When to use it:** Use a shortest-path algorithm when the problem asks for the minimum number of steps, distance, time, risk, or cost needed to travel through a graph.

Choose the method from the edge weights. BFS handles unweighted or equal-weight edges. **Dijkstra’s algorithm** uses a priority queue and works when edge weights are non-negative. **Bellman–Ford** can handle negative edges and can reveal a reachable negative cycle. Problems with only 0 and 1 weights may support **0–1 BFS**.

Practice with **Network Delay Time**, **Path With Minimum Effort**, **Path With Maximum Probability**, and **Cheapest Flights Within K Stops**.

Define the state carefully. In a stop-limited route, reaching the same city with a different number of stops may represent a different state. A familiar algorithm name doesn’t remove the need to model the problem correctly.

![Choose a shortest-path algorithm based on whether graph edges are unweighted, zero-one, non-negative, or negative](/images/dsa/practice-guide/27-15-shortest-paths-match-the-algorithm-to-edge-costs.png)

### 16) 🧱 Matrix traversal: turn cells into graph nodes

**When to use it:** Use matrix traversal when cells behave like connected nodes, such as islands, regions, maze paths, flood fill, spreading processes, or movement under neighbour rules.

Treat each valid cell as a node and the allowed moves as edges. Check row and column boundaries, test whether the next cell is allowed, and mark visited cells at the right time. Use DFS for exploration or BFS when levels, spreading time, or an unweighted shortest path matter.

Practice with **Number of Islands**, **Flood Fill**, **Rotting Oranges**, **Surrounded Regions**, and **Pacific Atlantic Water Flow**.

Don’t assume movement is always up, down, left, and right. A problem may allow diagonals, knight moves, wrapping, or movement only when values satisfy a condition. Write the direction rules from the statement before writing the traversal.

![Matrix traversal treats valid cells as graph nodes explored with BFS or DFS](/images/dsa/practice-guide/28-16-matrix-traversal-turn-cells-into-graph-nodes.png)

### 17) 🔤 Tries: share prefixes across many words

**When to use it:** Use a trie when prefixes are central to the problem, especially for autocomplete, prefix lookup, dictionary search, word games, or many repeated prefix queries.

A trie stores one character per edge. Words with the same prefix share the same path, and an end marker distinguishes a complete word from a prefix. Searching takes time proportional to the query length, apart from the cost of accessing each child.

Practice with **Implement Trie**, **Design Add and Search Words Data Structure**, **Replace Words**, and **Word Search II**.

A trie is not automatically the best choice for every string lookup. A hash set is often simpler for exact-word membership. Reach for a trie when shared prefixes or prefix queries are central enough to justify the extra memory and implementation work.

![A trie shares the prefix ca across car, cart, and cat while marking complete words](/images/dsa/practice-guide/29-17-tries-share-prefixes-across-many-words.png)

### 18) 🎯 Greedy: make a local choice you can prove is safe

**When to use it:** Use a greedy approach when one locally best choice can be proved safe and never needs to be undone, often in scheduling, interval selection, reaching a target, or minimizing resources.

A greedy solution commits to a local choice without revisiting earlier decisions. The real pattern is the proof: show that an optimal solution can use your choice, often through an exchange argument, or show that your maintained state summarizes everything the future needs.

Practice with **Jump Game**, **Gas Station**, **Non-overlapping Intervals**, **Partition Labels**, and **Task Scheduler**.

Sorting or using a heap may help implement a greedy rule, but those tools don’t prove the rule. Try to construct a counterexample. If a locally attractive choice can block a better future result, you may need dynamic programming, backtracking, or a different greedy criterion.

![A greedy interval strategy repeatedly chooses the earliest-finishing compatible activity and checks why the choice is safe](/images/dsa/practice-guide/30-18-greedy-make-a-local-choice-you-can-prove-is-safe.png)

These families give you directions to investigate. Your goal is to recognize a possibility and explain its conditions, then adapt it to the actual problem in front of you.

## 6. 🏋️ How to practice a pattern until you can use it yourself

Suppose you’ve decided to learn sliding window. Opening ten solutions from the sliding-window section still tells your brain the answer to the first question: which technique should I try?

Topic practice is useful. It just needs a next step.

**Start with the mechanism.** Learn how the window’s state changes when you add or remove an element. Trace a small example by hand. Write the basic version yourself, and explain what remains true after each move.

**Try a small set of related problems.** A fixed-size window, a longest-valid-window problem, and a smallest-valid-window problem can reveal different uses of the same tool. These are examples of variety, not a compulsory question count.

**Compare your decisions.** When did you shrink? When did you update the answer? What state did you maintain? Did the question ask for exactly K distinct values or at most K? Those details change the solution.

**Then hide the labels.** Mix a window problem with a prefix-sum problem and a two-pointer problem. Before coding, explain which approach you think fits and why the alternatives might fail.

**Return later.** Re-solve a problem without your notes, then attempt an unfamiliar variation. If you need help again, identify what was missing and practice that part.

This is the transition you’re looking for:

**“I can follow sliding window” → “I can implement it” → “I can decide when it applies.”** 🌱

A reasonable learning order is language basics and complexity, then arrays and strings with hashing, two pointers, sliding windows, prefix sums, binary search, intervals, and basic bit operations. Build comfort with linked lists, stacks, queues, and recursion before going deeper into trees, matrix and graph traversal, backtracking, heaps, tries, dependencies, shortest paths, greedy reasoning, and DP.

Adjust that order to your gaps. If recursion is the obstacle, work on recursion. Another advanced problem won’t repair a foundation you haven’t understood yet.

![Pattern practice progresses through learning, variations, hiding topic labels, and later review](/images/dsa/practice-guide/18-6-how-to-practice-a-pattern-until-you-can-use-it-yourself.png)

## 7. 📓 Keep failure notes you’ll actually use

You don’t need to transcribe every explanation into a second textbook.

Brief concept notes can help, especially when a definition or invariant is easy to forget. But rereading a polished solution doesn’t tell you whether you can produce it yourself.

A failure note records the part that needs another attempt: the missed clue, faulty assumption, implementation gap, or debugging mistake.

For example:

| Field | Example failure note |
|---|---|
| Problem | Subarray Sum Equals K — LeetCode 560 |
| What I tried | A sum-based sliding window |
| Where it broke | With negative values, moving a boundary didn’t change the sum in the direction I expected |
| Signal I missed | This asks for an exact subarray-sum count, and earlier prefix sums can help |
| Key insight | Count earlier prefixes equal to `currentSum - K` |
| Implementation detail | Store frequencies; include the empty prefix; count matches before inserting the current prefix |
| Example to trace | `[1, -1, 1]`, with `K = 1`, has three matching subarrays |
| Next attempt | Derive the prefix relationship and implement without the solution |

That note tells you what to do next time. “Revise prefix sums” is much less specific.

Give attempts honest labels such as **independent**, **after a hint**, **after studying the approach**, or **needs another attempt**. All of them can represent useful learning. They tell you different things about readiness.

Revisit difficult questions after a gap. The next day, later that week, and a few weeks later can be a starting rhythm, but let recall guide you. If a problem is easy to reproduce and explain, spend more attention elsewhere.

When you return to preparation after a break, open this failure list first. You’ll have a record of the places where you previously needed help. Pair a challenging revisit with a more familiar problem if that helps you get going. 🔁

![A blank failure-note template with fields for the problem, attempt, missed clue, reasoning, and retry](/images/dsa/practice-guide/19-7-keep-failure-notes-you-ll-actually-use.png)

## 8. ⏱️ Use mixed practice and contests as feedback

During topic practice, the chapter gives you a clue. During an interview, the question usually arrives without that helpful label.

That is why you need sessions where you choose the technique yourself.

Once you have enough foundations to attempt some questions meaningfully, add beginner contests, virtual contests, or timed mixed sets. You don’t have to finish a giant sheet first.

Try writing your approach before coding, working within a limit, and building your own test cases. Contests and platforms differ in what feedback they provide; use the conditions of your target assessment when you run a mock.

Afterwards, take the result apart:

| What happened? | What to practice next |
|---|---|
| I didn’t know a required concept | Learn the concept, then attempt a suitable introductory problem |
| I knew the tool but didn’t recognize it | Compare the clues with related problems, then try mixed practice |
| I had an idea but couldn’t express it in code | Work through state, control flow, and implementation from scratch |
| My code failed on boundaries or unusual input | Build small counterexamples and trace variables |
| I chose an approach that was too slow | Connect input limits to complexity and examine repeated work |
| I ran out of time | Review where the time went and practice that specific bottleneck |

Then **upsolve**: return to an unsolved problem after the timed session, study only what you need, and complete an implementation yourself.

If you read an editorial, pay attention to its reasoning and proof. Ask why a pointer move is safe, why a greedy choice works, or why the DP state contains enough information.

A disappointing contest can still produce a useful study plan. Your score is one piece of feedback; the reason behind each missed problem is what makes it actionable. 📈

![Review missed clues, coding gaps, and time spent after timed mixed practice](/images/dsa/practice-guide/20-8-use-mixed-practice-and-contests-as-feedback.png)

## 9. 🗓️ Build a routine that fits your actual life

Some days you have classes, office work, a commute, or very little energy left. A routine should help you return to practice under those conditions.

Choose sessions you can repeat. You might use this sequence across a week, or spread it across longer if that is what your schedule allows:

| Session | Focus |
|---|---|
| 1 | Learn or revisit one concept; dry-run and implement it |
| 2 | Attempt a related problem independently; debug your code |
| 3 | Try a variation and compare what changed |
| 4 | Solve a timed mixed set or enter an appropriate contest |
| 5 | Review the result, upsolve a missed question, and revisit a failure note |

For a typical study session, reserve time for your attempt, implementation, debugging, and a short review. Don’t let the entire session disappear into the explanation before you touch the keyboard.

On a short day, trace a failed example or reimplement an algorithm you’re revising. On a longer day, give an unfamiliar problem a full attempt. One carefully studied question can be a useful session.

Track signs of progress that match the skill you want:

- Can I explain why the approach fits before writing code?
- Can I implement it with less reference material?
- Can I find the cause of a wrong answer myself?
- Can I solve a related question after a gap?
- Can I choose an approach when the topic label is hidden?

Count problems if it helps you organize your work. Just keep the independence and quality of those attempts visible too. ✅

![A flexible weekly planner balances learning, attempts, variations, timed practice, and review](/images/dsa/practice-guide/21-9-build-a-routine-that-fits-your-actual-life.png)


## 10. 🌅 Tomorrow morning, change the first thing you do

Remember that morning we started with? The coffee, the playlist, the carefully written notes, and the empty editor afterwards?

Tomorrow, open a suitable problem before opening its solution.

Read it. Sketch an example. Write a slow approach if that is what you have. Notice where the work repeats. Try to improve one part.

If you get stuck, name the thing you don’t understand. Take a hint. Put it away and continue. When your code fails, investigate it. Write down the lesson you want to remember.

You might finish one problem. You might discover a concept that needs more work. Either result gives you something concrete to build on.

Over time, “I’ve seen this solution” can become “I know what to try, and I can explain why.”

That’s a much more useful thing to bring into your next unfamiliar question. 🚀

![A student begins the next morning with one honest independent attempt and a corrected mistake](/images/dsa/practice-guide/23-11-tomorrow-morning-change-the-first-thing-you-do.png)

---
