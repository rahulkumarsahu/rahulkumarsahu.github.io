---
title: A Production Minded Dockerfile for Java
date: 2026-08-22 09:00:00 +0530
description: Build a smaller, safer Java container image with a multi stage Dockerfile and sensible runtime defaults.
categories: [Cloud Native]
tags: [docker, java, dockerfile, cloud-native]
topic: cloud-native
series: docker
learningSection: docker-images-builds
difficulty: medium
contentType: concept
order: 2
---

A useful Dockerfile separates the build environment from the runtime image. The runtime should contain only what the application needs to start.

## Multi stage example

```dockerfile
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /workspace

COPY pom.xml .
RUN mvn -q -DskipTests dependency:go-offline

COPY src src
RUN mvn -q clean package

FROM eclipse-temurin:21-jre
WORKDIR /app

RUN useradd --system --uid 10001 appuser
COPY --from=build /workspace/target/*.jar application.jar

USER appuser
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/application.jar"]
```

## Why this structure helps

The Maven image and dependency cache stay in the build stage. The final image contains the Java runtime and application artifact, not the compiler or local repository.

Copying `pom.xml` before source code lets Docker reuse the dependency layer when only application code changes.

## Runtime considerations

* Send logs to standard output and standard error.
* Handle termination signals and allow graceful shutdown.
* Set memory requests and limits at deployment time.
* Use a fixed image digest or immutable version tag.
* Scan both dependencies and the final image.
* Keep secrets outside the image.

Health checks belong in the deployment platform when that platform already manages readiness and liveness.

## Next step

Once the image is reproducible, learn how Kubernetes manages replicas, rollout, networking, and configuration in [Kubernetes Workload Fundamentals](/posts/kubernetes-workload-fundamentals/).
