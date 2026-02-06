import React from 'react';
import { ChevronRight, Sparkles, MousePointer2 } from 'lucide-react';
import { PROFILE_IMAGE } from './constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-grid">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Profile Image - Now at the Top */}
        <div className="relative inline-block mb-12">
          <div className="relative z-10 w-48 h-48 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-b from-white/10 to-transparent backdrop-blur-sm group">
            <img 
              src={PROFILE_IMAGE} 
              alt="Mahedi Hasan Rabbi" 
              className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 drop-shadow-[0_10px_30px_rgba(99,102,241,0.3)]"
            />
          </div>
          
          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-indigo-500/20 rounded-full -z-10 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-purple-500/10 rounded-full -z-10 animate-[spin_30s_linear_infinite_reverse]"></div>
          
          {/* Small Floating Badge */}
          <div className="absolute -bottom-2 right-4 bg-white text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center space-x-1 floating">
            <MousePointer2 size={12} />
            <span>Available for Hire</span>
          </div>
        </div>

        {/* Text Content - Below the Image */}
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card text-xs font-semibold text-indigo-400 mb-8 border border-indigo-500/30">
            <Sparkles size={14} />
            <span>AWARD WINNING SALES REPRESENTATIVE</span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
            Hi, I'M Mr Rabbi <br />
            <span className="gradient-text">Professional Sales</span> Representative.
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-slate-400 mb-12 leading-relaxed">
            Hello! I'm <span className="text-white font-bold">Mahedi Hasan Rabbi</span>. A BBA student at Habibullah Bahar University and 
            proven Sales Professional at <span className="text-white">PRAN-RFL</span>, blending market strategy with 
            <span className="text-white"> Graphics Design & Web Development</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#projects" className="w-full sm:w-auto px-10 py-4 bg-white text-black font-black rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-white/20 transition-all flex items-center justify-center">
              Explore My Work
              <ChevronRight className="ml-2" size={20} />
            </a>
            <a 
              href="https://wa.me/8801403751408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 glass-card text-white font-bold rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center border border-white/10"
            >
              Let's Talk
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center p-1">
              <div className="w-1 h-2 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};