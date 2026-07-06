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
      className="min-h-screen bg-[#050816] text-white py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Achievements
      </motion.h2>

      <div className="max-w-5xl mx-auto grid gap-6">
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