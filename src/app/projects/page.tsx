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
      <div className="min-h-screen" style={{backgroundColor: '#3D0A05'}}>
        <div className="container mx-auto px-8 py-20">
          <div className="text-center mb-16">
            <div className="h-16 w-64 bg-gray-300 rounded animate-pulse mx-auto mb-6"></div>
            <div className="h-6 w-96 bg-gray-300 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-6 animate-pulse">
                <div className="h-48 bg-gray-700 rounded mb-4"></div>
                <div className="h-6 bg-gray-700 rounded mb-3"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-700 rounded"></div>
                  <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{backgroundColor: '#3D0A05'}}>
      {/* Header */}
      <div className="container mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            All Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{fontFamily: 'Times New Roman, serif'}}>
            Explore my complete portfolio of projects across different technologies and domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-gray-800'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              style={{fontFamily: 'Times New Roman, serif'}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-700 hover:border-gray-600 group"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={theme === 'dark' ? `/images/dark/${project.image}` : `/images/light/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white" style={{fontFamily: 'Times New Roman, serif'}}>
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md hover:bg-gray-600 transition-colors duration-200"
                      style={{fontFamily: 'Times New Roman, serif'}}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200"
                      style={{fontFamily: 'Times New Roman, serif'}}
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-gray-600 text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200"
                      style={{fontFamily: 'Times New Roman, serif'}}
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200"
            style={{fontFamily: 'Times New Roman, serif'}}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
