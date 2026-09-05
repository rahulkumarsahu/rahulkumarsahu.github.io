---
title: Object Oriented Design Fundamentals
date: 2024-01-12 03:00:00 +0530
updated: 2026-08-22 12:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: Understand objects, responsibilities, encapsulation, composition, and polymorphism through practical Java examples.
categories: [Low Level Design]
tags: [java, oop, object-oriented-design, lld]
topic: lld
series: object-design
learningSection: object-oriented-design
difficulty: basics
contentType: concept
order: 1
---

Object oriented design is a way to organize code around responsibilities and collaboration. Classes and objects are tools. The real goal is to keep each part of a system understandable and safe to change.

## Class and object

A class defines data and behavior. An object is one concrete instance of that class.

```java
public final class BankAccount {
    private long balanceInPaise;

    public BankAccount(long openingBalanceInPaise) {
        if (openingBalanceInPaise < 0) {
            throw new IllegalArgumentException("Balance cannot be negative");
        }
        this.balanceInPaise = openingBalanceInPaise;
    }

    public void deposit(long amountInPaise) {
        if (amountInPaise <= 0) {
            throw new IllegalArgumentException("Deposit must be positive");
        }
        balanceInPaise += amountInPaise;
    }

    public long balanceInPaise() {
        return balanceInPaise;
    }
}
```

The object protects its own rules. Other code cannot directly set the balance to an invalid value.

## Four ideas worth understanding

### Encapsulation

Keep data and the rules that protect it together. Expose operations rather than raw internal state.

### Abstraction

Give callers a small interface that describes what they can do without exposing every implementation detail.

### Polymorphism

Depend on a shared contract so different implementations can be used without changing the caller.

### Composition

Build behavior by combining small objects. Composition is often easier to change than a deep inheritance hierarchy.

## Cohesion and coupling

A cohesive class has one clear reason to change. Loosely coupled classes know as little as possible about each other.

These two qualities are more useful during design than trying to force every noun into a class.

## Common mistakes

* Creating data classes with no behavior and putting every rule in one service
* Using inheritance only to reuse code
* Adding interfaces before there is a real variation point
* Exposing mutable collections directly
* Mixing persistence, business rules, and presentation in the same class

## Next step

Continue with [SOLID Principles in Practical Java](/posts/solid-principles-practical-java/) and the [Low Level Design roadmap](/roadmaps/lld/).
