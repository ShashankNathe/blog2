import { getBlogPosts } from "app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://shashanknathe.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/contact", "/work"].map((route) => ({
    url: `https://shashanknathe.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
