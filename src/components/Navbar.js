import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(path.substring(1));
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(path.substring(1));
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(path);
    }
  };

  const navItems = [
    { path: "/#home", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/#skills", label: "Skills" },
    { path: "/#projects", label: "Projects" },
    { path: "/#experience", label: "Experience" },
    { path: "/#publications", label: "Publications" },
    { path: "/#contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
    {
      path: "/admin",
      label: "Admin",
      className: "text-blue-500 hover:text-blue-600",
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation("/")}
              className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled
                  ? "text-gray-800 dark:text-white"
                  : "text-gray-800 dark:text-white"
              }`}
            >
              SAMEER
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  item.className ||
                  (scrolled
                    ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    : "text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white")
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="ml-4">
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 ${
              scrolled
                ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                : "text-gray-800 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            }`}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${
            scrolled
              ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md"
              : "bg-gray-900/80 backdrop-blur-md"
          }`}
        >
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                item.className ||
                "text-gray-300 hover:text-white hover:bg-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="px-3 py-2">
            <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
