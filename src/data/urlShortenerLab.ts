export interface LabDecision {
  id: string;
  title: string;
  description: string;
  benefit: string;
  cost: string;
  effect: string;
  recommended?: boolean;
}

export interface LabStage {
  id: string;
  number: string;
  title: string;
  objective: string;
  prompt: string;
  checkpoint: string;
  decisions: LabDecision[];
}

export interface LabScenario {
  id: string;
  title: string;
  trigger: string;
  observe: string;
  affectedNodes: string[];
  responses: LabDecision[];
}

export const URL_SHORTENER_LAB_STAGES: LabStage[] = [
  {
    id: 'requirements', number: '01', title: 'Functional requirements',
    objective: 'Decide what the first useful version must do before discussing infrastructure.',
    prompt: 'Which scope should define the first production release?',
    checkpoint: 'A shortener must create a stable mapping and redirect correctly. Everything else should earn its complexity.',
    decisions: [
      { id: 'core', title: 'Shorten and redirect only', description: 'Create an alias and resolve it to the original URL.', benefit: 'Small contract, quick delivery and fewer failure paths.', cost: 'No expiry, custom aliases or abuse controls in the first release.', effect: 'Keeps the first architecture focused on an API, redirect path and durable mapping.' },
      { id: 'balanced', title: 'Core flow with expiry and custom aliases', description: 'Support redirects, optional expiry and user-selected aliases.', benefit: 'Covers the most common product needs without becoming an analytics platform.', cost: 'Adds uniqueness, validation and expiration rules.', effect: 'Introduces validation and lifecycle fields in the API and data model.', recommended: true },
      { id: 'analytics', title: 'Full analytics from day one', description: 'Add click events, dashboards, geo data and campaign reports.', benefit: 'Product teams receive richer usage information immediately.', cost: 'Event ingestion, privacy and retention work can delay the core redirect service.', effect: 'Adds an asynchronous analytics pipeline before redirect reliability is proven.' },
    ],
  },
  {
    id: 'scale', number: '02', title: 'Scale assumptions',
    objective: 'Choose realistic workload numbers so later decisions have a reason.',
    prompt: 'Which workload should the design target for its first year?',
    checkpoint: 'URL shorteners are normally read heavy. Peak traffic and growth matter more than an impressive round number.',
    decisions: [
      { id: 'startup', title: 'Small internal service', description: '100 thousand new links each day with 20 redirects per write.', benefit: 'A simple deployment and one database can be sufficient.', cost: 'The design may need earlier restructuring if adoption grows quickly.', effect: 'Keeps caching and horizontal scaling optional rather than mandatory.' },
      { id: 'growth', title: 'Growth-ready public service', description: '10 million new links each day with 100 redirects per write.', benefit: 'Exercises realistic read-heavy scaling without assuming global domination.', cost: 'Requires caching, stateless services and deliberate database capacity.', effect: 'Makes load balancing, cache strategy and replicas part of the core design.', recommended: true },
      { id: 'global', title: 'Internet-scale launch', description: '100 million new links each day with 500 redirects per write.', benefit: 'Plans for very high demand and multiple regions.', cost: 'Large operational and financial cost before traffic proves the need.', effect: 'Pushes the design toward regional routing, partitioned storage and global cache layers.' },
    ],
  },
  {
    id: 'estimation', number: '03', title: 'Traffic and storage estimation',
    objective: 'Translate product assumptions into requests per second, storage and cache pressure.',
    prompt: 'How much safety margin should capacity planning include?',
    checkpoint: 'Average traffic sizes the baseline. Peak multipliers and record growth protect the system when reality is uneven.',
    decisions: [
      { id: 'average', title: 'Plan around averages', description: 'Provision close to calculated average requests per second.', benefit: 'Lowest initial infrastructure cost.', cost: 'Normal daily peaks can exhaust capacity.', effect: 'Leaves little headroom in the application and database tiers.' },
      { id: 'peak', title: 'Use a 5× peak multiplier', description: 'Size steady capacity and autoscaling around five times the daily average.', benefit: 'Handles predictable bursts while keeping assumptions explainable.', cost: 'Costs more than average-only provisioning.', effect: 'Adds autoscaling thresholds and enough database connection headroom.', recommended: true },
      { id: 'extreme', title: 'Reserve 20× at all times', description: 'Keep enough idle capacity for an extreme spike.', benefit: 'Very large immediate safety margin.', cost: 'Most capacity remains unused and expensive.', effect: 'Overprovisions every tier instead of combining headroom, rate limits and scaling.' },
    ],
  },
  {
    id: 'api', number: '04', title: 'API design',
    objective: 'Separate link creation from the latency-sensitive redirect path.',
    prompt: 'Which external contract best expresses the two workloads?',
    checkpoint: 'Creation is a validated write. Redirect is a fast lookup that should return an HTTP redirect response.',
    decisions: [
      { id: 'rest', title: 'Resource-oriented HTTP APIs', description: 'POST /links creates a mapping and GET /{code} redirects.', benefit: 'Clear semantics, familiar tooling and independent caching behavior.', cost: 'Requires careful error codes, idempotency and redirect status choices.', effect: 'Creates distinct write and read paths that can scale separately.', recommended: true },
      { id: 'rpc', title: 'One RPC endpoint', description: 'Send create and resolve commands to a single service method.', benefit: 'Simple internal implementation and typed contracts.', cost: 'Less natural for public browser redirects and HTTP caching.', effect: 'Keeps both workloads coupled behind one transport contract.' },
      { id: 'query', title: 'Encode the long URL in a GET request', description: 'Create links through query parameters.', benefit: 'Easy to try from a browser address bar.', cost: 'Leaks data into logs and violates safe, idempotent GET expectations.', effect: 'Makes caching, observability and security behavior harder to reason about.' },
    ],
  },
  {
    id: 'data-model', number: '05', title: 'Data modelling',
    objective: 'Model the lookup path, uniqueness and lifecycle fields explicitly.',
    prompt: 'Which durable record should sit behind a short code?',
    checkpoint: 'The dominant read is code to destination. The storage key should match that access pattern.',
    decisions: [
      { id: 'mapping', title: 'Keyed link mapping', description: 'Store code, destination, owner, creation time and optional expiry.', benefit: 'Direct indexed lookup and clear lifecycle rules.', cost: 'Secondary queries require additional indexes or systems.', effect: 'Makes the short code the primary access key and cache key.', recommended: true },
      { id: 'url-key', title: 'Use the long URL as the primary key', description: 'Deduplicate every destination globally.', benefit: 'Naturally returns the same code for identical URLs.', cost: 'Large keys, normalization ambiguity and awkward custom aliases.', effect: 'Optimizes deduplication instead of the redirect lookup path.' },
      { id: 'event-only', title: 'Store only creation events', description: 'Rebuild current mappings from an append-only event log.', benefit: 'Complete history and replay capability.', cost: 'Requires materialized views and more operational machinery.', effect: 'Adds an event pipeline to serve a simple point lookup.' },
    ],
  },
  {
    id: 'architecture', number: '06', title: 'Initial architecture',
    objective: 'Create a simple request path whose components can scale independently.',
    prompt: 'What should the first scalable deployment look like?',
    checkpoint: 'Stateless application instances can be replaced or scaled without moving link ownership.',
    decisions: [
      { id: 'single', title: 'One stateful application server', description: 'Keep application logic and mappings on one machine.', benefit: 'Very easy to build and operate for a prototype.', cost: 'One failure loses availability and local state blocks horizontal scaling.', effect: 'Creates a single failure domain with no independent storage tier.' },
      { id: 'stateless', title: 'Load balancer and stateless services', description: 'Run replaceable API instances in front of durable storage.', benefit: 'Supports health checks, rolling deployments and horizontal scaling.', cost: 'Requires shared persistence, service discovery and operational discipline.', effect: 'Adds a load balancer and an application pool before the database.', recommended: true },
      { id: 'functions', title: 'Serverless functions for every request', description: 'Use managed functions for creation and redirect handling.', benefit: 'Automatic scaling and little server management.', cost: 'Cold starts, platform limits and high sustained-traffic cost may affect redirects.', effect: 'Replaces the application pool with event-driven managed compute.' },
    ],
  },
  {
    id: 'cache', number: '07', title: 'Cache strategy',
    objective: 'Protect the database and reduce redirect latency without losing correctness.',
    prompt: 'How should redirect lookups use the cache?',
    checkpoint: 'A cache is an optimization. A temporary cache failure should not erase durable link mappings.',
    decisions: [
      { id: 'aside', title: 'Cache-aside on redirects', description: 'Read cache first, fall back to the database, then populate the cache.', benefit: 'Simple failure fallback and only requested links consume cache space.', cost: 'Cold misses reach the database and invalidation still needs care.', effect: 'Places Redis beside the redirect service with the database as source of truth.', recommended: true },
      { id: 'through', title: 'Write-through cache', description: 'Write cache and database together during link creation.', benefit: 'New mappings are warm immediately.', cost: 'Write availability becomes coupled to the cache unless fallback logic is explicit.', effect: 'Adds cache work to the creation path and increases write coordination.' },
      { id: 'cache-source', title: 'Use cache as the only store', description: 'Keep every link only in an in-memory cache.', benefit: 'Very low lookup latency.', cost: 'Eviction or cache loss can permanently delete links.', effect: 'Removes the durable source of truth and turns optimization failure into data loss.' },
    ],
  },
  {
    id: 'rate-limit', number: '08', title: 'Rate limiting',
    objective: 'Protect creation and redirect capacity while treating legitimate traffic fairly.',
    prompt: 'Where and how should abusive traffic be controlled?',
    checkpoint: 'Creation endpoints usually need tighter limits than redirects. Limits should be observable and return explicit responses.',
    decisions: [
      { id: 'token', title: 'Distributed token bucket', description: 'Apply separate per-client budgets at the edge or gateway.', benefit: 'Allows short bursts while enforcing a sustainable rate.', cost: 'Needs shared counters, expiry and a policy for limiter failure.', effect: 'Adds a rate-limiting layer before application instances.', recommended: true },
      { id: 'fixed', title: 'Fixed-window counters in each server', description: 'Every application instance tracks its own minute window.', benefit: 'Easy to implement without shared infrastructure.', cost: 'Clients receive a larger effective quota as the service scales.', effect: 'Keeps protection inside each instance and makes limits inconsistent.' },
      { id: 'none', title: 'No rate limiting', description: 'Let autoscaling absorb all incoming requests.', benefit: 'No requests are rejected by policy.', cost: 'Abuse or accidental loops can exhaust dependencies and budget.', effect: 'Moves uncontrolled pressure directly to application and database tiers.' },
    ],
  },
  {
    id: 'database-scale', number: '09', title: 'Database scaling',
    objective: 'Scale the read-heavy mapping store while keeping alias uniqueness correct.',
    prompt: 'Which database growth path fits the chosen access pattern?',
    checkpoint: 'Replicas increase read capacity. Partitioning increases data and write capacity. They solve different problems.',
    decisions: [
      { id: 'replica-shard', title: 'Replicas, then hash partitioning', description: 'Add read replicas first and shard by short-code hash when one primary no longer fits.', benefit: 'Matches the point-lookup workload and lets complexity arrive gradually.', cost: 'Replica lag and cross-shard operations need explicit handling.', effect: 'Adds replicas now and a predictable path to partitioned storage.', recommended: true },
      { id: 'vertical', title: 'Only scale one database vertically', description: 'Move to larger machines whenever capacity is tight.', benefit: 'Keeps transactions and operations simple.', cost: 'Machine size has a ceiling and upgrades can become disruptive.', effect: 'Retains one database failure and capacity domain.' },
      { id: 'range', title: 'Partition by creation time', description: 'Place links into monthly or yearly database ranges.', benefit: 'Simple archival of old ranges.', cost: 'New writes concentrate on the newest partition and codes do not reveal their range.', effect: 'Creates hot write partitions and requires routing metadata for redirects.' },
    ],
  },
  {
    id: 'failure', number: '10', title: 'Failure handling',
    objective: 'Define degradation before retries and outages define it accidentally.',
    prompt: 'What failure policy should guide the redirect path?',
    checkpoint: 'Retries need limits, timeouts and jitter. A fallback is useful only when it protects a more important user outcome.',
    decisions: [
      { id: 'graceful', title: 'Bounded retries and graceful degradation', description: 'Use short timeouts, limited jittered retries and dependency-specific fallbacks.', benefit: 'Contains failures while preserving redirects when a safe fallback exists.', cost: 'Requires per-dependency policies and careful testing.', effect: 'Adds health checks, circuit breakers and a database fallback for cache loss.', recommended: true },
      { id: 'retry', title: 'Retry every dependency indefinitely', description: 'Keep retrying until each downstream call succeeds.', benefit: 'A transient failure may eventually recover without returning an error.', cost: 'Retry storms increase latency and can prevent recovery.', effect: 'Amplifies pressure across cache, database and application instances.' },
      { id: 'closed', title: 'Fail every request when one dependency fails', description: 'Return an error immediately for any unhealthy component.', benefit: 'Simple and predictable implementation.', cost: 'Optional components such as cache or analytics reduce core availability.', effect: 'Couples redirect uptime to the least reliable dependency.' },
    ],
  },
  {
    id: 'observability', number: '11', title: 'Observability',
    objective: 'Make latency, errors, saturation and dependency behavior visible.',
    prompt: 'Which signals are required before production traffic arrives?',
    checkpoint: 'Metrics reveal patterns, traces connect services and structured logs explain individual events.',
    decisions: [
      { id: 'red', title: 'RED metrics, traces and structured logs', description: 'Measure rate, errors and duration for each path, then connect dependency spans.', benefit: 'Supports fast detection and evidence-based debugging.', cost: 'Instrumentation, sampling and retention need ownership.', effect: 'Adds a telemetry path from every service and dependency to one observability stack.', recommended: true },
      { id: 'logs', title: 'Application logs only', description: 'Write free-form messages when requests fail.', benefit: 'Low initial instrumentation effort.', cost: 'Trends, saturation and cross-service latency are hard to see.', effect: 'Leaves operations dependent on searching individual instances.' },
      { id: 'everything', title: 'Store every request and full payload', description: 'Keep unsampled traces and request bodies indefinitely.', benefit: 'Maximum raw debugging detail.', cost: 'High cost and serious privacy and security exposure.', effect: 'Turns telemetry into a large sensitive-data platform.' },
    ],
  },
  {
    id: 'production', number: '12', title: 'Production readiness',
    objective: 'Choose a rollout and resilience baseline that the team can actually operate.',
    prompt: 'What is the right production launch posture?',
    checkpoint: 'Production readiness combines availability, safe delivery, security, capacity and rehearsed recovery.',
    decisions: [
      { id: 'multi-az', title: 'Multi-AZ with gradual rollout', description: 'Deploy redundant instances, managed storage backups and canary or rolling releases.', benefit: 'Survives common machine and zone failures with controlled change risk.', cost: 'Higher baseline cost and more deployment automation.', effect: 'Distributes application and data capacity across failure domains.', recommended: true },
      { id: 'single-zone', title: 'Single-zone launch', description: 'Run one small production environment with backups.', benefit: 'Lowest operating cost and simplest setup.', cost: 'A zone outage removes the service until recovery.', effect: 'Leaves infrastructure in one correlated failure domain.' },
      { id: 'multi-region', title: 'Active-active global launch', description: 'Accept writes and redirects in several regions immediately.', benefit: 'Low global latency and regional failover.', cost: 'Identifier ownership, consistency and incident response become much harder.', effect: 'Adds global routing, regional data placement and conflict-resolution rules.' },
    ],
  },
];

