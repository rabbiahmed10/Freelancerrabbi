import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from './constants';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Web' | 'Mobile' | 'Design' | 'AI'>('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const categories: ('All' | 'Web' | 'Mobile' | 'Design' | 'AI')[] = ['All', 'Web', 'Mobile', 'Design', 'AI'];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Selected <span className="gradient-text">Works</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent endeavors in crafting digital perfection across multiple disciplines.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full transition-all border ${
                activeCategory === cat 
                  ? 'bg-indigo-600 border-indigo-600 text-white' 
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-6">
                  <button className="p-4 bg-white text-black rounded-full hover:scale-110 transition-transform">
                    <ExternalLink size={24} />
                  </button>
                  <button className="p-4 bg-white/10 text-white backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-transform">
                    <Github size={24} />
                  </button>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-slate-400">{tag}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};