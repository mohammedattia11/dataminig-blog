import { ArticleType } from "@/types";
import Link from "next/link";

type Props = {
  title:string,
  id:string
}
export default function ArticleItemList({title,id}:Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 font-poppins text-xl">
        <Link href={`/${id}`} key={id} className=" hover:text-amber-700 transition duration-150">
            {title}
          </Link>
      </div>
    </div>
  )
}