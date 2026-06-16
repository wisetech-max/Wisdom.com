import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <>
      <div
        className="navbar fixed top-0 left-0 z-50
          bg-base-100/90 backdrop-blur-md shadow-md
          border-b border-base-300"
      >
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-base-content"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow-xl bg-base-200 rounded-2xl w-56 text-base-content"
            >
              <li>
                <a
                  href="#Home"
                  className="hover:text-blue-600 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className="hover:text-blue-600 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Services"
                  className="hover:text-blue-600 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#Testimonials"
                  className="hover:text-blue-600 transition duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#Contact"
                  className="hover:text-blue-600 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <a className="text-2xl font-extrabold tracking-wide">
            <span className="text-blue-600">Wisdom</span>
            <span className="text-base-content">.</span>
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <a
                href="#Home"
                className="font-semibold text-base-content hover:text-blue-600 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="font-semibold text-base-content hover:text-blue-600 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Services"
                className="font-semibold text-base-content hover:text-blue-600 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#Testimonials"
                className="font-semibold text-base-content hover:text-blue-600 transition duration-300"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="font-semibold text-base-content hover:text-blue-600 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          <label className="flex items-center cursor-pointer gap-2">
            <span className="text-base-content">🌞</span>
            <input
              type="checkbox"
              className="toggle bg-gray-300 checked:bg-blue-600"
              checked={theme === "dark"}
              onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            />
            <span className="text-base-content">🌙</span>
          </label>

          <a href="#Contact">
            <button className="btn rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none px-6">
              Get a Quote
            </button>
          </a>
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
}

export default NavBar;
