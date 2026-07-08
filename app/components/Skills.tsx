"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

import {
  BarChart3,
  FileSpreadsheet,
  Brain,
  Cpu,
  Database,
} from "lucide-react";

const skills = [
  { name: "Python", icon: <SiPython size={40} className="text-yellow-400" /> },
  { name: "C", icon: <SiC size={40} className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus size={40} className="text-blue-500" /> },
  { name: "SQL", icon: <SiMysql size={40} className="text-sky-400" /> },
  { name: "Git", icon: <SiGit size={40} className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub size={40} className="text-white" /> },
  { name: "Figma", icon: <SiFigma size={40} className="text-pink-500" /> },
  { name: "Power BI", icon: <BarChart3 size={40} className="text-yellow-500" /> },
  { name: "MS Excel", icon: <FileSpreadsheet size={40} className="text-green-500" /> },
  { name: "Pivot Tables", icon: <FileSpreadsheet size={40} className="text-emerald-400" /> },
  { name: "Data Visualization", icon: <BarChart3 size={40} className="text-cyan-400" /> },
  { name: "Data Cleaning", icon: <Brain size={40} className="text-pink-400" /> },
  { name: "Database", icon: <Database size={40} className="text-indigo-400" /> },
  { name: "Deep Learning", icon: <Brain size={40} className="text-purple-400" /> },
  { name: "Arduino", icon: <Cpu size={40} className="text-teal-400" /> },
  { name: "IoT", icon: <Cpu size={40} className="text-indigo-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#050816] text-white pt-52 pb-16 px-4 sm:pt-56 sm:pb-20 sm:px-6 md:pt-60 md:pb-24 md:px-10 lg:px-16 relative overflow-hidden flex flex-col items-center scroll-mt-40 lg:scroll-mt-44"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-[130px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-5xl font-black text-center mb-16 gradient-heading"
      >
        💡 My Skills 💡
      </motion.h2>

      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              rotate: 3,
              boxShadow: "0 0 25px #38bdf8",
            }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center justify-center border border-cyan-500/20"
          >
            {skill.icon}
            <h3 className="mt-4 text-lg font-semibold text-center">
              {skill.name}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}