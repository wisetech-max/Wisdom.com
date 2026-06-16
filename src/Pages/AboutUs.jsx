import onyi2 from "../images/onyi2.png";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      id="About"
      ref={ref}
      className="bg-base-100 py-12 px-6 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold font-Ubuntu text-base-content">
            About Me
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex justify-center">
            <div
              className={`w-64 h-64 sm:w-80 sm:h-80 bg-amber-300 rounded-full overflow-hidden flex items-end justify-center ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <img
                src={onyi2}
                alt="Onyedika"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className={`text-base-content/70 text-base sm:text-lg leading-relaxed max-w-3xl ${
              inView ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <p className="text-justify">
              I'm Wisdom Uwakwe —— i help businesses and individuals turn their
              ideas into modern, responsive, and high-performing websites. As a{" "}
              <span className="font-bold text-blue-500">
                Front-End Developer
              </span>{" "}
              specializing in{" "}
              <span className="font-bold text-blue-500">
                React.js, Next.js and JavaScript
              </span>
              , I build intuitive user interfaces that are fast, engaging, and
              optimized across all devices. My expertise includes{" "}
              <span className="font-bold text-blue-500">
                HTML, CSS, Tailwind CSS, JavaScript, React.js, Next.js,
                Bootstrap, Material UI, React-Bootstrap, MDB React, and Git
              </span>
              . I focus on writing clean, maintainable code and delivering
              solutions that improve user experience while supporting business
              goals. Currently expanding my expertise toward the{" "}
              <span className="font-bold text-blue-500">MERN Stack</span>, I am
              committed to continuous learning and staying up to date with
              modern web development trends. Whether it's a business website,
              dashboard, landing page, or web application, I strive to deliver
              reliable and professional results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
