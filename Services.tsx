import React from 'react';
import { Layout as LayoutIcon, Smartphone, Cpu, Feather, ChevronRight } from 'lucide-react';
import { SERVICES } from './constants';

const IconMap: Record<string, React.ReactNode> = {
  layout: <LayoutIcon className="text-indigo-400" size={32} />,
  smartphone: <Smartphone className="text-purple-400" size={32} />,
  cpu: <Cpu className="text-pink-400" size={32} />,
  feather: <Feather className="text-orange-400" size={32} />
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Expertise Driven by <br /> <span className="gradient-text">Future-Ready Tech</span></h2>
            <p className="text-slate-400 text-lg">
              We don't just build apps; we architect digital ecosystems that drive business growth and user engagement.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <div className="h-1 w-24 bg-indigo-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="glass-card p-8 rounded-3xl hover:border-indigo-500/50 transition-all duration-500 group"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl inline-block group-hover:scale-110 transition-transform">
                {IconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="text-indigo-400 font-bold flex items-center group-hover:translate-x-2 transition-transform">
                Learn more <ChevronRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};