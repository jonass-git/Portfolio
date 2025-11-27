import React from 'react';
import { motion } from 'framer-motion';
import {
    Database, Server, Globe, Cpu, Code2, Layers,
    Terminal, Shield, Cloud, Box, GitBranch, Command
} from 'lucide-react';

const Stack = () => {
    const technologies = [
        { name: 'Node.js', icon: Server, color: 'text-green-500' },
        { name: 'React', icon: Code2, color: 'text-blue-400' },
        { name: 'PostgreSQL', icon: Database, color: 'text-blue-300' },
        { name: 'Docker', icon: Box, color: 'text-blue-500' },
        { name: 'AWS', icon: Cloud, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: Terminal, color: 'text-blue-600' },
        { name: 'Next.js', icon: Layers, color: 'text-white' },
        { name: 'Tailwind', icon: Globe, color: 'text-cyan-400' },
        { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
        { name: 'Linux', icon: Command, color: 'text-yellow-300' },
        { name: 'GraphQL', icon: Cpu, color: 'text-pink-500' },
        { name: 'Security', icon: Shield, color: 'text-red-500' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <section id="stack" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-cyan">02.</span> Tech Stack
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        My arsenal of tools. I select the best technology for the job to ensure performance, scalability, and maintainability.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {technologies.map((tech) => (
                        <motion.div
                            key={tech.name}
                            variants={item}
                            className="group relative p-6 bg-slate-900/30 border border-slate-800 rounded-sm flex flex-col items-center justify-center gap-4 transition-all hover:border-neon-cyan/50 hover:bg-slate-900/80 cursor-default"
                        >
                            <div className={`absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-full`}></div>

                            <tech.icon
                                size={40}
                                className={`text-slate-500 group-hover:${tech.color} transition-colors duration-300 relative z-10`}
                            />
                            <span className="text-sm font-mono text-slate-400 group-hover:text-slate-200 transition-colors relative z-10">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stack;
