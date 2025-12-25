"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ErrorPage1 = () => {
  return (
    <div className="mx-auto flex min-h-dvh flex-col items-center justify-center gap-8 p-8 md:gap-12 md:p-16">
      <div className="relative h-100 w-100">
        <Image
          src="/404.png"
          alt="placeholder image"
          className="aspect-video h-full w-full rounded-xl object-cover dark:brightness-[0.95]"
          fill
        />
      </div>
      <div className="text-center">
        <h1 className="mb-2 text-3xl font-bold">Page Not Found</h1>
        <p>Oops! The page you&apos;re trying to access doesn&apos;t exist.</p>
        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
          <Button className="cursor-pointer">
            <Link href="/">Go Back Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage1;
