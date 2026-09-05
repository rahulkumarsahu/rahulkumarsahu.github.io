---
title: SOLID Principles in Practical Java
date: 2026-08-22 09:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: Use SOLID as a set of design questions instead of a list of definitions to memorize.
categories: [Low Level Design]
tags: [lld, solid, java, object-oriented-design]
topic: lld
series: object-design
learningSection: solid-principles
difficulty: basics
contentType: concept
order: 3
---

SOLID is most useful when it helps us ask better questions during a design review.

## Single Responsibility

Ask whether a class contains decisions that change for different reasons. A report formatter and a report repository should usually be separate because presentation and storage evolve independently.

## Open Closed

Ask whether adding one expected variation requires editing a stable chain of conditions. A strategy interface can make a real variation explicit.

```java
public interface PricingRule {
    Money apply(Order order);
}
```

Do not create an interface for every class. Add an abstraction when there is a useful boundary or real variation.

## Liskov Substitution

Ask whether every implementation keeps the promises of the interface. A subtype should not surprise callers with stronger preconditions or weaker results.

## Interface Segregation

Ask whether a caller depends on methods it never uses. Smaller role based interfaces make dependencies clearer.

## Dependency Inversion

Ask whether business rules depend directly on infrastructure details. The core policy can depend on an interface while the database, queue, or HTTP client implements that boundary.

## Practical checklist

* Can I describe this class in one sentence without using the word and?
* Is this abstraction protecting a real variation?
* Can every implementation honor the same contract?
* Does each caller depend only on what it uses?
* Can business rules be tested without starting infrastructure?

The goal is not maximum abstraction. The goal is code whose important decisions are visible and whose expected changes stay local.
