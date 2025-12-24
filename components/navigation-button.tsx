"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
type Props = {
  id:string,
  content:React.ReactNode
}
export default function NavigationButton({id,content}:Props) {
  const router = useRouter();
  return (
    <div className="flex justify-around pb-5 pr-6">
      <Button className="cursor-pointer" onClick={() => router.replace(`/${id}`)}>{content}</Button>
    </div>
  );
}
