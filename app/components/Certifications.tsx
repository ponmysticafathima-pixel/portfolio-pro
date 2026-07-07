"use client";

import { Award } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  "Data Analytics – Novitech R&D Pvt. Ltd",
  "UI/UX Design – Techvolt Software Pvt. Ltd",
  "Python Programming and Data Analytics"
];

export default function Certifications() {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-[#050816] text-white pt-28 pb-16 px-4 sm:pt-32 sm:pb-20 sm:px-6 md:pt-36 md:pb-24 md:px-10 lg:px-16 relative overflow-hidden flex flex-col items-center scroll-mt-24 lg:scroll-mt-28"
    >
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-yellow-400/10 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-cyan-500/20 blur-[130px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-5xl font-black text-center mb-16 gradient-heading"
      >
        🏆 Certifications 🏆
      </motion.h2>

      <div className="relative grid md:grid-cols-2 gap-8 w-full max-w-5xl">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20 text-center flex flex-col items-center"
          >
            <Award className="text-cyan-400 mb-4" size={34} />
            <h3 className="text-xl font-semibold">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}