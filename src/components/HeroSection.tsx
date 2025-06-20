
import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Eye } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Kirtan Patel – Aspiring Data Analyst";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#924DBF] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#9E72C3] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-[#7338A0] rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-1.5 h-1.5 bg-[#924DBF] rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                <span className="block">{displayText}</span>
                <span className="animate-pulse">|</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                B.Tech CSE Student | Data Enthusiast | Passionate about transforming raw data into valuable insights
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="group bg-[#924DBF] hover:bg-[#7338A0] text-white px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Eye size={20} />
                  View My Work
                  <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={16} />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-[#924DBF] text-white hover:bg-[#924DBF] px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
                >
                  Contact Me
                </button>
              </div>
              
              <div className="mt-8">
                <button className="group text-[#924DBF] hover:text-white transition-colors duration-300 flex items-center gap-2 mx-auto lg:mx-0">
                  <Download size={20} />
                  Download Resume
                  <span className="text-sm">(Coming Soon)</span>
                </button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#924DBF] shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://res.cloudinary.com/dh2mnogin/image/upload/v1750401151/MYIMG_rsvm2a.jpg"
                    alt="Kirtan Patel - Data Analyst"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements around image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#924DBF] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#7338A0] rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
