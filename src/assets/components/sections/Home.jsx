import { useEffect } from "react";
import { animate, inView, hover } from "motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Home = () => {
  useEffect(() => {
    const section = document.getElementById("home");
    if (!section) return;

    // Animate on inView
    const stopInView = inView(section, () => {
      const h1 = section.querySelector("h1");
      const p = section.querySelector("p");
      const icons = section.querySelectorAll("a");

      if (h1) {
        animate(
          h1,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.8, delay: 0.1 }
        );
      }

      if (p) {
        animate(
          p,
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.8, delay: 0.3 }
        );
      }

      if (icons.length) {
        animate(
          icons,
          { opacity: [0, 1], y: [20, 0] },
          {
            duration: 0.6,
            delay: 0.5,
            stagger: 0.1,
          }
        );
      }
    });

    // Hover animation
    const stopHover = hover("h1, p, a", (el) => {
      animate(el, { scale: 0.95 }, { duration: 0.2 });
      return () => animate(el, { scale: 1 }, { duration: 0.2 });
    });

    return () => {
      stopInView?.();
      stopHover?.();
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent opacity-0">
          Hi! I'm Thuong (Tim) Pham
        </h1>

        <p className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-mono text-justify opacity-0">
          I’m a full stack developer with 3+ years of experience building
          scalable, high-performance websites and applications. Recently at
          Robins AFMC, I built full-stack solutions for internal tooling and
          management platforms, prioritizing performance, clean architecture,
          and real-time capabilities.
        </p>

        <div className="flex justify-center space-x-10 mt-10">
          <a
            href="https://github.com/timphamvn33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-3xl text-gray-400 hover:text-blue-600"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/thuong-pham-14442b221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl text-gray-400 hover:text-blue-600"
            />
          </a>
          <a
            href="mailto:timphamvn33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-3xl text-gray-400 hover:text-blue-600"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
