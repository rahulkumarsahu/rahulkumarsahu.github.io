import type { Post } from '../lib/posts';
import { getPostSlug, getTopicForPost } from '../lib/posts';

export interface TrustReference {
  title: string;
  url: string;
}

export interface TrustCorrection {
  date: Date;
  note: string;
}

export interface ArticleTrustRecord {
  lastReviewed?: Date;
  technologyVersions: string[];
  officialReferences: TrustReference[];
  sourceUrl: string;
  sourceCodeUrl?: string;
  knownLimitations: string[];
  corrections: TrustCorrection[];
}

const TOPIC_VERSIONS: Record<string, string[]> = {
  dsa: ['Java 21+ syntax', 'Review environment: Java 26.0.1'],
  java: ['Java 21+ concepts', 'Review environment: Java 26.0.1'],
  lld: ['Java 21+ examples', 'Review environment: Java 26.0.1'],
  'system-design': ['Vendor-neutral architecture concepts', 'No runtime dependency'],
  'cloud-native': ['Current stable platform concepts', 'See article-specific scope below'],
  ai: ['Provider-neutral concepts', 'Documentation reviewed September 2026'],
  'engineering-notes': ['Provider-neutral pipeline design', 'Documentation reviewed September 2026'],
};

const TOPIC_REFERENCES: Record<string, TrustReference[]> = {
  dsa: [
    { title: 'Java SE 26 API documentation', url: 'https://docs.oracle.com/en/java/javase/26/docs/api/' },
    { title: 'Java Language Specification', url: 'https://docs.oracle.com/javase/specs/' },
  ],
  java: [
    { title: 'Java SE 26 API documentation', url: 'https://docs.oracle.com/en/java/javase/26/docs/api/' },
    { title: 'Java Language Specification', url: 'https://docs.oracle.com/javase/specs/' },
  ],
  lld: [
    { title: 'Java SE 26 API documentation', url: 'https://docs.oracle.com/en/java/javase/26/docs/api/' },
    { title: 'Java Language Specification', url: 'https://docs.oracle.com/javase/specs/' },
  ],
  'system-design': [
    { title: 'AWS Well-Architected Framework', url: 'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html' },
    { title: 'HTTP Semantics, RFC 9110', url: 'https://www.rfc-editor.org/rfc/rfc9110.html' },
  ],
  'cloud-native': [
    { title: 'Docker documentation', url: 'https://docs.docker.com/' },
    { title: 'Kubernetes documentation', url: 'https://kubernetes.io/docs/' },
  ],
  ai: [
    { title: 'OpenAI evaluation guidance', url: 'https://platform.openai.com/docs/guides/evals' },
    { title: 'NIST AI Risk Management Framework', url: 'https://www.nist.gov/itl/ai-risk-management-framework' },
  ],
  'engineering-notes': [
    { title: 'GitHub Actions workflow commands', url: 'https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands' },
    { title: 'OpenAI evaluation guidance', url: 'https://platform.openai.com/docs/guides/evals' },
  ],
};

const TOPIC_LIMITATIONS: Record<string, string[]> = {
  dsa: ['Examples prioritize readable Java and the stated problem constraints. Platform-specific signatures and output ordering can differ.'],
  java: ['The examples explain the language or framework concept and do not cover every API, deployment model or security configuration.'],
  lld: ['Design examples demonstrate tradeoffs rather than prescribing one class model for every production system.'],
  'system-design': ['Capacity numbers are illustrative. A production design still requires measured traffic, load tests, security review and failure exercises.'],
  'cloud-native': ['Commands and manifests need to be adapted to the target runtime, operating system, security policy and managed platform.'],
  ai: ['Model behavior, prices and provider APIs change. Re-run evaluations with the exact model and data used in production.'],
  'engineering-notes': ['Pipeline formats and failure signals vary by CI provider, build tool and repository conventions.'],
};

const VERSION_OVERRIDES: Record<string, string[]> = {
  'spring-boot-request-lifecycle': ['Spring Boot 4.1.1 documentation', 'Java 17 through 26 compatibility'],
  'docker-container-fundamentals': ['Docker Engine 28.3 review environment', 'Dockerfile syntax 1.x'],
  'production-java-dockerfile': ['Docker Engine 28.3 review environment', 'Java 25 LTS base-image guidance'],
  'kubernetes-workload-fundamentals': ['Reviewed against Kubernetes 1.37 documentation', 'Applies to supported Kubernetes 1.35 through 1.37 releases'],
  'java-oop-for-low-level-design': ['Java 21+ examples', 'Java 25 flexible-constructor note', 'Review environment: Java 26.0.1'],
};

