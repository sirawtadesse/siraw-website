import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaSun, FaMoon, FaBars, FaTimes, 
  FaGithub, FaLinkedin, FaTelegram, FaFacebook 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition duration-500">
      <header className="fixed top-0 w-full z-50 p-5 bg-gray-800 text-white shadow-lg">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">My Portfolio</div>
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Navbar Links */}
            <ul
              className={`fixed inset-0 bg-gray-800 bg-opacity-90 p-10 space-y-6 transform 
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 
              md:relative md:translate-x-0 md:flex md:space-x-4 md:space-y-0 md:bg-transparent md:p-0`}
            >
              <li>
                <Link href="#home" onClick={toggleMenu} className="block md:inline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" onClick={toggleMenu} className="block md:inline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" onClick={toggleMenu} className="block md:inline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" onClick={toggleMenu} className="block md:inline">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#education" onClick={toggleMenu} className="block md:inline">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#skills" onClick={toggleMenu} className="block md:inline">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" onClick={toggleMenu} className="block md:inline">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="text-white p-2">
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Add top padding so content doesn't overlap with fixed navbar */}
      <main className="pt-20">{children}</main>

      <footer className="p-5 bg-gray-800 text-white">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="flex items-center">
              <a
                href="http://www.github.com/sirawtadesse/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <span className="ml-2">GitHub</span>
            </div>
            <div className="flex items-center">
              <a
                href="http://www.linkedin.com/in/sirawtadesse-668088274"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <span className="ml-2">LinkedIn</span>
            </div>
            <div className="flex items-center">
              <a
                href="https://t.me/siraw_bizu1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegram size={24} />
              </a>
              <span className="ml-2">Telegram</span>
            </div>
            <div className="flex items-center">
              <a
                href="https://web.facebook.com/good.goldta"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <span className="ml-2">Facebook</span>
            </div>
          </div>
          <div className="text-md text-center">
            © {new Date().getFullYear()} Siraw Tadesse. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
