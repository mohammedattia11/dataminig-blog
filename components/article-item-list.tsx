import { ArticleType } from "@/types";
import Link from "next/link";

type Props = {
  category:string;
  articles:ArticleType[]
}
export default function ArticleItemList({category,articles}:Props) {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-cormorant-garamond text-4xl">{category}</h2>
      <div className="flex flex-col gap-2.5 font-poppins text-xl">
        {articles.map(article => (
          <Link href={`/${article.id}`} key={article.id} className="text-neutral-900 hover:text-amber-700 transition duration-150">
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  )
}