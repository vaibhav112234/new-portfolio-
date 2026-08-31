

import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaReact,
    FaJs,
    FaGitAlt,
    FaDocker,
    FaDatabase,
} from "react-icons/fa";
import {
    SiRedux,
    SiTailwindcss,
    SiFastapi,
} from "react-icons/si";

const techStack = [
    { icon: <FaReact />, name: "React", brandColor: "#61DAFB" },
    { icon: <SiRedux />, name: "Redux", brandColor: "#764ABC" },
    { icon: <FaJs />, name: "JavaScript", brandColor: "#F7DF1E" },
    { icon: <SiTailwindcss />, name: "Tailwind", brandColor: "#06B6D4" },
    { icon: <SiFastapi />, name: "FastAPI", brandColor: "#009688" },
    { icon: <FaDatabase />, name: "MySQL", brandColor: "#4479A1" },
    { icon: <FaDocker />, name: "Docker", brandColor: "#2496ED" },
    { icon: <FaGitAlt />, name: "Git", brandColor: "#F05032" },
];

const CARD_COUNT = techStack.length;
const RADIUS = 140; // pixels

export default function About() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section
            id="about"
            className="relative bg-slate-950 py-24 overflow-hidden"
        >
            {/* Background Blur Orbs */}
            <div className="absolute top-20 -left-32 w-72 h-72 bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[130px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-blue-400 uppercase tracking-[5px]">
                        About Me
                    </p>
                    <h2 className="text-5xl text-amber-50 font-bold mt-4">
                        Passionate Full stack Developer
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT — Main About Card + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Glass main card — gently floating */}
                        <motion.div
                            // animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl shadow-slate-900/40"
                        >
                            <h3 className="text-3xl text-amber-50 font-bold mb-6">
                                Hi 👋 I'm Vaibhav
                            </h3>

                            <p className="text-slate-300 leading-8">
                                I'm a passionate Full stack Developer with experience building
                                modern trading platforms, Ecommerce websites, reusable UI
                                components and high-performance web applications.
                            </p>

                            <p className="text-slate-300 leading-8 mt-6">
                                I enjoy solving real-world problems, integrating APIs,
                                optimizing user experience and building scalable frontend
                                architectures using React, Redux and modern JavaScript.
                            </p>

                            {/* Stats Cards — floating glass */}
                            <div className="grid grid-cols-2 gap-5 mt-10">
                                {[
                                    { value: "2+", label: "Years Experience", delay: 0 },
                                    { value: "5+", label: "Projects", delay: 0.4 },
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        // animate={{ y: [0, -8, 0] }}
                                        transition={{
                                            duration: 3.5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: stat.delay,
                                        }}
                                        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 shadow-xl"
                                    >
                                        <h4 className="text-4xl font-bold text-blue-400">
                                            {stat.value}
                                        </h4>
                                        <p className="text-slate-400 mt-2">
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Tech Stack Circular Orbit with Color on Hover */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center"
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-3xl text-amber-50 font-bold mb-8 text-center"
                        >
                            Tech Stack
                        </motion.h3>

                        {/* Circular container — rotates continuously */}
                        <motion.div
                            className="relative w-[450px] h-[450px]"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            style={{
                                transformOrigin: "center center",
                            }}
                        >
                            {techStack.map((tech, index) => {
                                const angle = (index / CARD_COUNT) * 2 * Math.PI;
                                const x = RADIUS * Math.cos(angle);
                                const y = RADIUS * Math.sin(angle);
                                const isHovered = hoveredIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.4 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.08,
                                        }}
                                        whileHover={{
                                            scale: 1.25,
                                            transition: { duration: 0.15 },
                                        }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                        className="absolute rounded-2xl p-4 flex flex-col items-center justify-center shadow-xl transition-colors duration-300"
                                        style={{
                                            left: `calc(50% + ${x}px - 50px)`,
                                            top: `calc(50% + ${y}px - 50px)`,
                                            width: "100px",
                                            height: "100px",
                                            // Counter-rotate to keep text upright
                                            transform: `rotate(${-360}deg)`,
                                            transformOrigin: "center center",
                                            // Glass effect with dynamic color on hover
                                            backgroundColor: isHovered
                                                ? tech.brandColor + "30" // semi-transparent brand color
                                                : "rgba(255,255,255,0.05)",
                                            backdropFilter: "blur(12px)",
                                            border: isHovered
                                                ? `2px solid ${tech.brandColor}`
                                                : "1px solid rgba(255,255,255,0.1)",
                                            boxShadow: isHovered
                                                ? `0 0 30px ${tech.brandColor}40`
                                                : "0 10px 30px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        <div
                                            className="text-4xl mb-2 transition-colors duration-300"
                                            style={{
                                                color: isHovered
                                                    ? tech.brandColor
                                                    : "#60a5fa", // blue-400
                                            }}
                                        >
                                            {tech.icon}
                                        </div>
                                        <p
                                            className="text-sm font-medium text-center transition-colors duration-300"
                                            style={{
                                                color: isHovered
                                                    ? tech.brandColor
                                                    : "#cbd5e1", // slate-300
                                            }}
                                        >
                                            {tech.name}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}