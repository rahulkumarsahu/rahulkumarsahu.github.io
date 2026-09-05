---
title: Docker and Container Fundamentals
date: 2026-08-22 09:00:00 +0530
lastReviewed: 2026-09-06 09:00:00 +0530
description: Understand images, containers, layers, processes, ports, and persistent data before writing Dockerfiles.
categories: [Cloud Native]
tags: [docker, containers, cloud-native, fundamentals]
topic: cloud-native
series: docker
learningSection: docker-foundations
difficulty: basics
contentType: concept
order: 1
---

A container is an isolated process that uses an image as its filesystem and startup configuration. It is not a small virtual machine.

## Image and container

An image is an immutable package. A container is a running instance of that image with a writable layer and runtime settings.

You can start many containers from the same image.

## Layers

Dockerfile instructions create reusable image layers. Put stable dependency steps before frequently changing application source so builds can reuse cached work.

## The main process

A container is normally tied to one main process. When that process exits, the container stops. Applications should handle termination signals so deployments can shut down cleanly.

## Ports

Listening inside a container does not automatically expose a service outside it. Port publishing maps a host port to the container port.

## Data

The writable container layer should be treated as temporary. Use volumes or external storage for data that must survive container replacement.

## A small Java Dockerfile

```dockerfile
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY target/application.jar application.jar
USER 10001
ENTRYPOINT ["java", "-jar", "application.jar"]
```

Production images should also consider a smaller runtime, ownership, health behavior, JVM container settings, and a reproducible build.

## Common mistakes

* Shipping build tools and source code in the runtime image
* Running the application as root without a reason
* Storing important data only inside the container
* Baking environment specific secrets into the image
* Using a large mutable latest tag as the deployment identity

Follow the [Cloud Native roadmap](/roadmaps/cloud-native/) for the next steps.
