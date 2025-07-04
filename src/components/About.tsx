import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, MapPin, Calendar, Code, Award, Target } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Code size={24} />, number: '3+', label: 'Internships', color: 'from-blue-500 to-blue-600' },
    { icon: <Award size={24} />, number: '10+', label: 'Technologies', color: 'from-green-500 to-green-600' },
    { icon: <Target size={24} />, number: '4+', label: 'Projects', color: 'from-purple-500 to-purple-600' },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              About Me
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${300 + index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ transitionDelay: '600ms' }}>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sourabh Sahu is currently pursuing his B.Tech in Information Technology at SSIPMT, Raipur 
                  (graduating in 2026). He is passionate about technology, problem-solving, and building 
                  impactful digital products.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  With hands-on internship experiences and strong technical skills, he is always eager to 
                  learn and grow. His expertise spans across full-stack development, machine learning, 
                  and software engineering.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Education</h3>
                    <p className="text-gray-600">B.Tech in IT</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Location</h3>
                    <p className="text-gray-600">Raipur, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-300 rounded-full opacity-20 -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-400 rounded-full opacity-20 translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <GraduationCap className="text-white" size={20} />
                    </div>
                    Education
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-600 pl-6 py-4 bg-white/50 rounded-r-lg backdrop-blur-sm">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        B.Tech in Information Technology
                      </h4>
                      <p className="text-blue-600 font-medium mb-2">SSIPMT, Raipur</p>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar size={16} />
                        <span>Expected 2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;