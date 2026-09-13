---
title: "Stop Guessing What to Study: The System Design Interview Roadmap"
date: 2026-09-13 09:00:00 +0530
lastReviewed: 2026-09-13 09:00:00 +0530
description: "A structured system design interview roadmap covering requirements, scale, data, caching, distributed systems, reliability, security, and practice."
categories: [System Design]
tags: [system-design, roadmap, distributed-systems, scalability, reliability, interview-preparation]
topic: system-design
series: system-design-foundations
learningSection: system-design-foundations
difficulty: basics
contentType: concept
order: 1
mermaid: false
draft: false
personalNote:
  why: "I wanted one roadmap that connects system design topics through decisions instead of treating architecture diagrams as facts to memorize."
  surprise: "A design with fewer components is often stronger when every component answers a clear requirement or failure mode."
---

![A confused candidate drawing random system components beside a candidate following a clear system design interview process](/images/system-design/roadmap/01-system-design-cover.png)

---

## 👋 Meet Arjun, the Collector of Architecture Diagrams

Arjun had prepared for system design for three months.

He had watched videos about databases. He had saved diagrams of Netflix, Uber, WhatsApp, YouTube, Instagram and every other product that appeared in his feed. His notebook contained all the famous words: **load balancer, Redis, Kafka, sharding, CDN, microservices**. 📚

Then the interviewer said:

> “Let us design a ticket-booking system.”

Arjun smiled, drew a user, added a load balancer, placed ten microservices in the middle, attached a cache and a database, and waited for appreciation. 😌

Instead, the interviewer asked:

- “Can two people reserve the same seat?”
- “What happens when payment succeeds but confirmation fails?”
- “Which data can be stale?”
- “What is your busiest operation?”
- “What breaks during a popular concert sale?”
- “How will you recover?”

The diagram had many boxes. The design had no decisions.

That is the trap this roadmap fixes. You do not need to memorise 50 finished architectures. You need a **small set of reusable system-design topics**, a repeatable interview approach, and enough practice to connect them under pressure. 🧠✨

---

## 📌 How to Use This Roadmap

This article is a **map**, not a concept course.

For every topic, you will get:

1. 🌳 A tree of what to study.
2. 🎯 The decisions you must be ready to discuss.
3. 🎤 Interview questions grouped by experience.
4. 🎨 A notebook-style visual that keeps the topic map easy to remember.

When a term is new, use the resource section to learn it. Then return here, draw its tree from memory, and answer the questions aloud.

> **Experience bands are guides, not universal company rules.** Job titles and expectations vary. Use the highest band that matches the role you are targeting.

---

## 🤔 What Is System Design?

System design is the skill of turning an unclear product idea into a technical plan that can handle its users, data, failures, growth, security and daily operation.

In an interview, the final diagram is only one part of the conversation. The interviewer is watching how you:

- clarify an incomplete problem;
- choose what matters most;
- make assumptions visible;
- compare reasonable options;
- follow data through the system;
- notice failure cases;
- adjust when requirements change;
- communicate like someone others can build with. 🧩

### HLD, LLD and specialised design

| Interview type | Scope to prepare |
|---|---|
| **High-Level Design (HLD)** | Services, data stores, APIs, request paths, scaling, reliability, multi-region, security and operations |
| **Low-Level Design (LLD)** | Objects, interfaces, state transitions, patterns, concurrency, extensibility and testability |
| **Specialised design** | Data platforms, infrastructure, mobile, frontend, security, ML systems or domain-specific architecture |

This roadmap focuses on **high-level backend and distributed system design**. 🏗️

![System design interview map showing HLD, LLD and specialised design topics](/images/system-design/roadmap/02-system-design-interviews.png)

---

## 🚀 Why Should You Learn System Design?

At first, Arjun learned system design because interviews demanded it. Later, he realised the same skill appeared whenever his team asked:

- “Will this API survive ten times more traffic?”
- “Can we release this migration without downtime?”
- “Why did one slow dependency bring down the whole service?”
- “Can another region take over?”
- “How much will this architecture cost?”

System design helps you move from **writing one component** to **understanding the whole journey of a request**. It is useful for interviews, but it also trains the judgment expected as your ownership grows. 🌱➡️🌳

For interview preparation, it gives you four advantages:

- 🧭 **Direction:** you stop collecting random tools and learn connected topics.
- 🗣️ **Communication:** you practise explaining decisions while drawing.
- 🛡️ **Failure awareness:** you learn to design beyond the happy path.
- 📈 **Level readiness:** you can add depth that matches junior, mid-level, senior or staff expectations.

---

## 😵 The Mistakes That Make Preparation Feel Endless

Arjun was not lazy. His method was the problem.

### 1. Collecting tools instead of learning decisions 🧰

Knowing the names of Redis, Kafka and Cassandra does not tell you when they belong in a design. Study the decision around a tool: workload, constraint, alternative, trade-off, failure mode and operational cost.

### 2. Memorising finished diagrams 🖼️

A memorised Instagram design collapses when the interviewer changes one requirement. Practise building from requirements and access patterns, then compare your result with a reference design.

### 3. Starting with boxes before asking questions 📦

“Design a chat app” could mean direct messages, huge groups, end-to-end encryption, search, attachments or all of them. The first few questions decide the architecture.

### 4. Adding every fashionable component 🍲

Microservices, queues, caches and search clusters are not decoration. Every extra box creates new data ownership, failure, monitoring and deployment questions.

### 5. Ignoring rough numbers 🔢

Without traffic, payload, storage and latency estimates, every design looks equally reasonable. Practise fast, rounded calculations that influence a decision.

### 6. Designing only the happy path 🌈

The interview becomes interesting when a cache fails, a message repeats, a region disconnects, a hot key appears or a migration goes wrong.

### 7. Saying “it depends” and stopping there 🤷

Strong candidates name what it depends on, choose an assumption, make a decision and explain what would change that decision.

### 8. Studying silently 🤐

Reading creates recognition. Interviews require recall, drawing, listening and speaking at the same time. Record yourself and run timed mocks.

### 9. Copying case studies too early 🧠

Company architectures are useful after you understand the patterns inside them. Otherwise, you remember unusual solutions without understanding the constraints that produced them.

### 10. Preparing at the wrong depth 🎚️

