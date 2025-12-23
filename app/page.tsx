import ArticleItemList from "@/components/article-item-list";
import { getSortedArticles } from "@/lib/articles";

export default function Home() {
  const articles = getSortedArticles();
  console.log(articles)
  return <section className="w-11/12 mx-auto md:1/2 mt-20 flex flex-col gap-16 mb-20">
    <header className="font-cormorant-garamond font-light text-6xl text-center">
      <h1>Data mining blog</h1>
    </header>
    <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
      {articles !== null && articles.map(article => <ArticleItemList key={article.id} title={article.title} id={article.id}/>)}
    </section>
  </section>;
}
