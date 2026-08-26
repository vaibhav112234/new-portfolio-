import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const experiences = [
  {
    company: "Softlabs Group",
    role: "Full Stack Developer",
    duration: "2024 - Present",
    location: "Mumbai, India",
    description:
      "Developing scalable trading platforms using React, Redux, JavaScript, FastAPI, REST APIs and reusable UI components.",

    technologies: [
      "React",
      "Redux",
      "JavaScript",
      "FastAPI",
      "REST API",
      "MySQL",
      "Docker",
      "Node Js",
      "Next Js"
    ],
  },

  {
    company: "Cravita Technology India Pvt.Ltd",
    role: "Jr Software Developer",
    duration: "2023 - 2024",
    location: "Remote",
    description:
      "Built responsive web applications, dashboards, reusable UI components and portfolio projects while learning modern frontend development.",

    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "Git",
      "Flask",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-24"
        >
          <p className="uppercase tracking-[5px] text-blue-400">
            Career
          </p>

          <h2 className="text-5xl font-bold mt-4 text-white">
            Work Experience
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            My professional journey building scalable web applications
            and modern user interfaces.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline */}

          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent -translate-x-1/2" />

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .7,
              }}
              className={`relative mb-20 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Timeline Dot */}

              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_25px_rgba(59,130,246,.7)] border-4 border-slate-950" />

              {/* Card */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="ml-16 md:ml-0 md:w-[45%] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:shadow-[0_0_40px_rgba(59,130,246,.25)] transition-all duration-500"
              >

                <div className="flex items-center gap-3 text-blue-400 mb-3">
                  <FaBriefcase />
                  <span>{item.company}</span>
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {item.role}
                </h3>

                <div className="flex flex-wrap gap-6 mt-4 text-slate-400 text-sm">

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {item.duration}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {item.location}
                  </div>

                </div>

                <p className="text-slate-300 mt-6 leading-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">

                  {item.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}