A new graduate does not need to lead with global consensus. A staff candidate cannot stop after adding a load balancer and a replica. Match depth to the role, then stretch one band higher.

![Ten common system design preparation mistakes shown as obstacles on a learning path](/images/system-design/roadmap/03-why-system-design-prep-fails.png)

---

## ✅ The Proper Way to Learn System Design

Arjun restarted with one rule:

> **Learn a small topic, connect it to a decision, test it with failure, and explain it aloud.**

Use this loop for every roadmap section:

1. **Map it 🌳** — Copy the topic tree and mark unfamiliar terms.
2. **Learn it 📖** — Use one primary resource and one practical explanation.
3. **Compare it ⚖️** — Make a small table of two or three options.
4. **Place it 🧱** — Add the topic to one simple product design.
5. **Break it 💥** — Ask what happens under overload, partial failure and bad data.
6. **Observe it 🔭** — Name the signals that reveal whether it works.
7. **Explain it 🎙️** — Speak for five minutes without notes.
8. **Revisit it 🔁** — Review after 1 day, 1 week and 1 month.

### Keep a decision notebook 📓

Use one page per decision:

```text
Requirement:
Important constraint:
Options considered:
Choice:
Trade-off accepted:
Likely failure:
Signal to watch:
What would make me change the choice:
```

Do not write pages of definitions. Your notebook should help you make and defend decisions.

### Use case studies correctly 🔍

For each practice system:

1. Solve it alone.
2. Record your assumptions.
3. Compare with two reference designs.
4. List decisions you missed.
5. Redesign one requirement.
6. Repeat the same problem after a week.

![System design learning loop from mapping and learning through failure testing, explanation and revision](/images/system-design/roadmap/04-system-design-learning-loop.png)

---

## 🎤 How to Approach a System Design Interview

When the interviewer gives you a broad prompt, do not race toward the database. Guide the conversation in seven stages.

### A practical 45-minute route ⏱️

| Time | Your goal | Questions to ask yourself |
|---|---|---|
| **0–5 min** | Clarify scope | Who uses it? What can they do? What is out of scope? What matters most? |
| **5–10 min** | Set scale and quality targets | How many users and requests? Read/write mix? Payload size? Latency? Availability? Consistency? Retention? |
| **10–15 min** | Define contracts and data | What are the main APIs/events? What are the core entities? What are the access patterns? |
| **15–25 min** | Draw the end-to-end design | Where does a request enter? Who owns each step? Where is data stored? Which work is asynchronous? |
| **25–35 min** | Deep-dive into risky areas | What is the hardest requirement? Where are hotspots, races, duplicates or stale data dangerous? |
| **35–42 min** | Cover failure and operation | What fails? How does it recover? What is monitored? How is it deployed, secured and restored? |
| **42–45 min** | Recap and evolve | Which trade-offs did you choose? What changes at 10× scale or in a second region? |

### Your whiteboard should tell one story 🧵

Keep these visible:

- Functional requirements
- Non-functional priorities
- Assumptions and estimates
- Main data model
- API or event contracts
- Request and data flow
- Important trade-offs
- Failure paths
- Metrics and recovery

### Use checkpoints with the interviewer 🤝

Ask short questions throughout:

- “Is this scope aligned with what you want to explore?”
- “Would you like me to go deeper into data consistency or the delivery path?”
- “I am assuming reads dominate writes; should we change that?”
- “I have covered the happy path. May I test failures next?”

![A 45-minute system design interview timeline with seven stages and interviewer checkpoints](/images/system-design/roadmap/05-45-minute-interview.png)

---

## 🧑‍💻 What Changes With Experience?

Years alone do not determine level, but they help you choose practice depth.

| Experience guide | Interview focus |
|---|---|
| **0–2 years — Foundation** 🌱 | Clear requirements, simple end-to-end flow, basic APIs/data, common components, clear communication |
| **2–5 years — Independent engineer** 🛠️ | Estimates, data ownership, cache/queue choices, common failures, observability, justified trade-offs |
| **5–8 years — Senior** 🧭 | Ambiguity, invariants, hotspots, multi-region, migrations, recovery, security, cost and operational ownership |
| **8+ years — Staff/Principal** 🏛️ | System evolution, organisational boundaries, platform choices, multi-year migration, governance, risk, cost and cross-team impact |

### Questions every level should practise

#### 🌱 0–2 years

- What are the three most important requirements?
- What are the main API calls and data entities?
- Can you explain one request from client to storage and back?
- Which part would you build first?

#### 🛠️ 2–5 years

- Which estimate changed your architecture?
- Where would you cache, queue or partition, and why?
- What happens when a dependency is slow or unavailable?
- Which metrics would you put on the first dashboard?

#### 🧭 5–8 years

- What invariant must never be violated?
- How does the design behave during a regional failure?
- How would you migrate from today’s system without downtime?
- Which decision has the greatest operational or cost risk?

#### 🏛️ 8+ years

- Which capabilities belong on a shared platform and which belong to product teams?
- How would you evolve this architecture across three years and several teams?
- Where would you deliberately accept a limit instead of adding complexity?
- How would you review, govern and measure this design after launch?

---

## 🗺️ The Complete Interview Roadmap

![Complete system design interview roadmap from request journey to product patterns and mock interviews](/images/system-design/roadmap/06-complete-roadmap.png)

### 💡 In simple words—and why it matters

This is the order in which the whole subject should come together. Start with how a request travels, then learn scale, data, speed, background work and architecture before moving into distributed failures and production concerns. The order matters because later topics depend on earlier decisions; jumping directly to multi-region design often creates memorised words without a clear reason for using them.

---

## PART I — BUILD THE COMPONENT MAP 🧱

## 🌐 1. Networking, Request Flow and API Contracts

![Networking and API interview map covering request flow, communication styles, API contracts and boundaries](/images/system-design/roadmap/07-networking-api-map.png)

### 💡 In simple words—and why it matters

This section is about the complete journey of a request: how it reaches your system, how two parts communicate, and what promise the API makes to its users. It matters because every system-design answer begins with requests moving between clients and services. If this path is unclear, the rest of the diagram becomes a collection of disconnected boxes.

### 🎯 Interview focus

