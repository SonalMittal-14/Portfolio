'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Linkedin, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contact', label: 'CONTACT' }
  ];

  if (!mounted) {
    return (
       <section className="min-h-screen flex">
         <div className="w-[55%] bg-[#3D0A05] flex items-center justify-center p-16">
          <div className="space-y-12 max-w-4xl text-center">
            <div className="h-32 bg-slate-700 rounded animate-pulse"></div>
            <div className="h-16 bg-slate-700 rounded animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-16 w-64 bg-slate-700 rounded animate-pulse mx-auto"></div>
              <div className="h-16 w-48 bg-slate-700 rounded animate-pulse mx-auto"></div>
            </div>
          </div>
        </div>
         <div className="w-[45%] relative">
          <div className="w-full h-screen bg-slate-200 animate-pulse"></div>
          <div className="absolute top-16 left-8 w-16 h-32 bg-slate-300 rounded animate-pulse"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-[#3D0A05] animate-pulse"></div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Main Hero Container */}
      <div className="flex min-h-screen">
        {/* Left Side - Content Section (55%) - Vogue Inspired */}
        <div className="w-[55%] bg-[#3D0A05] flex items-center justify-center pt-12 pb-0 relative">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-white to-transparent transform rotate-12"></div>
            <div className="absolute bottom-32 right-32 w-px h-60 bg-gradient-to-t from-white to-transparent transform -rotate-12"></div>
          </div>

          <div className="max-w-5xl z-10 text-left">
            {/* Fashion Magazine Style Layout */}
            <div className="space-y-16">
              
              {/* Editorial Header Line */}
              <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="w-24 h-px bg-gradient-to-r from-red-300 to-transparent mb-8"></div>
                <p className="text-red-200 text-sm tracking-[0.3em] font-light uppercase" style={{fontFamily: 'Times New Roman, serif'}}>
                  PORTFOLIO
                </p>
              </div>

              {/* Main Title - Vogue Magazine Style */}
              <div className={`transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <h1 className="relative">
                  {/* Background Text Effect */}
                  <span className="absolute -top-4 -left-2 text-8xl font-black text-white/5 tracking-wider select-none" style={{fontFamily: 'Times New Roman, serif'}}>
                    AI ENGINEER
                  </span>
                  
                  {/* Main Text */}
                  <div className="relative z-10">
                    <div className="text-7xl xl:text-8xl font-black text-white leading-[0.85] tracking-tight mb-4" style={{fontFamily: 'Times New Roman, serif'}}>
                      <span className="block">AI ENGINEER</span>
                      <span className="block text-6xl xl:text-7xl mt-2 ml-8">&</span>
                      <span className="block text-5xl xl:text-6xl mt-2 ml-16 text-red-400">DEVELOPER</span>
                    </div>
                  </div>
                </h1>
              </div>

              {/* Elegant Divider */}
              <div className={`transform transition-all duration-1000 delay-600 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}>
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-px bg-gradient-to-r from-red-300 to-red-300/30"></div>
                  <div className="w-2 h-2 bg-red-300 rotate-45"></div>
                  <div className="w-32 h-px bg-gradient-to-r from-red-300/30 to-transparent"></div>
                </div>
              </div>
              
              {/* Tagline - Fashion Editorial Style */}
              <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <blockquote className="relative">
                  <div className="absolute -top-6 -left-4 text-6xl text-red-300/30" style={{fontFamily: 'Times New Roman, serif'}}>"</div>
                  <p className="text-stone-200 text-xl xl:text-2xl leading-relaxed italic font-light max-w-3xl pl-8" style={{fontFamily: 'Times New Roman, serif'}}>
                    Crafting AI-powered solutions with the precision of haute couture and the innovation of tomorrow's technology.
                  </p>
                  <div className="absolute -bottom-4 right-0 text-6xl text-red-300/30 rotate-180" style={{fontFamily: 'Times New Roman, serif'}}>"</div>
                </blockquote>
              </div>
              
              {/* Call-to-Action Buttons - Fashion Magazine Style */}
              <div className={`transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  {/* Primary Button */}
                  <a
                    href="#portfolio"
                    className="group relative overflow-hidden inline-flex items-center justify-center px-12 py-5 bg-red-600 hover:bg-red-700 text-white text-lg font-medium transition-all duration-500 shadow-2xl hover:shadow-red-500/25 transform hover:-translate-y-1 border-2 border-red-600"
                    style={{fontFamily: 'Times New Roman, serif'}}
                  >
                    <span className="relative z-10 tracking-wider uppercase">View Portfolio</span>
                    <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </a>
                  
                  {/* Secondary Button */}
                  <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center px-12 py-5 border-2 border-stone-400 text-stone-300 hover:bg-white hover:text-[#3D0A05] hover:border-white transition-all duration-500 overflow-hidden"
                    style={{fontFamily: 'Times New Roman, serif'}}
                  >
                    <span className="relative z-10 tracking-wider uppercase flex items-center">
                      <Linkedin className="mr-3 w-5 h-5" />
                      Connect
                    </span>
                    
                    {/* Elegant underline effect */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </a>
                </div>
              </div>

              {/* Editorial Credit */}
              <div className={`transform transition-all duration-1000 delay-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                {/* <div className="pt-16">
                  <p className="text-stone-500 text-xs tracking-[0.2em] uppercase" style={{fontFamily: 'Times New Roman, serif'}}>
                    Est. • Innovative • Professional
                  </p>
                </div> */}
              </div>

            </div>
          </div>
        </div>

        {/* Right Side - Image Section (45%) */}
        <div className="w-[45%] relative h-screen">
          {/* Name overlay on image - Fashion Magazine Style */}
          <div className="absolute top-8 right-24 z-20">
            <div className={`transform transition-all duration-1200 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
              <h3 className="text-6xl xl:text-7xl font-black tracking-[0.1em] leading-none" style={{color: '#3D0A05', fontFamily: 'Times New Roman, serif'}}>
                <span className="block">SONAL MITTAL</span>
                {/* <span className="block text-5xl xl:text-6xl mt-1 ml-4">MITTAL</span> */}
              </h3>
              {/* Accent line under name */}
              {/* <div className="w-20 h-1 bg-red-600 mt-4 ml-4"></div> */}
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src="/images/dark/SonalPic2.png"
              alt="Sonal Mittal - AI Engineer & Developer"
              width={600}
              height={800}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              priority
              style={{
                height: '100vh',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            
            {/* Elegant overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
          </div>

          {/* Fashion Magazine Style Scroll Indicator */}
          <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 ${isVisible ? 'animate-bounce' : ''}`}>
            <div className="flex flex-col items-center space-y-3">
              <span className="text-xs tracking-[0.3em] uppercase font-light" style={{fontFamily: 'Times New Roman, serif'}}>Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-white/60 via-white/30 to-transparent"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Navbar - Far Right Edge */}
      <nav className="fixed right-0 top-0 h-full w-20 z-50">
        <div className="bg-[#3D0A05] h-full flex flex-col border-l border-stone-800">
          {/* Navigation items */}
          <div className="flex-1 flex flex-col justify-center py-16">
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`group relative flex items-center justify-center w-full h-16 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-white text-red-600 shadow-lg' 
                      : 'text-white hover:bg-white/10 hover:text-amber-200'
                  }`}
                  onClick={() => setActiveSection(item.id)}
                  title={item.label}
                  style={{
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <span 
                    className="text-xs font-bold tracking-[0.2em] transition-colors duration-300"
                    style={{
                      writingMode: 'vertical-lr',
                      textOrientation: 'mixed',
                      fontFamily: 'Times New Roman, serif'
                    }}
                  >
                    {item.label}
                  </span>
                  
                  {/* Active indicator - Fashion Magazine Style */}
                  {activeSection === item.id && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-red-600 rounded-r-full shadow-lg"></div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-300/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Elegant bottom accent */}
          <div className="p-4">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-stone-600 to-transparent"></div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Hero;