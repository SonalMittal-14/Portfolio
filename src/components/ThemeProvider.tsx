'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme, getThemeFromStorage, setThemeInStorage } from '@/lib/theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = getThemeFromStorage();
    setTheme(storedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setThemeInStorage(theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-white dark:bg-darkRed">
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-darkRed/80 backdrop-blur-md border-b border-roseQuartz/20 dark:border-silk/20">
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
        </div>
        <div className="pt-16">
          <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-6xl font-bold text-redWine dark:text-silk mb-6">
                    Hi, I&apos;m{' '}
                    <span className="text-blush dark:text-greyBeige">
                      Your Name
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-redWine/80 dark:text-silk/80 mb-6">
                    Full Stack Developer
                  </h2>
                  <p className="text-lg text-redWine/70 dark:text-silk/70 mb-8 max-w-2xl">
                    I create beautiful, responsive web applications with modern technologies. 
                    Passionate about clean code, user experience, and continuous learning.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-roseQuartz dark:bg-greyBeige animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
