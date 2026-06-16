import wizzyblends from "../images/wizzyblends.png";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";

function Hero() {
  const targetYears = 4;
  const targetProjects = 30;
  const targetSatisfaction = 100;

  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setYears((prev) => (prev < targetYears ? prev + 1 : prev));
      setProjects((prev) => (prev < targetProjects ? prev + 1 : prev));
      setSatisfaction((prev) => (prev < targetSatisfaction ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen bg-base-100 px-6 lg:px-20 py-10 overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 items-center gap-16">
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <p className="text-blue-500 font-semibold tracking-wide uppercase">
            Frontend & Aspiring Mern Stack Developer
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-base-content">
            I Build <span className="text-blue-500">Modern Websites</span> That
            Convert Visitors Into Clients
          </h1>

          <p className="text-base-content/60 text-lg leading-relaxed max-w-2xl">
            Front-End Web Developer & Flutterflow expert, aspiring Full Stack
            Developer focused on building fast, responsive, SEO-optimized, and
            visually stunning web applications for startups, businesses, and
            personal brands.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <button className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 shadow-lg cursor-pointer">
              Hire Me
              <FaArrowRight />
            </button>

            <button className="border border-base-300 text-base-content hover:border-blue-500 hover:text-blue-500 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold cursor-pointer">
              View Projects
            </button>
          </div>

          {/* STATS */}
          <div className="flex gap-10 pt-6">
            <div>
              <h2 className="text-4xl font-bold text-base-content">{years}+</h2>
              <p className="text-base-content/60">Years Experience</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-base-content">
                {projects}+
              </h2>
              <p className="text-base-content/60">Projects Completed</p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-base-content">
                {satisfaction}%
              </h2>
              <p className="text-base-content/60">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="absolute w-100 h-100 bg-blue-100 rounded-full blur-3xl opacity-60"></div>

          <img
            src={wizzyblends}
            alt="Developer"
            className="transition-transform duration-3000 ease-in-out hover:rotate-360 relative z-10 w-87.5 lg:w-112.5 object-cover rounded-[40px] shadow-2xl border-4 border-base-300"
          />

          <div className="absolute bottom-10 left-0 bg-base-100 shadow-xl rounded-3xl px-6 py-4 z-20">
            <h3 className="text-3xl font-bold text-blue-500">React.js</h3>
            <p className="text-base-content/60 text-sm">
              Modern UI/UX Development
            </p>
          </div>
        </div>
      </div>

      {/* EMAIL */}
      <div className="mt-20">
        <a
          href="mailto:onyedikauwakwe@gmail.com"
          className="text-blue-500 hover:text-blue-600 font-semibold text-lg"
        >
          onyedikauwakwe@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Hero;
