'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Twitter, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sonal.mittal@email.com',
      link: 'mailto:sonal.mittal@email.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/sonalmittal',
      link: 'https://linkedin.com/in/sonalmittal',
      color: 'from-blue-600 to-blue-800'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/sonalmittal',
      color: 'hover:from-gray-800 hover:to-gray-900'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      link: 'https://twitter.com/sonalmittal',
      color: 'hover:from-blue-400 hover:to-blue-600'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/sonalmittal',
      color: 'hover:from-blue-600 hover:to-blue-800'
    }
  ];

  if (!mounted) {
    return (
      <section id="contact" className="min-h-screen py-32" style={{backgroundColor: '#3D0A05'}}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <div className="h-8 w-32 bg-gray-300 rounded animate-pulse mx-auto mb-6"></div>
            <div className="h-16 w-64 bg-gray-300 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="h-96 bg-gray-800 rounded-2xl animate-pulse"></div>
            <div className="space-y-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-20 bg-gray-800 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-12 bg-gray-700 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen py-32 relative overflow-hidden" style={{backgroundColor: '#3D0A05'}}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-px h-40 bg-gradient-to-b from-white to-transparent transform rotate-12"></div>
        <div className="absolute bottom-32 right-32 w-px h-60 bg-gradient-to-t from-white to-transparent transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-px bg-gradient-to-r from-red-300/30 to-transparent transform -rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="text-center mb-20">
            <div className="w-24 h-px bg-gradient-to-r from-red-300 to-red-300/30 mx-auto mb-6"></div>
            <h2 className="text-6xl xl:text-7xl font-black text-white tracking-tight mb-6" style={{fontFamily: 'Times New Roman, serif'}}>
              CONTACT
            </h2>
            <p className="text-xl text-red-200 max-w-2xl mx-auto leading-relaxed" style={{fontFamily: 'Times New Roman, serif'}}>
              Let's collaborate and bring your ideas to life
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left Side - Profile Image */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="relative">
              {/* Profile Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/dark/SonalPicture.jpg"
                  alt="Sonal Mittal - AI Engineer & Developer"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  style={{
                    aspectRatio: '4/5',
                    objectFit: 'cover'
                  }}
                />
                
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Contact Card */}
              <div className="absolute -bottom-8 -right-8 bg-white shadow-xl rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#3D0A05] rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#3D0A05]" style={{fontFamily: 'Times New Roman, serif'}}>Quick Response</p>
                    <p className="text-xs text-gray-600">24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle - Contact Info */}
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-8">
              {/* Main Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="group flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                        {info.title}
                      </h3>
                      <p className="text-red-200 group-hover:text-white transition-colors duration-300" style={{fontFamily: 'Times New Roman, serif'}}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center" style={{fontFamily: 'Times New Roman, serif'}}>
                  Follow Me
                </h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
                    >
                      <social.icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4" style={{fontFamily: 'Times New Roman, serif'}}>
                  Send a Message
                </h3>
                <p className="text-red-200" style={{fontFamily: 'Times New Roman, serif'}}>
                  I'd love to hear about your project and discuss how we can work together.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2" style={{fontFamily: 'Times New Roman, serif'}}>
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all duration-300 text-white placeholder-gray-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2" style={{fontFamily: 'Times New Roman, serif'}}>
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all duration-300 text-white placeholder-gray-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2" style={{fontFamily: 'Times New Roman, serif'}}>
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all duration-300 text-white placeholder-gray-300"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2" style={{fontFamily: 'Times New Roman, serif'}}>
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all duration-300 resize-none text-white placeholder-gray-300"
                    placeholder="Tell me about your project, goals, and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-white transition-all duration-300 transform hover:-translate-y-1 ${
                    formStatus === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : formStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-white text-[#3D0A05] hover:bg-gray-200 shadow-lg hover:shadow-xl'
                  }`}
                  style={{fontFamily: 'Times New Roman, serif'}}
                >
                  {formStatus === 'sending' ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                      Sending...
                    </div>
                  ) : formStatus === 'success' ? (
                    <div className="flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 mr-3" />
                      Message Sent!
                    </div>
                  ) : formStatus === 'error' ? (
                    <div className="flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 mr-3" />
                      Try Again
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-5 h-5 mr-3" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center justify-center space-x-2 text-sm text-red-200">
                  <Calendar className="w-4 h-4" />
                  <span style={{fontFamily: 'Times New Roman, serif'}}>
                    Available for new projects • Response within 24 hours
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
