import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { DSA_SECTIONS, LEARNING_PATHS } from '../data/learningPaths';
import { DSA_PATTERNS } from '../data/dsaPatterns';
import { MASTER_PROBLEMS, MASTER_TOPICS } from '../data/dsaMasterSheet';
import { SYSTEM_DESIGN_DECISIONS } from '../data/systemDesignDecisions';
import { TOPICS } from '../data/site';
import { getPostSlug, getTopicForPost } from '../lib/posts';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('posts')).filter((post) => !post.data.draft);
  const items = [
    ...posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      href: `/posts/${getPostSlug(post)}/`,
      type: 'Article',
      topic: getTopicForPost(post).shortTitle,
      keywords: [...post.data.tags, ...post.data.patterns].join(' '),
    })),
    ...TOPICS.map((topic) => ({
      title: topic.title,
      description: topic.description,
      href: `/topics/${topic.slug}/`,
      type: 'Learning track',
      topic: topic.shortTitle,
      keywords: topic.meta,
    })),
    ...DSA_SECTIONS.map((section) => ({
      title: section.title,
      description: section.description,
      href: `/dsa/${section.slug}/`,
      type: 'DSA section',
      topic: 'DSA',
      keywords: section.topics.join(' '),
    })),
    ...LEARNING_PATHS.flatMap((path) => path.groups.flatMap((group) => group.sections.map((section) => ({
      title: section.title,
      description: section.description,
      href: `/topics/${path.slug}/${section.slug}/`,
      type: 'Subsection',
      topic: path.title,
      keywords: `${group.title} ${section.topics.join(' ')}`,
    })))),
    ...DSA_PATTERNS.map((pattern) => ({
      title: pattern.name,
      description: pattern.description,
      href: `/dsa/patterns/${pattern.slug}/`,
      type: 'DSA pattern',
      topic: 'DSA',
      keywords: pattern.signals.join(' '),
    })),
    ...MASTER_PROBLEMS.map((problem) => ({
      title: problem.title,
      description: `${problem.difficulty} problem from ${problem.platform}`,
      href: problem.url,
      type: 'Practice question',
      topic: MASTER_TOPICS.find((item) => item.id === problem.topic)?.title ?? 'DSA',
      keywords: `${problem.difficulty} ${problem.patterns.join(' ')}`,
      external: true,
    })),
    ...SYSTEM_DESIGN_DECISIONS.map((decision) => ({
      title: decision.title,
      description: decision.question,
      href: '/system-design/decisions/',
      type: 'Planned decision guide',
      topic: 'System Design',
      keywords: `${decision.choices.join(' ')} ${decision.factors.join(' ')}`,
    })),
    { title: 'Production URL Shortener', description: 'A connected project across Java, Spring Boot, LLD, system design and cloud native engineering.', href: '/projects/production-url-shortener/', type: 'Project', topic: 'Connected project', keywords: 'url shortener java spring boot docker kubernetes' },
    { title: 'Universal Revision Centre', description: 'Quick revision collections across the complete Atlas.', href: '/revision/', type: 'Revision', topic: 'All tracks', keywords: 'cheat sheets review interview' },
    { title: 'Personal Study Planner', description: 'Create a local study plan from your goal and available time.', href: '/study-plan/', type: 'Learning tool', topic: 'All tracks', keywords: 'schedule goal time weekly' },
  ];

  return new Response(JSON.stringify(items), {
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
  });
};