- Trace a request from device to service and back.
- Choose synchronous, streaming or callback communication.
- Define APIs before drawing internal services.
- Include pagination, retry safety and version evolution.
- Mark authentication, rate limiting and observability boundaries.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- What APIs would you expose for a URL shortener?
- When would you choose WebSocket instead of request-response HTTP?
- How would a client paginate a very large feed?
- What happens between entering a URL and receiving a response?

#### 🛠️ 2–5 years

- How would you make a create-order API safe when clients retry?
- Where would you place an API gateway, and what responsibilities would it own?
- How would you evolve an API used by old mobile clients?
- How would you protect a slow downstream service from too many requests?

#### 🧭 5–8 years

- How would you design an API contract across teams that deploy independently?
- How would you handle cancellation, deadlines and retries across a call chain?
- How would you design regional request routing for data-residency rules?
- Which failures can make an apparently idempotent API unsafe?

#### 🏛️ 8+ years

- How would you set API governance without blocking delivery across hundreds of services?
- Which communication standards would you support on a company platform, and why?
- How would you migrate a large public API to a new contract over several years?
- How would you measure whether an API platform is reducing or increasing organisational complexity?

---

## 📈 2. Capacity, Scaling and Traffic Distribution

![Scale and traffic interview map covering estimation, compute scaling, traffic distribution and pressure points](/images/system-design/roadmap/08-scale-traffic-map.png)

### 💡 In simple words—and why it matters

This section helps you decide how large the system must be and how traffic should be shared when one machine is no longer enough. It matters because interviewers want decisions connected to numbers. A design for one request per second should not look the same as a design for one million requests per second.

### 🎯 Interview focus

- Use rounded estimates that lead to a design decision.
- Separate average traffic from peak and burst traffic.
- Identify the first likely bottleneck.
- Select health checks and routing policy.
- Plan scaling signals, warm capacity, overload behaviour and cost.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- How would you estimate daily storage for a photo-sharing app?
- What changes when one server is no longer enough?
- Why might a stateless service be easier to scale?
- Which basic health signal would a load balancer need?

#### 🛠️ 2–5 years

- How would you estimate peak QPS for a notification system?
- Which autoscaling signal would you use for an API service and for a queue worker?
- How would you route traffic when instances have unequal capacity?
- How would you find and reduce a hot partition?

#### 🧭 5–8 years

- How would you protect a system from a sudden 50× event spike?
- How would you avoid retry traffic overwhelming a recovering service?
- How would you plan capacity when downstream quotas are the real limit?
- How would you balance latency, availability and cost across regions?

#### 🏛️ 8+ years

- How would you create a capacity-planning model shared across many teams?
- Where would you require headroom, and where would you accept graceful degradation?
- How would you connect product forecasts to infrastructure and vendor commitments?
- How would you govern global traffic during a large regional evacuation?

---

## 🗄️ 3. Data Modelling, Databases and Search

![Data layer interview map covering access patterns, data models, database mechanics, scaling and data movement](/images/system-design/roadmap/09-data-layer-map.png)

### 💡 In simple words—and why it matters

This section is about choosing how information is shaped, stored, found, changed and recovered. It matters because most difficult system-design trade-offs begin with data: what must stay correct, which queries must be fast, how data grows, and how a team can change the system safely later.

### 🎯 Interview focus

- Begin with access patterns and invariants.
- Choose a data model, key and index together.
- Mark transaction and consistency boundaries.
- Plan replication, partitioning, backup and restore.
- Include schema change, backfill and reconciliation.
- Treat search as a derived-data pipeline with freshness requirements.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- What are the main entities for a library or food-delivery system?
- Which fields would you index for a user-search endpoint?
- When would you choose a relational database for a design?
- What data would you store for a URL-shortening service?

#### 🛠️ 2–5 years

- How would you choose a partition key for chat messages?
- How would you keep a search index updated from the source database?
- Which operation needs a transaction in a ticket-booking system?
- How would you add read capacity without breaking freshness requirements?

#### 🧭 5–8 years

- How would you migrate a billion-row table with minimal downtime?
- How would you detect and repair divergence after dual writes?
- How would you rebalance shards while serving traffic?
- How would you design data ownership for a workflow spanning several services?

#### 🏛️ 8+ years

- How would you reduce database fragmentation across an organisation?
- Which data capabilities belong in a platform and which remain service-owned?
- How would you plan a multi-year migration from a shared database?
- How would you govern retention, residency, lineage and deletion across derived stores?

---

## ⚡ 4. Caching — The Topic Everyone Adds and Few Can Defend

Arjun used to draw a cache immediately after the load balancer. Now he first asks: **what data, where, for how long, who invalidates it, and what happens when it disappears?**

![Caching interview map covering locations, patterns, keys, invalidation, failures, distributed caching and operations](/images/system-design/roadmap/10-caching-map.png)

### 💡 In simple words—and why it matters

Caching keeps frequently needed information closer to the user or application so the main data source does less work. It matters because a cache can make a system faster, but a careless cache can also show old data or overload the database when it fails. Interviewers therefore expect you to explain what you cache, how it becomes fresh again, and how the system behaves without it.

### 🎯 Interview focus

- Name the exact data and cache location.
- Define freshness and invalidation ownership.
- Choose read/write pattern, key, TTL and eviction policy.
- Protect the source during misses, warm-up and outage.
- Cover hot keys, stampedes, rebalancing and multi-region behaviour.
- Monitor usefulness, safety and cost.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- Which data would you cache in a product-catalogue system?
- What information belongs in a cache key?
- When should a cached value expire?
- Which metrics tell you whether a cache is useful?

#### 🛠️ 2–5 years

- How would you prevent many requests from reloading the same expired key?
- How would you invalidate product data after an update?
- What happens to the database when the distributed cache becomes unavailable?
- How would you choose between local and distributed caching?

#### 🧭 5–8 years

- How would you handle a celebrity hot key receiving millions of reads?
- How would you warm a new cache cluster without overwhelming the source?
- How would you provide bounded staleness across two regions?
- How would you migrate cache key formats and cluster topology without a traffic cliff?

#### 🏛️ 8+ years

- How would you design a shared caching platform with safe defaults for hundreds of services?
- How would you allocate memory and cost across tenants with different value and risk?
- How would you prevent caches from hiding unsafe database capacity assumptions?
- Which cache capabilities should be centralised, and which decisions must stay with product teams?

