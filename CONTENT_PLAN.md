# The System Design Atlas Content Plan

This plan keeps the first publishing cycle focused on DSA while allowing the other learning paths to grow steadily.

## Article standard

Every problem article should include the problem, a small example, intuition, the approach, a correct Java solution, complexity, common mistakes, and a useful next link.

Every concept article should include a mental model, a focused example, how it works, when to use it, tradeoffs, common mistakes, and a practical checklist.

Use the files in `content-templates/` when starting a new article.

## Phase 1: DSA foundations

1. Complexity analysis and constraint reading
2. Arrays basics and easy problems
3. Binary Search basics and boundary problems
4. Hashing, two pointers, and sliding windows
5. Linked lists
6. Stacks and queues
7. Recursion and backtracking
8. Trees and binary search trees
9. Heaps and priority queues
10. Graph traversal and shortest paths
11. Greedy patterns
12. Dynamic programming

## Next Array articles

1. Maximum consecutive ones
2. Single number with XOR
3. Highest and lowest frequency elements
4. Count frequencies in a fixed range
5. Boats to save people
6. Two Sum
7. Kadane's algorithm
8. Sort colors
9. Majority element
10. Merge intervals
11. Product of array except self
12. Trapping rain water

## Next Binary Search articles

1. First bad version
2. Transition point in a binary array
3. Minimum difference element
4. Search in a nearly sorted array
5. Row with maximum ones
6. Find k closest elements
7. Allocate books
8. Painter's partition
9. Wood cutting height
10. Aggressive cows
11. Heaters
12. Smallest divisor under a threshold

## Phase 2: Java, Spring Boot, and microservices

Publish Java language and collection foundations first, then concurrency and JVM basics. Follow with Spring Boot request handling, persistence, transactions, testing, security, and production readiness. Add microservice boundaries, communication, resilience, Spring Cloud, distributed data, and observability after the application foundations are stable.

## Phase 3: Low Level Design

Publish object design and SOLID first. Add one design pattern at a time with a small Java example. Then publish complete machine coding case studies.

## Phase 4: System Design

Publish requirements, estimation, storage, caching, messaging, reliability, and observability before adding larger case studies.

## Phase 5: Cloud Native

Publish Docker fundamentals and production images first. Continue with Kubernetes workloads, networking, configuration, health checks, resources, scaling, Helm, delivery, and operations.

## Curriculum directories

The complete section and subsection hierarchy lives in `src/data/learningPaths.ts`. Add every new article to the appropriate directory with the `learningSection` frontmatter field. This keeps topic pages, subsection pages, counts, search, and next article navigation consistent without maintaining separate lists.

## Suggested weekly rhythm

Publish two DSA problem articles and one concept article each week. Every second week, publish one article from Java, LLD, System Design, or Cloud Native. This keeps DSA as the main track without leaving the other sections empty.
