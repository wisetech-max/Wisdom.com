import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div
        className="navbar fixed top-0 left-0 z-50 w-full
        bg-base-100/90 backdrop-blur-md shadow-md
        border-b border-base-300"
      >
        {/* LEFT */}
        <div className="navbar-start">
          {/* MOBILE MENU */}
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
              className="menu menu-sm dropdown-content mt-3 z-10 p-4 shadow-xl bg-base-200 rounded-2xl w-56 text-base-content"
            >
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Services">Services</a>
              </li>
              <li>
                <a href="#Testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>

              {/* MOBILE THEME TOGGLE */}
              <li className="mt-3">
                <div className="flex items-center justify-between">
                  <span>
                    {theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
                  </span>

                  <input
                    type="checkbox"
                    className="toggle bg-gray-300 checked:bg-blue-600"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                </div>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <a className="text-2xl font-extrabold tracking-wide cursor-pointer">
            <span className="text-blue-600">Wisdom</span>
            <span className="text-base-content">.</span>
          </a>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex items-center gap-4">
          {/* DESKTOP THEME TOGGLE */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-lg">{theme === "dark" ? "🌙" : "🌞"}</span>

            <input
              type="checkbox"
              className="toggle bg-gray-300 checked:bg-blue-600"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
          </div>

          {/* CTA BUTTON */}
          <a href="#Contact">
            <button className="btn rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
              Get a Quote
            </button>
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}

export default NavBar;
