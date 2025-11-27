import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cpu, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-[80px] -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-neon-green text-xs mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
                    Available for Freelance & Full-time
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
                >
                    Backend Architecture. <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
                        AI-Driven Efficiency.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Junior Full Stack Developer specializing in robust backend systems.
                    Leveraging Artificial Intelligence to deliver Senior-level code quality and speed.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href="#projects"
                        className="group relative px-8 py-3 bg-neon-cyan text-black font-bold rounded-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center gap-2">
                            View Projects <ArrowRight size={18} />
                        </span>
                    </a>

                    <a
                        href="#contact"
                        className="px-8 py-3 border border-slate-700 hover:border-neon-violet text-slate-300 hover:text-neon-violet transition-all rounded-sm"
                    >
                        Contact Me
                    </a>
                </motion.div>

                {/* Tech Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-20 flex justify-center gap-8 text-slate-500"
                >
                    <div className="flex flex-col items-center gap-2">
                        <Database size={24} />
                        <span className="text-xs">Backend</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Cpu size={24} />
                        <span className="text-xs">AI Powered</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Globe size={24} />
                        <span className="text-xs">Scalable</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
