"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    year: "2022 - 2026",
    title: "B.E. Electronics & Communication Engineering",
    college: "Arunachala College of Engineering for Women",
    cgpa: "CGPA : 8.03",
  },
  {
    year: "2021 - 2022",
    title: "Higher Secondary Certificate",
    college: "Fatima Girls Higher Secondary School",
    cgpa: "72%",
  },
  {
    year: "2019 - 2020",
    title: "Secondary School Leaving Certificate",
    college: "Fatima Girls Higher Secondary School",
    cgpa: "67.2%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#050816] text-white py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center mb-20"
      >
        Education
      </motion.h2>

      <div className="relative max-w-5xl mx-auto">

        <div className="absolute left-6 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative ml-16 mb-14"
          >
            <div className="absolute -left-14 top-5 bg-cyan-400 p-3 rounded-full shadow-lg shadow-cyan-400/50">
              <GraduationCap size={22} />
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300 hover:shadow-cyan-500/30 hover:shadow-2xl">

              <p className="text-cyan-400 font-semibold">
                {item.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.college}
              </p>

              <span className="inline-block mt-5 bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full">
                {item.cgpa}
              </span>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}