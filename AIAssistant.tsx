import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { chatWithAssistant } from './geminiService';
import { Message } from './types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Rabbi's AI Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await chatWithAssistant(input, messages);
    
    const aiMsg: Message = { role: 'model', text: response || 'I missed that. Could you repeat?' };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="glass-card w-[350px] sm:w-[400px] h-[550px] rounded-3xl flex flex-col border border-white/20 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-4 bg-indigo-600 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <div className="text-white font-bold text-sm">Rabbi AI</div>
                <div className="text-indigo-200 text-[10px] flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span>
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-slate-700' : 'bg-indigo-600'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white/10 text-slate-200 rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex max-w-[80%] space-x-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-indigo-600">
                    <Bot size={14} />
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 text-slate-200 rounded-tl-none">
                    <Loader2 className="animate-spin text-indigo-400" size={18} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-white/5">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about Rabbi's skills..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-indigo-500 transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-400 hover:text-white disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-indigo-600/30 hover:scale-110 active:scale-95 transition-all group"
        >
          <MessageCircle className="group-hover:rotate-12 transition-transform" size={32} />
        </button>
      )}
    </div>
  );
};