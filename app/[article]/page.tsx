import { getArticleData } from "@/lib/articles";
import { getPrevNextArticle } from "@/lib/get-prev-next-slugs";
import style from "./article.module.css";
import NavigationButton from "@/components/navigation-button";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
type Props = {
  params: Promise<{ article: string }>;
};
export default async function ArticlePage({ params }: Props) {
  const { article } = await params;
  const articleData = await getArticleData(article);
  const { prev, next } = getPrevNextArticle(article);
  console.log(prev)
  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5 pt-6">
      <article
        className={style.article}
        dangerouslySetInnerHTML={{ __html: articleData.htmlContent }}
      />
      {(prev !== null || next !== null) && (
          <div className="flex justify-center pb-5 pr-6">
            {prev !== null && <NavigationButton id={prev.id} content="Prev" />}
            {next !== null && <NavigationButton id={next.id} content="Next"/>}
          </div>
        )}
    </section>
  );
}
