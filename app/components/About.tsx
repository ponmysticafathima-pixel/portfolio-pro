"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  BarChart3,
  Sparkles,
  Target,
  Brain,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Final Year B.E. Electronics & Communication Engineering",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Code2,
    title: "Technical Skills",
    desc: "Python • SQL • Power BI • Excel • C • GitHub",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Target,
    title: "Career Goal",
    desc: "To become a successful Data Analyst and solve real business problems.",
    color: "from-green-400 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Problem Solving",
    desc: "Love analysing data, creating dashboards and learning new technologies.",
    color: "from-orange-400 to-red-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#050816] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent"
      >
        ✨ About Me ✨
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-gray-300 max-w-4xl mx-auto leading-9 text-xl"
      >
        I am a final-year Electronics & Communication Engineering student
        passionate about Data Analytics, Python, SQL, Excel and Power BI.
        I enjoy solving problems, building dashboards and transforming raw data
        into meaningful business insights.
      </motion.p>

      {/* Stats */}

      <div className="grid md:grid-cols-4 gap-6 mt-20">

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/20 text-center"
        >
          <h1 className="text-5xl font-black text-cyan-400">8.03</h1>
          <p className="mt-3 text-gray-300">CGPA</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/20 text-center"
        >
          <h1 className="text-5xl font-black text-pink-400">10+</h1>
          <p className="mt-3 text-gray-300">Skills</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20 text-center"
        >
          <h1 className="text-5xl font-black text-green-400">5+</h1>
          <p className="mt-3 text-gray-300">Certificates</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.08 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 text-center"
        >
          <h1 className="text-5xl font-black text-yellow-400">100%</h1>
          <p className="mt-3 text-gray-300">Passion</p>
        </motion.div>

      </div>

      {/* Cards */}

      <div className="grid md:grid-cols-2 gap-10 mt-20">

        {cards.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-lg"
            >
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}
              >
                <Icon className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-3xl font-bold mt-6">{item.title}</h2>

              <p className="text-gray-300 mt-5 leading-8">
                {item.desc}
              </p>
            </motion.div>
          );
        })}

      </div>

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        className="flex justify-center mt-20"
      >
        <Sparkles className="w-14 h-14 text-cyan-400" />
      </motion.div>
    </section>
  );
}