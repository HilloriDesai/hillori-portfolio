import { useState } from "react";
import Link from "next/link";
import { MenuIcon, XIcon } from "./icons";

const navLinks = [
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#experience" },
  { label: "Projects",     href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Interests",    href: "#interests" },
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed w-full z-10 border-b border-white/8 backdrop-blur-sm"
      style={{ background: "rgba(13, 31, 26, 0.95)" }}
    >
      <div className="container-section">
        <div className="flex justify-between h-16 items-center">

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#94a3b8" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#2dd4bf")}
                onMouseLeave={e => (e.currentTarget.style.color = "#94a3b8")}
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/research"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "#5eead4" }}
            >
              AI Research
            </Link>
            <a href="#contact" className="btn-primary text-sm">
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={() => setOpen(!open)} className="p-2" style={{ color: "#94a3b8" }}>
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-white/8"
          style={{ background: "rgba(13, 31, 26, 0.98)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{ color: "#94a3b8" }}
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/research"
              onClick={() => setOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{ color: "#5eead4" }}
            >
              AI Research
            </Link>
            <div className="pt-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary block text-center text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
