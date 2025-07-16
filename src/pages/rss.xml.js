import rss from "@astrojs/rss";
import { parseArticleId } from "@utils/articles";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = await getCollection("articles");
  return rss({
    title: "Develop Bharat",
    description: "Welcome to the RSS feed offerred by Develop Bharat",
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/articles/${parseArticleId(post.id).slug}`,
    })),
  });
}
