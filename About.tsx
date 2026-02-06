import React from 'react';
import { EDUCATION, EMPLOYMENT } from './constants';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-indigo-600/20 rounded-2xl">
                < GraduationCap className="text-indigo-400" size={28} />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-8">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10 pb-8 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  <div className="text-sm text-indigo-400 font-semibold mb-1">{edu.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                  <p className="text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Employment */}
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-purple-600/20 rounded-2xl">
                <Briefcase className="text-purple-400" size={28} />
              </div>
              <h2 className="text-3xl font-bold">Employment</h2>
            </div>
            <div className="space-y-8">
              {EMPLOYMENT.map((job, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10 pb-8 last:pb-0">
                  <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  <div className="text-sm text-purple-400 font-semibold mb-1">{job.period}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                  <p className="text-slate-400">{job.company}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 glass-card p-6 rounded-3xl border-indigo-500/20 bg-indigo-500/5">
              <div className="flex items-start space-x-4">
                <Award className="text-indigo-400 mt-1" size={24} />
                <div>
                  <h4 className="font-bold text-white mb-2">PRAN-RFL Group Super SR Award</h4>
                  <p className="text-sm text-slate-400">
                    Achieved and consistently exceeded monthly sales targets by 15% while working as a Sales Representative in Gazipur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};