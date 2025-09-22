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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="projects" className="py-20 bg-oatMilk dark:bg-darkRed">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-redWine dark:text-silk mb-4">
              My Projects
            </h2>
            <p className="text-lg text-redWine/70 dark:text-silk/70 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning opportunity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-rubyRed/20 rounded-xl shadow-lg overflow-hidden border border-roseQuartz/20 dark:border-silk/20">
                <div className="h-48 w-full bg-roseQuartz dark:bg-greyBeige animate-pulse"></div>
                <div className="p-6">
                  <div className="h-6 bg-roseQuartz dark:bg-greyBeige rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-roseQuartz dark:bg-greyBeige rounded animate-pulse"></div>
                    <div className="h-4 bg-roseQuartz dark:bg-greyBeige rounded animate-pulse"></div>
                    <div className="h-4 bg-roseQuartz dark:bg-greyBeige rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const projects: Project[] = [
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
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 font-serif">
            Portfolio
          </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I&apos;ve worked on. Each one represents a unique challenge and learning opportunity.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={theme === 'dark' ? `/images/dark/${project.image}` : `/images/light/${project.image}`}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3 font-serif">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
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
                      className="flex-1 text-center px-4 py-2 bg-redWine dark:bg-rubyRed text-white text-sm font-medium rounded-lg hover:bg-redWine/90 dark:hover:bg-rubyRed/90 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-redWine hover:bg-redWine/90 dark:bg-rubyRed dark:hover:bg-rubyRed/90 transition-colors duration-200"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
