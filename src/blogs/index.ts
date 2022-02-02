export interface Blog {
  id: number;
  title: string;
  slug: string;
  /** UTC ISO */
  date: string;
  /** x min read */
  readTime: number;
  /** maps to blog file ../../blogs/[file].md */
  file: string;
  image: string;
}
export const BLOGS: Record<number, Omit<Blog, 'id'>> = {
  1: {
    title: 'Example Post 1',
    slug: 'post1baby',
    date: '2022-01-30T23:14:36+0000',
    readTime: 2,
    file: 'post1',
    image:
      'https://images.unsplash.com/photo-1533439207768-df03fe36717b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80',
  },
  2: {
    title: 'Example Post 2',
    slug: 'post2',
    date: '2022-01-28T23:14:36+0000',
    readTime: 12,
    file: 'post2',
    image:
      'https://images.unsplash.com/photo-1643108798320-9742e8299934?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80',
  },
  3: {
    title: 'Example Post 3',
    slug: 'woah',
    date: '2022-01-26T23:14:36+0000',
    readTime: 20,
    file: 'post3',
    image:
      'https://images.unsplash.com/photo-1643054370512-3e1ab5e181ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2831&q=80',
  },
};

export const allBlogs = (() =>
  Object.entries(BLOGS).map(
    ([id, blog]) => ({ ...blog, id: Number(id) } as Blog),
  ))();

export const featuredBlogs = allBlogs.slice(0, 3);
