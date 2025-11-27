import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Sarah Jenkins",
            role: "CTO @ TechFlow",
            text: "The speed at which he delivers complex backend solutions is unmatched. His use of AI tools to optimize database queries saved us 30% in infrastructure costs."
        },
        {
            name: "David Chen",
            role: "Senior Dev @ StartupX",
            text: "I was skeptical about a Junior dev, but his code quality rivals that of seniors. He understands architecture and scalability intuitively."
        },
        {
            name: "Elena Rodriguez",
            role: "Product Manager",
            text: "Excellent communication skills. He translates technical jargon into business value effortlessly. A true asset to any agile team."
        }
    ];

    return (
        <section className="py-20 px-6 bg-[#050505] border-t border-slate-900">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-cyan">04.</span> Testimonials
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-slate-900/20 border border-slate-800 rounded-sm relative"
                        >
                            <Quote className="absolute top-4 right-4 text-slate-800" size={40} />
                            <p className="text-slate-400 mb-6 italic relative z-10">"{t.text}"</p>
                            <div>
                                <h4 className="text-slate-200 font-bold">{t.name}</h4>
                                <span className="text-neon-violet text-xs">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
