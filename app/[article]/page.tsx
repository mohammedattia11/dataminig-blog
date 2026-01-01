import NavigationButton from "@/components/navigation-button";
import { getArticleData } from "@/lib/articles";
import { getPrevNextArticle } from "@/lib/get-prev-next-slugs";
import ArticleContent from "@/components/article-content";
type Props = {
  params: Promise<{ article: string }>;
};
export default async function ArticlePage({ params }: Props) {
  const { article } = await params;
  const articleData = await getArticleData(article);
  const { prev, next } = getPrevNextArticle(article);
  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5 pt-6">
      <ArticleContent htmlContent={articleData.htmlContent}/>
      {(prev !== null || next !== null) && (
        <div className="flex justify-center pb-5 pr-6">
          {prev !== null && <NavigationButton id={prev.id} content="Prev" />}
          {next !== null && <NavigationButton id={next.id} content="Next" />}
        </div>
      )}
    </section>
  );
}