---

## 📨 5. Queues, Pub/Sub and Event Streams

![Asynchronous messaging interview map covering models, partitions, delivery guarantees, failures and event evolution](/images/system-design/roadmap/11-async-messaging-map.png)

### 💡 In simple words—and why it matters

This section is about work that does not need to finish during the original request. Messages let services process jobs later and let several consumers react independently. It matters because asynchronous systems must handle delay, duplicate delivery, ordering, failed messages and growing backlogs without quietly losing work.

### 🎯 Interview focus

- Choose queue, pub/sub or log from the workload.
- Define ordering and delivery scope precisely.
- Make consumers retry-safe.
- Plan backlog, poison messages, replay and schema changes.
- Connect database state to event publication safely.
- Monitor lag, age, failures and retention cost.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- Which work in a notification service could happen asynchronously?
- What happens when a consumer fails before acknowledging a message?
- When would you use a queue instead of a direct API call?
- How would you deal with a message that repeatedly fails?

#### 🛠️ 2–5 years

- How would you make a payment-event consumer safe against duplicates?
- How would you choose a partition key for ordered processing?
- How would you publish a database change and an event reliably?
- Which metrics would reveal a growing consumer backlog?

#### 🧭 5–8 years

- How would you replay six months of events without harming live traffic?
- How would you evolve an event schema used by many independent teams?
- How would you recover when one partition becomes hot and ordering must be preserved?
- How would you reconcile state after an outbox or CDC pipeline failure?

#### 🏛️ 8+ years

- How would you design governance for a company-wide event platform?
- Which delivery guarantees would the platform promise, and where would application ownership begin?
- How would you control replay, retention, privacy deletion and regional movement of events?
- How would you migrate hundreds of consumers between messaging platforms?

---

## 📦 6. File, Object and Media Delivery

![Storage and media delivery interview map from upload through processing, storage and CDN delivery](/images/system-design/roadmap/12-storage-media-map.png)

### 💡 In simple words—and why it matters

This section covers how a system accepts, stores, changes and delivers large files such as photos, videos and documents. It matters because large files should not be treated like normal database rows. Interviews test whether you can separate file bytes from metadata, protect private content, survive interrupted uploads and deliver popular content without exhausting the origin server.

### 🎯 Interview focus

- Separate metadata from file bytes.
- Draw upload, processing and delivery as distinct paths.
- Include resume, integrity, access control and lifecycle.
- Plan CDN keys, invalidation and origin protection.
- Discuss durability, deletion, egress cost and regional rules.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- How would you store profile images and their metadata?
- How would a user upload a large video reliably?
- Where would a CDN appear in a media system?
- What should happen after an upload completes?

#### 🛠️ 2–5 years

- How would you resume a failed multipart upload?
- How would you prevent private files from becoming public through a CDN?
- How would you invalidate a replaced image at the edge?
- How would you design an asynchronous thumbnail or transcoding pipeline?

#### 🧭 5–8 years

- How would you protect the origin during a viral-video traffic spike?
- How would you satisfy deletion and retention rules across replicas and caches?
- How would you migrate petabytes between storage systems while serving traffic?
- How would you balance multi-region durability, latency and egress cost?

#### 🏛️ 8+ years

- How would you build a shared media platform for products with different privacy and latency needs?
- How would you govern lifecycle policies so teams cannot create uncontrolled storage cost?
- Which processing capabilities should be standardised and which remain product-specific?
- How would you plan regional isolation for a global storage platform?

---

## 🧩 7. Architecture, Service Boundaries and Workflows

![Architecture and workflow interview map covering application structure, boundaries, communication, workflows and evolution](/images/system-design/roadmap/13-architecture-workflow-map.png)

### 💡 In simple words—and why it matters

This section is about dividing a product into parts that people can understand, build and operate. It matters because splitting a system creates ownership and communication boundaries. Interviewers want to see a simple structure, clear data owners and a plan for workflows that cross several parts without becoming impossible to change.

### 🎯 Interview focus

- Draw the simplest boundary that meets today’s needs.
- Give each important piece of data a clear owner.
- Choose communication style per workflow.
- Model long-running work, failure and compensation.
- Include contract evolution, migration and rollback.
- Connect architecture to teams and operational ownership.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- What modules would you create for an online bookstore?
- Which operations need to call another component?
- What data belongs to the order component?
- How would you represent a long-running task?

#### 🛠️ 2–5 years

- Where would you split a modular monolith into services first?
- How would you handle a workflow that updates inventory, payment and orders?
- When would you choose orchestration over choreography?
- How would services discover and authenticate each other?

#### 🧭 5–8 years

- How would you migrate a shared database toward service ownership?
- How would you prevent a distributed workflow from getting stuck permanently?
- How would you manage version skew during independent deployments?
- How would you decide whether CQRS or event sourcing is justified?

#### 🏛️ 8+ years

- How would you align service boundaries with teams during rapid organisational change?
- How would you reverse years of accidental microservice fragmentation?
- Which platform capabilities should remove repeated work without creating a central bottleneck?
- How would you create an architecture migration that remains reversible at every stage?

---

## PART II — CONNECT IT AS A DISTRIBUTED SYSTEM 🌍

## 🌍 8. Distributed Systems — Where the Boxes Begin to Disagree

The second server changes the game. Now messages can arrive late, nodes can see different data, clocks can disagree, and one side can fail while the other continues.

Do not study “distributed systems” as one mysterious final chapter. Use it as the map that connects **databases, caches, queues, search indexes, object stores and services**.

![Distributed systems map connecting failure, consistency, replication, partitioning, coordination and multi-region design](/images/system-design/roadmap/14-distributed-systems-map.png)

### 💡 In simple words—and why it matters

A system becomes distributed when its work and data live on more than one machine. Those machines can disagree, receive messages at different times or fail separately. This section matters because databases, caches, queues and services all face these problems at scale. Interviewers use them to test whether your design remains correct when the network and machines do not behave perfectly.

### 🔗 Learn each component as a distributed system

#### 🗄️ Database

