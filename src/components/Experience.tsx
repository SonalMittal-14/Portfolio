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
      <section id="experience" className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-32 bg-slate-300 rounded animate-pulse mx-auto mb-6"></div>
            <div className="h-16 w-64 bg-slate-300 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="space-y-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6">
                <div className="h-6 w-48 bg-slate-300 rounded animate-pulse mb-4"></div>
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mb-2"></div>
                <div className="space-y-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="h-3 bg-slate-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen bg-white py-20 relative overflow-hidden">
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
              EXPERIENCE
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
              A journey through innovation, leadership, and technical excellence
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className={`flex justify-center mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gray-100 rounded-2xl p-2 flex space-x-2">
            <button
              onClick={() => setActiveTab(0)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 0 
                  ? 'bg-[#3D0A05] text-white shadow-lg' 
                  : 'text-gray-600 hover:text-[#3D0A05] hover:bg-white'
              }`}
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab(1)}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeTab === 1 
                  ? 'bg-[#3D0A05] text-white shadow-lg' 
                  : 'text-gray-600 hover:text-[#3D0A05] hover:bg-white'
              }`}
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              Education
            </button>
          </div>
        </div>

        {/* Work Experience Tab */}
        {activeTab === 0 && (
          <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-red-600 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <Building2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#3D0A05] group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                              {exp.position}
                            </h3>
                            <p className="text-xl text-gray-700 font-medium" style={{fontFamily: 'Times New Roman, serif'}}>
                              {exp.company}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4" />
                            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 leading-relaxed mb-6" style={{fontFamily: 'Times New Roman, serif'}}>
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-[#3D0A05] mb-4 flex items-center" style={{fontFamily: 'Times New Roman, serif'}}>
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <ArrowRight className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700" style={{fontFamily: 'Times New Roman, serif'}}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-bold text-[#3D0A05] mb-4 flex items-center" style={{fontFamily: 'Times New Roman, serif'}}>
                        <Code className="w-5 h-5 mr-2" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-red-100 hover:text-red-700 transition-colors duration-300"
                            style={{fontFamily: 'Times New Roman, serif'}}
                          >
                            {tech}
                          </span>
                        ))}
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
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={index} className={`transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border-l-4 border-blue-600 group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Award className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-[#3D0A05] group-hover:text-blue-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                              {edu.degree}
                            </h3>
                            <p className="text-xl text-gray-700 font-medium" style={{fontFamily: 'Times New Roman, serif'}}>
                              {edu.institution}
                            </p>
                            <p className="text-lg text-blue-600 font-medium" style={{fontFamily: 'Times New Roman, serif'}}>
                              {edu.specialization}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-medium">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-bold text-[#3D0A05] mb-4 flex items-center" style={{fontFamily: 'Times New Roman, serif'}}>
                        <Users className="w-5 h-5 mr-2" />
                        Academic Achievements
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-3">
                            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700" style={{fontFamily: 'Times New Roman, serif'}}>
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`mt-20 text-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#3D0A05] to-red-700 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4" style={{fontFamily: 'Times New Roman, serif'}}>
              Ready to Work Together?
            </h3>
            <p className="text-xl mb-8 opacity-90" style={{fontFamily: 'Times New Roman, serif'}}>
              Let's discuss how my experience can help your next project
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-white text-[#3D0A05] font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              Get In Touch
              <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
