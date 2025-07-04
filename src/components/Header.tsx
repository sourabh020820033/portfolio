import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold transition-all duration-300 ${
            isScrolled ? 'text-blue-600' : 'text-blue-600'
          }`}>
            <span className="relative">
              Sourabh Sahu
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></div>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'text-white bg-blue-600 shadow-lg'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                  {!isActive && (
                    <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-full transition-all duration-300 transform hover:scale-110 ${
              isMenuOpen 
                ? 'text-blue-600 bg-blue-50' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navItems.map((item, index) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 ${
                      isActive
                        ? 'text-white bg-blue-600 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;