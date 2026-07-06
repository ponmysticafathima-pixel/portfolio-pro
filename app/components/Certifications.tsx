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
      className="min-h-screen bg-[#050816] text-white py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center mb-16"
      >
        Certifications
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20"
          >
            <Award className="text-cyan-400 mb-4" size={34} />
            <h3 className="text-xl font-semibold">{item}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}