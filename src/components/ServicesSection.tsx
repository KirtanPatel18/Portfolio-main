
import React from 'react';
import { Database, FileSpreadsheet, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Cleaning',
      description: 'Transform messy datasets into clean, structured formats ready for analysis and insights generation.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Data Formatting',
      description: 'Organize and format data for optimal readability and analysis using advanced Excel techniques.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Extract meaningful patterns and insights from data to drive informed business decisions.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#0F0529]/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="text-[#924DBF]">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-[#924DBF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-[#4A2574]/20 backdrop-blur-sm rounded-lg p-8 border border-[#924DBF]/20 hover:border-[#924DBF]/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-[#4A2574]/30"
            >
              <div className="text-center">
                <div className="bg-[#924DBF]/20 rounded-full p-6 w-20 h-20 mx-auto mb-6 group-hover:bg-[#924DBF]/30 transition-colors duration-300 flex items-center justify-center">
                  <service.icon className="text-[#924DBF]" size={32} />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-[#9E72C3] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
