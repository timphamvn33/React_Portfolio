import { useEffect } from "react";
import { animate, press } from "motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    // Lock scroll when menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    // Apply press effect to all anchor tags inside nav
    const cleanup = press("nav a", (element) => {
      animate(element, { scale: 0.9 }, { type: "spring", stiffness: 600 });
      return () =>
        animate(element, { scale: 1 }, { type: "spring", stiffness: 400 });
    });

    // Cleanup on unmount
    return () => cleanup();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div
          className="flex justify-between items-center h-16"
          style={{ fontFamily: "Orbitron, sans-serif" }}
        >
          <a
            href="#home"
            className="font-mono font-bold text-white text-xl md:text-3xl lg:text-4xl"
          >
            {"{ "}Tim <span className="text-blue-500">.Pham{" }"}</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Ftimphamvn33%2FReact_Portfolio%2Fmaster%2Fpublic%2FResume_Pham.docx"
              className="text-gray-300 transition-colors text-lg md:text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-300 hover:bg-clip-text hover:text-transparent hover:font-bold"
            >
              RESUME
            </a>
            <a
              href="#about"
              className="text-gray-300 transition-colors text-lg md:text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-300 hover:bg-clip-text hover:text-transparent hover:font-bold"
            >
              EXPERIENCE
            </a>
            <a
              href="#contacts"
              className="text-gray-300 transition-colors text-lg md:text-xl lg:text-2xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-gray-300 hover:bg-clip-text hover:text-transparent hover:font-bold"
            >
              CONTACTS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
