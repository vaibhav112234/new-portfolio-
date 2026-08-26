import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiFastapi,
  SiMysql,
} from "react-icons/si";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// ─── Reuse mouse hook from your project ───
import useMousePosition from "../hooks/useMousePosition";



// ─── Data ───
const technologies = [
  { icon: <FaReact />, title: "React", color: "#61DAFB", description: "Modern UI Library" },
  { icon: <SiRedux />, title: "Redux", color: "#764ABC", description: "State Management" },
  { icon: <FaJs />, title: "JavaScript", color: "#F7DF1E", description: "ES6+ Programming" },
  { icon: <SiTailwindcss />, title: "Tailwind", color: "#38BDF8", description: "Utility CSS" },
  { icon: <SiFastapi />, title: "FastAPI", color: "#10B981", description: "Backend API" },
  { icon: <SiMysql />, title: "MySQL", color: "#3B82F6", description: "Database" },
  { icon: <FaDocker />, title: "Docker", color: "#2496ED", description: "Containerization" },
  { icon: <FaGitAlt />, title: "Git", color: "#F1502F", description: "Version Control" },
];

const skillsData = [
  { name: "React", value: 95, color: "#61DAFB" },
  { name: "JavaScript", value: 92, color: "#F7DF1E" },
  { name: "Redux", value: 90, color: "#764ABC" },
  { name: "Node Js", value: 92, color: "#38BDF8" },
];

// ─── Animated Circular Progress (counts up) ───
function AnimatedProgress({ value, color }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = 0;
      const duration = 1400;
      const stepTime = 16;
      const steps = duration / stepTime;
      const increment = value / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCurrent(value);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="w-36 h-36 mx-auto">
      <CircularProgressbar
        value={current}
        text={`${current}%`}
        styles={buildStyles({
          pathColor: color,
          textColor: "#fff",
          trailColor: "#1e293b",
          strokeLinecap: "round",
          pathTransitionDuration: 0.5,
        })}
      />
    </div>
  );
}

// ─── Main Component ───
export default function Skills() {
  const mouse = useMousePosition();

  // Mouse-follow glow style
  const glowStyle = {
    background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(59,130,246,0.08) 0%, transparent 70%)`,
  };

  // Variants for staggered floating cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Floating animation for icons (subtle up/down)
  const iconFloat = {
    initial: { y: 0 },
    animate: {
      y: [0, -6, 0],
      transition: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* ── Mouse-follow glow ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={glowStyle}
      />

      {/* ── Static background glows ── */}
      <div className="absolute -top-20 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] animate-pulse" />

      {/* ── Floating orbs (extra visual flair) ── */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-blue-500/5 blur-3xl animate-spin-slow" />
      <div className="absolute bottom-1/4 left-10 w-28 h-28 rounded-full bg-purple-500/5 blur-3xl animate-spin-slow" style={{ animationDirection: "reverse" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase tracking-[5px] text-blue-400"
          >
            Skills
          </motion.p>

          <h2 className="text-5xl text-amber-50 font-bold mt-4">
            Technologies I Work With
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Building modern, scalable, and responsive web applications
            with the latest frontend technologies.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* ── LEFT: Tech Cards ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {technologies.map((tech) => (
              <motion.div
                key={tech.title}
                variants={cardVariants}
                whileHover={{
                  scale: 1.06,
                  y: -12,
                  rotateY: 8,
                  rotateX: 4,
                  boxShadow: `0 0 40px ${tech.color}40`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 12,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 cursor-pointer"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700"
                >
                  <div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full blur-3xl"
                    style={{
                      background: tech.color,
                      opacity: 0.25,
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-col items-center ">
                  {/* Icon with floating animation */}
                  <motion.div
                    variants={iconFloat}
                    initial="initial"
                    animate="animate"
                    className="text-5xl mt-8 mb-4 transition duration-500 group-hover:scale-125"
                    style={{ color: tech.color }}
                  >
                    {tech.icon}
                  </motion.div>

                  <h3 className="font-semibold text-lg text-white">{tech.title}</h3>
                  <p className="text-xs text-slate-400 mt-2 text-center">
                    {tech.description}
                  </p>
                </div>

                {/* Bottom shine line */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* ── RIGHT: Circular Skills ── */}
          <div className="grid grid-cols-2 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.04,
                  boxShadow: `0 0 30px ${skill.color}30`,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300"
              >
                <AnimatedProgress value={skill.value} color={skill.color} />
                <h3 className="mt-6 text-center  text-white font-semibold text-lg">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Scroll-triggered progress bar (extra flair) ── */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-20 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
      </div>
    </section>
  );
}