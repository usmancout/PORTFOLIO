import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = ['OSINT Analyst', 'Python Developer', 'Data Investigator', 'Intelligence Specialist'];
  const currentTitle = titles[currentIndex];

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, currentTitle]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#00ff88_1px,transparent_0)] bg-[size:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Usman Ali
            </h1>
            <div className="text-2xl md:text-3xl text-green-400 font-semibold mb-6 h-12">
              {displayText}
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dedicated OSINT Analyst with expertise in gathering, analyzing, and validating publicly 
              available data using Python and open-source intelligence tools.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-sm">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4 text-green-400" />
              <span>Lahore, Pakistan</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Phone className="w-4 h-4 text-green-400" />
              <span>+92 344 6679756</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4 text-green-400" />
              <span>usman.cout@gmail.com</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://linkedin.com/in/usman-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gray-800 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-white group-hover:text-black" />
            </a>
            <a
              href="https://github.com/usman-ali"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 bg-gray-800 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-white group-hover:text-black" />
            </a>
            <a
              href="mailto:usman.cout@gmail.com"
              className="group relative p-3 bg-gray-800 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-white group-hover:text-black" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-green-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-400/25"
            >
              Get In Touch
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-green-400 text-green-400 px-8 py-3 rounded-full font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;