import type { Post } from '$lib/blog/common/types';
import { pathToBlogs } from './constants';
import { parse } from './parse';

export const getPost = (slug: string) => {
  const { html, metadata } = parse(pathToBlogs + `/${slug}.md`);
  return {
    html,
    metadata: {
      ...metadata,
      slug
    }
  } as Post;
};
