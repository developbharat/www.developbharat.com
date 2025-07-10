import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "@utils/consts";
import { parseArticleId } from "@utils/articles";

export async function GET(context) {
  const posts = await getCollection("articles");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/articles/${parseArticleId(post.id).slug}`,
    })),
  });
}
