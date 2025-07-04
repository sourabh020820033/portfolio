import React from 'react';
import { Code, Database, Globe, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={24} />,
      skills: ['C++', 'C', 'Java', 'Python', 'JavaScript'],
      color: 'bg-blue-500'
    },
    {
      title: 'Frontend',
      icon: <Globe size={24} />,
      skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React', 'Next.js'],
      color: 'bg-green-500'
    },
    {
      title: 'Backend',
      icon: <Database size={24} />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      color: 'bg-purple-500'
    },
    {
      title: 'Tools & Others',
      icon: <GitBranch size={24} />,
      skills: ['Git', 'GitHub', 'SEO Basics', 'MERN Stack'],
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-white mb-6 mx-auto`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-center">
                      <span className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm font-medium shadow-sm block">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With expertise in the <span className="font-semibold text-blue-600">MERN Stack</span> and 
              practical experience across multiple technologies, I'm equipped to handle full-stack development 
              projects from conception to deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;