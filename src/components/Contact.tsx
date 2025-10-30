import React, { useState, useEffect } from 'react';
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
  Sparkles,
  ArrowUpRight,
  Circle
} from 'lucide-react';




const Contact = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const currentYear = new Date().getFullYear();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sonal.mittal@email.com',
      link: 'mailto:sonal.mittal@email.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Available Mon-Fri, 9AM-6PM PST'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      link: '#',
      description: 'Open to remote collaboration'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', link: 'https://github.com/sonalmittal' },
    { icon: Twitter, name: 'Twitter', link: 'https://twitter.com/sonalmittal' },
    { icon: Linkedin, name: 'LinkedIn', link: 'https://linkedin.com/in/sonalmittal' }
  ];

  if (!mounted) return null;

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#3D0A05'}}>
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, #DAC1B1 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#DAC1B1]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-[#AC746C]/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#DAC1B1] to-transparent"></div>
            <Sparkles className="w-6 h-6 text-[#DAC1B1]" />
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#DAC1B1] to-transparent"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-7xl font-light tracking-tight mb-6" 
              style={{color: '#DAC1B1', fontFamily: 'Playfair Display, serif'}}>
            Let's Talk
          </h2>
          
          <p className="text-xl tracking-widest uppercase" style={{color: '#AC746C', fontFamily: 'Georgia, serif', letterSpacing: '0.3em'}}>
            Craft Your Vision
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left Column - Contact Info & Image */}
          <div className={`lg:col-span-2 space-y-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Featured Image */}
            <div className="relative group overflow-hidden aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D0A05] via-[#3D0A05]/40 to-transparent z-10"></div>
              <img
                src="images/dark/SonalPicture.jpg"
                alt="Contact"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-[#DAC1B1] p-6 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold tracking-widest uppercase" style={{color: '#3D0A05'}}>
                      Available Now
                    </p>
                    <p className="text-xs tracking-wider" style={{color: '#7F1F0E'}}>
                      Response in 24h
                    </p>
                  </div>
                  <Circle className="w-3 h-3 fill-[#7F1F0E] text-[#7F1F0E] animate-pulse" />
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className="block group"
                >
                  <div className={`p-6 border transition-all duration-500 ${
                    activeCard === index 
                      ? 'border-[#DAC1B1] bg-[#7F1F0E]/20' 
                      : 'border-[#7F1F0E]/30 bg-[#7F1F0E]/10'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 flex items-center justify-center transition-all duration-500 ${
                        activeCard === index 
                          ? 'bg-gradient-to-br from-[#DAC1B1] to-[#AC746C]' 
                          : 'bg-[#7F1F0E]/40'
                      }`}>
                        <method.icon className={`w-6 h-6 transition-colors duration-300 ${
                          activeCard === index ? 'text-[#3D0A05]' : 'text-[#DAC1B1]'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs tracking-widest uppercase mb-1" style={{color: '#AC746C'}}>
                          {method.label}
                        </p>
                        <p className="text-lg font-light mb-1" style={{color: '#DAC1B1'}}>
                          {method.value}
                        </p>
                        <p className="text-sm" style={{color: '#7F1F0E'}}>
                          {method.description}
                        </p>
                      </div>
                      <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${
                        activeCard === index 
                          ? 'text-[#DAC1B1] translate-x-1 -translate-y-1' 
                          : 'text-[#7F1F0E]'
                      }`} />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="border border-[#7F1F0E]/30 p-8">
              <p className="text-sm tracking-widest uppercase mb-6 text-center" style={{color: '#AC746C'}}>
                Follow Along
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 border border-[#DAC1B1]/30 flex items-center justify-center hover:bg-[#DAC1B1] hover:border-[#DAC1B1] transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-[#DAC1B1] group-hover:text-[#3D0A05] transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`lg:col-span-3 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="border border-[#7F1F0E]/30 p-10 lg:p-14 bg-[#7F1F0E]/5 backdrop-blur-sm">
              <div className="mb-12">
                <h3 className="text-5xl font-light mb-4" style={{color: '#DAC1B1', fontFamily: 'Playfair Display, serif'}}>
                  Start a Conversation
                </h3>
                <p className="text-lg leading-relaxed" style={{color: '#AC746C'}}>
                  Share your vision and let's create something remarkable together. Every great project starts with a conversation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-3" style={{color: '#DAC1B1'}}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-[#7F1F0E]/40 focus:border-[#DAC1B1] outline-none transition-all duration-300 text-lg"
                      style={{color: '#DAC1B1'}}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase mb-3" style={{color: '#DAC1B1'}}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-3 bg-transparent border-b-2 border-[#7F1F0E]/40 focus:border-[#DAC1B1] outline-none transition-all duration-300 text-lg"
                      style={{color: '#DAC1B1'}}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-3" style={{color: '#DAC1B1'}}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-[#7F1F0E]/40 focus:border-[#DAC1B1] outline-none transition-all duration-300 text-lg"
                    style={{color: '#DAC1B1'}}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-3" style={{color: '#DAC1B1'}}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-0 py-3 bg-transparent border-b-2 border-[#7F1F0E]/40 focus:border-[#DAC1B1] outline-none transition-all duration-300 resize-none text-lg"
                    style={{color: '#DAC1B1'}}
                    placeholder="Tell me about your vision..."
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-5 px-8 text-lg tracking-widest uppercase transition-all duration-500 group relative overflow-hidden ${
                      formStatus === 'sending'
                        ? 'bg-[#AC746C] cursor-wait'
                        : formStatus === 'success'
                        ? 'bg-[#7F1F0E]'
                        : 'bg-gradient-to-r from-[#DAC1B1] to-[#AC746C] hover:from-[#AC746C] hover:to-[#7F1F0E]'
                    }`}
                    style={{color: '#3D0A05', fontWeight: 600}}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {formStatus === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-[#3D0A05] border-t-transparent rounded-full animate-spin"></div>
                          Sending
                        </>
                      ) : formStatus === 'success' ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Message Sent
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>

              {/* Footer Note */}
              <div className="mt-12 pt-8 border-t border-[#7F1F0E]/30">
                <div className="flex items-center justify-between text-sm">
                  <p style={{color: '#AC746C'}}>
                    Typically responds within 24 hours
                  </p>
                  {/* <div className="flex items-center gap-2">
                    <Circle className="w-2 h-2 fill-[#7F1F0E] text-[#7F1F0E] animate-pulse" />
                    <span style={{color: '#7F1F0E'}}>Currently available</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#7F1F0E]/50"></div>
            <p className="text-xs tracking-widest uppercase" style={{color: '#7F1F0E'}}>
              Let's Build Something Exceptional
            </p>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#7F1F0E]/50"></div>
          </div>
        </div>
      </div>


      <div className="border-t border-silk/20 mt-8 pt-8 pb-15 text-center">
          <p className="text-silk/80 dark:text-silk/80">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      
    </section>
  );
};

export default Contact;