import html1 from "../images/html1.png";
import cssLogo from "../images/cssLogo.png";
import javascript from "../images/javascript.png";
import nodejs from "../images/nodejs.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import github from "../images/github.png";
import git from "../images/git.png";
import material1 from "../images/material1.png";
import next from "../images/next.png";

function Services() {
  const skills = [
    html1,
    cssLogo,
    javascript,
    nodejs,
    react,
    tailwind,
    bootstrap,
    github,
    git,
    material1,
    next,
  ];

  const technologies = [
    {
      name: "HTML5",
      description:
        "Building well-structured, semantic, and accessible web applications.",
    },
    {
      name: "CSS3",
      description:
        "Creating responsive and visually appealing user interfaces.",
    },
    {
      name: "JavaScript",
      description:
        "Developing dynamic and interactive web experiences using modern JavaScript.",
    },
    {
      name: "React.js",
      description: "Building scalable, component-driven user interfaces.",
    },
    {
      name: "Next.js",
      description:
        "Developing high-performance React applications with SEO optimization.",
    },
    {
      name: "Node.js",
      description: "Creating backend services and REST APIs using JavaScript.",
    },
    {
      name: "Tailwind CSS",
      description: "Designing modern and responsive interfaces efficiently.",
    },
    {
      name: "Bootstrap",
      description:
        "Accelerating UI development with responsive layouts and components.",
    },
    {
      name: "Material UI",
      description:
        "Crafting professional-grade React applications with Material Design.",
    },
    {
      name: "Git",
      description:
        "Managing source code through version control and collaboration.",
    },
    {
      name: "GitHub",
      description: "Hosting projects and collaborating with development teams.",
    },
  ];

  const Works = [
    {
      title: "Frontend Web Development",
      description:
        "Building fast, responsive, and user-friendly websites using React, Next.js, JavaScript, Tailwind CSS, and modern frontend technologies.",
    },
    {
      title: "FlutterFlow Mobile App Development",
      description:
        "Creating cross-platform mobile applications with FlutterFlow for startups, businesses, and entrepreneurs looking to launch quickly.",
    },
    {
      title: "React & Next.js Development",
      description:
        "Developing scalable React and Next.js applications with optimized performance, SEO, and seamless user experiences.",
    },
    {
      title: "Business Website Development",
      description:
        "Designing and developing professional websites for businesses, agencies, consultants, and service providers to establish a strong online presence.",
    },
    {
      title: "Landing Page Design & Optimization",
      description:
        "Creating high-converting landing pages focused on lead generation, product promotion, customer acquisition, and business growth.",
    },
    {
      title: "Web Application Development",
      description:
        "Building custom web applications such as dashboards, booking systems, portals, and management platforms tailored to business needs.",
    },
    {
      title: "API Integration & Performance Optimization",
      description:
        "Integrating third-party APIs, databases, payment gateways, and optimizing website speed, accessibility, and overall user experience.",
    },
  ];

  return (
    <section id="Services" className="bg-base-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-base-content mb-8">
          Technologies I Use
        </h2>

        {/* Logo Slider */}
        <div className="overflow-hidden mb-12">
          <div className="flex gap-10 animate-marquee w-max bg-base-200">
            {[...skills, ...skills].map((skill, index) => (
              <img
                key={index}
                src={skill}
                alt=""
                className="w-14 h-14 sm:w-16 sm:h-16 object-contain hover:scale-110 transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* Technology Descriptions */}
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-5 rounded-xl shadow-md border border-base-300 bg-base-100 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-500 mb-2">
                {tech.name}
              </h3>
              <p className="text-base-content/70">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Works */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-base-content mb-8">
            My Work
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Works.map((work, index) => (
              <div
                key={index}
                className="p-5 rounded-xl shadow-md border border-base-300 bg-base-100 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-500 mb-2">
                  {work.title}
                </h3>
                <p className="text-base-content/70">{work.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
