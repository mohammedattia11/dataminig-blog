"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

function TubeLightNavbar() {
  const [activeTab, setActiveTab] = useState("Chapters");
  const [isMobile, setIsMobile] = useState(false);

  // --- Scroll Visibility Logic ---
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", latest => {
    const previous = scrollY.getPrevious() ?? 0;
    // Hide if scrolling down and scrolled more than 50px
    if (latest > previous && latest > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  });

  const tabs = [
    { name: "Chapters", url: "/", icon: <GoHomeFill /> },
    {
      name: "Problem solving",
      url: "/problem-solving",
      icon: <BsPatchQuestionFill />,
    },
    { name: "Summaries", url: "/summaries", icon: <FaBriefcase /> },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      // Fixed positioning and animation
      initial={{ y: 0 }}
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-5 pointer-events-none"
    >
      <div className="flex items-center gap-3 bg-white/5 border border-gray-500/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg shadow-black pointer-events-auto">
        {tabs.map(tab => (
          <Link
            key={tab.name}
            href={tab.url}
            onClick={() => setActiveTab(tab.name)}
            className={`relative cursor-pointer text-sm text-white px-6 py-2 rounded-full transition-colors ${
              activeTab === tab.name
                ? "text-white"
                : "text-white/60 hover:text-white"
            }`}
            style={{
              backgroundColor:
                activeTab === tab.name
                  ? "rgba(255, 255, 255, 0.15)"
                  : "transparent",
            }}
          >
            <span className="hidden md:inline">{tab.name}</span>
            <span className="md:hidden text-lg">{tab.icon}</span>

            {activeTab === tab.name && (
              <motion.div
                layoutId="lamp"
                // 1. Positioned absolute relative to this Link
                // 2. left-1/2 and -translate-x-1/2 centers it perfectly
                className="absolute left-1/2 -translate-x-1/2 -top-2 w-10 h-1 bg-white rounded-t-full"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Glow Effects - Also centered by parent */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-12 bg-white rounded-full blur-md opacity-20 -top-3" />
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full blur-md opacity-10 -top-2" />
              </motion.div>
            )}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

export default TubeLightNavbar;
