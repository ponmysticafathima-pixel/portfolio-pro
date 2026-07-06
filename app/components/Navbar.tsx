"use client";

import { motion } from "framer-motion";

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
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      bg-white/10 backdrop-blur-xl border border-white/20
      rounded-full px-8 py-4 shadow-2xl"
    >
      <ul className="flex gap-8 text-white font-semibold">
        {links.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-cyan-400 transition duration-300 hover:scale-110"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}