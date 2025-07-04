import React from 'react';
import { Code, Cog, Brain, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Full-stack website creation using modern frameworks like React, Node.js, and the complete MERN stack.',
      icon: <Code size={32} />,
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'SEO Friendly'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'SDE Solutions',
      description: 'Custom logic-building and problem-solving systems with efficient algorithms and clean code architecture.',
      icon: <Cog size={32} />,
      features: ['Algorithm Design', 'System Architecture', 'Code Optimization', 'Problem Solving'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'ML Prototyping',
      description: 'Basic machine learning model implementation for predictions and data analysis using Python.',
      icon: <Brain size={32} />,
      features: ['Data Analysis', 'Model Training', 'Prediction Systems', 'ML Algorithms'],
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-center">{service.title}</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRight size={16} />
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

export default Services;