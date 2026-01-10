"use client";

import { useEffect, useState } from "react";

type Props = {
  htmlContent: string;
};

export default function ArticleContent({ htmlContent }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState("");

  const handleContentClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (target.tagName === "IMG") {
      const img = target as HTMLImageElement;
      setCurrentImgSrc(img.src);
      setIsOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImgSrc("");
  };

  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (isOpen) {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      }
    });
    return () =>
      document.removeEventListener("keydown", e => {
        if (isOpen) {
          console.log(e.key);
        }
      });
  }, [currentImgSrc, isOpen]);

  return (
    <>
      <article
        className="prose prose-zinc prose-headings:text-pink-500 prose-headings:text-lg prose-blockquote:text-sm prose-p:text-zinc-200 prose-p:text-sm prose-li:text-sm prose-strong:text-sm sm:prose-p:text-base sm:prose-li:text-base sm:prose-strong:text-base prose-li:text-zinc-200 prose-code:text-pink-200 prose-strong:text-pink-300 prose-img:rounded-xl md:prose-p:text-lg md:prose-li:text-lg md:prose-headings:text-xl"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        onClick={handleContentClick}
      />

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity"
          onClick={closeLightbox}
        >
          <div className="relative p-4">
            <img
              src={currentImgSrc}
              alt="Preview"
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-md shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
