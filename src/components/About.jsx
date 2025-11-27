import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, MessageCircle, Code } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: Bot,
            title: "AI-Augmented Development",
            desc: "I use LLMs and AI tools to accelerate development, debug faster, and write cleaner code. What takes others days, I deliver in hours."
        },
        {
            icon: Zap,
            title: "Rapid Prototyping",
            desc: "From concept to deployment in record time. My workflow is optimized for speed without sacrificing quality."
        },
        {
            icon: MessageCircle,
            title: "Clear Communication",
            desc: "Technical skills are useless without understanding. I bridge the gap between complex backend logic and business requirements."
        },
        {
            icon: Code,
            title: "Clean Architecture",
            desc: "Writing code that is scalable, maintainable, and self-documenting. Future-proofing projects from day one."
        }
    ];

    return (
        <section id="about" className="py-20 px-6 bg-[#050505] relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-neon-cyan">01.</span> About Me
                    </h2>
                    <div className="h-1 w-20 bg-slate-800 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-slate-400 leading-relaxed"
                    >
                        <p>
                            Hello! I'm a passionate Full Stack Developer with a heavy focus on <span className="text-slate-200 font-bold">Backend Systems</span>.
                            My journey started with a curiosity for how things work under the hood, leading me to master server-side logic, databases, and API design.
                        </p>
                        <p>
                            What sets me apart is my integration of <span className="text-neon-violet font-bold">Artificial Intelligence</span> into my daily workflow.
                            I don't just write code; I orchestrate solutions using the best tools available, allowing me to operate with the efficiency and insight of a much more senior developer.
                        </p>
                        <p>
                            I'm looking for a team that values innovation, speed, and continuous learning.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-slate-900/50 border border-slate-800 hover:border-neon-cyan/50 transition-colors rounded-sm group"
                            >
                                <card.icon className="text-neon-cyan mb-4 group-hover:text-neon-violet transition-colors" size={32} />
                                <h3 className="text-lg font-bold text-slate-200 mb-2">{card.title}</h3>
                                <p className="text-sm text-slate-500">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
