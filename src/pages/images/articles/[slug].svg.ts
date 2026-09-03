import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderArticleBannerSvg } from '../../../lib/articleBannerSvg';
import { getPostBanner } from '../../../lib/postBanners';
import { getPostSlug, getSortedPosts } from '../../../lib/posts';

export async function getStaticPaths() {
  return getSortedPosts(await getCollection('posts')).map((post) => ({
    params: { slug: getPostSlug(post) },
    props: { post },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const banner = getPostBanner(props.post);
  return new Response(renderArticleBannerSvg(props.post.data.title, banner.label, banner.visual), {
    headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' },
  });
};
