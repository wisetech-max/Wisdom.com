import { Mail } from "lucide-react";
import { Smartphone } from "lucide-react";
import { MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              Wisdom<span className="text-blue-500">.</span>
            </h1>

            <p className="mt-5 leading-8 text-gray-400">
              Frontend Developer and FlutterFlow Expert focused on building
              modern websites, web applications, and mobile applications that
              help businesses grow online.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/in/onyedikachukwu-uwakwe-b30861208"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600 text-white"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/wisetech-max"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600 text-white"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://x.com/wisetechmax"
                className="rounded-xl bg-white/10 p-3 transition hover:bg-blue-600 text-white"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h2>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#Home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#AboutUs" className="hover:text-blue-400">
                  About
                </a>
              </li>
              <li>
                <a href="#Services" className="hover:text-blue-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#Testimonials" className="hover:text-blue-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#Contact" className="hover:text-blue-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white">Services</h2>
            <ul className="space-y-4 text-gray-400">
              <li>Frontend Development</li>
              <li>React Web Apps</li>
              <li>Landing Pages</li>
              <li>Business Websites</li>
              <li>FlutterFlow Apps</li>
              <li>Website Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="mb-6 text-xl font-semibold text-white">
              Contact Info
            </h2>
            <div className="space-y-5 text-gray-400">
              <p className="flex gap-1.5">
                <Mail />
                onyedikauwakwe@gmail.com
              </p>
              <p className="flex gap-1.5">
                <Smartphone /> +234 9086727803
              </p>
              <p className="flex gap-1.5">
                <MapPin /> Lagos, Nigeria
              </p>
              <a
                href="#contact"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Wisdom Uwakwe. All Rights Reserved.
          </p>
          <p className="text-gray-500">
            Designed & Developed with React + Tailwind CSS by Wisetech-Max
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
