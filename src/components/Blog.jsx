import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: "Optimizing PostgreSQL Queries with AI Analysis",
            date: "Oct 12, 2023",
            excerpt: "How I used GPT-4 to analyze slow query logs and suggest indexes that improved performance by 200%."
        },
        {
            title: "Microservices: When to Break the Monolith",
            date: "Sep 28, 2023",
            excerpt: "A deep dive into the trade-offs of distributed systems and my experience migrating a legacy app."
        },
        {
            title: "The Future of Backend Development",
            date: "Sep 15, 2023",
            excerpt: "Why serverless and edge computing are changing how we think about backend architecture."
        }
    ];

    return (
        <section className="py-20 px-6 bg-[#050505]">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex justify-between items-end"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-2">
                            <span className="text-neon-cyan">05.</span> Latest Thoughts
                        </h2>
                        <p className="text-slate-500 text-sm">Writing about code, architecture, and AI.</p>
                    </div>
                    <a href="#" className="hidden md:flex items-center gap-2 text-neon-cyan text-sm hover:underline">
                        View all posts <ArrowRight size={14} />
                    </a>
                </motion.div>

                <div className="space-y-6">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group flex flex-col md:flex-row gap-6 p-6 border-b border-slate-900 hover:bg-slate-900/30 transition-colors cursor-pointer"
                        >
                            <div className="md:w-1/4 flex items-center gap-2 text-slate-500 text-xs font-mono">
                                <Calendar size={14} />
                                {post.date}
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-bold text-slate-300 group-hover:text-neon-cyan transition-colors mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