- Replication topology
- Write leader and read routing
- Transaction and isolation boundary
- Shard key, hotspot and resharding
- Replica lag and consistency
- Failover, split brain and recovery
- Backup, point-in-time restore and reconciliation
- Cross-region writes, conflicts and residency

#### ⚡ Cache

- Client/proxy routing
- Partitioning and consistent hashing
- Replication and failover
- Eviction and invalidation across nodes
- Hot keys and stampedes
- Rebalancing and warm-up
- Cache outage effect on the source
- Regional cache ownership and staleness

#### 📨 Queue or log

- Partition key and ordering scope
- Leader and replica behaviour
- Producer acknowledgement
- Consumer group and rebalancing
- Duplicate delivery and idempotency
- Offset storage, replay and retention
- Backlog, backpressure and poison messages
- Cross-region replication and disaster recovery

#### 🔎 Search index

- Source of truth and indexing pipeline
- Partition and replica layout
- Refresh delay and staleness
- Reindex and alias cutover
- Query routing and hot queries
- Partial results and degraded search
- Backfill, reconciliation and deletion
- Regional index placement

#### 📦 Object storage and CDN

- Object replication and durability
- Metadata consistency
- Multipart state and retry
- Versioning and deletion
- Edge staleness and invalidation
- Origin shielding and failure
- Regional placement and residency
- Disaster recovery and restore testing

#### 🧩 Services and workflows

- Deadline and retry propagation
- Idempotent operations
- Distributed tracing context
- Service discovery and health
- Long-running workflow state
- Compensation and reconciliation
- Version skew and compatibility
- Regional routing and ownership

### 🎯 Interview focus

- State the required consistency per operation.
- Define the unit of ordering, transaction and failure.
- Treat timeout as uncertainty, not proof of failure.
- Identify duplicates, races, conflicts and stale reads.
- Explain partition, replication, failover and recovery together.
- Add multi-region only after defining ownership and conflict rules.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- What new failures appear when a service runs on two machines?
- Which user actions require fresh data and which can tolerate delay?
- What happens when a database replica is behind?
- Why might the same message be processed twice?

#### 🛠️ 2–5 years

- How would you choose a shard key and handle a hot shard?
- How would you make a distributed lock safe when its owner pauses?
- What consistency would you require for likes, account balances and seat reservations?
- How would you recover a consumer after it processed work but failed before acknowledgement?

#### 🧭 5–8 years

- How would you design ownership and conflict resolution for active-active regions?
- How would you fail over a stateful service without allowing split brain?
- How would you detect and repair divergence across stores?
- Which operations require consensus, and which can avoid coordination?

#### 🏛️ 8+ years

- How would you define consistency and availability tiers for a company platform?
- How would you plan regional isolation while meeting global product requirements?
- Where would you centralise coordination, and where would you preserve local autonomy?
- How would you validate disaster assumptions through exercises and measurable recovery targets?

---

## PART III — MAKE IT PRODUCTION READY 🛡️

## 🧯 9. Reliability, Resilience and Traffic Protection

![Reliability and resilience interview map covering failure boundaries, request protection, load protection and recovery](/images/system-design/roadmap/15-reliability-resilience-map.png)

### 💡 In simple words—and why it matters

This section is about keeping the useful parts of a system working when traffic is too high or something fails. It matters because real systems face slow dependencies, broken machines and sudden spikes. Interviewers expect you to limit damage, recover safely and explain what users experience while the system is unhealthy.

### 🎯 Interview focus

- Define failure boundaries and blast radius.
- Use bounded retries with deadlines and overload protection.
- Choose rate limits, quotas, priority and degradation.
- Explain failover, failback and recovery testing.
- Connect every resilience mechanism to a metric or exercise.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- What should a service do when a dependency times out?
- Where would you add rate limiting to a public API?
- Which parts of a design need redundancy?
- What could a product temporarily disable during overload?

#### 🛠️ 2–5 years

- How would you choose retry limits without creating a retry storm?
- How would you design a distributed rate limiter?
- How would you isolate one noisy tenant?
- How would you test that a backup can actually be restored?

#### 🧭 5–8 years

- How would you stop a small dependency failure from cascading through the system?
- How would you design cell boundaries and tenant placement?
- How would you fail back safely after a regional outage?
- How would you define and test graceful degradation for a critical product flow?

#### 🏛️ 8+ years

- How would you set organisation-wide reliability tiers and exception rules?
- Which resilience controls should be enforced by platforms and which remain product decisions?
- How would you fund and prioritise recovery work against feature delivery?
- How would you measure systemic risk across shared dependencies?

---

## 🔐 10. Security, Privacy and Abuse Resistance

![Security and privacy interview map covering identity, data protection, API safety, abuse and compliance](/images/system-design/roadmap/16-security-privacy-map.png)

### 💡 In simple words—and why it matters

This section is about deciding who can enter the system, what they can do and how private information stays protected. It matters because a fast and reliable design is still a bad design if users can see each other’s data or attackers can abuse an expensive feature. Security should appear in the main design, not as a final sentence.

### 🎯 Interview focus

- Mark trust boundaries and service identities.
- Define authentication and authorization separately.
- Protect data through storage, logs, caches and events.
- Include abuse, tenant isolation, audit and deletion.
- Treat third-party services and internal APIs as security boundaries.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- Where does authentication happen in your design?
- How would you stop one user from reading another user’s object?
- Which data should never appear in logs?
- How would you protect a private file download?

#### 🛠️ 2–5 years

- How would you authorise service-to-service calls?
- How would you rotate secrets and keys without downtime?
- How would you isolate tenants in a shared application and data store?
- How would you design audit logs that users cannot alter?

#### 🧭 5–8 years

- How would you delete a user’s data across caches, events, indexes, replicas and backups?
- How would you contain a compromised service identity?
- How would you prevent abuse of a costly public workflow?
- How would you enforce regional data boundaries in a global system?

#### 🏛️ 8+ years

- How would you create security guardrails that product teams can adopt without slowing delivery?
- How would you model trust across companies, regions and shared platforms?
- Which security risks would block launch, and who can accept exceptions?
- How would you measure whether security controls reduce real exposure?

---

## 🔭 11. Observability, Delivery, Recovery and Cost

![Operations interview map covering observability, service health, reliability targets, delivery, recovery and cost](/images/system-design/roadmap/17-operations-map.png)

