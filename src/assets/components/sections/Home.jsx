import { useEffect } from "react";

export const Home = ({ isLoaded, isInView1, textOpacity, setTextOpacity }) => {
  useEffect(() => {
    let animationFrame;
    const fadeIn = () => {
      setTextOpacity((prev) => {
        const next = Math.min(prev + 0.02, 1);
        if (next < 1) {
          animationFrame = requestAnimationFrame(fadeIn);
        }
        return next;
      });
    };

    if (isInView1) {
      fadeIn();
    } else {
      setTextOpacity(0);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView1]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="text-center z-10 px-4">
        <h1
          className="text-2xl md:text-4xl lg:text-7xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-600 to-blue-300 bg-clip-text text-transparent transition-opacity duration-700 ease-in-out"
          style={{
            fontFamily: "Orbitron, sans-serif",
            opacity: textOpacity,
          }}
        >
          Hi! I'm Thuong (Tim) Pham
        </h1>

        <p
          className="text-lg md:text-2xl lg:text-3xl text-gray-400 font-mono text-justify transition-opacity duration-700 ease-in-out"
          style={{ opacity: textOpacity, lineHeight: "2" }}
        >
          I’m a full stack developer with 3+ years of experience building
          scalable, high-performance websites and applications. Recently at
          Robins AFMC, I built full-stack solutions for internal tooling and
          management platforms, prioritizing performance, clean architecture,
          and real-time capabilities.
        </p>

        <div
          className="flex justify-center space-x-10 mt-10 transition-opacity duration-700 ease-in-out"
          style={{ opacity: textOpacity }}
        >
          <a
            href="https://github.com/timphamvn33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-3xl text-gray-400 hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/thuong-pham-14442b221/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin text-3xl text-gray-400 hover:text-blue-600" />
          </a>
          <a
            href="mailto:timphamvn33@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope text-3xl text-gray-400 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </section>
  );
};
