
import React from 'react';
import { GraduationCap, BarChart3, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#0F0529]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[#924DBF]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#924DBF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I am currently pursuing my B.Tech in Computer Science and Engineering at 
              <span className="text-[#924DBF] font-semibold"> Charotar University of Science and Technology</span>. 
              With a strong interest in Data Analysis, I aim to help organizations make data-driven decisions for their growth.
            </p>
            
            <div className="bg-[#4A2574]/30 backdrop-blur-sm rounded-lg p-6 border border-[#924DBF]/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GraduationCap className="text-[#924DBF]" size={24} />
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-white font-semibold">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-300">Charotar University of Science and Technology</p>
                <p className="text-[#924DBF]">Expected Graduation: 2027</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="bg-[#924DBF]/20 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                <User className="text-[#924DBF]" size={32} />
              </div>
              <h3 className="text-white font-semibold mb-2">Student</h3>
              <p className="text-gray-400 text-sm">Passionate Learner</p>
            </div>

            <div className="text-center group">
              <div className="bg-[#924DBF]/20 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                <BarChart3 className="text-[#924DBF]" size={32} />
              </div>
              <h3 className="text-white font-semibold mb-2">Data Analyst</h3>
              <p className="text-gray-400 text-sm">Future Professional</p>
            </div>

            <div className="text-center group">
              <div className="bg-[#924DBF]/20 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                <GraduationCap className="text-[#924DBF]" size={32} />
              </div>
              <h3 className="text-white font-semibold mb-2">Tech Enthusiast</h3>
              <p className="text-gray-400 text-sm">Innovation Driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
