'use client';

import React, { useState, useEffect } from 'react';

const VogueCoverHero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setMounted(true);
    
    // Update time for that magazine authenticity
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-US', { 
        month: 'long', 
        year: 'numeric' 
      }).toUpperCase());
    };
    updateTime();
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#3D0A05] flex items-center justify-center">
        <div className="text-[#DAC1B1] text-2xl font-light tracking-widest animate-pulse">LOADING...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen relative overflow-hidden bg-[#3D0A05]">
      
      {/* Magazine Header - Vogue Style */}
      <div className="absolute top-0 left-0 right-0 z-50 p-8 lg:p-12">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-6xl font-bold tracking-[0.3em] text-[#DAC1B1] font-serif">
              PORTFOLIO
            </h1>
            <div className="w-24 h-px bg-[#A58570] animate-pulse"></div>
          </div>
          
          <div className="text-right space-y-1">
            <p className="text-[#A58570] text-sm tracking-widest font-light">{currentTime}</p>
            <p className="text-[#DAC1B1] text-xs tracking-wider opacity-80">DIGITAL EDITION</p>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Base gradient with texture */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3D0A05] via-[#7F1F0E] to-[#3D0A05]"></div>
        
        {/* Animated geometric shapes */}
        <div 
          className="absolute w-[800px] h-[800px] opacity-5 transition-transform duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, #A58570 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(45deg)`
          }}
        ></div>

        {/* Floating elements for depth */}
        <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-gradient-to-b from-[#AC746C] to-transparent opacity-30 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-24 bg-gradient-to-t from-[#DAC1B1] to-transparent opacity-40 transform -rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Elegant light rays */}
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-[#DAC1B1]/20 via-transparent to-transparent opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
          
          {/* Editorial Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column - Editorial Content */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Fashion Tag Line */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-4">
                  <div className="w-16 h-px bg-[#A58570]"></div>
                  <span className="text-[#A58570] text-sm font-light tracking-[0.4em] uppercase">Featured Story</span>
                </div>
                
                {/* Main Headlines - Vogue Typography */}
                <div className="space-y-4">
                  <h2 className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.85] tracking-tight">
                    <span className="block text-white font-serif relative group">
                      SONAL
                      {/* Elegant text shadow effect */}
                      <span 
                        className="absolute inset-0 text-[#7F1F0E] opacity-50 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 -z-10"
                      >
                        SONAL
                      </span>
                    </span>
                    <span className="block text-[#DAC1B1] font-serif italic relative group">
                      MITTAL
                      <span 
                        className="absolute inset-0 text-[#AC746C] opacity-30 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 -z-10"
                      >
                        MITTAL
                      </span>
                    </span>
                  </h2>
                </div>

                {/* Professional Title with Vogue Styling */}
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-light text-[#A58570] tracking-[0.3em] uppercase relative">
                    AI Engineer & Developer
                    <div className="absolute -bottom-2 left-0 w-32 h-px bg-gradient-to-r from-[#AC746C] to-transparent"></div>
                  </h3>
                </div>
              </div>

              {/* Editorial Quote */}
              <div className="relative max-w-2xl">
                <div className="absolute -top-8 -left-4 text-[#7F1F0E] text-8xl font-serif opacity-30 leading-none">"</div>
                <blockquote className="text-xl lg:text-2xl text-[#DAC1B1] font-light leading-relaxed italic pl-8 relative">
                  Crafting AI-powered solutions with the precision of haute couture and the innovation of tomorrow's technology.
                </blockquote>
                <div className="absolute -bottom-4 right-0 text-[#7F1F0E] text-8xl font-serif opacity-30 leading-none rotate-180">"</div>
              </div>

              {/* Elegant Divider */}
              <div className="flex items-center space-x-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-[#AC746C] rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-[#A58570] rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-3 h-3 bg-[#7F1F0E] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-[#A58570] to-transparent"></div>
              </div>

              {/* Fashion-Forward Action Buttons */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row gap-6">
                  
                  {/* Primary CTA - Editorial Style */}
                  <button className="group relative px-12 py-6 bg-[#7F1F0E] hover:bg-[#AC746C] text-white font-light tracking-[0.2em] uppercase text-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#7F1F0E]/30">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      View Portfolio
                      <div className="w-8 h-px bg-current transform group-hover:w-12 transition-all duration-300"></div>
                    </span>
                    {/* Elegant shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>

                  {/* Secondary CTA */}
                  <button className="group relative px-12 py-6 border border-[#A58570] hover:border-[#DAC1B1] text-[#A58570] hover:text-white font-light tracking-[0.2em] uppercase text-lg transition-all duration-500 overflow-hidden transform hover:-translate-y-2 backdrop-blur-sm hover:shadow-2xl hover:shadow-[#A58570]/20">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                      Connect
                    </span>
                    <div className="absolute inset-0 bg-[#A58570]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </div>

                {/* Status Indicator - Editorial Style */}
                <div className="flex items-center space-x-4 text-[#A58570]">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#AC746C] rounded-full animate-pulse shadow-lg shadow-[#AC746C]/50"></div>
                    <span className="text-sm font-light tracking-wide">Available for collaborations</span>
                  </div>
                  <div className="w-px h-4 bg-[#A58570]/50"></div>
                  <span className="text-xs tracking-wider opacity-70">Open to new opportunities</span>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image with Editorial Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative group">
                
                {/* Magazine-style photo frame */}
                <div className="relative w-80 h-[500px] lg:w-96 lg:h-[600px]">
                  
                  {/* Outer editorial frame */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DAC1B1] to-[#A58570] p-6 transform rotate-1 shadow-2xl transition-transform duration-700 group-hover:rotate-2 group-hover:scale-105">
                    <div className="w-full h-full bg-[#3D0A05] p-4">
                      <div className="w-full h-full overflow-hidden relative">
                        <img
                          src="/images/dark/SonalPic2.png"
                          alt="Sonal Mittal - AI Engineer"
                          className="w-full h-full object-cover object-center transition-all duration-1000 group-hover:scale-110 filter brightness-110 contrast-110"
                          style={{
                            filter: 'brightness(1.1) contrast(1.1) saturate(1.05)'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-[#7F1F0E] to-[#AC746C] flex items-center justify-center">
                                <div class="text-[#DAC1B1] text-6xl font-bold font-serif">SM</div>
                              </div>
                            `;
                          }}
                        />
                        
                        {/* Editorial overlay effects */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3D0A05]/30 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#7F1F0E]/5 via-transparent to-[#AC746C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      </div>
                    </div>
                  </div>

                  {/* Editorial corner marks */}
                  <div className="absolute -top-4 -left-4 w-8 h-8">
                    <div className="absolute top-0 left-0 w-full h-px bg-[#DAC1B1]"></div>
                    <div className="absolute top-0 left-0 w-px h-full bg-[#DAC1B1]"></div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-8 h-8">
                    <div className="absolute top-0 right-0 w-full h-px bg-[#DAC1B1]"></div>
                    <div className="absolute top-0 right-0 w-px h-full bg-[#DAC1B1]"></div>
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-8 h-8">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-[#DAC1B1]"></div>
                    <div className="absolute bottom-0 left-0 w-px h-full bg-[#DAC1B1]"></div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 w-8 h-8">
                    <div className="absolute bottom-0 right-0 w-full h-px bg-[#DAC1B1]"></div>
                    <div className="absolute bottom-0 right-0 w-px h-full bg-[#DAC1B1]"></div>
                  </div>

                  {/* Floating accent elements */}
                  <div 
                    className="absolute -top-8 -right-8 w-16 h-16 border border-[#AC746C]/30 transform rotate-45 transition-transform duration-1000"
                    style={{
                      transform: `rotate(45deg) translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                    }}
                  ></div>
                  
                  <div 
                    className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#7F1F0E]/20 rounded-full blur-sm animate-pulse"
                    style={{animationDelay: '1s'}}
                  ></div>
                </div>

                {/* Editorial shadow with depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3D0A05]/60 to-[#7F1F0E]/40 rounded-lg transform rotate-3 scale-95 -z-10 blur-xl transition-transform duration-700 group-hover:scale-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex justify-between items-end p-8 lg:p-16">
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <span className="text-[#A58570] text-xs tracking-widest font-light">ISSUE #001</span>
              <div className="w-8 h-px bg-[#A58570]"></div>
              <span className="text-[#A58570] text-xs tracking-widest font-light">DIGITAL PORTFOLIO</span>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-[#A58570] text-xs tracking-widest font-light opacity-70">
              CRAFTED WITH PRECISION • DESIGNED WITH PASSION
            </p>
          </div>
        </div>
        
        {/* Elegant bottom accent */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#A58570] to-transparent"></div>
      </div>

      {/* Floating decorative elements */}
      <div 
        className="absolute top-1/3 right-16 opacity-20 transition-transform duration-1000 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
        }}
      >
        <div className="w-24 h-24 border border-[#DAC1B1]/30 transform rotate-45"></div>
      </div>
      
      <div 
        className="absolute bottom-1/3 left-16 opacity-15 transition-transform duration-1000 hidden lg:block"
        style={{
          transform: `translate(${mousePosition.x * -0.1}px, ${mousePosition.y * -0.1}px)`
        }}
      >
        <div className="w-32 h-1 bg-[#AC746C]/40 transform -rotate-45"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default VogueCoverHero;