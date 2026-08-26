import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import tradingbot from "../assets/trading.png";
import Navatatva from "../assets/Navtatva.png";
import hrms from "../assets/hrms.png";

const projects = [
  {
    title: "Trading Bot",
    image: tradingbot,
    description:
      "A professional trading platform with Backtesting, Forward Testing, Live Trading, Strategy Management, Broker Integration and Dashboard Analytics.",

    technologies: [
      "React",
      "Redux",
      "FastAPI",
      "MySQL",
      "Docker",
    ],

    github: "#",

    demo: "https://tbf-app.softlabsgroup.in/",
  },

  {
    title: "Navtatva",

    image: Navatatva,

    description:
      "Responsive shopping application with authentication, cart management and product filtering.",

    technologies: [
      "Next Js",
      "Node Js",
      "MySQL",
    ],

    github: "#",

    demo: "#",
  },

  {
    title: "HRMS",

    image: hrms,

    description:
      "Responsive shopping application with authentication, cart management and product filtering.",

    technologies: [
       "Next Js",
      "Node Js",
      "MySQL",
    ],

    github: "#",

    demo: "https://softlabs-hrms.softlabsgroup.in/login",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white mt-4">
            Featured Projects
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6">
            Some of my recent work showcasing modern frontend
            development, responsive UI design and scalable web
            applications.
          </p>
        </motion.div>

        <div className="space-y-20">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
              }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                className="relative group overflow-hidden rounded-3xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-3xl w-full transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-500" />
              </motion.div>

              {/* Content */}

              <div>

                <h3 className="text-4xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-8 mt-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white bg-slate-900 hover:bg-blue-600 transition px-6 py-3 rounded-xl"
                  >
                    <FaGithub />

                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border text-white border-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl"
                  >
                    <FaExternalLinkAlt />

                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}