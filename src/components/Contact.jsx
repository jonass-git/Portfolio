import React from 'react';
import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-[#050505]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-cyan">06.</span> Get In Touch
                    </h2>
                    <p className="text-slate-400">
                        Ready to build something amazing? I'm currently available for new opportunities.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-950 border border-slate-800 rounded-lg overflow-hidden shadow-2xl"
                >
                    {/* Terminal Header */}
                    <div className="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-800">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-slate-500 font-mono ml-4 flex items-center gap-2">
                            <Terminal size={12} />
                            contact@portfolio.dev
                        </div>
                    </div>

                    <div className="p-8">
                        <form className="space-y-6 font-mono">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs text-neon-cyan uppercase tracking-wider">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-slate-900/50 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-neon-cyan transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-neon-cyan uppercase tracking-wider">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-slate-900/50 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-neon-cyan transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-neon-cyan uppercase tracking-wider">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="> Hello World..."
                                    className="w-full bg-slate-900/50 border border-slate-800 rounded p-3 text-slate-200 focus:outline-none focus:border-neon-cyan transition-colors"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-bold hover:bg-neon-cyan hover:text-black transition-all flex items-center justify-center gap-2 group"
                            >
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
