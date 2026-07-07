"use client";

import { User, Link, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-8 text-white">
      <div className="flex justify-center gap-6 mb-5">
        <a href="https://github.com/ponmysticafathima-pixel" target="_blank">
          <User className="hover:text-cyan-400" size={28} />
        </a>

        <a
          href="https://linkedin.com/in/pon-mystica-fathima-s-5849b7259"
          target="_blank"
        >
          <Link className="hover:text-cyan-400" size={28} />
        </a>

        <a href="mailto:ponmysticafathima@gmail.com">
          <Mail className="hover:text-cyan-400" size={28} />
        </a>
      </div>

      <p className="text-center text-gray-400">
        © 2026 Pon Mystica Fathima S. All Rights Reserved.
      </p>
    </footer>
  );
}