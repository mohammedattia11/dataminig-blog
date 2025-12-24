import { GlassBlogCard } from "@/components/glass-blog-card";
import { getSortedArticles } from "@/lib/articles";

export default function Home() {
  const articles = getSortedArticles();
  return (
    <section className="w-11/12 mx-auto md:1/2 mt-10 flex flex-col gap-12 mb-20 pt-16">
      {/* <header className="font-cormorant-garamond font-light text-6xl text-center"> */}
        {/* <h1>Data mining blog</h1> */}
      {/* </header> */}
      <section className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center flex flex-col gap-5">
        {articles !== null &&
          articles.map(article => (
            <GlassBlogCard
              id={article.id}
              image={article.backgroundImage}
              key={article.id}
              title={article.title}
              tags={article.tags}
            />
          ))}
      </section>
    </section>
  );
}
