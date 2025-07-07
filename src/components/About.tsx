import React from 'react';
import { Target, Search, Code, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Search className="w-8 h-8 text-green-400" />,
      title: "OSINT Expertise",
      description: "Specialized in collecting and analyzing data from public sources, including dark web investigations and social media analysis."
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Python Automation",
      description: "Developing automated scripts for data collection, analysis, and visualization to deliver actionable intelligence."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Security Focus",
      description: "Ensuring accuracy and relevance of intelligence reports while maintaining operational security standards."
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Actionable Insights",
      description: "Delivering comprehensive intelligence products that drive informed decision-making for clients."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Professional Objective
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                As a dedicated OSINT Analyst, I specialize in gathering, analyzing, and validating publicly 
                available data using Python and cutting-edge open-source intelligence tools. My expertise 
                spans from developing automated scripts for data collection to conducting in-depth digital 
                investigations.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With a strong foundation in computer science and hands-on experience at Orion Intelligence, 
                I'm passionate about leveraging technology to deliver actionable intelligence that drives 
                meaningful outcomes for clients and organizations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-400/20">
                  Python Expert
                </span>
                <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-400/20">
                  Data Analysis
                </span>
                <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-400/20">
                  OSINT Framework
                </span>
                <span className="bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm border border-green-400/20">
                  Web Scraping
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/30 p-6 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;