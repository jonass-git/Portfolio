import React from 'react';
import { Github, Linkedin, Twitter, Mail, Download } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 bg-[#020202] border-t border-slate-900 text-center">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-slate-500 text-sm">
                    © 2024 Dev.Portfolio. Built with React & Tailwind.
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors"><Mail size={20} /></a>
                </div>

                <button className="flex items-center gap-2 text-neon-green text-sm font-bold border border-neon-green/30 px-4 py-2 rounded hover:bg-neon-green/10 transition-colors">
                    <Download size={16} /> Download CV
                </button>
            </div>
        </footer>
    );
};

export default Footer;
