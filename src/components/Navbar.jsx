import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import dmtLogo from '../assets/dmt-logo.jpg';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleConnectClick = () => {
    if (location.pathname === '/') {
      // If already on home page, just scroll to section
      const element = document.getElementById('social-media');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('social-media');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src={dmtLogo} 
                className="h-12 w-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-md" 
                alt="DMT Logo" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Digital Media Translation
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium transition-colors duration-300">ETI462</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link
              to="/article"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group"
            >
              <span className="relative z-10">Article</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <Link
              to="/about"
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 group"
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Dark Mode Toggle */}
            <DarkModeToggle />

            {/* CTA Button */}
            <button
              onClick={handleConnectClick}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700"
            >
              Connect With Me
            </button>
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              🏠 Home
            </Link>
            <Link
              to="/article"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              📄 Article
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
            >
              👤 About Me
            </Link>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                handleConnectClick();
              }}
              className="block w-full px-4 py-3 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 mt-4"
            >
              🔗 Connect With Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 