import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaSun, FaMoon, FaBars, FaTimes, 
  FaGithub, FaLinkedin, FaTelegram, FaFacebook 
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // On mount, initialize dark mode from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  // Update root element and localStorage on dark mode change
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <header className="fixed top-0 w-full z-50 p-5 bg-gray-800 dark:bg-gray-700 text-white shadow-lg">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold hover:scale-105 transition-transform duration-300 cursor-pointer">
    <img
      src="/s10.png"
      alt="Logo"
      className="w-16 h-16 md:w-32 md:h-24 object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
    />
  </div>
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Navbar Links */}
            <ul
              className={`fixed inset-0 bg-gray-800 dark:bg-gray-700 bg-opacity-95 p-10 space-y-6 transform 
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 
              md:relative md:translate-x-0 md:flex md:space-x-4 md:space-y-0 md:bg-transparent md:p-0`}
            >
              {['home', 'about', 'projects', 'experience', 'education', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <Link href={`#${section}`}>
                    <a
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg hover:text-blue-400 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-700 dark:bg-gray-600 p-2 rounded-full focus:outline-none transition-all duration-300 hover:scale-105 cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={24} className="text-yellow-400" /> : <FaMoon size={24} className="text-blue-300" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="pt-20">{children}</main>

      <footer className="p-5 bg-gray-800 dark:bg-gray-700 text-white">
        <div className="container mx-auto flex flex-col items-center space-y-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              {
                href: "http://www.github.com/sirawtadesse/",
                icon: <FaGithub size={24} />,
                label: "GitHub",
              },
              {
                href: "http://www.linkedin.com/in/sirawtadesse-668088274",
                icon: <FaLinkedin size={24} />,
                label: "LinkedIn",
              },
              {
                href: "https://t.me/siraw_bizu1",
                icon: <FaTelegram size={24} />,
                label: "Telegram",
              },
              {
                href: "https://web.facebook.com/good.goldta",
                icon: <FaFacebook size={24} />,
                label: "Facebook",
              },
            ].map((social, i) => (
              <div key={i} className="flex items-center hover:text-blue-400 transition-colors cursor-pointer">
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
                <span className="ml-2">{social.label}</span>
              </div>
            ))}
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
