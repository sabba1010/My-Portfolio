import React from 'react';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contact from "./Contact";
import Hero from './Hero';
import About from './About';

const Home = () => {
    return (
        <div className="">
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
