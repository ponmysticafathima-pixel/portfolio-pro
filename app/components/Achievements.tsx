"use client";

import { Trophy } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  "Completed multiple internships in Data Analytics and UI/UX Design.",
  "Built interactive dashboards and analytics projects using Power BI.",
  "Developed a deep learning-based medical image analysis project."
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-[#050816] text-white py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-10 lg:px-16 relative overflow-hidden flex flex-col items-center"
    >
      <div className="absolute top-10 right-10 w-72 h-72 bg-yellow-400/10 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/20 blur-[130px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-5xl font-black text-center mb-16 bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent"
      >
        🏅 Achievements 🏅
      </motion.h2>

      <div className="relative w-full max-w-5xl grid gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-lg border border-cyan-500/20 rounded-2xl p-6 flex gap-5 items-center"
          >
            <Trophy className="text-yellow-400" size={32} />
            <p>{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}