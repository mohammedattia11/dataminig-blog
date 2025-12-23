import { getArticleData } from "@/lib/articles"
import Link from "next/link"

type Props = {
  params : Promise<{article:string}>
}
export default async function ArticlePage({params}:Props) {
  const {article} = await params;
  const articleData = await getArticleData(article)
  console.log(articleData)
  return <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
    <div className="flex justify-between font-poppins">
      <Link href="/" className="flex flex-row gap-1 place-items-center">
        <p>Back to home</p>
      </Link>
      {articleData.date.toString()}
    </div>
    <article className="article" dangerouslySetInnerHTML={{__html:articleData.htmlContent}}/>
  </section>
}