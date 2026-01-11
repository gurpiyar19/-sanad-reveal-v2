import { useEffect } from 'react';
import Particles from './ParticlesBackground';

const base = import.meta.env.BASE_URL;

export default function LandingPage() {
    // Add smooth scroll behavior
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
            {/* Warm Cream/White Gradient Background - No Sky Blue */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, #fffdf7 0%, #fefcf3 30%, #fef9e7 60%, #fef3c7 100%)',
                }}
            />

            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(251, 191, 36, 0.08) 0%, transparent 70%)',
                }}
            />

            {/* Sparkles / Particles */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Particles
                    particleCount={80}
                    particleColors={['#fbbf24', '#f59e0b', '#d97706']}
                    speed={0.05}
                    particleBaseSize={60}
                />
            </div>

            {/* Main Content Card - Revealed Behind Curtains */}
            <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 py-4 text-center">

                {/* Header Row: Logo - Board Name - Logo */}
                <div className="flex items-center justify-between mb-4">
                    {/* Left Logo */}
                    <img
                        src={`${base}logos/punjab-govt.png`}
                        alt="Government of Punjab"
                        className="h-16 md:h-20 w-auto object-contain"
                    />

                    {/* Center - Board Name in Punjabi */}
                    <div className="flex-grow px-4">
                        <h1 className="font-punjabi text-gray-900 text-xl md:text-2xl font-bold">
                            ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ
                        </h1>
                    </div>

                    {/* Right Logo */}
                    <img
                        src={`${base}logos/pseb.png`}
                        alt="Punjab School Education Board"
                        className="h-16 md:h-20 w-auto object-contain"
                    />
                </div>

                {/* Digital verification text */}
                <p className="text-gray-800 text-sm md:text-base font-medium leading-tight mb-4">
                    Digital verification of PSEB academic certificates
                    <br />through E-Sanad portal for use abroad
                </p>

                {/* Punjabi Inauguration Text */}
                <p className="font-punjabi text-gray-900 text-2xl md:text-3xl font-bold mt-4 mb-1">
                    ਦਾ ਉਦਘਾਟਨ
                </p>

                {/* "ਵੱਲੋਂ" in small letters */}
                <p className="font-punjabi text-gray-600 text-sm md:text-base font-medium mb-3">
                    ਵੱਲੋਂ
                </p>

                {/* Minister's Name - Gold/Amber */}
                <p className="font-punjabi text-[#d97706] text-lg md:text-2xl font-bold mb-0">
                    ਸ. ਹਰਜੋਤ ਸਿੰਘ ਬੈਂਸ ਜੀ
                </p>

                {/* Minister's Title */}
                <p className="font-punjabi text-gray-800 text-sm md:text-base font-medium mb-4">
                    ਸਿੱਖਿਆ ਮੰਤਰੀ, ਪੰਜਾਬ ਸਰਕਾਰ
                </p>

                {/* Chairman's Name - Gold/Amber (same style as Minister) */}
                <p className="font-punjabi text-[#d97706] text-lg md:text-2xl font-bold mb-0">
                    ਡਾ. ਅਮਰਪਾਲ ਸਿੰਘ, I.A.S. (Retd.)
                </p>

                {/* Chairman's Title */}
                <p className="font-punjabi text-gray-800 text-sm md:text-base font-medium mb-5">
                    ਚੇਅਰਮੈਨ ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ
                </p>

                {/* Date in Punjabi */}
                <p className="font-punjabi text-gray-700 text-base md:text-lg font-semibold mb-1">
                    ਸੋਮਵਾਰ, 12 ਜਨਵਰੀ 2026
                </p>

                {/* E-Sanad */}
                <p className="text-gray-900 text-xl md:text-2xl font-bold mb-6">
                    E-Sanad
                </p>

                {/* Footer: NIC Logo + Initiative Text */}
                <div className="w-full flex items-center justify-center gap-4 border-t border-gray-200 pt-4">
                    <img
                        src={`${base}logos/nic.png`}
                        alt="NIC"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                    <span className="text-gray-700 text-xs md:text-sm font-medium">
                        An initiative of Ministry of External Affairs
                    </span>
                </div>

                {/* Minimal Link to PSEB e-Sanad */}
                <div className="mt-6">
                    <a
                        href="https://www.pseb.ac.in/esanad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 text-sm underline underline-offset-2 transition-colors"
                    >
                        Visit e-Sanad Portal →
                    </a>
                </div>
            </div>
        </main>
    );
}
