import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Sourabh Sahu</h3>
              <p className="text-gray-400">Web Developer | SDE Intern | ML Enthusiast</p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by Sourabh Sahu</span>
            </div>
            
            <div className="text-center text-gray-400">
              <p>&copy; 2022 Sourabh Sahu. All rights reserved.</p>
            </div>
          </div>
          
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;