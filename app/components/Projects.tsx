"use client";

import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  BarChart3,
  Activity,
  Database,
  Microscope,
  Cpu,
  Table2,
} from "lucide-react";

const projects = [
  {
    title: "IPL Cricket Analytics Dashboard",
    tech: "Power BI • Excel",
    icon: <BarChart3 className="text-cyan-400" size={40} />,
    desc: "Interactive dashboard for match, team and player performance analysis.",
  },
  {
    title: "Monthly Performance Dashboard",
    tech: "Power BI • Excel",
    icon: <Activity className="text-green-400" size={40} />,
    desc: "KPI dashboard to monitor monthly revenue and business performance.",
  },
  {
    title: "Sales Analysis Dashboard",
    tech: "Power BI",
    icon: <Database className="text-yellow-400" size={40} />,
    desc: "Analyzed revenue trends, regional performance and top products.",
  },
  {
    title: "Pivot Table Analysis Dashboard",
    tech: "Excel",
    icon: <Table2 className="text-purple-400" size={40} />,
    desc: "Created KPI reports using Excel Pivot Tables and trend analysis.",
  },
  {
    title: "Complete Blood Check Using Mask R-CNN",
    tech: "Python • OpenCV • Deep Learning",
    icon: <Microscope className="text-pink-400" size={40} />,
    desc: "Blood cell detection system to identify RBC, WBC and Platelets.",
  },
  {
    title: "Arduino Real-Time Path Finding",
    tech: "Arduino • IoT",
    icon: <Cpu className="text-orange-400" size={40} />,
    desc: "Obstacle detection and navigation system using Arduino sensors.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                rotateX: 8,
                rotateY: -8,
              }}
              transition={{ duration: 0.4 }}
              className="group bg-white/10 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 shadow-xl hover:border-cyan-400 hover:shadow-cyan-500/30"
            >

              <div className="mb-6">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {project.title}
              </h3>

              <p className="text-cyan-400 mt-2">
                {project.tech}
              </p>

              <p className="text-gray-300 mt-5 leading-7">
                {project.desc}
              </p>

              <button className="mt-8 flex items-center gap-3 rounded-full border border-cyan-400 px-5 py-3 hover:bg-cyan-500 transition">
                <FaGithub />
                GitHub
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}