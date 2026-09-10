import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const firstName = "VAIBHAV";
const lastName = "PARAB";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  const { theme, themes } = useTheme();
  const selectedTheme = themes[theme];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex justify-between items-center h-20">

          {/* ================================================= */}
          {/* LOGO */}
          {/* ================================================= */}

          <a
            href="#home"
            aria-label="VAIBHAV PARAB"
            className="relative flex items-center h-12 w-[240px]"
            onMouseEnter={() => setLogoHover(true)}
            onMouseLeave={() => setLogoHover(false)}
          >

            {/* ================================================= */}
            {/* DEFAULT VP */}
            {/* ================================================= */}

            <motion.div
              initial={false}
              animate={{
                opacity: logoHover ? 0 : 1,
                scale: logoHover ? 0.85 : 1,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="absolute left-0 flex items-center"
            >
              <span className="text-4xl font-bold tracking-wide text-white">
                V
              </span>

              <span
                className="text-4xl font-bold tracking-wide"
                style={{
                  color: selectedTheme.primary,
                  textShadow: `0 0 18px ${selectedTheme.glow}`,
                }}
              >
                P
              </span>
            </motion.div>

            {/* ================================================= */}
            {/* FULL NAME */}
            {/* ================================================= */}

            <motion.div
              initial={false}
              animate={{
                opacity: logoHover ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                left-0
                flex
                items-center
                whitespace-nowrap
                pointer-events-none
              "
            >

              {/* ============================================= */}
              {/* VAIBHAV - LETTER BY LETTER */}
              {/* ============================================= */}

              <div className="flex">
                {firstName.split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={{
                      opacity: 0,
                      x: -35,
                      scale: 0.75,
                    }}
                    animate={
                      logoHover
                        ? {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            x: -35,
                            scale: 0.75,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      delay: logoHover ? index * 0.08 : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      text-3xl
                      font-bold
                      tracking-wide
                      text-white
                      inline-block
                    "
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

              {/* SPACE */}
              <span className="w-2" />

              {/* ============================================= */}
              {/* PARAB - LETTER BY LETTER */}
              {/* ============================================= */}

              <div className="flex">
                {lastName.split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    initial={{
                      opacity: 0,
                      x: -35,
                      scale: 0.75,
                    }}
                    animate={
                      logoHover
                        ? {
                            opacity: 1,
                            x: 0,
                            scale: 1,
                          }
                        : {
                            opacity: 0,
                            x: -35,
                            scale: 0.75,
                          }
                    }
                    transition={{
                      duration: 0.45,
                      delay: logoHover
                        ? (firstName.length + index) * 0.08
                        : 0,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{
                      color: selectedTheme.primary,
                      textShadow: `0 0 18px ${selectedTheme.glow}`,
                    }}
                    className="
                      text-3xl
                      font-bold
                      tracking-wide
                      inline-block
                    "
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          </a>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                  text-slate-300
                  hover:text-blue-400
                  transition
                  duration-300
                "
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* ================================================= */}
          {/* MOBILE MENU BUTTON */}
          {/* ================================================= */}

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* ================================================= */}
        {/* MOBILE MENU */}
        {/* ================================================= */}

        {open && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-5">
              {links.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-slate-300 hover:text-blue-400"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </header>
  );
}