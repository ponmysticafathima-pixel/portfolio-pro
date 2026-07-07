"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Link, User } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050816] text-white py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-10 lg:px-16 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500/20 blur-[130px] rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative bg-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 max-w-3xl w-full"
      >
        <h2 className="text-5xl font-black text-center mb-10 bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent">
          📩 Contact Me 📩
        </h2>

        <div className="space-y-6 text-lg">
          <div className="flex gap-4 items-center">
            <Mail className="text-cyan-400" />
            <span>ponmysticafathima@gmail.com</span>
          </div>

          <div className="flex gap-4 items-center">
            <Phone className="text-green-400" />
            <span>+91 9345236729</span>
          </div>

          <div className="flex gap-4 items-center">
            <MapPin className="text-pink-400" />
            <span>Vallioor, Tamil Nadu, India</span>
          </div>

          <div className="flex gap-4 items-center">
            <Link className="text-blue-400" />
            <a
              href="https://linkedin.com/in/pon-mystica-fathima-s-5849b7259"
              target="_blank"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <User className="text-white" />
            <a href="https://github.com/ponmysticafathima-pixel" target="_blank">
              GitHub Profile
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}