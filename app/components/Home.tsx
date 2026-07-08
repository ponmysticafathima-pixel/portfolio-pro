"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  User,
  Link,
  Sparkles,
  Star,
  Rocket,
} from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816]"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      </div>

      <div className="relative w-full max-w-5xl mx-6 sm:mx-8 md:mx-4 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-1 left-1 sm:-top-8 sm:-left-6 md:-top-10 md:-left-10 text-base sm:text-4xl z-20"
        >
          🚀
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="absolute bottom-1 left-1 sm:-bottom-8 sm:-left-6 md:-bottom-10 md:-left-10 text-base sm:text-4xl z-20"
        >
          💻
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="absolute top-1 right-1 sm:-top-8 sm:-right-6 md:-top-10 md:-right-10 text-base sm:text-4xl z-20"
        >
          📊
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute bottom-1 right-1 sm:-bottom-8 sm:-right-6 md:-bottom-10 md:-right-10 z-20"
        >
          <Sparkles className="text-yellow-300 w-4 h-4 sm:w-12 sm:h-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 backdrop-blur-3xl bg-white/10 border border-white/20 rounded-[40px] px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16 shadow-[0_0_60px_rgba(0,255,255,0.3)] text-center w-full overflow-hidden"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="flex justify-center mb-5"
          >
            <Rocket className="text-cyan-400 w-16 h-16" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight gradient-name drop-shadow-[0_2px_16px_rgba(217,70,239,0.55)]"
          >
            Pon Mystica Fathima
          </motion.h1>

          <div className="mt-6 text-xl sm:text-3xl font-bold text-cyan-300 whitespace-normal break-words px-2">
            <TypeAnimation
              sequence={[
                "Aspiring Data Analyst 📊",
                2000,
                "Python Developer 🐍",
                2000,
                "Power BI Enthusiast 📈",
                2000,
                "SQL Learner 💾",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </div>

          <div className="w-full flex justify-center">
            <p className="text-center text-gray-300 text-lg mt-8 max-w-3xl leading-8">
              Passionate about transforming raw data into meaningful insights using
              Python, SQL, Excel and Power BI. I enjoy solving problems, creating
              dashboards and continuously learning new technologies.
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px cyan" }}
              whileTap={{ scale: 0.9 }}
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 font-bold text-black"
            >
              Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 30px #ff00ff" }}
              whileTap={{ scale: 0.9 }}
              href="#contact"
              className="px-8 py-4 rounded-full border-2 border-pink-400 font-bold text-white"
            >
              Contact
            </motion.a>
          </div>

          <div className="flex justify-center gap-8 mt-12">
            <motion.a
              whileHover={{ scale: 1.3, rotate: 360 }}
              href="https://github.com/ponmysticafathima-pixel"
              target="_blank"
            >
              <User className="w-10 h-10 text-white hover:text-cyan-400" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.3, rotate: 360 }}
              href="https://linkedin.com/in/pon-mystica-fathima-s-5849b7259"
              target="_blank"
            >
              <Link className="w-10 h-10 text-cyan-400" />
            </motion.a>

            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 10 }}
            >
              <Star className="text-yellow-400 w-10 h-10" />
            </motion.div>
          </div>

          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-10 text-cyan-300"
          >
            ✨ Welcome to My Portfolio ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}