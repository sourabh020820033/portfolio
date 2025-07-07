import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Technolitics India',
      period: 'Feb-2024 - Aug-2024',
      description: 'Web development using modern stacks, building responsive and user-friendly applications.',
      skills: ['React', 'Node.js', 'JavaScript', 'Web Development']
    },
    {
      title: 'SDE Intern',
      company: 'Bluestock',
      period: 'Oct-2024 - Apr-2025',
      description: 'Worked on software development and system design tasks, contributing to scalable solutions.',
      skills: ['Software Development', 'System Design', 'Problem Solving']
    },
    {
      title: 'Machine Learning Intern',
      company: 'Infynas Learning Solutions',
      period: 'May-2025 - Jun-2025',
      description: 'Developed and implemented ML models for real-world applications and data analysis.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'Model Development']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 transform hover:-translate-y-2"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Briefcase className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-4 md:mt-0">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
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

export default Experience;