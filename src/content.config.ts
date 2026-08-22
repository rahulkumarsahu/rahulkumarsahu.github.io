import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    layout: z.string().optional(),
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    description: z.string().default(''),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    topic: z.enum(['dsa', 'java', 'lld', 'system-design', 'cloud-native', 'ai', 'engineering-notes']).optional(),
    series: z.string().optional(),
    learningSection: z.string().optional(),
    difficulty: z.enum(['basics', 'easy', 'medium', 'hard']).optional(),
    contentType: z.enum(['concept', 'pattern', 'problem', 'case-study']).optional(),
    order: z.number().int().nonnegative().optional(),
    image: z.string().optional(),
    math: z.boolean().optional(),
    mermaid: z.boolean().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
