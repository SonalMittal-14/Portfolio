'use client';

import React, { useState, useEffect } from 'react';

const About = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);


  if (!mounted) {
    return (
      <section id="about" className="min-h-screen flex items-center justify-center py-32" style={{backgroundColor: '#F9F6EE'}}>
        <div className="max-w-7xl mx-auto px-12 text-center">
          <div className="h-6 w-32 bg-gray-300 rounded animate-pulse mx-auto mb-20"></div>
          <div className="space-y-8 mb-20">
            <div className="h-16 w-full bg-gray-300 rounded animate-pulse"></div>
            <div className="h-20 w-3/4 bg-gray-300 rounded animate-pulse mx-auto"></div>
            <div className="h-16 w-full bg-gray-300 rounded animate-pulse"></div>
            <div className="h-24 w-2/3 bg-gray-300 rounded animate-pulse mx-auto"></div>
            <div className="h-16 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
          <div className="space-y-4">
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-full bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-4/5 bg-gray-200 rounded animate-pulse mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-32 relative overflow-hidden" style={{backgroundColor: '#F9F6EE'}}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-[#4B0000] to-transparent transform rotate-12"></div>
        <div className="absolute bottom-1/3 right-1/3 w-px h-24 bg-gradient-to-t from-[#4B0000] to-transparent transform -rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-12 text-center relative z-10">
        {/* Section Header */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-sm font-light tracking-[0.4em] uppercase mb-20" style={{color: '#4B0000', fontFamily: 'Playfair Display, serif'}}>
            ABOUT ME
          </h2>
        </div>

        {/* Main Quote - Vogue Style */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold leading-[0.9] tracking-tight mb-20" style={{color: '#4B0000', fontFamily: 'Playfair Display, serif'}}>
            <span className="block">MY WORK IS DESIGNED TO</span>
            <span className="block italic font-light text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Transform
            </span>
            <span className="block">IDEAS INTO</span>
            <span className="block italic font-light text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] mt-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Extraordinary
            </span>
            <span className="block">SOLUTIONS</span>
          </h1>
        </div>

        {/* Description Paragraph */}
        <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl md:text-2xl leading-[1.8] max-w-6xl mx-auto font-light" style={{color: '#4B0000', fontFamily: 'Libre Baskerville, serif'}}>
            As an AI Engineer and Developer, I specialize in creating intelligent systems that not only solve complex problems but do so with elegance and precision. My work spans from cutting-edge machine learning algorithms to user-centric applications that make AI accessible to everyone. With over 5 years of experience in the field, I've led teams, published research, and built products that impact millions of users. My approach combines technical excellence with a keen eye for design, ensuring that every solution is both powerful and beautiful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
