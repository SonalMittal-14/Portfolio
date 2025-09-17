'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-darkRed/80 backdrop-blur-md border-b border-roseQuartz/20 dark:border-silk/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-redWine dark:text-silk">
                Portfolio
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 rounded-lg bg-roseQuartz dark:bg-greyBeige animate-pulse">
                <div className="w-5 h-5"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-darkRed/80 backdrop-blur-md border-b border-roseQuartz/20 dark:border-silk/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-redWine dark:text-silk">
              Portfolio
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#home"
                className="text-redWine dark:text-silk hover:text-blush dark:hover:text-greyBeige px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-redWine dark:text-silk hover:text-blush dark:hover:text-greyBeige px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-redWine dark:text-silk hover:text-blush dark:hover:text-greyBeige px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-redWine dark:text-silk hover:text-blush dark:hover:text-greyBeige px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Theme Toggle Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-roseQuartz dark:bg-greyBeige text-redWine dark:text-silk hover:bg-blush dark:hover:text-silk transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-redWine dark:text-silk hover:text-blush dark:hover:text-greyBeige inline-flex items-center justify-center p-2 rounded-md transition-colors"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
