'use client';

import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      subtitle: 'THE FOUNDATION',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Python', level: 92 },
        { name: 'C++', level: 88 },
        { name: 'HLSL', level: 85 },
        { name: 'C#', level: 90 },
        { name: 'SQL', level: 87 },
        { name: 'Bash', level: 82 },
        { name: 'JavaScript', level: 94 },
        { name: 'TypeScript', level: 93 }
      ]
    },
    {
      title: 'Tools & Frameworks',
      subtitle: 'THE ARSENAL',
      skills: [
        { name: 'ReactJS', level: 96 },
        { name: 'NextJS', level: 94 },
        { name: 'GraphQL', level: 88 },
        { name: 'Git/Github', level: 92 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'Unity', level: 89 },
        { name: 'Unreal Engine', level: 86 },
        { name: 'Visual Studio', level: 90 },
        { name: 'VS Code', level: 97 },
        { name: 'AWS', level: 85 },
        { name: 'XNA Framework', level: 83 }
      ]
    },
    {
      title: 'Technical Concepts',
      subtitle: 'THE VISION',
      skills: [
        { name: 'UI/UX Design', level: 93 },
        { name: 'Cloud Computing', level: 87 },
        { name: 'Machine Learning', level: 89 },
        { name: 'Data Visualisation', level: 91 },
        { name: 'Software Engineering', level: 95 },
        { name: 'Artificial Intelligence', level: 88 },
        { name: 'NLP', level: 86 },
        { name: 'Web Development', level: 96 },
        { name: 'Data Structures', level: 94 },
        { name: 'OOP', level: 95 },
        { name: 'Game Development', level: 90 },
        { name: 'Game Engine', level: 87 },
        { name: 'HCI', level: 92 },
        { name: 'SDLC', level: 93 }
      ]
    }
  ];

  if (!mounted) return null;

  return (
    <section id="skills" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Vogue-style Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-1 bg-white"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-white"></div>
      </div>

      {/* Hero Title Section */}
      <div className={`relative z-10 pt-32 pb-20 px-8 transition-all duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Main Title - Vogue Style */}
          <div className="text-center mb-4">
            <div className="text-xs tracking-[0.3em] mb-6 font-light uppercase">
              Portfolio — 2025 Edition
            </div>
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-bold leading-[0.9] tracking-tighter mb-6">
              SKILLS
            </h1>
            <div className="w-32 h-px bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light tracking-wider italic max-w-2xl mx-auto">
              "Mastery is not a destination, but a journey of continuous evolution"
            </p>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className={`relative z-10 px-8 mb-16 transition-all duration-1500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center gap-12 border-t border-b border-white/20 py-6">
            {skillCategories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 relative group ${
                  activeCategory === idx ? 'text-white' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {category.subtitle}
                {activeCategory === idx && (
                  <div className="absolute -bottom-6 left-0 right-0 h-px bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Display - Magazine Layout */}
      <div className="relative z-10 px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          {skillCategories.map((category, catIdx) => (
            <div
              key={catIdx}
              className={`transition-all duration-700 ${
                activeCategory === catIdx ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
            >
              {/* Category Title */}
              <div className="mb-16 text-center">
                <h2 className="text-6xl md:text-7xl font-bold tracking-tight mb-4">
                  {category.title}
                </h2>
                <div className="text-sm tracking-[0.3em] text-white/60 uppercase">
                  {category.skills.length} Specializations
                </div>
              </div>

              {/* Skills Grid - Vogue Magazine Style */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`group transition-all duration-700 delay-${idx * 50}`}
                    style={{ animationDelay: `${idx * 50}ms` }}
                  >
                    {/* Skill Card */}
                    <div className="relative border border-white/10 p-8 hover:border-white/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                      {/* Skill Number */}
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-black flex items-center justify-center text-xs font-bold">
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      {/* Skill Name */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-light tracking-wide mb-2">
                          {skill.name}
                        </h3>
                      </div>

                      {/* Progress Bar - Minimalist */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs tracking-wider">
                          <span className="uppercase text-white/60">Proficiency</span>
                          <span className="font-bold">{skill.level}%</span>
                        </div>
                        <div className="relative h-px bg-white/20 overflow-hidden">
                          <div
                            className="absolute left-0 top-0 h-full bg-white transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              transitionDelay: `${idx * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Decorative Element */}
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-white/10 group-hover:border-white/30 transition-all duration-500 -z-10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Stats Section - Editorial Style */}
          <div className={`mt-32 transition-all duration-1500 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="border-t border-b border-white/20 py-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500">
                    50<span className="text-3xl">+</span>
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/60">
                    Technologies
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500">
                    5<span className="text-3xl">+</span>
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/60">
                    Years
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500">
                    100<span className="text-3xl">+</span>
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/60">
                    Projects
                  </div>
                </div>
                <div className="text-center group">
                  <div className="text-6xl md:text-7xl font-bold mb-4 group-hover:scale-110 transition-transform duration-500">
                    15<span className="text-3xl">+</span>
                  </div>
                  <div className="text-xs tracking-[0.3em] uppercase text-white/60">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="mt-20 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-white/40">
              Crafted with precision • Designed for impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;