export const URL_SHORTENER_LAB_SCENARIOS: LabScenario[] = [
  {
    id: 'cache-down', title: 'Cache becomes unavailable', trigger: 'Redis stops accepting connections during peak redirect traffic.',
    observe: 'Cache hit rate drops to zero. Database reads and redirect latency rise immediately.', affectedNodes: ['cache', 'database'],
    responses: [
      { id: 'bypass', title: 'Open the circuit and bypass cache', description: 'Temporarily read durable mappings from the database with strict limits.', benefit: 'Redirects continue while Redis recovers.', cost: 'Database load and latency increase.', effect: 'Marks cache unavailable, opens its circuit and shifts protected reads to the database.', recommended: true },
      { id: 'retry-cache', title: 'Retry Redis for every request', description: 'Keep reconnecting before allowing a database lookup.', benefit: 'A very short cache interruption may recover transparently.', cost: 'Threads wait, latency grows and a retry storm can delay recovery.', effect: 'Queues requests around the failed cache and starves the application pool.' },
      { id: 'fail', title: 'Fail all redirects', description: 'Treat cache unavailability as service unavailability.', benefit: 'Protects the database from extra reads.', cost: 'A disposable optimization takes down the core product.', effect: 'Stops the redirect path even though durable mappings remain available.' },
    ],
  },
  {
    id: 'app-unhealthy', title: 'Application server becomes unhealthy', trigger: 'One instance starts timing out after a deployment.',
    observe: 'Tail latency and error rate rise only for requests routed to that instance.', affectedNodes: ['load-balancer', 'application'],
    responses: [
      { id: 'remove', title: 'Remove it through health checks', description: 'Stop new traffic, drain work and replace the instance.', benefit: 'Contains the failure without interrupting healthy capacity.', cost: 'Remaining instances temporarily carry more load.', effect: 'Load balancer marks one instance unhealthy and routes around it.', recommended: true },
      { id: 'sticky', title: 'Keep sticky traffic on the instance', description: 'Preserve client affinity while waiting for recovery.', benefit: 'Session affinity remains unchanged.', cost: 'Affected clients continue receiving failures.', effect: 'The unhealthy node remains in the request path.' },
      { id: 'restart-all', title: 'Restart every application instance', description: 'Redeploy the full pool at once.', benefit: 'All instances return to the same version.', cost: 'Turns a partial failure into a possible full outage.', effect: 'Removes all serving capacity during recovery.' },
    ],
  },
  {
    id: 'traffic-spike', title: 'Traffic suddenly increases', trigger: 'Redirect requests jump to eight times their normal peak after a viral post.',
    observe: 'Application concurrency, database connections and hot-key requests climb together.', affectedNodes: ['rate-limiter', 'load-balancer', 'application'],
    responses: [
      { id: 'scale-protect', title: 'Autoscale and protect dependencies', description: 'Add stateless instances while enforcing budgets and database connection limits.', benefit: 'Uses horizontal capacity without overwhelming slower dependencies.', cost: 'Some abusive or excess traffic may receive 429 responses.', effect: 'Expands the application pool and activates rate and concurrency controls.', recommended: true },
      { id: 'database-only', title: 'Scale only the database', description: 'Increase database capacity without adding application instances.', benefit: 'More lookup capacity if storage is the only bottleneck.', cost: 'Application queues can still saturate first.', effect: 'Leaves the front tier overloaded while adding expensive storage capacity.' },
      { id: 'unbounded', title: 'Accept everything without limits', description: 'Depend entirely on autoscaling.', benefit: 'No deliberate request rejection.', cost: 'Scaling delay and dependency limits can create a cascading failure.', effect: 'Allows pressure to propagate through every component.' },
    ],
  },
  {
    id: 'replica-lag', title: 'Database replica falls behind', trigger: 'A replica is 45 seconds behind the primary after heavy writes.',
    observe: 'New links sometimes return not found when redirects read the stale replica.', affectedNodes: ['database', 'replica'],
    responses: [
      { id: 'read-primary', title: 'Route fresh-link reads to primary', description: 'Use read-your-write routing briefly, then return to replicas after the lag window.', benefit: 'New links work immediately without abandoning replica capacity.', cost: 'Needs freshness metadata and adds temporary primary load.', effect: 'Keeps normal reads on replicas while freshness-sensitive reads use the primary.', recommended: true },
      { id: 'accept', title: 'Accept temporary not-found responses', description: 'Keep all redirects on replicas.', benefit: 'Primary read load stays low.', cost: 'Correct links fail immediately after creation.', effect: 'Makes replica lag visible as user-facing inconsistency.' },
      { id: 'stop-writes', title: 'Stop creating new links', description: 'Pause writes until every replica catches up.', benefit: 'Prevents additional replication backlog.', cost: 'Creation availability is lost because one read replica is slow.', effect: 'Couples write availability to replica freshness.' },
    ],
  },
  {
    id: 'hot-key', title: 'A popular URL becomes a hot key', trigger: 'One short code receives hundreds of thousands of redirects each second.',
    observe: 'A single cache entry and network path become much hotter than the rest of the keyspace.', affectedNodes: ['cache', 'application'],
    responses: [
      { id: 'coalesce', title: 'Replicate locally and coalesce misses', description: 'Use short-lived local caches and allow only one refill per hot key.', benefit: 'Spreads reads and prevents a cache-miss stampede.', cost: 'Adds a small bounded staleness window and local memory use.', effect: 'Creates a tiny near-cache in each instance and protects shared-cache refill.', recommended: true },
      { id: 'shard-db', title: 'Shard the database again', description: 'Move the hot mapping to another database partition.', benefit: 'Can relieve a hot storage partition.', cost: 'Does not help when the cache and network path are the actual bottlenecks.', effect: 'Adds data movement without reducing repeated reads for the same value.' },
      { id: 'disable-cache', title: 'Disable caching for the key', description: 'Send every hot-key lookup to durable storage.', benefit: 'Avoids concentrating traffic on one cache entry.', cost: 'Concentrates even more expensive traffic on the database.', effect: 'Moves the hot spot from cache to the source-of-truth tier.' },
    ],
  },
];