const REFERENCE_OVERRIDES: Record<string, TrustReference[]> = {
  'spring-boot-request-lifecycle': [
    { title: 'Spring Boot 4.1.1 system requirements', url: 'https://docs.spring.io/spring-boot/system-requirements.html' },
    { title: 'Spring MVC reference', url: 'https://docs.spring.io/spring-framework/reference/web/webmvc.html' },
  ],
  'docker-container-fundamentals': [
    { title: 'Dockerfile overview', url: 'https://docs.docker.com/build/concepts/dockerfile/' },
    { title: 'Docker storage documentation', url: 'https://docs.docker.com/engine/storage/' },
  ],
  'production-java-dockerfile': [
    { title: 'Docker build best practices', url: 'https://docs.docker.com/build/building/best-practices/' },
    { title: 'Docker multi-stage builds', url: 'https://docs.docker.com/build/building/multi-stage/' },
  ],
  'kubernetes-workload-fundamentals': [
    { title: 'Kubernetes workloads', url: 'https://kubernetes.io/docs/concepts/workloads/' },
    { title: 'Supported Kubernetes releases', url: 'https://kubernetes.io/releases/' },
  ],
  'url-shortener-system-design': [
    { title: 'HTTP Semantics, RFC 9110', url: 'https://www.rfc-editor.org/rfc/rfc9110.html' },
    { title: 'AWS reliability pillar', url: 'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html' },
  ],
};

const LIMITATION_OVERRIDES: Record<string, string[]> = {
  'url-shortener-system-design': [
    'The estimates are a worked example, not a substitute for measured product traffic.',
    'Multi-region write conflict resolution and analytics-pipeline implementation are intentionally left outside the first design.',
  ],
  'production-java-dockerfile': [
    'The example does not pin a real application image digest because the correct digest depends on the selected registry and release.',
    'Runtime memory limits, certificates and observability agents must be selected for the deployment environment.',
  ],
  'subsets-in-java': [
    'The article assumes distinct input values because duplicate-aware subset generation needs an additional sorting and skip rule.',
  ],
};

const CORRECTION_OVERRIDES: Record<string, TrustCorrection[]> = {
  'url-shortener-system-design': [
    { date: new Date('2026-09-06T09:00:00+05:30'), note: 'Expanded the case study into the shared twelve-part system-design format and connected the interactive design lab.' },
  ],
};

export function getArticleTrust(post: Post): ArticleTrustRecord {
  const slug = getPostSlug(post);
  const topic = getTopicForPost(post).slug;
  const sourceFile = post.id.endsWith('.md') || post.id.endsWith('.mdx') ? post.id : `${post.id}.md`;
  const frontmatterVersions = post.data.technologyVersions ?? [];
  const frontmatterReferences = post.data.officialReferences ?? [];
  const frontmatterLimitations = post.data.knownLimitations ?? [];
  const frontmatterCorrections = post.data.corrections ?? [];

  return {
    lastReviewed: post.data.lastReviewed,
    technologyVersions: frontmatterVersions.length
      ? frontmatterVersions
      : post.data.javaVersion
        ? [post.data.javaVersion, 'Review environment: Java 26.0.1']
        : VERSION_OVERRIDES[slug] ?? TOPIC_VERSIONS[topic] ?? ['Version-independent article'],
    officialReferences: frontmatterReferences.length
      ? frontmatterReferences
      : REFERENCE_OVERRIDES[slug] ?? TOPIC_REFERENCES[topic] ?? [],
    sourceUrl: `https://github.com/rahulkumarsahu/rahulkumarsahu.github.io/blob/main/src/content/posts/${sourceFile}`,
    sourceCodeUrl: post.data.sourceCodeUrl,
    knownLimitations: frontmatterLimitations.length
      ? frontmatterLimitations
      : LIMITATION_OVERRIDES[slug] ?? TOPIC_LIMITATIONS[topic] ?? ['No article-specific limitations have been recorded.'],
    corrections: frontmatterCorrections.length
      ? frontmatterCorrections.map((item) => ({ date: item.date, note: item.note }))
      : CORRECTION_OVERRIDES[slug] ?? [],
  };
}
