import { getArticleData } from "@/lib/articles";
import style from "./article.module.css"
type Props = {
  params: Promise<{ article: string }>;
};
export default async function ArticlePage({ params }: Props) {
  const { article } = await params;
  const articleData = await getArticleData(article);
  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5 pt-6">
      <article
        className={style.article}
        dangerouslySetInnerHTML={{ __html: articleData.htmlContent }}
      />
    </section>
  );
}
