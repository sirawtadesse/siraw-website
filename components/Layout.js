import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FaSun, FaMoon, FaBars, FaTimes, FaHome, 
  FaUser, FaBlog, FaEnvelope, FaGithub, FaLinkedin,
  FaSearch, FaRss
} from 'react-icons/fa';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    alert(`Searching for: ${searchQuery}`);
  };

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
              <span className="text-xl font-bold">SirawDev Blog</span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" legacyBehavior>
              <a className="hover:text-blue-400 transition-colors flex items-center">
                <FaHome className="mr-1" /> Home
              </a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="hover:text-blue-400 transition-colors flex items-center">
                <FaUser className="mr-1" /> About
              </a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className="hover:text-blue-400 transition-colors flex items-center">
                <FaBlog className="mr-1" /> Blog
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="hover:text-blue-400 transition-colors flex items-center">
                <FaEnvelope className="mr-1" /> Contact
              </a>
            </Link>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-2 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button type="submit" className="absolute right-2 top-2 text-gray-600">
                <FaSearch size={14} />
              </button>
            </form>
          </div>

          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex space-x-4">
              <a href="https://github.com/sirawdev" className="hover:text-blue-400 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/sirawdev" className="hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>

            {/* Dark mode toggle */}
            <button 
              onClick={() => setDarkMode(!darkMode)} 
              className="bg-gray-700 dark:bg-gray-600 p-2 rounded-full focus:outline-none transition-all duration-300 hover:scale-105" 
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <FaSun size={24} className="text-yellow-400" /> : <FaMoon size={24} className="text-blue-300" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 dark:bg-gray-700 p-5">
            <div className="flex flex-col space-y-4">
              <Link href="/" legacyBehavior>
                <a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors flex items-center">
                  <FaHome className="mr-2" /> Home
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors flex items-center">
                  <FaUser className="mr-2" /> About
                </a>
              </Link>
              <Link href="/blog" legacyBehavior>
                <a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors flex items-center">
                  <FaBlog className="mr-2" /> Blog
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a onClick={() => setIsMenuOpen(false)} className="hover:text-blue-400 transition-colors flex items-center">
                  <FaEnvelope className="mr-2" /> Contact
                </a>
              </Link>
              
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button type="submit" className="absolute right-2 top-2 text-gray-600">
                  <FaSearch size={14} />
                </button>
              </form>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24 container mx-auto px-4">{children}</main>

      <footer className="p-10 bg-gray-800 dark:bg-gray-700 text-white mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SirawDev Blog</h3>
            <p className="text-gray-400">
              Sharing insights on web development, programming, and technology from a full-stack developer's perspective.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Home</a></Link></li>
              <li><Link href="/about" legacyBehavior><a className="text-gray-400 hover:text-blue-400">About</a></Link></li>
              <li><Link href="/blog" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Blog</a></Link></li>
              <li><Link href="/contact" legacyBehavior><a className="text-gray-400 hover:text-blue-400">Contact</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/sirawdev" className="text-gray-400 hover:text-blue-400">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/sirawdev" className="text-gray-400 hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="/rss.xml" className="text-gray-400 hover:text-blue-400">
                <FaRss size={24} />
              </a>
            </div>
            <p className="text-gray-400">Subscribe to the newsletter for updates</p>
            <form className="mt-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 rounded-l text-gray-800 text-sm focus:outline-none"
              />
              <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded-r text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} SirawDev Blog. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
