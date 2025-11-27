import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stack from './components/Stack';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-[#050505] text-slate-200 font-mono selection:bg-neon-cyan selection:text-black">
            <Header />
            <main className="relative z-10">
                <Hero />
                <About />
                <Stack />
                <Projects />
                <Testimonials />
                <Blog />
                <Contact />
            </main>
            <Footer />

            {/* Background Grid Effect (Optional) */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}>
            </div>
        </div>
    );
}

export default App;
