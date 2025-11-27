import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, User, Layers, MessageSquare } from 'lucide-react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', icon: User, href: '#about' },
        { name: 'Stack', icon: Layers, href: '#stack' },
        { name: 'Projects', icon: Code2, href: '#projects' },
        { name: 'Contact', icon: MessageSquare, href: '#contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 text-neon-cyan font-bold text-xl tracking-tighter">
                    <Terminal size={24} />
                    <span>DEV.PORTFOLIO</span>
                </div>

                <nav className="hidden md:flex gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-2 text-sm text-slate-400 hover:text-neon-cyan transition-colors group"
                        >
                            <item.icon size={16} className="group-hover:text-neon-violet transition-colors" />
                            <span className="relative">
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-cyan group-hover:w-full transition-all duration-300"></span>
                            </span>
                        </a>
                    ))}
                </nav>

                <a
                    href="#contact"
                    className="px-4 py-2 text-xs font-bold border border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 transition-all rounded-sm uppercase tracking-widest"
                >
                    Hire Me
                </a>
            </div>
        </motion.header>
    );
};

export default Header;
