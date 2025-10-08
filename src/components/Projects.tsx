'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from './ThemeProvider';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="projects" className="py-32 relative overflow-hidden" style={{backgroundColor: '#3D0A05'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="h-16 bg-opacity-20 bg-white rounded mb-6 animate-pulse mx-auto max-w-md"></div>
            <div className="h-4 bg-opacity-10 bg-white rounded animate-pulse mx-auto max-w-xl"></div>
          </div>
        </div>
      </section>
    );
  }

  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include user authentication, product management, and secure payments.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Prisma'],
      image: 'project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      image: 'project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts using data from multiple weather APIs.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3', 'JavaScript'],
      image: 'project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 4,
      title: 'AI Chat Application',
      description: 'An intelligent chat application powered by OpenAI GPT, featuring real-time messaging, context awareness, and multi-language support.',
      technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'PostgreSQL', 'Tailwind CSS'],
      image: 'project1.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 5,
      title: 'Blockchain Voting System',
      description: 'A secure and transparent voting system built on blockchain technology, ensuring immutability and verifiability of votes.',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'MetaMask'],
      image: 'project2.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    },
    {
      id: 6,
      title: 'Machine Learning Dashboard',
      description: 'A comprehensive dashboard for visualizing machine learning model performance, training metrics, and data insights.',
      technologies: ['Python', 'TensorFlow', 'D3.js', 'Flask', 'MongoDB'],
      image: 'project3.jpg',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example'
    }
  ];

  // Show only first 3 projects on main page
  const projects = allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" style={{backgroundColor: '#3D0A05'}}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{backgroundColor: '#7F1F0E'}}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl" style={{backgroundColor: '#AC746C'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Vogue Style */}
        <div className="text-center mb-24">
          <div className="inline-block mb-6">
            <div className="h-px w-16 mx-auto mb-6" style={{backgroundColor: '#DAC1B1'}}></div>
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif'}}>
              Featured Work
            </p>
          </div>
          <h2 
            className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight"
            style={{color: '#DAC1B1', fontFamily: 'Playfair Display, Times New Roman, serif'}}
          >
            Portfolio
          </h2>
          <p className="text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto leading-relaxed" style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif', opacity: 0.8}}>
            A curated collection of digital experiences, each crafted with precision and passion
          </p>
        </div>

        {/* Projects Grid - Editorial Layout */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image - Magazine Style */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Decorative frame */}
                  <div 
                    className="absolute inset-0 border transition-all duration-700 ease-out z-10"
                    style={{
                      borderColor: hoveredId === project.id ? '#DAC1B1' : '#7F1F0E',
                      borderWidth: '1px',
                      transform: hoveredId === project.id ? 'scale(1.02)' : 'scale(1)'
                    }}
                  ></div>
                  
                  {/* Image container */}
                  <div className="relative w-full h-full overflow-hidden" style={{backgroundColor: '#7F1F0E'}}>
                    <Image
                      src={theme === 'dark' ? `/images/dark/${project.image}` : `/images/light/${project.image}`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out"
                      style={{
                        transform: hoveredId === project.id ? 'scale(1.05)' : 'scale(1)',
                        filter: 'grayscale(20%) contrast(1.1)'
                      }}
                    />
                    {/* Gradient overlay */}
                    <div 
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(61, 10, 5, 0) 0%, rgba(61, 10, 5, 0.4) 100%)',
                        opacity: hoveredId === project.id ? 0.7 : 0.5
                      }}
                    ></div>
                  </div>

                  {/* Project number overlay */}
                  <div 
                    className="absolute top-8 right-8 text-9xl font-light opacity-10 transition-opacity duration-500"
                    style={{color: '#DAC1B1', fontFamily: 'Playfair Display, Times New Roman, serif'}}
                  >
                    0{project.id}
                  </div>
                </div>
              </div>

              {/* Project Content - Editorial Style */}
              <div className="w-full lg:w-1/2 space-y-8">
                {/* Category line */}
                <div className="flex items-center gap-4">
                  <div className="h-px w-12" style={{backgroundColor: '#AC746C'}}></div>
                  <span className="text-xs tracking-[0.3em] uppercase" style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}>
                    Project {String(project.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight transition-all duration-300"
                  style={{
                    color: hoveredId === project.id ? '#DAC1B1' : '#DAC1B1',
                    fontFamily: 'Playfair Display, Times New Roman, serif',
                    opacity: hoveredId === project.id ? 1 : 0.9
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p 
                  className="text-base md:text-lg font-light leading-relaxed tracking-wide"
                  style={{color: '#DAC1B1', fontFamily: 'Times New Roman, serif', opacity: 0.7}}
                >
                  {project.description}
                </p>

                {/* Technologies - Minimal tags */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={tech}
                      className="text-xs tracking-wider uppercase px-4 py-2 border transition-all duration-300 hover:scale-105"
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
                </div>

                {/* Action buttons - Minimalist */}
                <div className="flex gap-6 pt-8">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative overflow-hidden"
                    >
                      <span 
                        className="relative z-10 inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-300"
                        style={{
                          color: hoveredId === project.id ? '#3D0A05' : '#DAC1B1',
                          fontFamily: 'Times New Roman, serif'
                        }}
                      >
                        View Project
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
                      className="text-sm tracking-[0.2em] uppercase px-8 py-4 border transition-all duration-300 hover:scale-105"
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

        {/* More Projects Button */}
        <div className="text-center mt-20">
          <a
            href="/projects"
            className="group/more inline-flex items-center gap-4 text-base tracking-[0.2em] uppercase px-12 py-5 border transition-all duration-500 hover:scale-105"
            style={{
              color: '#DAC1B1',
              borderColor: '#7F1F0E',
              fontFamily: 'Times New Roman, serif'
            }}
          >
            View All Projects
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/more:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Call to Action - Editorial Style */}
        <div className="text-center mt-40 pt-20 border-t" style={{borderColor: '#7F1F0E'}}>
          <div className="inline-block mb-8">
            <p className="text-xs tracking-[0.3em] uppercase mb-2" style={{color: '#AC746C', fontFamily: 'Times New Roman, serif'}}>
              Let's Create Together
            </p>
            <div className="h-px w-24 mx-auto" style={{backgroundColor: '#AC746C'}}></div>
          </div>
          
          <p 
            className="text-3xl md:text-4xl font-light mb-12 tracking-tight"
            style={{color: '#DAC1B1', fontFamily: 'Playfair Display, Times New Roman, serif'}}
          >
            Ready to bring your vision to life?
          </p>
          
          <a
            href="#contact"
            className="group/cta inline-flex items-center gap-4 text-base tracking-[0.2em] uppercase px-12 py-5 border transition-all duration-500 hover:scale-105"
            style={{
              color: '#DAC1B1',
              borderColor: '#DAC1B1',
              fontFamily: 'Times New Roman, serif'
            }}
          >
            Start a Conversation
            <svg className="w-5 h-5 transition-transform duration-300 group-hover/cta:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;