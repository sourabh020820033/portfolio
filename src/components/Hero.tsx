import React from 'react';
import { Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // Make sure resume.pdf is in your /public folder
  link.setAttribute('download', 'Sourabh_Sahu_Resume.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Sourabh Sahu
                  </span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full transform scale-x-0 animate-pulse" style={{ animation: 'scaleX 2s ease-in-out infinite' }}></div>
                </span>
              </h1>
              
              <div className="text-xl lg:text-3xl text-gray-600 font-medium space-y-2">
                <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold transform hover:scale-105 transition-transform duration-300">
                    Full Stack Developer
                  </span>
                  
                </div>
              </div>
            </div>
            
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Hi, I'm Sourabh — a tech enthusiast pursuing B.Tech in IT from SSIPMT, Raipur. 
              I specialize in full-stack development and love solving real-world problems with code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button
                onClick={downloadResume}
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 min-w-[200px]"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="group border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px]"
              >
                <Mail size={20} className="group-hover:animate-pulse" />
                Contact Me
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleX {
          0%, 100% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;