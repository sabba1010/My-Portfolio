import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis for smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // GSAP ScrollTrigger Integration
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Cleanup
        return () => {
            lenis.destroy();
            gsap.ticker.remove(raf);
        };
    }, []);

    useEffect(() => {
        // Global Entrance Animations
        gsap.from(".section-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".section-title",
                start: "top 80%",
            }
        });
    }, []);

    return (
        <div className="relative selection:bg-primary selection:text-white">
            <div className="custom-cursor fixed top-0 left-0 w-8 h-8 pointer-events-none rounded-full border border-primary/50 mix-blend-difference z-[9999] transition-transform duration-100 ease-out hidden lg:block" id="cursor" />
            <div className="custom-cursor-dot fixed top-0 left-0 w-1 h-1 pointer-events-none rounded-full bg-primary z-[9999] transition-transform duration-75 ease-out hidden lg:block" id="cursor-dot" />
            
            <Navbar />
            <main className="">
                <Outlet />
            </main>
            <Footer />

            <script dangerouslySetInnerHTML={{
                __html: `
                    const cursor = document.getElementById('cursor');
                    const dot = document.getElementById('cursor-dot');
                    document.addEventListener('mousemove', (e) => {
                        const { clientX, clientY } = e;
                        cursor.style.transform = \`translate3d(\${clientX - 16}px, \${clientY - 16}px, 0)\`;
                        dot.style.transform = \`translate3d(\${clientX - 2}px, \${clientY - 2}px, 0)\`;
                    });
                `
            }} />
        </div>
    );
};

export default MainLayout;
