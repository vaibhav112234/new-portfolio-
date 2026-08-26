// // import React from "react";
// // import { Github, Linkedin, Mail } from "lucide-react";
// import profile from "../assets/profile.jpeg";

// const Hero = () => {
//   return (
//     <section className="min-h-screen bg-slate-950 text-white flex items-center pt-24">
//       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
//         <div className="text-center md:text-left">
//           <p className="text-blue-400 font-medium mb-4 text-lg">
//             👋 Hello, I'm
//           </p>

//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
//             Vaibhav <br />
//             <span className="text-blue-400">Parab</span>
//           </h1>

//           <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
//             Frontend React Developer
//           </h2>

//           <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
//             I build modern, responsive, and scalable web applications using
//             React, Redux, JavaScript, REST APIs, and clean UI/UX principles.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
//             <a
//               href="/resume.pdf"
//               download
//               className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg shadow-blue-500/25"
//             >
//               Download Resume
//             </a>

//             <a
//               href="#contact"
//               className="border border-slate-700 hover:border-blue-400 hover:text-blue-400 px-6 py-3 rounded-xl font-semibold transition duration-300"
//             >
//               Let's Talk
//             </a>
//           </div>

//           <div className="flex gap-5 justify-center md:justify-start">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-full bg-slate-900 hover:bg-blue-500 transition duration-300"
//             >
//               {/* <Github /> */}
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               rel="noreferrer"
//               className="p-3 rounded-full bg-slate-900 hover:bg-blue-500 transition duration-300"
//             >
//               {/* <Linkedin /> */}
//             </a>

//             <a
//               href="mailto:youremail@example.com"
//               className="p-3 rounded-full bg-slate-900 hover:bg-blue-500 transition duration-300"
//             >
//               {/* <Mail /> */}
//             </a>
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <div className="relative">
//             <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full scale-110"></div>

//             <img
//               src={profile}
//               alt="Vaibhav"
//               className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-slate-800 shadow-2xl"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import profile from "../assets/profile1.jpg";

import resume from "../assets/Vaibhav_resume.pdf"




import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  // FaArrowDown,
} from "react-icons/fa";

import { Typewriter } from "react-simple-typewriter";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden  bg-slate-950 text-white flex items-center pt-24"
    >
          <ParticlesBackground />
      {/* Background Glow */}

      <div className="absolute -top-32 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-400/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-blue-400 text-lg font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            VAIBHAV
            <br />

            <span className="text-blue-500">PARAB</span>
          </h1>

          {/* Typing */}

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mt-6 h-10">
            <Typewriter
              words={[
                "Frontend React Developer",
                "JavaScript Developer",
                "Redux Developer",
                "UI Developer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
            />
          </h2>

          <p className="text-slate-400 text-lg leading-8 mt-8 max-w-xl">
            I build modern, responsive and scalable web applications using
            React, Redux, JavaScript and REST APIs with clean UI/UX.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href={resume}
              download
              className="bg-blue-600 hover:bg-blue-700 transition px-7 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/30 hover:scale-105"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-blue-500 hover:bg-blue-500 transition px-7 py-4 rounded-xl font-semibold hover:scale-105"
            >
              Contact Me
            </a>

          </div>

          {/* Social */}

          <div className="flex gap-6 mt-10">

            <a
              href="https://github.com/vaibhav112234"
              className="text-3xl hover:text-blue-400 hover:-translate-y-1 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vaibhav-parab-75500a200/"
              className="text-3xl hover:text-blue-400 hover:-translate-y-1 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:abc@gmail.com"
              className="text-3xl hover:text-blue-400 hover:-translate-y-1 transition"
            >
              <FaEnvelope />
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 animate-pulse" />

            {/* Ring */}

            <div className="absolute -inset-4 rounded-full border border-blue-500/40 animate-spin-slow"></div>

            <img
              src={profile}
              alt="Profile"
              className="relative w-72 h-72 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-slate-800 shadow-2xl float"
            />

          </div>
        </motion.div>

      </div>

      {/* Scroll */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        {/* <FaArrowDown className="text-blue-500 text-2xl" /> */}
      </motion.div>
    </section>
  );
};

export default Hero;