### 💡 In simple words—and why it matters

This section is about knowing whether the system is healthy, releasing changes safely, recovering after trouble and controlling cost. It matters because software is useful only when a team can operate it every day. Senior interviews especially test whether your design can be measured, supported, restored and paid for.

### 🎯 Interview focus

- Name signals for user experience, dependencies and invariants.
- Set targets and alerts with an owner.
- Plan safe delivery, compatibility and rollback.
- Define recovery targets and prove them through tests.
- Estimate major cost drivers and attribute shared cost.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- Which metrics would you add to a new API service?
- How would you trace one failed request across services?
- What information belongs in a useful log entry?
- How would you know a deployment made latency worse?

#### 🛠️ 2–5 years

- How would you define an SLO for a user-facing workflow?
- How would you roll out a risky change gradually?
- How would you monitor data freshness in an asynchronous pipeline?
- Which costs would you estimate for a media-delivery system?

#### 🧭 5–8 years

- How would you alert on user impact without creating alert fatigue?
- How would you coordinate application, schema and event changes safely?
- How would you prove RTO and RPO through a disaster exercise?
- How would you find and allocate the cost of a shared platform?

#### 🏛️ 8+ years

- How would you standardise observability while preserving team autonomy?
- How would you connect reliability targets to business priority and investment?
- How would you manage systemic delivery risk across hundreds of services?
- How would you use cost, reliability and latency data to guide architecture strategy?

---

## 🧮 12. Supporting Data Structures and Algorithms

System design interviews sometimes hide a small algorithm inside a large architecture. Learn these as reusable building blocks, then connect each one to storage, partitioning, accuracy, memory and operations.

![System design building blocks covering identifiers, lookup, search, location, analytics and scheduling](/images/system-design/roadmap/18-building-blocks-map.png)

### 💡 In simple words—and why it matters

This section collects small technical building blocks that solve repeated problems inside larger designs, such as generating IDs, searching text, finding nearby locations or counting huge streams. It matters because the right building block can remove a bottleneck, while the wrong one can add complexity or give an accuracy level the product cannot accept.

### 🎯 Interview focus

- Connect each structure to a concrete product requirement.
- State accuracy, memory, ordering and distribution needs.
- Identify false-positive, collision, hotspot or clock behaviour.
- Explain how the structure is partitioned, rebuilt and monitored.
- Avoid adding an advanced structure when exact database queries are sufficient.

### 🎤 Interview questions by experience

#### 🌱 0–2 years

- How would you generate unique short links?
- Which data structure could support autocomplete prefixes?
- How would you keep the most popular ten items?
- How would you schedule jobs by their execution time?

#### 🛠️ 2–5 years

- How would you generate IDs across many writers without one bottleneck?
- Where would a Bloom filter reduce unnecessary storage lookups?
- How would you find nearby drivers or restaurants?
- How would you estimate unique visitors with bounded memory?

#### 🧭 5–8 years

- How would clock rollback affect a time-based distributed ID scheme?
- How would you rebuild and validate a distributed search or geospatial index?
- How would you find heavy hitters across partitions under high event volume?
- How would you use Merkle trees or checksums during replica repair?

#### 🏛️ 8+ years

- Which reusable indexing, ID and approximate-computation capabilities belong on a shared platform?
- How would you define accuracy and failure contracts for probabilistic services?
- How would you migrate a company-wide identifier format without breaking ordering or clients?
- How would you govern specialised indexes whose operational cost grows faster than product value?

---

## PART IV — RECOGNISE PRODUCT PATTERNS 🧠

## 🧪 13. Product-Focused Interview Maps

![Product pattern galaxy connecting ten common system design interview problems with their dominant patterns](/images/system-design/roadmap/19-product-pattern-galaxy.png)

### 💡 In simple words—and why it matters

This section shows how the same building blocks appear inside familiar products. It matters because interview prompts change, but their difficult parts repeat. When you recognise whether the main problem is ordering, fan-out, inventory, location, search or large-file delivery, you can build a fresh answer instead of trying to remember a company diagram.

### 🔗 URL shortener and paste service

- ID generation and collision strategy
- Redirect latency
- Read-heavy storage
- Cache and hot links
- Expiration and custom aliases
- Abuse, malware and analytics

### 💬 Chat, presence and notifications

- Connection management
- Conversation and message model
- Per-conversation ordering
- Online/offline delivery
- Presence and last-seen freshness
- Fan-out, push providers and retry
- Multi-device sync
- Attachments, search and abuse

### 📰 Social feed and timeline

- Follow graph
- Fan-out on write/read/hybrid
- Ranking inputs
- Celebrity hotspots
- Pagination and freshness
- Privacy changes and deletion
- Ads and recommendation boundaries

### 🎟️ Booking, inventory and reservations

- Inventory model and invariant
- Holds and expiration
- Concurrency control
- Payment boundary
- Idempotency and reconciliation
- Waiting room and fairness
- Oversell prevention and recovery

### 💳 Payments and ledger

- Money representation
- Idempotency key
- Authorisation/capture/refund state
- Immutable ledger and audit
- Webhooks and duplicate events
- Reconciliation
- Fraud, compliance and privacy

### 🎥 Video and media platform

- Direct upload and multipart
- Metadata and processing workflow
- Transcoding profiles
- CDN, range requests and origin protection
- Recommendations and search boundary
- Rights, deletion, moderation and cost

### 🔎 Search and autocomplete

- Ingestion and indexing
- Tokenisation and ranking signals
- Shards and replicas
- Query fan-out and aggregation
- Freshness and reindex
- Hot queries, caching and typo handling
- Personalisation and abuse

### 📍 Ride matching and location

- Location updates
- Geospatial index
- Nearby search
- Matching and assignment
- Driver/rider state machine
- ETA and map-provider boundary
- Hot cities and regional partitioning

### 🕷️ Web crawler and scheduler

- URL frontier
- Deduplication
- Politeness and per-host limits
- Priority and recrawl
- Worker leases
- Failure recovery
- Content storage and indexing

### 📊 Metrics, logs and analytics

- High-volume ingestion
- Partition and retention
- Aggregation and rollups
- Cardinality control
- Late and out-of-order data
- Query serving
- Tiered storage and cost

### 🧠 Question ladder for product designs

