import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../data/site';
import { getPostSlug, getSortedPosts } from '../lib/posts';

export async function GET(context) {
  const posts = getSortedPosts(await getCollection('posts'));

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site,
    customData: '<language>en-in</language>',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${getPostSlug(post)}/`,
      categories: post.data.categories,
    })),
  });
}
