import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}

          <a
            href="#home"
            className="text-4xl font-bold text-white tracking-wide"
          >
            VAIBHAV
          </a>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-slate-300 hover:text-blue-400 transition duration-300"
              >
                {item.title}
              </a>
            ))}
          </nav>

          {/* Mobile Icon */}

          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}

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