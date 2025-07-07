import React from 'react';
import { useState } from 'react';
import Terminal from './components/Terminal';
import CyberTransition from './components/CyberTransition';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    const [showPortfolio, setShowPortfolio] = useState(false);
    const [showTransition, setShowTransition] = useState(false);

    if (!showPortfolio) {
        if (showTransition) {
            return <CyberTransition onComplete={() => setShowPortfolio(true)} />;
        }
        return <Terminal onComplete={() => setShowTransition(true)} />;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;