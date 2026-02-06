import React, { useState, useEffect } from 'react';
import { Menu, X, Youtube, Facebook, Mail } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Upcoming', href: '#upcoming' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c]">
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold gradient-text">MR</span>
              <span className="ml-2 text-xl font-bold hidden sm:inline-block">Mahedi Hasan Rabbi</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-400 hover:text-white"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0a0a0c] border-b border-white/10">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-[#050505] border-t border-white/5 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-bold gradient-text">Mahedi Rabbi</span>
              <p className="mt-4 text-slate-400 max-w-sm leading-relaxed">
                A professional blend of Sales expertise and Digital Engineering. 
                Dedicated to driving growth through excellence and strategic marketing.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Social Presence</h4>
              <div className="flex flex-col space-y-4">
                <a 
                  href="https://youtube.com/@gamingwithrafii?si=G5mknyLpV1Koa-ya" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-red-500/20 transition-colors">
                    <Youtube size={18} className="group-hover:text-red-500" />
                  </div>
                  <span className="text-sm font-medium">YouTube Channel</span>
                </a>
                <a 
                  href="https://www.facebook.com/mahedi.hasan.rabbi.2024" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group flex items-center space-x-3 text-slate-400 hover:text-white transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                    <Facebook size={18} className="group-hover:text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">Facebook Profile</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#projects" className="text-slate-400 hover:text-white text-sm transition-colors">Portfolio</a></li>
                <li><a href="#upcoming" className="text-slate-400 hover:text-white text-sm transition-colors">Upcoming Projects</a></li>
                <li><a href="mailto:rabbiahamed026@gmail.com" className="text-slate-400 hover:text-white text-sm transition-colors flex items-center">
                  <Mail size={14} className="mr-2" /> Direct Email
                </a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-500 text-xs">
            <p>© {new Date().getFullYear()} Mahedi Hasan Rabbi. All rights reserved.</p>
            <p className="flex items-center">
              Based in Gazipur, Bangladesh 
              <span className="mx-2">•</span> 
              <span className="text-indigo-500 font-bold">Sales & Tech Excellence</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};