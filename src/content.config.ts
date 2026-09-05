import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    lastReviewed: z.coerce.date().optional(),
    javaVersion: z.string().optional(),
    technologyVersions: z.array(z.string()).default([]),
    officialReferences: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
    })).default([]),
    sourceCodeUrl: z.string().url().optional(),
    knownLimitations: z.array(z.string()).default([]),
    corrections: z.array(z.object({
      date: z.coerce.date(),
      note: z.string(),
    })).default([]),
    description: z.string().default(''),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    topic: z.enum(['dsa', 'java', 'lld', 'system-design', 'cloud-native', 'ai', 'engineering-notes']).optional(),
    series: z.string().optional(),
    learningSection: z.string().optional(),
    difficulty: z.enum(['basics', 'easy', 'medium', 'hard']).optional(),
    contentType: z.enum(['concept', 'pattern', 'problem', 'case-study']).optional(),
    patterns: z.array(z.enum([
      'array-traversal',
      'running-answer',
      'two-pointers',
      'in-place-compaction',
      'reversal',
      'hashing',
      'prefix-sum',
      'xor',
      'recursion',
      'backtracking',
    ])).default([]),
    order: z.number().int().nonnegative().optional(),
    image: z.string().optional(),
    math: z.boolean().optional(),
    mermaid: z.boolean().optional(),
    interactive: z.enum(['recursion-call-stack', 'subsets-backtracking']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
