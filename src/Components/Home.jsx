import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from "./Contact";
import About from './About';

const Home = () => {
    return (
        <div className="space-y-24"> {/* Fixed vertical gap between sections */}
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