#### 🌱 0–2 years

- Can you identify the core user actions and entities for each product family?
- Can you draw the main write path and read path separately?
- Which component topic is most important for each product?
- What is the simplest useful version you would build first?

#### 🛠️ 2–5 years

- Which access pattern determines your database and key design?
- Where would asynchronous work improve the design?
- Which duplicate, race or hotspot is most likely?
- Which three metrics would you watch after launch?

#### 🧭 5–8 years

- What invariant defines correctness for this product?
- How would the design change across regions?
- How would you migrate from a simple first version to the target design?
- How would you degrade the product safely under extreme load?

#### 🏛️ 8+ years

- Which parts should become shared company capabilities?
- How would team and ownership boundaries shape the architecture?
- Which complexity would you postpone, and what signal would trigger it?
- How would you balance reliability, cost, compliance and product speed over several years?

---

## 🪜 Practice Problems in the Right Order

Each problem should add one new difficulty. Repeat earlier patterns instead of starting from zero every time.

| Step | Practice system | Main interview patterns |
|---:|---|---|
| 1 | **URL shortener** | API, keys, read-heavy database, cache, redirect latency |
| 2 | **Rate limiter** | counters, windows/buckets, distributed state, fairness |
| 3 | **Notification service** | async work, retries, user preferences, provider limits |
| 4 | **File-sharing service** | object storage, metadata, upload, CDN, permissions |
| 5 | **Chat application** | WebSockets, ordering, offline delivery, fan-out |
| 6 | **News feed** | graph, fan-out, ranking, caching, celebrity hotspots |
| 7 | **Ticket booking** | holds, concurrency, payment, idempotency, fairness |
| 8 | **Payment system** | ledger, workflow state, webhook, reconciliation, audit |
| 9 | **Video platform** | upload, processing, object storage, CDN, large-scale cost |
| 10 | **Search/autocomplete** | indexing, partitioning, ranking, freshness, hot queries |
| 11 | **Ride matching** | geospatial data, state, realtime updates, regional hotspots |
| 12 | **Metrics platform** | ingestion, streams, time-series storage, aggregation, retention |

### For every problem, produce these eight things ✍️

1. Scope and non-goals
2. Scale assumptions
3. APIs/events
4. Data model and access patterns
5. End-to-end architecture
6. Two deep dives
7. Failure, security, observability and recovery
8. Trade-off recap and 10× evolution

![A staircase of twelve system design practice problems arranged from foundational to advanced](/images/system-design/roadmap/20-practice-problems.png)

---

## 📅 A 12-Week Interview Plan

This schedule assumes **7–10 focused hours per week**. If you have less time, extend it. If you already know a topic, prove it with questions and a mock before skipping it.

| Week | Focus | Required output |
|---:|---|---|
| 1 | Interview method, networking, API contracts | One request-flow map, two API designs, one timed explanation |
| 2 | Estimation, scaling, load balancing | Five estimate drills, one scaling map, URL shortener mock |
| 3 | Data modelling and database mechanics | Three data models, index choices, isolation question set |
| 4 | Replication, partitioning, migration, search | Shard-key drills, migration plan, search indexing map |
| 5 | Caching and CDN | Full caching tree, failure drill, file-sharing mock |
| 6 | Queues, logs and asynchronous workflows | Delivery/ordering table, replay drill, notification mock |
| 7 | Service boundaries and workflow patterns | Boundary exercise, booking workflow, compensation drill |
| 8 | Distributed systems core | Consistency map, coordination questions, multi-region sketch |
| 9 | Reliability and traffic protection | Failure matrix, rate limiter mock, disaster scenario |
| 10 | Security, observability, delivery and cost | Threat/trust map, dashboards, rollout and recovery plan |
| 11 | Product patterns | Chat, feed, payment and video timed designs |
| 12 | Interview simulation and repair | Four full mocks, error log, repeated weakest design |

### A weekly rhythm that actually builds recall 🔁

| Day | Work |
|---|---|
| **Day 1** | Learn and draw the topic tree |
| **Day 2** | Compare choices in a decision notebook |
| **Day 3** | Answer experience-level questions aloud |
| **Day 4** | Apply the topic to a small design |
| **Day 5** | Run failure and scale variations |
| **Weekend** | Complete one timed mock and review the recording |

### The 14-day revision sprint ⚡

Use this only when you have already studied the foundations.

```text
Days 1–2   Interview method + Networking/APIs + Estimation
Days 3–4   Databases + Partitioning + Search
Day 5      Caching + CDN
Day 6      Messaging + Async workflows
Day 7      Distributed systems core
Day 8      Reliability + Rate limiting
Day 9      Security + Observability + Recovery + Cost
Days 10–12 Four product designs
Days 13–14 Four full mocks + repair notes
```

![A twelve-week system design interview study calendar with a fourteen-day revision sprint](/images/system-design/roadmap/21-12-week-plan.png)

---

## 🎯 How to Practise Topic-Wise Questions in the Right Direction

Do not count how many questions you read. Track what you can do without help.

### Level 1 — Recognise 👀

- Can I place the term in the correct topic tree?
- Can I name the problem that makes it relevant?
- Can I name one alternative?

### Level 2 — Choose ⚖️

- Can I select an option after receiving requirements?
- Can I explain the trade-off in two sentences?
- Can I say what new failure or cost it introduces?

### Level 3 — Connect 🔗

- Can I connect the topic to API, data, reliability and operations?
- Can I draw its write, read and failure paths?
- Can I identify ownership and observability?

### Level 4 — Stress 💥

- Can I handle 10× traffic, a hot partition or a slow dependency?
- Can I handle duplicate work, stale data or a regional failure?
- Can I define recovery and verify it?

### Level 5 — Evolve 🏛️

- Can I migrate from a simpler architecture?
- Can I keep old and new versions compatible?
- Can I explain team, cost, compliance and long-term trade-offs?

### Keep a mistake log 📝

After every mock, record only:

```text
Prompt:
Requirement I missed:
Decision I could not defend:
Failure I ignored:
Question that exposed the gap:
Topic to revisit:
Date to retry the same prompt:
```

---

## ✅ Interview-Ready Checklist

You are ready when you can do these consistently, not when every box is ticked once.

### Problem framing

