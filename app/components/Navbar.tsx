"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  "Home",
  "About",
  "Education",
  "Skills",
  "Projects",
  "Certificates",
  "Achievements",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map((item) =>
      document.getElementById(item.toLowerCase())
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 z-50
        bg-black/30 backdrop-blur-xl border border-cyan-500/20
        rounded-full px-8 py-4 shadow-2xl"
      >
        <ul className="flex items-center gap-8 text-white font-semibold">
          {links.map((item) => {
            const isActive = active === item.toLowerCase();
            return (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : "hover:text-cyan-400"
                  }`}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden fixed top-4 left-4 right-4 z-50">
        <div className="flex items-center justify-between bg-[#0B1120]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl px-5 py-4 shadow-xl">
          <h1 className="text-lg font-bold text-cyan-400">Portfolio</h1>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-white" size={30} />
            ) : (
              <Menu className="text-white" size={30} />
            )}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-2xl bg-[#0B1120]/95 backdrop-blur-xl border border-cyan-500/30 overflow-hidden"
          >
            {links.map((item) => {
              const isActive = active === item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 transition ${
                    isActive
                      ? "bg-cyan-500/20 text-cyan-400"
                      : "text-white hover:bg-cyan-500/20 hover:text-cyan-400"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
}