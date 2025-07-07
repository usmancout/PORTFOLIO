import React from 'react';
import { Heart, Shield, Eye } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-green-400/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative">
                <Shield className="w-6 h-6 text-green-400" />
                <Eye className="w-3 h-3 text-green-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-white font-semibold">Usman Ali</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">OSINT Analyst</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Built with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-green-400/20 text-center">
            <p className="text-gray-400 text-sm">
              Open Source Intelligence • Data Analysis • Python Automation • Security Research
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;