'use client';

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Award, 
  Users, 
  TrendingUp,
  Code,
  Brain,
  Zap
} from 'lucide-react';

const Experience = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const experiences = [
    {
      company: 'TechCorp AI',
      position: 'Senior AI Engineer',
      location: 'San Francisco, CA',
      duration: '2022 - Present',
      type: 'Full-time',
      description: 'Leading AI initiatives and developing cutting-edge machine learning solutions for enterprise clients.',
      achievements: [
        'Led a team of 8 engineers in developing a computer vision system that improved accuracy by 40%',
        'Architected and deployed ML pipelines serving 1M+ daily predictions',
        'Reduced model training time by 60% through optimization techniques',
        'Mentored 5 junior developers and conducted technical interviews'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'React'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: 'DataFlow Solutions',
      position: 'Machine Learning Engineer',
      location: 'New York, NY',
      duration: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and deployed machine learning models for data analytics and business intelligence.',
      achievements: [
        'Built recommendation system that increased user engagement by 35%',
        'Implemented real-time data processing pipeline handling 10TB+ daily',
        'Created automated model retraining system reducing manual work by 80%',
        'Published 2 research papers in top-tier AI conferences'
      ],
      technologies: ['Python', 'PyTorch', 'Apache Spark', 'PostgreSQL', 'Redis', 'Node.js'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: 'StartupAI',
      position: 'Co-founder & CTO',
      location: 'Austin, TX',
      duration: '2019 - 2020',
      type: 'Co-founder',
      description: 'Co-founded AI startup focused on natural language processing and conversational AI.',
      achievements: [
        'Raised $2M+ in seed funding from top-tier VCs',
        'Built MVP that achieved 10K+ active users in 6 months',
        'Developed proprietary NLP algorithms with 95% accuracy',
        'Led technical team of 12 engineers and data scientists'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'AWS', 'MongoDB', 'Docker'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      company: 'Google',
      position: 'Software Engineer Intern',
      location: 'Mountain View, CA',
      duration: '2018 - 2019',
      type: 'Internship',
      description: 'Worked on Google Cloud AI services and machine learning infrastructure.',
      achievements: [
        'Contributed to AutoML Vision API improving model accuracy by 15%',
        'Optimized TensorFlow serving infrastructure reducing latency by 30%',
        'Developed internal tools for model monitoring and debugging',
        'Collaborated with senior engineers on large-scale ML systems'
      ],
      technologies: ['Python', 'TensorFlow', 'Go', 'Kubernetes', 'BigQuery', 'Cloud AI'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const education = [
    {
      institution: 'Stanford University',
      degree: 'Master of Science in Computer Science',
      specialization: 'Artificial Intelligence & Machine Learning',
      duration: '2017 - 2019',
      gpa: '3.9/4.0',
      achievements: [
        'Graduated Summa Cum Laude',
        'Published 3 research papers in top AI conferences',
        'Teaching Assistant for Machine Learning course',
        'President of AI Student Society'
      ]
    },
    {
      institution: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      specialization: 'Data Science & Software Engineering',
      duration: '2013 - 2017',
      gpa: '3.8/4.0',
      achievements: [
        'Magna Cum Laude',
        'Dean\'s List for 6 consecutive semesters',
        'Research Assistant in Computer Vision Lab',
        'Captain of Programming Competition Team'
      ]
    }
  ];

  if (!mounted) {
    return (
      <section id="experience" className="min-h-screen py-32 relative overflow-hidden" style={{backgroundColor: '#F9F6EE'}}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="h-20 bg-opacity-10 bg-gray-800 rounded animate-pulse mx-auto max-w-xl mb-8"></div>
            <div className="h-6 bg-opacity-5 bg-gray-800 rounded animate-pulse mx-auto max-w-2xl"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen py-32 relative overflow-hidden" style={{backgroundColor: '#F9F6EE'}}>
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{backgroundColor: '#7F1F0E'}}></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl" style={{backgroundColor: '#AC746C'}}></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl" style={{backgroundColor: '#3D0A05'}}></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header - Vogue Editorial Style */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-24">
            <div className="inline-block mb-8">
              <div className="h-px w-20 mx-auto mb-8" style={{backgroundColor: '#7F1F0E'}}></div>
              <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{color: '#7F1F0E', fontFamily: 'Times New Roman, serif'}}>
                Professional Journey
              </p>
            </div>
            
            <h2 
              className="text-7xl md:text-8xl lg:text-9xl font-light mb-10 tracking-tight leading-none"
              style={{color: '#3D0A05', fontFamily: 'Playfair Display, Times New Roman, serif'}}
            >
              Experience
            </h2>
            
            <p className="text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{color: '#3D0A05', fontFamily: 'Times New Roman, serif', opacity: 0.7}}>
              A carefully curated chronicle of innovation, leadership, and technical mastery
            </p>
          </div>
        </div>

        {/* Tab Navigation - Minimalist Design */}
        <div className={`flex justify-center mb-20 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="inline-flex border" style={{borderColor: '#7F1F0E'}}>
            <button
              onClick={() => setActiveTab(0)}
              className="relative px-12 py-5 text-sm tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden group"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              <div 
                className="absolute inset-0 transition-transform duration-500 ease-out origin-bottom"
                style={{
                  backgroundColor: activeTab === 0 ? '#3D0A05' : 'transparent',
                  transform: activeTab === 0 ? 'scaleY(1)' : 'scaleY(0)'
                }}
              ></div>
              <span 
                className="relative z-10 transition-colors duration-300"
                style={{color: activeTab === 0 ? '#DAC1B1' : '#3D0A05'}}
              >
                Work Experience
              </span>
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className="relative px-12 py-5 text-sm tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden border-l group"
              style={{fontFamily: 'Times New Roman, serif', borderColor: '#7F1F0E'}}
            >
              <div 
                className="absolute inset-0 transition-transform duration-500 ease-out origin-bottom"
                style={{
                  backgroundColor: activeTab === 1 ? '#3D0A05' : 'transparent',
                  transform: activeTab === 1 ? 'scaleY(1)' : 'scaleY(0)'
                }}
              ></div>
              <span 
                className="relative z-10 transition-colors duration-300"
                style={{color: activeTab === 1 ? '#DAC1B1' : '#3D0A05'}}
              >
                Education
              </span>
            </button>
          </div>
        </div>

        {/* Work Experience Tab */}
        {activeTab === 0 && (
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Experience number */}
                  <div 
                    className="absolute -left-4 top-0 text-9xl font-light opacity-5 transition-opacity duration-500"
                    style={{
                      color: '#3D0A05',
                      fontFamily: 'Playfair Display, Times New Roman, serif',
                      opacity: hoveredIndex === index ? 0.08 : 0.03
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative">
                    {/* Decorative line */}
                    <div 
                      className="absolute -left-8 top-0 w-px transition-all duration-700"
                      style={{
                        backgroundColor: '#7F1F0E',
                        height: hoveredIndex === index ? '100%' : '60%'
                      }}
                    ></div>

                    {/* Content Container */}
                    <div className="pl-8 space-y-8">
                      {/* Header Section */}
                      <div className="space-y-4">
                        {/* Category line */}
                        <div className="flex items-center gap-4">
                          <div className="h-px w-12" style={{backgroundColor: '#AC746C'}}></div>
                          <span 
                            className="text-xs tracking-[0.3em] uppercase"
                            style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}
                          >
                            {exp.duration}
                          </span>
                        </div>

                        {/* Position and Company */}
                        <div>
                          <h3 
                            className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-2 transition-all duration-300"
                            style={{
                              color: '#3D0A05',
                              fontFamily: 'Playfair Display, Times New Roman, serif',
                              opacity: hoveredIndex === index ? 1 : 0.9
                            }}
                          >
                            {exp.position}
                          </h3>
                          <p 
                            className="text-2xl font-light tracking-wide"
                            style={{color: '#7F1F0E', fontFamily: 'Times New Roman, serif'}}
                          >
                            {exp.company}
                          </p>
                        </div>

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-6 text-sm">
                          <div className="flex items-center space-x-2" style={{color: '#3D0A05', opacity: 0.6}}>
                            <MapPin className="w-4 h-4" />
                            <span style={{fontFamily: 'Times New Roman, serif'}}>{exp.location}</span>
                          </div>
                          <div 
                            className="px-4 py-1 border text-xs tracking-wider uppercase"
                            style={{
                              color: '#7F1F0E',
                              borderColor: '#7F1F0E',
                              fontFamily: 'Times New Roman, serif'
                            }}
                          >
                            {exp.type}
                          </div>
                        </div>

                        {/* Description */}
                        <p 
                          className="text-base md:text-lg font-light leading-relaxed tracking-wide max-w-3xl pt-4"
                          style={{color: '#3D0A05', fontFamily: 'Times New Roman, serif', opacity: 0.7}}
                        >
                          {exp.description}
                        </p>
                      </div>

                      {/* Achievements Section */}
                      <div className="pt-6 border-t" style={{borderColor: '#7F1F0E', borderOpacity: 0.2}}>
                        <h4 
                          className="text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
                          style={{color: '#7F1F0E', fontFamily: 'Times New Roman, serif'}}
                        >
                          <div className="h-px w-8" style={{backgroundColor: '#AC746C'}}></div>
                          Key Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {exp.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3 group/item">
                              <div 
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                                style={{backgroundColor: '#AC746C'}}
                              ></div>
                              <span 
                                className="text-sm font-light leading-relaxed"
                                style={{color: '#3D0A05', fontFamily: 'Times New Roman, serif', opacity: 0.7}}
                              >
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="pt-6">
                        <h4 
                          className="text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
                          style={{color: '#7F1F0E', fontFamily: 'Times New Roman, serif'}}
                        >
                          <div className="h-px w-8" style={{backgroundColor: '#AC746C'}}></div>
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs tracking-wider uppercase px-4 py-2 border transition-all duration-300 hover:scale-105"
                              style={{
                                color: '#3D0A05',
                                borderColor: '#7F1F0E',
                                fontFamily: 'Times New Roman, serif',
                                backgroundColor: hoveredIndex === index ? 'rgba(127, 31, 14, 0.05)' : 'transparent'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 1 && (
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-24">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
                  }}
                >
                  {/* Education number */}
                  <div 
                    className="absolute -left-4 top-0 text-9xl font-light opacity-5 transition-opacity duration-500"
                    style={{
                      color: '#3D0A05',
                      fontFamily: 'Playfair Display, Times New Roman, serif',
                      opacity: hoveredIndex === index ? 0.08 : 0.03
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  <div className="relative">
                    {/* Decorative line */}
                    <div 
                      className="absolute -left-8 top-0 w-px transition-all duration-700"
                      style={{
                        backgroundColor: '#7F1F0E',
                        height: hoveredIndex === index ? '100%' : '60%'
                      }}
                    ></div>

                    {/* Content Container */}
                    <div className="pl-8 space-y-8">
                      {/* Header Section */}
                      <div className="space-y-4">
                        {/* Category line */}
                        <div className="flex items-center gap-4">
                          <div className="h-px w-12" style={{backgroundColor: '#AC746C'}}></div>
                          <span 
                            className="text-xs tracking-[0.3em] uppercase"
                            style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}
                          >
                            {edu.duration}
                          </span>
                        </div>

                        {/* Degree and Institution */}
                        <div>
                          <h3 
                            className="text-4xl md:text-5xl font-light leading-tight tracking-tight mb-2 transition-all duration-300"
                            style={{
                              color: '#3D0A05',
                              fontFamily: 'Playfair Display, Times New Roman, serif',
                              opacity: hoveredIndex === index ? 1 : 0.9
                            }}
                          >
                            {edu.degree}
                          </h3>
                          <p 
                            className="text-2xl font-light tracking-wide mb-2"
                            style={{color: '#7F1F0E', fontFamily: 'Times New Roman, serif'}}
                          >
                            {edu.institution}
                          </p>
                          <p 
                            className="text-lg font-light tracking-wide"
                            style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}
                          >
                            {edu.specialization}
                          </p>
                        </div>

                        {/* GPA */}
                        <div 
                          className="inline-flex items-center gap-3 px-4 py-2 border"
                          style={{borderColor: '#7F1F0E'}}
                        >
                          <Award className="w-4 h-4" style={{color: '#7F1F0E'}} />
                          <span 
                            className="text-sm tracking-wider uppercase font-medium"
                            style={{color: '#3D0A05', fontFamily: 'Times New Roman, serif'}}
                          >
                            GPA: {edu.gpa}
                          </span>
                        </div>
                      </div>

                      {/* Achievements Section */}
                      <div className="pt-6 border-t" style={{borderColor: '#7F1F0E', borderOpacity: 0.2}}>
                        <h4 
                          className="text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3"
                          style={{color: '#7F1F0E', fontFamily: 'Times New Roman, serif'}}
                        >
                          <div className="h-px w-8" style={{backgroundColor: '#AC746C'}}></div>
                          Academic Achievements
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start space-x-3 group/item">
                              <div 
                                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300"
                                style={{backgroundColor: '#AC746C'}}
                              ></div>
                              <span 
                                className="text-sm font-light leading-relaxed"
                                style={{color: '#3D0A05', fontFamily: 'Times New Roman, serif', opacity: 0.7}}
                              >
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA - Editorial Style */}
        {/* <div className={`mt-32 pt-20 border-t transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{borderColor: '#7F1F0E'}}>
          <div className="text-center space-y-10">
            <div className="inline-block">
              <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}>
                Let's Collaborate
              </p>
              <div className="h-px w-24 mx-auto" style={{backgroundColor: '#AC746C'}}></div>
            </div>
            
            <p 
              className="text-4xl md:text-5xl font-light tracking-tight max-w-3xl mx-auto"
              style={{color: '#3D0A05', fontFamily: 'Playfair Display, Times New Roman, serif'}}
            >
              Ready to create something extraordinary together?
            </p>
            
            <a
              href="#contact"
              className="group/cta inline-flex items-center gap-4 text-sm tracking-[0.2em] uppercase px-12 py-5 border transition-all duration-500 hover:scale-105 relative overflow-hidden"
              style={{fontFamily: 'Times New Roman, serif', borderColor: '#3D0A05'}}
            >
              <span className="relative z-10 transition-colors duration-300" style={{color: '#3D0A05'}}>
                Start a Conversation
              </span>
              <ArrowRight 
                className="w-5 h-5 relative z-10 transition-all duration-300 group-hover/cta:translate-x-2" 
                style={{color: '#3D0A05'}}
              />
              <div 
                className="absolute inset-0 transition-transform duration-500 ease-out origin-left"
                style={{
                  backgroundColor: '#3D0A05',
                  transform: 'scaleX(0)'
                }}
              ></div>
            </a>
          </div>
        </div> */}
      </div>

      {/* Fade in animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;