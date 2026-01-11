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
            {/* Warm Cream/White Gradient Background */}
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

            {/* Sparkles / Particles - Same as curtains */}
            <div className="absolute inset-0 z-0 opacity-50 mix-blend-multiply">
                <Particles
                    particleCount={100}
                    particleColors={['#fbbf24', '#d97706', '#f59e0b']}
                    speed={0.15}
                    particleBaseSize={80}
                />
            </div>

            {/* Main Content Card - UPSCALED 115% */}
            <div
                className="relative z-10 w-full max-w-[1000px] mx-auto px-8 py-6 text-center"
                style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}
            >

                {/* Header Row: Logos closer together with Board Name */}
                <div className="flex items-center justify-center gap-8 md:gap-12 mb-6">
                    {/* Left Logo */}
                    <img
                        src={`${base}logos/punjab-govt.png`}
                        alt="Government of Punjab"
                        className="h-18 md:h-24 w-auto object-contain"
                    />

                    {/* Center - Board Name in Punjabi */}
                    <h1 className="font-punjabi text-gray-900 text-xl md:text-3xl font-bold">
                        ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ
                    </h1>

                    {/* Right Logo */}
                    <img
                        src={`${base}logos/pseb.png`}
                        alt="Punjab School Education Board"
                        className="h-18 md:h-24 w-auto object-contain"
                    />
                </div>

                {/* Digital verification text */}
                <p className="text-gray-800 text-base md:text-lg font-medium leading-tight mb-5">
                    Digital verification of PSEB academic certificates
                    <br />through E-Sanad portal for use abroad
                </p>

                {/* Punjabi Inauguration Text */}
                <p className="font-punjabi text-gray-900 text-3xl md:text-4xl font-bold mt-4 mb-2">
                    ਦਾ ਉਦਘਾਟਨ
                </p>

                {/* "ਵੱਲੋਂ" in small letters */}
                <p className="font-punjabi text-gray-600 text-sm md:text-base font-medium mb-3">
                    ਵੱਲੋਂ
                </p>

                {/* Minister's Name - Gold/Amber */}
                <p className="font-punjabi text-[#d97706] text-xl md:text-2xl font-bold mb-1">
                    ਸ. ਹਰਜੋਤ ਸਿੰਘ ਬੈਂਸ ਜੀ
                </p>

                {/* Minister's Title */}
                <p className="font-punjabi text-gray-800 text-sm md:text-base font-medium mb-4">
                    ਸਿੱਖਿਆ ਮੰਤਰੀ, ਪੰਜਾਬ ਸਰਕਾਰ
                </p>

                {/* Chairman's Name - Gold/Amber */}
                <p className="font-punjabi text-[#d97706] text-xl md:text-2xl font-bold mb-1">
                    ਡਾ. ਅਮਰਪਾਲ ਸਿੰਘ ਜੀ
                </p>

                {/* Chairman's Title */}
                <p className="font-punjabi text-gray-800 text-sm md:text-base font-medium mb-5">
                    ਚੇਅਰਮੈਨ, ਪੰਜਾਬ ਸਕੂਲ ਸਿੱਖਿਆ ਬੋਰਡ
                </p>

                {/* Date in Punjabi */}
                <p className="font-punjabi text-gray-700 text-base md:text-lg font-semibold mb-2">
                    ਸੋਮਵਾਰ, 12 ਜਨਵਰੀ 2026
                </p>

                {/* E-Sanad - Now clickable link */}
                <a
                    href="https://www.pseb.ac.in/esanad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-900 text-xl md:text-2xl font-bold mb-6 hover:text-[#d97706] transition-colors cursor-pointer"
                >
                    E-Sanad Services for PSEB
                </a>

                {/* Footer: NIC Logo + Initiative Text - Made smaller and subtle */}
                <div className="w-full flex items-center justify-center gap-4 border-t border-gray-200/50 pt-4 opacity-60">
                    <img
                        src={`${base}logos/nic.png`}
                        alt="NIC"
                        className="h-8 md:h-10 w-auto object-contain"
                    />
                    <span className="text-gray-500 text-xs md:text-sm font-medium">
                        An initiative of Ministry of External Affairs
                    </span>
                </div>
            </div>
        </main>
    );
}
