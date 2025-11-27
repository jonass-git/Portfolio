import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, ChevronRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "AI-Powered Task Manager",
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=800&auto=format&fit=crop",
        tech: ["React", "Node.js", "OpenAI API", "PostgreSQL"],
        shortDesc: "Smart task prioritization using NLP.",
        challenge: "Users struggle to prioritize tasks effectively. Traditional lists are static and overwhelming.",
        solution: "Integrated OpenAI's GPT-4 to analyze task descriptions and automatically assign priority, tags, and estimated time. Built a real-time dashboard using Socket.io.",
        links: { github: "#", live: "#" }
    },
    {
        id: 2,
        title: "E-Commerce Microservices",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        tech: ["NestJS", "RabbitMQ", "Docker", "Redis"],
        shortDesc: "Scalable backend for high-traffic retail.",
        challenge: "Monolithic architecture was causing downtime during sales spikes.",
        solution: "Decomposed the monolith into microservices (Auth, Product, Order, Payment) communicating via RabbitMQ. Implemented Redis caching to reduce DB load by 40%.",
        links: { github: "#", live: "#" }
    },
    {
        id: 3,
        title: "Real-time Collab Tool",
        category: "Full Stack",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
        tech: ["Vue.js", "Firebase", "WebRTC"],
        shortDesc: "Code editing and video chat in browser.",
        challenge: "Remote teams need seamless collaboration without installing heavy software.",
        solution: "Built a browser-based IDE with operational transformation for conflict-free editing and WebRTC for low-latency video calls.",
        links: { github: "#", live: "#" }
    }
];

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="projects" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-cyan">03.</span> Featured Projects
                    </h2>
                    <div className="h-1 w-20 bg-slate-800 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            layoutId={`card-container-${project.id}`}
                            onClick={() => setSelectedId(project.id)}
                            className="group cursor-pointer bg-slate-900/50 border border-slate-800 rounded-sm overflow-hidden hover:border-neon-cyan/50 transition-colors"
                            whileHover={{ y: -5 }}
                        >
                            <motion.div layoutId={`card-image-${project.id}`} className="h-48 overflow-hidden relative">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors"></div>
                            </motion.div>

                            <div className="p-6">
                                <motion.div layoutId={`card-category-${project.id}`} className="text-neon-cyan text-xs font-bold mb-2 uppercase tracking-wider">
                                    {project.category}
                                </motion.div>
                                <motion.h3 layoutId={`card-title-${project.id}`} className="text-xl font-bold text-slate-200 mb-2 group-hover:text-neon-violet transition-colors">
                                    {project.title}
                                </motion.h3>
                                <motion.p layoutId={`card-desc-${project.id}`} className="text-slate-400 text-sm mb-4">
                                    {project.shortDesc}
                                </motion.p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 3).map((t, i) => (
                                        <span key={i} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedId(null)}
                                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                            />

                            <motion.div
                                layoutId={`card-container-${selectedId}`}
                                className="w-full max-w-3xl bg-[#0a0a0a] border border-neon-cyan/30 rounded-lg overflow-hidden relative z-10 shadow-2xl shadow-neon-cyan/10"
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-neon-cyan z-20"
                                >
                                    <X size={20} />
                                </button>

                                {(() => {
                                    const project = projects.find(p => p.id === selectedId);
                                    return (
                                        <div className="flex flex-col md:flex-row h-[80vh] md:h-auto overflow-y-auto">
                                            <motion.div layoutId={`card-image-${selectedId}`} className="md:w-2/5 h-64 md:h-auto relative">
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:bg-gradient-to-r"></div>
                                            </motion.div>

                                            <div className="p-8 md:w-3/5 flex flex-col">
                                                <motion.div layoutId={`card-category-${selectedId}`} className="text-neon-cyan text-xs font-bold mb-2 uppercase tracking-wider">
                                                    {project.category}
                                                </motion.div>
                                                <motion.h3 layoutId={`card-title-${selectedId}`} className="text-3xl font-bold text-white mb-6">
                                                    {project.title}
                                                </motion.h3>

                                                <div className="space-y-6 flex-grow">
                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
                                                            <ChevronRight size={14} className="text-neon-violet" /> The Challenge
                                                        </h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">
                                                            {project.challenge}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-300 mb-2 flex items-center gap-2">
                                                            <ChevronRight size={14} className="text-neon-green" /> The Solution
                                                        </h4>
                                                        <p className="text-slate-400 text-sm leading-relaxed">
                                                            {project.solution}
                                                        </p>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-sm font-bold text-slate-300 mb-2">Technologies</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {project.tech.map((t, i) => (
                                                                <span key={i} className="text-xs text-neon-cyan bg-neon-cyan/10 px-3 py-1 rounded border border-neon-cyan/20">
                                                                    {t}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-8 pt-6 border-t border-slate-800 flex gap-4">
                                                    <a href={project.links.github} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded text-sm font-bold transition-colors">
                                                        <Github size={16} /> Source Code
                                                    </a>
                                                    <a href={project.links.live} className="flex items-center gap-2 px-4 py-2 bg-neon-cyan text-black hover:bg-neon-cyan/80 rounded text-sm font-bold transition-colors">
                                                        <ExternalLink size={16} /> Live Demo
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
