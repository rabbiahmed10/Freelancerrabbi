import React from 'react';
import { Rocket, Shield, Zap, Layout as LayoutIcon, ArrowRight } from 'lucide-react';

export const UpcomingProject: React.FC = () => {
  return (
    <section id="upcoming" className="py-24 relative overflow-hidden bg-[#0a0a0c]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-4 w-fit">
            <Rocket size={14} />
            <span>IN THE PIPELINE</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">Upcoming <span className="gradient-text">Project</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Details */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <LayoutIcon size={120} />
              </div>
              
              <h3 className="text-3xl font-black mb-6 flex items-center">
                Lumina Social Media
              </h3>
              
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Lumina is a next-generation social networking platform currently in development. 
                Focusing on <span className="text-white font-medium">privacy-first communication</span> and a 
                minimalist aesthetic, it aims to reduce digital noise and create meaningful human connections. 
                Built with performance and scalability in mind.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-2xl text-indigo-400">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Privacy Centric</h4>
                    <p className="text-xs text-slate-500">End-to-end encrypted interactions.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-white/5 rounded-2xl text-purple-400">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Ultra Fast</h4>
                    <p className="text-xs text-slate-500">Optimized for sub-second loading.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0a0a0c] bg-slate-800 flex items-center justify-center text-[10px] font-bold">
                      {i === 3 ? '+12' : `U${i}`}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">15 developers already waitlisting</span>
              </div>
            </div>
            
            <button className="flex items-center space-x-3 text-white group">
              <span className="font-bold border-b border-white/20 pb-1 group-hover:border-indigo-500 transition-colors">Notify me on launch</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Side: Illustrator Design Representation */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-indigo-600/20 blur-[60px] rounded-[3rem] group-hover:bg-indigo-600/30 transition-all duration-700"></div>
              
              <div className="relative glass-card p-4 rounded-[3rem] border-white/10 overflow-hidden shadow-2xl">
                <div className="rounded-[2rem] overflow-hidden bg-slate-900 aspect-[4/5] sm:aspect-video lg:aspect-square flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                    alt="Lumina Social Media Design" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Floating Mockup elements */}
                  <div className="absolute top-8 left-8 p-4 glass-card rounded-2xl border-white/20 floating">
                    <div className="w-12 h-2 bg-indigo-500 rounded-full mb-2"></div>
                    <div className="w-8 h-2 bg-white/20 rounded-full"></div>
                  </div>
                  
                  <div className="absolute bottom-8 right-8 p-4 glass-card rounded-2xl border-white/20 floating" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-500"></div>
                      <div className="w-10 h-2 bg-white/40 rounded-full"></div>
                    </div>
                    <div className="w-16 h-2 bg-white/10 rounded-full"></div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-6 py-2 bg-indigo-600/90 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl border border-white/20">
                      Illustrator Concept
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};