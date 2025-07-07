import React from 'react';
import { Github, ExternalLink, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Orion Intelligence Script Development",
      description: "Contributed Python scripts to automate the collection of open-source intelligence from multiple public sources, improving data acquisition speed by 30%.",
      longDescription: "Developed comprehensive automation tools that integrate APIs and web scraping techniques to extract structured data from diverse sources. The project enhanced the quality and efficiency of intelligence reports through robust data collection methodologies.",
      technologies: ["Python", "Web Scraping", "API Integration", "Data Processing", "OSINT Framework"],
      features: [
        "Automated data collection from multiple sources",
        "API integration for structured data extraction",
        "30% improvement in data acquisition speed",
        "Enhanced intelligence report quality",
        "Robust error handling and data validation"
      ],
      github: "https://github.com/Orion-Intelligence/Orion-Collector",
      type: "Professional Project",
      status: "Active"
    },
    {
      title: "OSINT Data Extractor",
      description: "Developed a Python-based tool to scrape and index publicly available data from websites, supporting comprehensive OSINT investigations.",
      longDescription: "Created a sophisticated data extraction platform that handles dynamic web content and provides indexed access to publicly available information. The tool supports various investigation workflows and maintains data integrity throughout the collection process.",
      technologies: ["Python", "BeautifulSoup", "Selenium", "SQLite", "JSON", "Pandas"],
      features: [
        "Dynamic web content handling",
        "Data indexing and categorization",
        "Multi-threaded processing capabilities",
        "Comprehensive data validation",
        "Export functionality for multiple formats"
      ],
      github: "https://github.com/usman-ali/osint-data-extractor",
      type: "Personal Project",
      status: "Completed"
    },
    {
      title: "Intelligence Report Generator",
      description: "Automated intelligence report generation system that processes collected data and creates comprehensive analytical reports.",
      longDescription: "Built an end-to-end solution that processes raw intelligence data, applies analytical algorithms, and generates professional reports with visualizations and insights. The system streamlines the intelligence workflow from data collection to final presentation.",
      technologies: ["Python", "Matplotlib", "Seaborn", "Jinja2", "PDF Generation", "Data Visualization"],
      features: [
        "Automated report template generation",
        "Data visualization and charting",
        "Statistical analysis integration",
        "PDF and HTML output formats",
        "Custom branding and styling options"
      ],
      github: "https://github.com/usman-ali/intel-report-generator",
      type: "Personal Project",
      status: "In Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Key Projects
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Showcasing innovative OSINT solutions and data analysis tools
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Code className="w-6 h-6 text-green-400" />
                      <span className="text-sm text-gray-400">{project.type}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Active' 
                        ? 'bg-green-400/10 text-green-400 border border-green-400/20'
                        : project.status === 'Completed'
                        ? 'bg-blue-400/10 text-blue-400 border border-blue-400/20'
                        : 'bg-yellow-400/10 text-yellow-400 border border-yellow-400/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.longDescription}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gray-900/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-green-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-900/50 hover:bg-green-400 text-white hover:text-black px-4 py-2 rounded-lg transition-all duration-300 group/btn border border-green-400/20"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-4 py-2 rounded-lg transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
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

export default Projects;