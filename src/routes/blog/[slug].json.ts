import type { Post } from '$lib/blog/common/types';
import { notFound } from '$lib/shared/server/response';
import { getPost } from '$lib/blog/server/model';

export function get({ params }) {
  const { slug } = params;

  const { html, metadata } = getPost(slug);

  if (!html || !metadata) {
    return notFound;
  }

  return {
    body: {
      html,
      metadata
    } as Post
  };
}
