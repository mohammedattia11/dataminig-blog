"use client";

import { useEffect, useState } from "react";

export default function BackTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`
        fixed bottom-6 right-6 z-50
        rounded-full bg-zinc-100 text-black text-xs
        px-3 py-2 shadow-lg
        transition-opacity duration-300 cursor-pointer
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      ↑
    </button>
  );
}