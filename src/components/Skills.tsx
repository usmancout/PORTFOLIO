import React from 'react';
import { Code, Database, Globe, Settings, Users, FileText } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8 text-green-400" />,
      title: "OSINT Expertise",
      skills: [
        { name: "OSINT Framework", level: 95 },
        { name: "Have I Been Pwned", level: 90 },
        { name: "Social Media Analysis", level: 88 },
        { name: "Dark Web Investigation", level: 85 },
        { name: "Leaked Data Extraction", level: 92 }
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: "Programming & Scripting",
      skills: [
        { name: "Python", level: 95 },
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 88 },
        { name: "Scikit-learn", level: 85 },
        { name: "Web Scraping", level: 92 }
      ]
    },
    {
      icon: <Database className="w-8 h-8 text-green-400" />,
      title: "Data Analysis",
      skills: [
        { name: "Data Visualization", level: 88 },
        { name: "Statistical Analysis", level: 85 },
        { name: "Pattern Recognition", level: 90 },
        { name: "Data Mining", level: 87 },
        { name: "Report Generation", level: 92 }
      ]
    },
    {
      icon: <Settings className="w-8 h-8 text-green-400" />,
      title: "Tools & Platforms",
      skills: [
        { name: "JIRA", level: 88 },
        { name: "Visual Studio Code", level: 95 },
        { name: "PyCharm", level: 90 },
        { name: "Jupyter Notebook", level: 92 },
        { name: "Google Colab", level: 88 }
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: "Professional Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Quick Learning", level: 92 },
        { name: "Time Management", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Critical Thinking", level: 94 }
      ]
    },
    {
      icon: <FileText className="w-8 h-8 text-green-400" />,
      title: "Languages",
      skills: [
        { name: "English", level: 90 },
        { name: "Urdu", level: 100 },
        { name: "Punjabi", level: 100 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive skill set combining technical expertise with analytical capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 p-6 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-green-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-300 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;