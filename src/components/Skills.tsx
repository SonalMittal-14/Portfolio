'use client';

import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Zap, 
  Shield,
  Layers,
  Cpu,
  GitBranch,
  Terminal
} from 'lucide-react';

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'TensorFlow', level: 95, description: 'Deep learning framework for neural networks' },
        { name: 'PyTorch', level: 90, description: 'Dynamic neural network framework' },
        { name: 'Scikit-learn', level: 88, description: 'Machine learning library for Python' },
        { name: 'OpenCV', level: 85, description: 'Computer vision and image processing' },
        { name: 'Pandas', level: 92, description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 95, description: 'Numerical computing with Python' }
      ]
    },
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 98, description: 'Primary language for AI/ML development' },
        { name: 'JavaScript', level: 92, description: 'Full-stack web development' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript development' },
        { name: 'Java', level: 80, description: 'Enterprise application development' },
        { name: 'C++', level: 75, description: 'High-performance computing' },
        { name: 'SQL', level: 90, description: 'Database querying and management' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'React', level: 95, description: 'Modern UI library for web apps' },
        { name: 'Next.js', level: 90, description: 'Full-stack React framework' },
        { name: 'Node.js', level: 85, description: 'Server-side JavaScript runtime' },
        { name: 'Express.js', level: 88, description: 'Web application framework' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'HTML5/CSS3', level: 95, description: 'Modern web standards' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 85, description: 'Amazon Web Services cloud platform' },
        { name: 'Docker', level: 88, description: 'Containerization platform' },
        { name: 'Kubernetes', level: 75, description: 'Container orchestration' },
        { name: 'Git', level: 95, description: 'Version control system' },
        { name: 'CI/CD', level: 80, description: 'Continuous integration/deployment' },
        { name: 'Linux', level: 85, description: 'Unix-like operating system' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'PostgreSQL', level: 90, description: 'Advanced open-source database' },
        { name: 'MongoDB', level: 85, description: 'NoSQL document database' },
        { name: 'Redis', level: 80, description: 'In-memory data structure store' },
        { name: 'Apache Spark', level: 75, description: 'Big data processing engine' },
        { name: 'Jupyter', level: 92, description: 'Interactive data science notebooks' },
        { name: 'Tableau', level: 70, description: 'Data visualization platform' }
      ]
    },
    {
      title: 'Mobile & Tools',
      icon: Smartphone,
      color: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'React Native', level: 80, description: 'Cross-platform mobile development' },
        { name: 'Flutter', level: 70, description: 'Google\'s UI toolkit' },
        { name: 'Figma', level: 85, description: 'Collaborative design tool' },
        { name: 'VS Code', level: 95, description: 'Code editor and IDE' },
        { name: 'Postman', level: 88, description: 'API development and testing' },
        { name: 'Jira', level: 80, description: 'Project management tool' }
      ]
    }
  ];

  if (!mounted) {
    return (
      <section id="skills" className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-32 bg-slate-300 rounded animate-pulse mx-auto mb-6"></div>
            <div className="h-16 w-64 bg-slate-300 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="h-6 w-24 bg-slate-300 rounded animate-pulse mb-4"></div>
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-4 bg-slate-200 rounded animate-pulse"></div>
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
    <section id="skills" className="min-h-screen bg-gray-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-red-600 to-transparent transform rotate-12"></div>
        <div className="absolute bottom-32 right-32 w-px h-60 bg-gradient-to-t from-red-600 to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-px bg-gradient-to-l from-red-600/30 to-transparent transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-gradient-to-r from-red-600 to-red-300 mx-auto mb-6"></div>
            <h2 className="text-6xl xl:text-7xl font-black text-[#3D0A05] tracking-tight mb-6" style={{fontFamily: 'Times New Roman, serif'}}>
              SKILLS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
              Technical expertise across the full spectrum of modern development
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transform transition-all duration-700 delay-${categoryIndex * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 h-full group">
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3D0A05] group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="group/skill relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700 group-hover/skill:text-[#3D0A05] transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 delay-${1000 + skillIndex * 100} group-hover/skill:shadow-lg`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      {/* Tooltip */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute -top-12 left-0 bg-[#3D0A05] text-white text-xs px-3 py-2 rounded-lg shadow-lg z-10 whitespace-nowrap">
                          {skill.description}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#3D0A05]"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-4xl font-bold text-[#3D0A05] mb-2 group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                  50+
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider" style={{fontFamily: 'Times New Roman, serif'}}>
                  Technologies
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#3D0A05] mb-2 group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                  5+
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider" style={{fontFamily: 'Times New Roman, serif'}}>
                  Years Experience
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#3D0A05] mb-2 group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                  100+
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider" style={{fontFamily: 'Times New Roman, serif'}}>
                  Projects Completed
                </div>
              </div>
              <div className="group">
                <div className="text-4xl font-bold text-[#3D0A05] mb-2 group-hover:text-red-600 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                  15+
                </div>
                <div className="text-gray-600 text-sm uppercase tracking-wider" style={{fontFamily: 'Times New Roman, serif'}}>
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
