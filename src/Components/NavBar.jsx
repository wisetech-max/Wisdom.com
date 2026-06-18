import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeProvider";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        className="navbar fixed top-0 left-0 z-50 w-full
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

            {/* MOBILE MENU */}
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

              {/* THEME TOGGLE ONLY IN HAMBURGER */}
              <li className="mt-2">
                <div className="flex items-center justify-between px-1">
                  <span className="flex items-center gap-2">
                    {theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
                  </span>

                  <input
                    type="checkbox"
                    className="toggle bg-gray-300 checked:bg-blue-600"
                    checked={theme === "dark"}
                    onChange={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  />
                </div>
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
        <div className="navbar-end flex items-center gap-3">
          {/* CTA BUTTON ONLY (NO THEME HERE ANYMORE) */}
          <a href="#Contact">
            <button className="btn rounded-full bg-blue-600 hover:bg-blue-700 text-white border-none px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-base whitespace-nowrap">
              Get a Quote
            </button>
          </a>
        </div>
      </div>

      {/* spacer */}
      <div className="h-20"></div>
    </>
  );
}

export default NavBar;
