import { getSortedArticles } from "./articles";

export function getPrevNextArticle(currentId: string) {
  const articles = getSortedArticles();

  const index = articles.findIndex(
    article => article.id === currentId
  );

  if (index === -1) {
    return { prev: null, next: null };
  }

  return {
    prev: articles[index - 1] ?? null,
    next: articles[index + 1] ?? null,
  };
}