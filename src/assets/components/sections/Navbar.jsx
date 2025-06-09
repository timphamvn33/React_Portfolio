import { useEffect } from "react";
import { animate, press } from "motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const cleanup = press("nav a", (el) => {
      animate(el, { scale: 0.95 }, { type: "spring", stiffness: 600 });
      return () =>
        animate(el, { scale: 1 }, { type: "spring", stiffness: 400 });
    });
    return () => cleanup();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="flex justify-between items-center h-16"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          {/* Logo */}
          <a
            href="#home"
            className="font-mono font-bold text-white text-xl md:text-3xl tracking-tight"
          >
            {"{ "}Tim <span className="text-blue-500">.Pham{" }"}</span>
          </a>

          {/* Hamburger Icon */}
          <div
            className="relative w-8 h-6 flex flex-col justify-between items-center cursor-pointer z-50 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: "RESUME", href: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Ftimphamvn33%2FReact_Portfolio%2Fmaster%2Fpublic%2FResume_Pham.docx" },
              { label: "EXPERIENCE", href: "#about" },
              { label: "PROJECTS", href: "#projects" },
              { label: "CONTACTS", href: "#contacts" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-lg md:text-xl font-medium hover:font-bold"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
