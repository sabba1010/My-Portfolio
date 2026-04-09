import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MainLayout = () => {
    const cursorRef = useRef(null);
    const dotRef = useRef(null);

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

        // Global Entrance Animations
        const sectionTitles = gsap.utils.toArray('.section-title');
        sectionTitles.forEach((title) => {
            gsap.fromTo(title, 
                { y: 50, opacity: 0 },
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1.2, 
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Cleanup
        return () => {
            lenis.destroy();
            gsap.ticker.remove(raf);
        };
    }, []);

    useEffect(() => {
        // Premium GSAP Cursor
        const cursor = cursorRef.current;
        const dot = dotRef.current;
        
        if (!cursor || !dot) return;

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            
            gsap.to(cursor, {
                x: clientX,
                y: clientY,
                duration: 0.5,
                ease: "power3.out"
            });

            gsap.to(dot, {
                x: clientX,
                y: clientY,
                duration: 0.1,
                ease: "power3.out"
            });
        };

        const onMouseDown = () => {
            gsap.to([cursor, dot], { scale: 0.8, duration: 0.2 });
        };

        const onMouseUp = () => {
            gsap.to([cursor, dot], { scale: 1, duration: 0.2 });
        };

        // Magnetic Effect for Buttons & Links
        const magnetElements = document.querySelectorAll('a, button, .group');
        magnetElements.forEach((el) => {
            el.addEventListener('mouseenter', () => {
                gsap.to(cursor, { scale: 2, backgroundColor: "rgba(99, 102, 241, 0.1)", borderColor: "rgba(99, 102, 241, 0.5)", duration: 0.3 });
                gsap.to(dot, { scale: 0, duration: 0.3 });
            });
            el.addEventListener('mouseleave', () => {
                gsap.to(cursor, { scale: 1, backgroundColor: "transparent", borderColor: "rgba(99, 102, 241, 0.5)", duration: 0.3 });
                gsap.to(dot, { scale: 1, duration: 0.3 });
            });
        });

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    return (
        <div className="relative selection:bg-primary selection:text-white bg-neutral min-h-screen">
            {/* Edge Glow Gradients (Matching Screenshot Aesthetic) */}
            <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
                {/* Top Left Glow */}
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
                {/* Top Right Glow */}
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/15 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
                {/* Bottom Left Glow */}
                <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '12s' }} />
                {/* Bottom Right Glow */}
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '14s' }} />
                
                {/* Side Vignette Effect */}
                <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(3,7,18,0.8)]" />
            </div>

            {/* Spotlight Glow Background */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
                <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            {/* Custom GSAP Cursor */}
            <div 
                ref={cursorRef}
                className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block" 
            />
            <div 
                ref={dotRef}
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden lg:block shadow-[0_0_10px_var(--color-primary)]" 
            />
            
            <Navbar />
            <main className="relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
