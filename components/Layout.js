import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaSun, FaMoon, FaBars, FaTimes
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setDarkMode(storedTheme === 'dark');
      if (storedTheme === 'dark') document.documentElement.classList.add('dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDarkMode(prefersDark);
      if (prefersDark) document.documentElement.classList.add('dark');
    }
  }, []);

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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <header className="fixed top-0 w-full z-50 bg-gray-800 dark:bg-gray-700 text-white shadow-lg">
        <nav className="flex justify-between items-center px-5 py-4 container mx-auto">
          <Link href="/" legacyBehavior>
            <a className="flex items-center space-x-2">
              <img
                src="/s10.png"
                alt="Logo"
                className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-bold">AssetFlow</span>
            </a>
          </Link>

          <div className="flex items-center space-x-4">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            <ul className={`fixed inset-0 bg-gray-800 dark:bg-gray-700 bg-opacity-95 p-10 space-y-6 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 md:relative md:translate-x-0 md:flex md:space-x-6 md:space-y-0 md:bg-transparent md:p-0`}>
              <li>
                <Link href="/" legacyBehavior>
                  <a onClick={() => setIsMenuOpen(false)} className="block text-lg hover:text-blue-400 transition-colors">Dashboard</a>
                </Link>
              </li>
              <li>
                <Link href="/add-asset" legacyBehavior>
                  <a onClick={() => setIsMenuOpen(false)} className="block text-lg hover:text-blue-400 transition-colors">Add Asset</a>
                </Link>
              </li>
            </ul>

            <button onClick={() => setDarkMode(!darkMode)} className="bg-gray-700 dark:bg-gray-600 p-2 rounded-full focus:outline-none transition-all duration-300 hover:scale-105" aria-label="Toggle Dark Mode">
              {darkMode ? <FaSun size={24} className="text-yellow-400" /> : <FaMoon size={24} className="text-blue-300" />}
            </button>
          </div>
        </nav>
      </header>

      <main className="pt-24 container mx-auto px-4">{children}</main>

      <footer className="p-5 bg-gray-800 dark:bg-gray-700 text-white mt-10">
        <div className="container mx-auto text-center">
            © {new Date().getFullYear()} AssetFlow. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
