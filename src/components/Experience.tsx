import React from 'react';
import { Building, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "OSINT Analyst",
      company: "Orion Intelligence",
      period: "2023 – Present",
      location: "Remote",
      type: "Full-time",
      achievements: [
        "Developed Python scripts to automate the collection of open-source intelligence from diverse public sources, enhancing data aggregation for security and investigative purposes",
        "Conducted in-depth investigations into digital footprints, leaked data, and online profiles, delivering actionable insights to clients",
        "Utilized OSINT Framework and Have I Been Pwned to validate and analyze data, ensuring accuracy and relevance of intelligence reports",
        "Managed project workflows using JIRA, ensuring timely delivery of intelligence products in agile environments",
        "Improved data acquisition speed by 30% through automated script development"
      ]
    },
    {
      title: "Data Analyst",
      company: "University and Personal Projects",
      period: "2023 – Present",
      location: "Lahore, Pakistan",
      type: "Project-based",
      achievements: [
        "Built Python-based tools to extract and analyze publicly available data, optimizing OSINT data collection processes",
        "Created data analysis pipelines using Python libraries (Pandas, NumPy) to process and visualize large datasets for investigative purposes",
        "Developed automated data collection systems that reduced manual processing time by 50%",
        "Implemented machine learning algorithms for pattern recognition in large datasets",
        "Collaborated with academic teams on research projects involving data analysis and visualization"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Building expertise in OSINT analysis and data intelligence through impactful projects
            </p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-green-400 mb-2">
                        <Building className="w-5 h-5 mr-2" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <span className="inline-block bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-400/20">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;