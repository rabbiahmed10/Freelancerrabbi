import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip } from 'recharts';
import { SKILLS } from './constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0c]/50 relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">Technical <span className="gradient-text">Prowess</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              My stack is carefully chosen to ensure the best performance, scalability, and maintainability for every project. From frontend brilliance to backend robustness.
            </p>
            
            <div className="space-y-6">
              {SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-bold text-white">{skill.name}</span>
                    <span className="text-indigo-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="h-[500px] glass-card rounded-3xl p-8 flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-8 text-center">Skill Distribution</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={SKILLS}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="level"
                  stroke="#6366f1"
                  fill="#6366f1"
                  fillOpacity={0.4}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0c', borderColor: '#1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};