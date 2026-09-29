import { useState } from "react";
import { MenuIcon, XIcon } from "./icons";
import { Pin } from "./doodles";

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
      className="fixed w-full z-10 border-b border-gray-100 backdrop-blur-sm"
      style={{ background: "rgba(246, 240, 228, 0.9)" }}
    >
      <div className="container-section">
        <div className="flex justify-between h-16 items-center">

          <a href="#" className="flex items-center gap-1.5 text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "#2b2118" }}>
            <Pin className="w-4 h-5" />
            Hillori.
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#6b5b4b" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c4622d")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6b5b4b")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-sm">
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center ml-auto">
            <button onClick={() => setOpen(!open)} className="p-2" style={{ color: "#6b5b4b" }}>
              {open ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t border-gray-100"
          style={{ background: "rgba(246, 240, 228, 0.98)" }}
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150"
                style={{ color: "#6b5b4b" }}
              >
                {l.label}
              </a>
            ))}
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
