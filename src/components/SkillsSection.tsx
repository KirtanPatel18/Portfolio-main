
import React, { useEffect, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: 'Python', level: 85 },
    { name: 'Excel', level: 90 },
    { name: 'Data Analysis', level: 80 },
    { name: 'Pivot Chart', level: 85 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#924DBF]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#924DBF] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold text-lg">{skill.name}</span>
                  <span className="text-[#924DBF] font-bold">{skill.level}%</span>
                </div>
                
                <div className="relative">
                  <div className="w-full bg-[#4A2574]/30 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r from-[#924DBF] to-[#9E72C3] transition-all duration-1000 ease-out ${
                        isVisible ? 'animate-pulse' : ''
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Circular Progress Alternative */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {skills.map((skill, index) => (
              <div key={`circle-${skill.name}`} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#4A2574]/30"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#924DBF]"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeDasharray={`${isVisible ? skill.level : 0}, 100`}
                      strokeLinecap="round"
                      fill="transparent"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      style={{
                        transition: 'stroke-dasharray 1s ease-out',
                        transitionDelay: `${index * 200}ms`
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{skill.level}%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
