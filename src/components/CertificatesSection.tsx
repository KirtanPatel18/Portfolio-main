import React, { useState, useMemo, useEffect } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certificates } from '../data/certificates';
import { motion, AnimatePresence } from 'framer-motion';

const FILTERS = [
  'All',
  'Data Analysis',
  'Programming',
  'Web Dev',
  'Certificates',
  'Tools',
  'Python',
];

function getFirstNWords(text: string, n: number) {
  const words = text.split(/\s+/);
  return words.slice(0, n).join(' ');
}

const WORD_LIMIT = 10;

const CertificatesSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [search, setSearch] = useState('');
  // Track expanded skills per certificate by id
  const [expandedSkills, setExpandedSkills] = useState<{ [id: number]: boolean }>({});
  // Track expanded description per certificate by id
  const [expandedDesc, setExpandedDesc] = useState<{ [id: number]: boolean }>({});
  const [showCount, setShowCount] = useState(6);

  useEffect(() => {
    const last = localStorage.getItem('certificatesFilter');
    if (last) setActiveFilter(last);
  }, []);
  useEffect(() => {
    localStorage.setItem('certificatesFilter', activeFilter);
  }, [activeFilter]);

  const filtered = useMemo(() =>
    certificates.filter(cert =>
      (activeFilter === 'All' || cert.categories.includes(activeFilter)) &&
      (search === '' || cert.title.toLowerCase().includes(search.toLowerCase()) || cert.issuer.toLowerCase().includes(search.toLowerCase()) || cert.skills.some(skill => skill.toLowerCase().includes(search.toLowerCase())))
    ),
    [activeFilter, search]
  );

  const handleToggleSkills = (id: number) => {
    setExpandedSkills(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleToggleDesc = (id: number) => {
    setExpandedDesc(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="certificates" className="py-20 bg-[#4A2574]/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[#924DBF]">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-[#924DBF] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and courses that validate my expertise in data analysis and related technologies
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 sticky top-0 z-10 bg-[#1a102b]/80 backdrop-blur rounded-lg p-2">
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {FILTERS.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#924DBF] text-sm
                  ${activeFilter === filter ? 'bg-[#924DBF] text-white shadow-lg' : 'bg-[#4A2574]/30 text-[#924DBF] hover:bg-[#924DBF]/40'}`}
                aria-pressed={activeFilter === filter}
              >
                {filter} <span className="ml-1 text-xs text-[#bfa6e0]">({filter === 'All' ? certificates.length : certificates.filter(c => c.categories.includes(filter)).length})</span>
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-md px-3 py-1.5 bg-[#2a1840] text-white border border-[#924DBF]/30 focus:border-[#924DBF] outline-none w-full md:w-64"
          />
        </div>
        <div className="min-h-[300px] grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="col-span-full text-center text-[#924DBF] text-lg font-semibold py-12"
              >
                No certificates found.
              </motion.div>
            ) : (
              filtered.map(cert => {
                const showAllSkills = expandedSkills[cert.id];
                const visibleSkills = showAllSkills ? cert.skills : cert.skills.slice(0, 3);
                const hasMore = cert.skills.length > 3;
                // Description logic: show only first 80 words by default
                const showAllDesc = expandedDesc[cert.id];
                const words = cert.description.split(/\s+/);
                const descLong = words.length > WORD_LIMIT;
                const descToShow = showAllDesc || !descLong ? cert.description : getFirstNWords(cert.description, WORD_LIMIT) + (descLong ? '...' : '');
                return (
                  <motion.div
                    key={cert.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[#4A2574]/20 backdrop-blur-sm rounded-lg p-6 border border-[#924DBF]/20 hover:border-[#924DBF]/40 transition-all duration-300 group hover:transform hover:scale-105 min-h-[420px] flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-[#924DBF]/20 rounded-lg p-3 group-hover:bg-[#924DBF]/30 transition-colors duration-300">
                        <Award className="text-[#924DBF]" size={24} />
                      </div>
                      <a
                        href={cert.link}
                        className="text-[#924DBF] hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#924DBF] transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#924DBF] font-medium">{cert.issuer}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Calendar size={14} />
                        <span className="text-sm">{cert.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-2">
                      {descToShow}
                      {descLong && (
                        <button
                          onClick={() => handleToggleDesc(cert.id)}
                          className={`ml-2 px-2 py-0.5 rounded text-xs font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#924DBF] ${showAllDesc ? 'bg-[#2a1840] text-[#bfa6e0]' : 'bg-[#FFB800]/80 text-[#4A2574]'}`}
                        >
                          {showAllDesc ? 'Show Less' : 'Know More'}
                        </button>
                      )}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2 items-center">
                      {visibleSkills.map(skill => (
                        <span key={skill} className="bg-[#924DBF]/20 text-[#924DBF] px-2 py-0.5 rounded text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                      {hasMore && (
                        <button
                          onClick={() => handleToggleSkills(cert.id)}
                          className={`px-2 py-0.5 rounded text-xs font-medium ml-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#924DBF] ${showAllSkills ? 'bg-[#2a1840] text-[#bfa6e0]' : 'bg-[#FFB800]/80 text-[#4A2574]'}`}
                        >
                          {showAllSkills ? 'Show Less' : `+${cert.skills.length - 3} More`}
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {cert.categories.map(cat => (
                        <span key={cat} className="bg-[#4A2574]/40 text-[#bfa6e0] px-2 py-0.5 rounded text-xs">
                          {cat}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-[#924DBF]/20">
                      <span className="inline-flex items-center gap-1 text-[#924DBF] text-sm font-medium">
                        <Award size={14} />
                        Verified Certificate
                      </span>
                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>
        <div className="text-center mt-12">
          <div className="bg-[#924DBF]/10 rounded-lg p-6 border border-[#924DBF]/30 max-w-2xl mx-auto">
            <p className="text-[#9E72C3] font-semibold text-lg mb-2">
              🎯 Continuous Learning Journey
            </p>
            <p className="text-gray-300">
              Currently pursuing additional certifications in Advanced Data Analytics and Machine Learning to further enhance my expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
