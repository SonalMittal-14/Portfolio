'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Code, Brain, Zap, Award, ArrowRight } from 'lucide-react';

const About = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const skills = [
    { name: 'Machine Learning', level: 95, icon: Brain },
    { name: 'Deep Learning', level: 90, icon: Zap },
    { name: 'Python', level: 98, icon: Code },
    { name: 'TensorFlow', level: 88, icon: Brain },
    { name: 'PyTorch', level: 85, icon: Zap },
    { name: 'React/Next.js', level: 92, icon: Code },
  ];

  const achievements = [
    { year: '2024', title: 'AI Innovation Award', description: 'Recognized for breakthrough work in neural architecture search' },
    { year: '2023', title: 'Tech Leadership', description: 'Led AI team of 15+ engineers at Fortune 500 company' },
    { year: '2022', title: 'Research Publication', description: 'Published in top-tier AI conference on computer vision' },
    { year: '2021', title: 'Startup Success', description: 'Co-founded AI startup with $2M+ in funding' },
  ];

  if (!mounted) {
    return (
      <section id="about" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="h-8 w-32 bg-slate-300 rounded animate-pulse"></div>
              <div className="h-16 w-64 bg-slate-300 rounded animate-pulse"></div>
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="h-96 bg-slate-200 rounded animate-pulse"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="min-h-screen bg-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-px h-40 bg-gradient-to-b from-red-600 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-px h-60 bg-gradient-to-t from-red-600 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-px bg-gradient-to-r from-red-600/30 to-transparent transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-gradient-to-r from-red-600 to-red-300 mx-auto mb-6"></div>
            <h2 className="text-6xl xl:text-7xl font-black text-[#3D0A05] tracking-tight mb-6" style={{fontFamily: 'Times New Roman, serif'}}>
              ABOUT
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
              The intersection of artificial intelligence and elegant design
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            {/* Editorial Quote */}
            <div className="mb-12">
              <blockquote className="relative">
                <div className="absolute -top-4 -left-4 text-5xl text-red-300/40" style={{fontFamily: 'Times New Roman, serif'}}>"</div>
                <p className="text-2xl xl:text-3xl text-[#3D0A05] leading-relaxed italic font-light pl-8" style={{fontFamily: 'Times New Roman, serif'}}>
                  I believe AI should be as beautiful as it is powerful, as intuitive as it is intelligent.
                </p>
                <div className="absolute -bottom-2 right-0 text-5xl text-red-300/40 rotate-180" style={{fontFamily: 'Times New Roman, serif'}}>"</div>
              </blockquote>
            </div>

            {/* Main Description */}
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
                As an AI Engineer and Developer, I specialize in creating intelligent systems that not only solve complex problems but do so with elegance and precision. My work spans from cutting-edge machine learning algorithms to user-centric applications that make AI accessible to everyone.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
                With over 5 years of experience in the field, I've led teams, published research, and built products that impact millions of users. My approach combines technical excellence with a keen eye for design, ensuring that every solution is both powerful and beautiful.
              </p>
            </div>

            {/* Skills Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-[#3D0A05] mb-8 tracking-wide" style={{fontFamily: 'Times New Roman, serif'}}>
                CORE EXPERTISE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className={`transform transition-all duration-700 delay-${500 + index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-5 h-5 text-red-600" />
                        <span className="text-sm font-medium text-gray-700" style={{fontFamily: 'Times New Roman, serif'}}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-red-600 to-red-400 h-2 rounded-full transition-all duration-1000 delay-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className={`transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <a
                href="#portfolio"
                className="group inline-flex items-center px-8 py-4 bg-[#3D0A05] hover:bg-red-700 text-white font-medium transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{fontFamily: 'Times New Roman, serif'}}
              >
                <span className="tracking-wider uppercase">View My Work</span>
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/images/light/profile.png"
                  alt="Sonal Mittal - Professional Portrait"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  style={{
                    aspectRatio: '5/6',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Achievement Cards */}
              <div className="absolute -top-8 -right-8 bg-white shadow-xl rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="text-sm font-bold text-[#3D0A05]" style={{fontFamily: 'Times New Roman, serif'}}>5+ Years</p>
                    <p className="text-xs text-gray-600">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 bg-white shadow-xl rounded-lg p-6 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <Brain className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="text-sm font-bold text-[#3D0A05]" style={{fontFamily: 'Times New Roman, serif'}}>50+ Projects</p>
                    <p className="text-xs text-gray-600">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className={`mt-32 transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h3 className="text-4xl font-bold text-[#3D0A05] text-center mb-16 tracking-tight" style={{fontFamily: 'Times New Roman, serif'}}>
            CAREER HIGHLIGHTS
          </h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-red-600 via-red-400 to-red-300"></div>
            
            <div className="space-y-16">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'ml-8' : 'mr-8'}`}>
                    <div className="bg-white rounded-lg shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="text-2xl font-bold text-red-600" style={{fontFamily: 'Times New Roman, serif'}}>
                          {achievement.year}
                        </span>
                        <div className="w-16 h-px bg-red-300"></div>
                      </div>
                      <h4 className="text-xl font-bold text-[#3D0A05] mb-2" style={{fontFamily: 'Times New Roman, serif'}}>
                        {achievement.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
