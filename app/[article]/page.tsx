import { getArticleData } from "@/lib/articles";

type Props = {
  params: Promise<{ article: string }>;
};
export default async function ArticlePage({ params }: Props) {
  const { article } = await params;
  const articleData = await getArticleData(article);
  return (
    <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
      <article
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.htmlContent }}
      />
    </section>
  );
}
