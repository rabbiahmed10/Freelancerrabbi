import React from 'react';
import { Send, Mail, MapPin, Phone, Calendar, ShieldCheck, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[3rem] overflow-hidden border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 bg-indigo-600">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">Get in touch with <br /> <span className="text-indigo-200 underline decoration-indigo-300">Mahedi Rabbi</span>.</h2>
              <p className="text-indigo-100 text-lg mb-12">
                Available for freelance web development, graphics design projects, or professional consultations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs">Email</div>
                    <div className="text-white font-bold text-sm">rabbiahamed026@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs">Phone</div>
                    <div className="text-white font-bold text-sm">+880 1403-751408</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs">Location</div>
                    <div className="text-white font-bold text-sm">Gazipur, Dhaka, BD</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs">Birthday</div>
                    <div className="text-white font-bold text-sm">February 2, 2003</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs">Licence</div>
                    <div className="text-white font-bold text-sm">Driving Licence Holder</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Globe size={24} />
                  </div>
                  <div>
                    <div className="text-indigo-200 text-xs">Nationality</div>
                    <div className="text-white font-bold text-sm">Bangladesh</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 lg:p-20">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="Mahedi Hasan Rabbi"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all"
                      placeholder="rabbi@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Service Needed</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all appearance-none">
                    <option className="bg-slate-900">Web Development (Laravel)</option>
                    <option className="bg-slate-900">Graphics Design</option>
                    <option className="bg-slate-900">Sales Consultation</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-all"
                    placeholder="Describe your vision..."
                  ></textarea>
                </div>
                <button className="w-full bg-white text-black font-black py-4 rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};