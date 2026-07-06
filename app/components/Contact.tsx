"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Link,
  User
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#050816] text-white py-24 px-6 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-10 max-w-3xl w-full"
      >
        <h2 className="text-5xl font-bold text-center mb-10">
          Contact Me
        </h2>

        <div className="space-y-6 text-lg">

          <div className="flex gap-4 items-center">
            <Mail className="text-cyan-400"/>
            <span>ponmysticafathima@gmail.com</span>
          </div>

          <div className="flex gap-4 items-center">
            <Phone className="text-green-400"/>
            <span>+91 9345236729</span>
          </div>

          <div className="flex gap-4 items-center">
            <MapPin className="text-pink-400"/>
            <span>Vallioor, Tamil Nadu, India</span>
          </div>

          <div className="flex gap-4 items-center">
            <Link className="text-blue-400"/>
            <a
              href="https://linkedin.com/in/pon-mystica-fathima-s-5849b7259"
              target="_blank"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex gap-4 items-center">
            <User className="text-white"/>
            <a
              href="https://github.com/ponmysticafathima-pixel"
              target="_blank"
            >
              GitHub Profile
            </a>
          </div>

        </div>

      </motion.div>
    </section>
  );
}