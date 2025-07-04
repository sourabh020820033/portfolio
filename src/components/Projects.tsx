import React from 'react';
import { ExternalLink, Github, Brain, TrendingUp, ShoppingCart, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mushroom Edibility Predictor',
      description: 'ML-based classifier to predict if mushrooms are safe to eat using advanced machine learning algorithms.',
      icon: <Brain size={32} />,
      tags: ['Machine Learning', 'Python', 'Classification', 'Data Science'],
      color: 'from-green-500 to-green-600',
       liveLink: 'https://machinemodel10.streamlit.app/',
        codeLink: ''
      
    },
    {
      title: 'Sales Prediction Tool',
      description: 'Forecasts marketing campaign outcomes using regression models and historical data analysis.',
      icon: <TrendingUp size={32} />,
      tags: ['Regression', 'Python', 'Data Analysis', 'Forecasting'],
      color: 'from-blue-500 to-blue-600',
       liveLink: 'https://salespredictionml.streamlit.app/',
        codeLink: ''
    },
   {
  title: 'SHK Bearings E-commerce',
  description: 'A real-world product-based business website...',
  icon: <ShoppingCart size={32} />,
  tags: ['React', 'Node.js'],
  color: 'from-purple-500 to-purple-600',
  liveLink: 'https://shkbearings.vercel.app',
  codeLink: ''
},
    {
      title: 'Learning Dashboard',
      description: 'Personalized platform to track and improve skill development with progress monitoring.',
      icon: <BookOpen size={32} />,
      tags: ['React', 'Dashboard', 'UI/UX', 'Progress Tracking'],
      color: 'from-orange-500 to-orange-600',
       liveLink: '',
      codeLink: ''
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                  <button
    onClick={() => window.open(project.liveLink, "_blank")}
    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300 group-hover:scale-105"
  >
    <ExternalLink size={16} />
    View Live
  </button>
  <button
    onClick={() => window.open(project.codeLink, "_blank")}
    className="flex items-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg transition-all duration-300"
  >
    <Github size={16} />
    Code
  </button>
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