import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import GlareHover from './GlareHover';
import Particles from './ParticlesBackground';
import SplashCursor from './SplashCursor';

// Toggle: Set to true to enable splash cursor effect
const ENABLE_SPLASH_CURSOR = false;

import CurtainEdge, { CurtainEdgeRight } from './CurtainEdge';
import StarBorder from './StarBorder';

export default function CurtainOverlay({ onRevealComplete }) {
    const containerRef = useRef(null);
    const overlayRef = useRef(null);
    const leftCurtainRef = useRef(null);
    const rightCurtainRef = useRef(null);
    const centerCardRef = useRef(null);
    const locomotiveRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const hasRevealedRef = useRef(false);

    // Initialize Locomotive Scroll
    useEffect(() => {
        if (!containerRef.current) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        locomotiveRef.current = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 0.8,
            lerp: 0.08,  // Optimized from 0.1 for smoother performance
        });

        locomotiveRef.current.on('scroll', (args) => {
            const progress = Math.min(args.scroll.y / 300, 1);
            setScrollProgress(progress);

            if (progress >= 1 && !hasRevealedRef.current) {
                hasRevealedRef.current = true;
                onRevealComplete?.();
            }
        });

        return () => {
            locomotiveRef.current?.destroy();
        };
    }, [onRevealComplete]);

    // 3D Tilt effect for glass card
    const handleCardMouseMove = (e) => {
        if (!centerCardRef.current) return;

        const rect = centerCardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rotateX = ((e.clientY - centerY) / rect.height) * -8;
        const rotateY = ((e.clientX - centerX) / rect.width) * 8;

        gsap.to(centerCardRef.current, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    const handleCardMouseLeave = () => {
        if (!centerCardRef.current) return;
        gsap.to(centerCardRef.current, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    // Wind effect animation for curtains
    useGSAP(() => {
        const leftCurtain = leftCurtainRef.current;
        const rightCurtain = rightCurtainRef.current;

        if (!leftCurtain || !rightCurtain) return;

        const windTimeline = gsap.timeline({ repeat: -1, yoyo: true });

        windTimeline.to([leftCurtain, rightCurtain], {
            skewX: 0.7,
            duration: 2,
            ease: 'sine.inOut',
        }).to([leftCurtain, rightCurtain], {
            skewX: -0.7,
            duration: 2.5,
            ease: 'sine.inOut',
        }).to([leftCurtain, rightCurtain], {
            skewX: 0.7,
            duration: 1.8,
            ease: 'sine.inOut',
        });

        return () => {
            windTimeline.kill();
        };
    }, []);

    // Apply scroll-based curtain animation
    useGSAP(() => {
        const leftCurtain = leftCurtainRef.current;
        const rightCurtain = rightCurtainRef.current;
        const centerCard = centerCardRef.current;
        const overlay = overlayRef.current;

        if (!leftCurtain || !rightCurtain || !centerCard || !overlay) return;

        gsap.to(leftCurtain, {
            xPercent: -scrollProgress * 100,
            duration: 0.1,
            ease: 'none',
        });

        gsap.to(rightCurtain, {
            xPercent: scrollProgress * 100,
            duration: 0.1,
            ease: 'none',
        });

        gsap.to(centerCard, {
            opacity: 1 - scrollProgress,
            scale: 1 - (scrollProgress * 0.05),
            duration: 0.1,
            ease: 'none',
        });

        if (scrollProgress >= 1) {
            overlay.style.pointerEvents = 'none';
            gsap.to(overlay, { opacity: 0, duration: 0.3 });
        }
    }, [scrollProgress]);

    // Handle click to trigger reveal
    const handleReveal = () => {
        if (hasRevealedRef.current) return;

        locomotiveRef.current?.destroy();
        hasRevealedRef.current = true;

        // Fade out particles immediately
        const particlesContainer = document.querySelector('.particles-container');
        if (particlesContainer) {
            gsap.to(particlesContainer, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        }

        // Fade out StarBorder glow
        const starBorderGlow = document.querySelector('.star-border-glow');
        if (starBorderGlow) {
            gsap.to(starBorderGlow, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.out',
            });
        }

        const tl = gsap.timeline({
            onComplete: () => {
                overlayRef.current.style.pointerEvents = 'none';
                onRevealComplete?.();
            }
        });

        tl.to(centerCardRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            ease: 'power2.inOut',
        }, 0);

        tl.to(leftCurtainRef.current, {
            xPercent: -100,
            duration: 2.5,
            ease: 'power2.inOut',
        }, 0.2);

        tl.to(rightCurtainRef.current, {
            xPercent: 100,
            duration: 2.5,
            ease: 'power2.inOut',
        }, 0.2);

        tl.to(overlayRef.current, {
            opacity: 0,
            duration: 0.4,
        }, 2.4);
    };


    return (
        <div
            ref={containerRef}
            data-scroll-container
            className="fixed inset-0 z-[1000] overflow-hidden"
        >
            {ENABLE_SPLASH_CURSOR && <SplashCursor />}

            {/* Scroll Progress Indicator */}
            <div className="scroll-indicator">
                <div
                    className="progress-bar"
                    style={{ width: `${scrollProgress * 100}%` }}
                />
            </div>

            <div
                ref={overlayRef}
                className="relative w-full h-screen flex items-center justify-center pt-8"
                data-scroll-section
                style={{ background: 'transparent' }}
            >
                {/* Floating Particles - Removed in favor of ParticlesBackground inside curtains */}
                {/* <Particles count={15} /> */}

                {/* Left Curtain - Full height, no header */}
                <div
                    ref={leftCurtainRef}
                    className="absolute top-0 left-0 w-[55%] h-full z-[5] will-change-transform origin-top curtain-depth"
                    data-scroll
                    data-scroll-speed="-2"
                    aria-hidden="true"
                >
                    {/* Enhanced velvet with animated lighting */}
                    <div className="absolute inset-0 curtain-fabric-enhanced" />

                    {/* Particles moving with curtain */}
                    <div className="absolute inset-0 opacity-60 mix-blend-screen">
                        <Particles
                            particleCount={150}
                            particleColors={['#fbbf24', '#d97706', '#ffffff']}
                            speed={0.2}
                        />
                    </div>

                    {/* Folds overlay */}
                    <div className="absolute inset-0 curtain-folds-left" />
                    {/* SVG Edge */}
                    <div className="absolute top-0 right-0 h-full">
                        <CurtainEdge />
                    </div>
                    {/* Gold trim */}
                    <div className="absolute top-0 right-[28px] w-2 h-full gold-trim shadow-[-2px_0_8px_rgba(212,175,55,0.5)]" />
                </div>

                {/* Right Curtain - Full height, no header */}
                <div
                    ref={rightCurtainRef}
                    className="absolute top-0 right-0 w-[55%] h-full z-[5] will-change-transform origin-top curtain-depth"
                    data-scroll
                    data-scroll-speed="2"
                    aria-hidden="true"
                >
                    {/* Enhanced velvet with animated lighting */}
                    <div className="absolute inset-0 curtain-fabric-enhanced" />

                    {/* Particles moving with curtain */}
                    <div className="absolute inset-0 opacity-60 mix-blend-screen">
                        <Particles
                            particleCount={150}
                            particleColors={['#fbbf24', '#d97706', '#ffffff']}
                            speed={0.2}
                        />
                    </div>

                    {/* Folds overlay */}
                    <div className="absolute inset-0 curtain-folds-right" />
                    {/* SVG Edge */}
                    <div className="absolute top-0 left-0 h-full">
                        <CurtainEdgeRight />
                    </div>
                    {/* Gold trim */}
                    <div className="absolute top-0 left-[28px] w-2 h-full gold-trim shadow-[2px_0_8px_rgba(212,175,55,0.5)]" />
                </div>

                {/* Center Content Card - Only Launch Button for V2 */}
                <StarBorder
                    as="div"
                    color="#fbbf24"
                    secondaryColor="#f59e0b"
                    speed="5s"
                    borderWidth="3px"
                    borderRadius="32px"
                    className="relative z-[10] w-auto mx-auto"
                >
                    <div
                        ref={centerCardRef}
                        onMouseMove={handleCardMouseMove}
                        onMouseLeave={handleCardMouseLeave}
                        className="p-8 md:p-12 glass-card text-center flex flex-col items-center relative"
                        style={{ transformStyle: 'preserve-3d' }}
                        role="dialog"
                        aria-label="e-Sanad Launch Screen"
                        aria-modal="true"
                    >
                        {/* Launch Button Only */}
                        <GlareHover
                            onClick={handleReveal}
                            width="auto"
                            height="auto"
                            background="linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fbbf24 100%)"
                            borderRadius="20px"
                            borderColor="rgba(245, 158, 11, 0.5)"
                            glareColor="#ffffff"
                            glareOpacity={0.5}
                            glareAngle={-45}
                            glareSize={200}
                            transitionDuration={600}
                            className="px-16 py-5 shadow-[0_10px_30px_rgba(245,158,11,0.3)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)]"
                        >
                            <span className="text-white text-2xl md:text-3xl font-bold tracking-wide">
                                Launch
                            </span>
                        </GlareHover>
                    </div>
                </StarBorder>
            </div>

            {/* Extra scroll space for locomotive */}
            <div data-scroll-section className="h-[50vh]" />
        </div>
    );
}
