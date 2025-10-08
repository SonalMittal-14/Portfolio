'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/components/ThemeProvider';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured: boolean;
}

const ProjectsPage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and secure payments.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
      image: 'project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Web Development',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      image: 'project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Web Development',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3', 'JavaScript'],
      image: 'project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Web Development',
      featured: true
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by OpenAI GPT, featuring real-time messaging, context awareness, and multi-language support.',
      technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'PostgreSQL', 'Tailwind CSS'],
      image: 'project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'AI/ML',
      featured: false
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology, ensuring immutability and verifiability of votes.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
      image: 'project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Blockchain',
      featured: false
    },
    {
      id: 6,
      title: 'Machine Learning Dashboard',
      description: 'A comprehensive dashboard for visualizing machine learning model performance, training metrics, and data insights.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask', 'MongoDB'],
      image: 'project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'AI/ML',
      featured: false
    },
    {
      id: 7,
      title: 'Mobile Banking App',
      description: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'JWT', 'Stripe'],
      image: 'project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Mobile Development',
      featured: false
    },
    {
      id: 8,
      title: 'IoT Home Automation',
      description: 'An Internet of Things solution for home automation, featuring smart device control, energy monitoring, and security systems.',
      technologies: ['Arduino', 'Raspberry Pi', 'MQTT', 'React', 'Node.js'],
      image: 'project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'IoT',
      featured: false
    },
    {
      id: 9,
      title: 'Data Analytics Platform',
      description: 'A powerful data analytics platform that processes large datasets and provides interactive visualizations and insights.',
      technologies: ['Python', 'Pandas', 'D3.js', 'FastAPI', 'Redis'],
      image: 'project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      category: 'Data Science',
      featured: false
    }
  ];

  const categories = ['All', 'Web Development', 'AI/ML', 'Blockchain', 'Mobile Development', 'IoT', 'Data Science'];

  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  if (!mounted) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#3D0A05'}}>
        <div className="container mx-auto px-8 py-24">
          <div className="text-center mb-20">
            <div className="h-20 bg-opacity-10 bg-white rounded animate-pulse mx-auto max-w-xl mb-8"></div>
            <div className="h-6 bg-opacity-5 bg-white rounded animate-pulse mx-auto max-w-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#3D0A05'}}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl" style={{backgroundColor: '#7F1F0E'}}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl" style={{backgroundColor: '#AC746C'}}></div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full opacity-3 blur-3xl" style={{backgroundColor: '#7F1F0E'}}></div>

      <div className="container mx-auto px-8 py-24 relative z-10">
        {/* Header - Vogue Editorial Style */}
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <div className="h-px w-20 mx-auto mb-8" style={{backgroundColor: '#DAC1B1'}}></div>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif'}}>
              Complete Collection
            </p>
          </div>
          
          <h1 
            className="text-7xl md:text-8xl lg:text-9xl font-light mb-10 tracking-tight"
            style={{color: '#DAC1B1', fontFamily: 'Playfair Display, Times New Roman, serif'}}
          >
            All Projects
          </h1>
          
          <p className="text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif', opacity: 0.8}}>
            Explore the complete portfolio of digital experiences across different technologies and creative domains
          </p>
        </div>

        {/* Category Filter - Minimalist Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-24 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="relative px-6 py-3 text-xs tracking-[0.25em] uppercase transition-all duration-500 overflow-hidden group"
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              {/* Background animation */}
              <div 
                className="absolute inset-0 transition-transform duration-500 ease-out origin-bottom"
                style={{
                  backgroundColor: selectedCategory === category ? '#DAC1B1' : 'transparent',
                  transform: selectedCategory === category ? 'scaleY(1)' : 'scaleY(0)'
                }}
              ></div>
              
              {/* Border */}
              <div 
                className="absolute inset-0 border transition-colors duration-300"
                style={{
                  borderColor: selectedCategory === category ? '#DAC1B1' : '#7F1F0E'
                }}
              ></div>

              {/* Text */}
              <span 
                className="relative z-10 transition-colors duration-300"
                style={{
                  color: selectedCategory === category ? '#3D0A05' : '#DAC1B1'
                }}
              >
                {category}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Magazine Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div 
                  className="absolute -top-3 -left-3 z-20 text-xs tracking-[0.2em] uppercase px-4 py-2 border"
                  style={{
                    color: '#DAC1B1',
                    borderColor: '#7F1F0E',
                    backgroundColor: '#3D0A05',
                    fontFamily: 'Times New Roman, serif'
                  }}
                >
                  Featured
                </div>
              )}

              {/* Project Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                {/* Decorative frame */}
                <div 
                  className="absolute inset-0 border transition-all duration-700 ease-out z-10 pointer-events-none"
                  style={{
                    borderColor: hoveredId === project.id ? '#DAC1B1' : '#7F1F0E',
                    borderWidth: '1px',
                    transform: hoveredId === project.id ? 'scale(1.02)' : 'scale(1)'
                  }}
                ></div>

                {/* Image */}
                <div className="relative w-full h-full overflow-hidden" style={{backgroundColor: '#7F1F0E'}}>
                  <Image
                    src={theme === 'dark' ? `/images/dark/${project.image}` : `/images/light/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                    style={{
                      transform: hoveredId === project.id ? 'scale(1.08)' : 'scale(1)',
                      filter: 'grayscale(20%) contrast(1.1)'
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(61, 10, 5, 0) 0%, rgba(61, 10, 5, 0.6) 100%)',
                      opacity: hoveredId === project.id ? 0.8 : 0.6
                    }}
                  ></div>

                  {/* Project number overlay */}
                  <div 
                    className="absolute bottom-4 right-4 text-6xl font-light transition-opacity duration-500"
                    style={{
                      color: '#DAC1B1',
                      fontFamily: 'Playfair Display, Times New Roman, serif',
                      opacity: hoveredId === project.id ? 0.15 : 0.08
                    }}
                  >
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                {/* Category and Title */}
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-px w-8" style={{backgroundColor: '#AC746C'}}></div>
                    <span 
                      className="text-xs tracking-[0.25em] uppercase"
                      style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3 
                    className="text-2xl md:text-3xl font-light leading-tight tracking-tight transition-all duration-300"
                    style={{
                      color: '#DAC1B1',
                      fontFamily: 'Playfair Display, Times New Roman, serif',
                      opacity: hoveredId === project.id ? 1 : 0.9
                    }}
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p 
                  className="text-sm font-light leading-relaxed tracking-wide"
                  style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif', opacity: 0.7}}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs tracking-wider uppercase px-3 py-1 border transition-all duration-300"
                      style={{
                        color: '#DAC1B1',
                        borderColor: '#7F1F0E',
                        fontFamily: 'Times New Roman, serif',
                        backgroundColor: hoveredId === project.id ? 'rgba(127, 31, 14, 0.2)' : 'transparent'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className="text-xs tracking-wider uppercase px-3 py-1"
                      style={{
                        color: '#AC746C',
                        fontFamily: 'Times New Roman, serif'
                      }}
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden flex-1"
                    >
                      <span 
                        className="relative z-10 inline-flex items-center justify-center w-full gap-2 text-xs tracking-[0.2em] uppercase px-4 py-3 transition-colors duration-300"
                        style={{
                          color: hoveredId === project.id ? '#3D0A05' : '#DAC1B1',
                          fontFamily: 'Times New Roman, serif'
                        }}
                      >
                        View
                        <svg className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                      <div 
                        className="absolute inset-0 transition-transform duration-500 ease-out origin-left"
                        style={{
                          backgroundColor: '#DAC1B1',
                          transform: hoveredId === project.id ? 'scaleX(1)' : 'scaleX(0)'
                        }}
                      ></div>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs tracking-[0.2em] uppercase px-4 py-3 border transition-all duration-300 hover:scale-105"
                      style={{
                        color: '#DAC1B1',
                        borderColor: '#7F1F0E',
                        fontFamily: 'Times New Roman, serif'
                      }}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home - Editorial Style */}
        <div className="text-center mt-32 pt-20 border-t" style={{borderColor: '#7F1F0E'}}>
          <Link
            href="/"
            className="group/link inline-flex items-center gap-4 text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:gap-6"
            style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif'}}
          >
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Return to Home
          </Link>
        </div>
      </div>

      {/* Fade in animation keyframes */}
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
      `}</style>
    </div>
  );
};

export default ProjectsPage;