- ☐ I clarify users, features, priorities and non-goals.
- ☐ I ask about traffic, data, latency, availability, consistency and retention.
- ☐ I state assumptions and confirm them.

### Design

- ☐ I define APIs/events and data before adding infrastructure.
- ☐ I draw separate read, write and asynchronous paths.
- ☐ I identify the hardest requirement and deep-dive there.
- ☐ I compare options and make a clear choice.

### Distributed behaviour

- ☐ I define consistency, ordering and transaction scope.
- ☐ I cover replicas, partitions, hotspots and rebalancing.
- ☐ I handle retries, duplicates, idempotency and reconciliation.
- ☐ I discuss regional ownership, failover and conflicts when relevant.

### Production readiness

- ☐ I include timeouts, overload protection and graceful degradation.
- ☐ I mark trust boundaries, authorization and sensitive data.
- ☐ I name metrics, SLOs, alerts and ownership.
- ☐ I cover deployment, migration, rollback, backup and restore.
- ☐ I identify major cost drivers.

### Communication

- ☐ My diagram stays readable.
- ☐ I narrate decisions instead of silently drawing.
- ☐ I use checkpoints with the interviewer.
- ☐ I can change direction without defending a weak assumption.
- ☐ I finish with trade-offs, risks and next evolution.

---

## 📚 Resource Shelf — Add Your Links Here

Use resources to fill a specific gap. Return to the roadmap and answer questions after reading.

### 🎤 Official interview guidance

- [Microsoft technical interviewing: system design and distributed systems](https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing.html)
- [Amazon SDE II interview preparation](https://amazon.jobs/content/en/how-we-hire/sde-ii-interview-prep)
- [Amazon SDE III / Senior SDE interview preparation](https://amazon.jobs/content/en-gb/how-we-hire/sde-iii-interview-prep)

### 🏗️ Architecture review guides

- [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/)
- [Azure architecture design principles](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/)
- [AWS Well-Architected Framework](https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework)

### 🌐 Networking and APIs

- [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [gRPC documentation](https://grpc.io/docs/)
- [GraphQL specification](https://spec.graphql.org/)
- [Stripe idempotent requests](https://docs.stripe.com/api/idempotent_requests)

### 🗄️ Databases and data movement

- [PostgreSQL documentation](https://www.postgresql.org/docs/current/)
- [PostgreSQL indexes](https://www.postgresql.org/docs/current/indexes.html)
- [PostgreSQL transaction isolation](https://www.postgresql.org/docs/current/transaction-iso.html)
- [PostgreSQL table partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)
- [PostgreSQL logical replication](https://www.postgresql.org/docs/current/logical-replication.html)

### ⚡ Caching and edge delivery

- [Redis cache-aside guide](https://redis.io/docs/latest/develop/use-cases/cache-aside/)
- [Redis key eviction](https://redis.io/docs/latest/develop/reference/eviction/)
- [Redis client-side caching](https://redis.io/docs/latest/develop/clients/client-side-caching/)
- [Cloudflare Cache documentation](https://developers.cloudflare.com/cache/)
- [Cloudflare cache purge](https://developers.cloudflare.com/cache/how-to/purge-cache/)
- [Cloudflare tiered cache](https://developers.cloudflare.com/cache/how-to/tiered-cache/)

### 📨 Messaging and streaming

- [Apache Kafka documentation](https://kafka.apache.org/documentation/)
- [Apache Kafka protocol and design](https://kafka.apache.org/documentation/#design)

### 🌍 Distributed systems papers

- [Raft: In Search of an Understandable Consensus Algorithm](https://raft.github.io/raft.pdf)
- [Amazon Dynamo paper](https://www.amazon.science/publications/dynamo-amazons-highly-available-key-value-store)
- [Google Spanner paper](https://research.google/pubs/spanner-googles-globally-distributed-database-2/)
- [Google Bigtable paper](https://research.google/pubs/bigtable-a-distributed-storage-system-for-structured-data/)
- [Google MapReduce paper](https://research.google/pubs/mapreduce-simplified-data-processing-on-large-clusters/)

### 🧯 Reliability and operations

- [Google Site Reliability Engineering book](https://sre.google/sre-book/table-of-contents/)
- [Google SRE: Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/)
- [Amazon Builders’ Library](https://aws.amazon.com/builders-library/)
- [AWS: Timeouts, retries and backoff with jitter](https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/)
- [Kubernetes workload autoscaling](https://kubernetes.io/docs/concepts/workloads/autoscaling/)
- [Kubernetes Services and service discovery](https://kubernetes.io/docs/concepts/services-networking/service/)
- [OpenTelemetry signals](https://opentelemetry.io/docs/concepts/signals/)

### 🔐 Security

- [OWASP API Security Top 10](https://owasp.org/API-Security/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)

### 📖 Books and long-form study

- **Designing Data-Intensive Applications** — Martin Kleppmann
- **System Design Interview, Volumes 1 and 2** — Alex Xu and Sahn Lam
- **Site Reliability Engineering** — Betsy Beyer, Chris Jones, Jennifer Petoff and Niall Richard Murphy
- **Release It!** — Michael T. Nygard
- **Building Microservices** — Sam Newman

### 🧪 Your topic-wise links

Add the explanations, videos and question lists that work best for you:

```text
Networking & APIs:
Scaling & Estimation:
Databases & Search:
Caching & CDN:
Messaging & Streaming:
Storage & Media:
Architecture & Workflows:
Distributed Systems:
Reliability:
Security:
Observability & Operations:
Mock Interviews:
```

---

## 🏁 Back to Arjun’s Interview

One month later, Arjun received another prompt:

> “Design a ticket-booking system.”

This time, he did not begin with ten boxes.

He asked what kind of tickets were being sold. He clarified traffic during a major launch, hold duration, payment behaviour and the rule that two confirmed bookings must never own the same seat. He drew the smallest end-to-end path, then explored concurrency, idempotency, waiting-room fairness, failure recovery, observability and regional limits.

His final diagram was smaller than the first one.

His conversation was much stronger. 💪

That is the goal of this roadmap: not to make your diagrams look complicated, but to make your decisions feel deliberate.

So when your next interviewer says, “Design YouTube,” take a breath. Ask the first good question. Then build the story one decision at a time. 🏗️✨
