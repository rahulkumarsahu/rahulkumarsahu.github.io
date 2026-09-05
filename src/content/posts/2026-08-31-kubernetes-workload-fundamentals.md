---
title: Kubernetes Workload Fundamentals
date: 2026-08-22 09:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: Understand Pods, Deployments, Services, configuration, health checks, and resource settings as one workload.
categories: [Cloud Native]
tags: [kubernetes, cloud-native, deployment, containers]
topic: cloud-native
series: kubernetes
learningSection: kubernetes-workloads
difficulty: basics
contentType: concept
order: 10
---

Kubernetes manages desired state. You describe how an application should run, and controllers keep working to make the cluster match that description.

## Pod

A Pod is the smallest scheduling unit. Containers in the same Pod share networking and lifecycle. Most application Pods should be treated as replaceable.

## Deployment

A Deployment manages replicated stateless Pods and rolling updates. Change the Pod template, and the Deployment creates a new ReplicaSet and gradually replaces the old Pods.

## Service

A Service gives a stable network identity to a changing set of Pods. It selects Pods by labels.

## Configuration

ConfigMaps store ordinary configuration. Secrets store sensitive values, although encryption and access policy still need explicit cluster configuration.

## Health checks

Readiness decides whether a Pod should receive traffic. Liveness decides whether Kubernetes should restart the container. A startup probe protects slow starting applications from premature liveness failures.

## Resources

Requests help the scheduler place Pods. Limits constrain resource use. Incorrect values can cause poor utilization, throttling, eviction, or out of memory restarts.

## A workload checklist

* Does the container shut down gracefully?
* Is readiness based on the ability to serve traffic?
* Are requests based on observed usage?
* Can the application tolerate more than one replica?
* Is persistent state stored outside the Pod?
* Can a rollout be reversed safely?

The next learning step is to deploy one small service, inspect its events and logs, then deliberately break readiness, configuration, and resource settings to see how Kubernetes responds.
