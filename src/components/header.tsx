import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/images/newlogo.png";
import SwitchTheme from "./theme";
import { Link } from "react-router-dom";

interface HeaderProps {
  darkModeHandler?: (isDarkMode: boolean) => void;
  additonalClass?: string;
}

const Header: React.FC<HeaderProps> = ({darkModeHandler, additonalClass}:HeaderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isHeaderFixed, setHeaderFixed] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const headerBgColor = darkMode ? "bg-black" : "bg-white";
  const headerTextColor = darkMode ? "text-sky-100" : "text-blue-600";
  const hoverTextColor = darkMode ? "hover:text-blue-500" : "hover:text-gray-900";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    darkModeHandler && darkModeHandler(!darkMode);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;

      setHeaderFixed(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const effectTransition = isHeaderFixed
    ? "opacity-0 transform -translate-y-full"
    : "opacity-100 transform translate-y-0";

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`px-2 py-1 z-10 ${headerBgColor} ${headerTextColor} fixed w-full top-0 transition-all delay-150 duration-400 ${effectTransition}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl flex items-center">
            <img src={Logo} alt="logo" className="w-20 h-16 object-contain" />
          </div>
          <div className="md:hidden flex">
            <SwitchTheme
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              label={darkMode ? "Light Mode" : "Dark Mode"}
            />
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`px-2 text-3xl text-indigo-600 focus:outline-none ${hoverTextColor}`}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBarsStaggered} />
            </button>
          </div>
          <nav className={`md:flex hidden space-x-4 items-center`}>
            <Link to="/" className={`text-lg font-medium ${hoverTextColor}`}>
              Home
            </Link>
            <Link to="/about" className={`text-lg font-medium ${hoverTextColor}`}>
              About
            </Link>
            <Link to="/portfolio" className={`text-lg font-medium ${hoverTextColor}`}>
              Portfolio
            </Link>
            <Link to="/contact" className={`text-lg font-medium ${hoverTextColor}`}>
              Contact
            </Link>
          </nav>
          <div className={`md:hidden absolute w-full h-screen top-18 right-0 z-20 ${darkMode?'bg-gray-900': 'bg-white'} ${isMenuOpen ? "block" : "hidden"}`}>
            <nav className="flex flex-col items-end space-y-4 py-4 px-6">
              <Link to="/" className={`text-xl font-medium ${hoverTextColor}`}>
                Home
              </Link>
              <Link to="/about" className={`text-xl font-medium ${hoverTextColor}`}>
                About
              </Link>
              <Link to="/portfolio" className={`text-xl font-medium ${hoverTextColor}`}>
                Portfolio
              </Link>
              <Link to="/contact" className={`text-xl font-medium ${hoverTextColor}`}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex">
            <SwitchTheme
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              label={darkMode ? "Light Mode" : "Dark Mode"}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
