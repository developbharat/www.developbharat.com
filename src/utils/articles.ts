export const parseArticleId = (id: string) => {
  // split the post id from format /<category>/<slug>/article
  const splits = id.split("/");
  if (splits.length <= 2) throw new Error("Invalid post id found.");
  return {
    category: splits[0],
    slug: splits[1],
    path: splits[0] + "/" + splits[1],
  };
};
