import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "BS Computer Science",
      institution: "Bahria University",
      period: "2022 – 2026",
      status: "7th Semester",
      cgpa: "3.5",
      location: "Lahore, Pakistan",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Database Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems"
      ],
      achievements: [
        "Consistent academic performance with 3.5 CGPA",
        "Active participation in programming competitions",
        "Research projects in data analysis and machine learning",
        "Member of Computer Science Society"
      ]
    },
    {
      degree: "FSc (Pre-Engineering)",
      institution: "Punjab College",
      period: "2019 – 2021",
      status: "Completed",
      cgpa: "78%",
      location: "Lahore, Pakistan",
      coursework: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "English",
        "Computer Science",
        "Urdu"
      ],
      achievements: [
        "Achieved 78% marks in final examinations",
        "Strong foundation in mathematics and sciences",
        "Developed analytical and problem-solving skills",
        "Participated in science competitions"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Building a strong foundation in computer science and analytical thinking
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="bg-gray-900/30 rounded-lg border border-green-400/20 hover:border-green-400/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <GraduationCap className="w-8 h-8 text-green-400 mr-3" />
                        <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
                      <p className="text-gray-400">{edu.location}</p>
                    </div>
                    
                    <div className="mt-4 lg:mt-0 lg:text-right">
                      <div className="flex items-center text-gray-300 mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center text-green-400 mb-2">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="font-semibold">
                          {edu.degree.includes('BS') ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.cgpa}`}
                        </span>
                      </div>
                      <span className="inline-block bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-sm border border-green-400/20">
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 text-green-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <Award className="w-5 h-5 text-green-400 mr-2" />
                        <h4 className="text-lg font-semibold text-white">Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Education;