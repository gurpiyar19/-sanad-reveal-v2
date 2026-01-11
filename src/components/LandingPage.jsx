import { useEffect } from 'react';

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

            {/* Main Content Card - Revealed Behind Curtains */}
            <div className="relative z-10 w-full max-w-[900px] mx-auto px-6 py-8 text-center">

                {/* Header Row: Logo - Content - Logo */}
                <div className="flex items-start justify-between mb-6">
                    {/* Left Logo */}
                    <img
                        src={`${base}logos/punjab-govt.png`}
                        alt="Government of Punjab"
                        className="h-20 md:h-24 w-auto object-contain"
                    />

                    {/* Center Content */}
                    <div className="flex-grow px-4">
                        <h2 className="text-gray-900 text-base md:text-lg font-bold leading-tight text-center mb-4">
                            Digital verification of PSEB academic certificates
                            <br />through E-Sanad portal for use abroad
                        </h2>
                    </div>

                    {/* Right Logo */}
                    <img
                        src={`${base}logos/pseb.png`}
                        alt="Punjab School Education Board"
                        className="h-20 md:h-24 w-auto object-contain"
                    />
                </div>

                {/* Punjabi Inauguration Text - Updated */}
                <p className="font-punjabi text-gray-900 text-2xl md:text-4xl font-bold mt-6 mb-2">
                    ਦਾ ਉਦਘਾਟਨ
                </p>

                {/* "ਵੱਲੋਂ" in small letters */}
                <p className="font-punjabi text-gray-600 text-base md:text-lg font-medium mb-4">
                    ਵੱਲੋਂ
                </p>

                {/* Minister's Name - Gold/Amber */}
                <p className="font-punjabi text-[#d97706] text-xl md:text-3xl font-bold mb-1">
                    ਸ. ਹਰਜੋਤ ਸਿੰਘ ਬੈਂਸ ਜੀ
                </p>

                {/* Minister's Title */}
                <p className="font-punjabi text-gray-800 text-base md:text-xl font-medium mb-8">
                    ਸਿੱਖਿਆ ਮੰਤਰੀ, ਪੰਜਾਬ ਸਰਕਾਰ
                </p>

                {/* Date in Punjabi */}
                <p className="font-punjabi text-gray-700 text-lg md:text-xl font-semibold mb-2">
                    ਸੋਮਵਾਰ, 12 ਜਨਵਰੀ 2026
                </p>

                {/* E-Sanad */}
                <p className="text-gray-900 text-2xl md:text-3xl font-bold mb-10">
                    E-Sanad
                </p>

                {/* Footer: NIC Logo + Initiative Text */}
                <div className="w-full flex items-center justify-center gap-6 border-t border-gray-200 pt-8">
                    <img
                        src={`${base}logos/nic.png`}
                        alt="NIC"
                        className="h-12 md:h-14 w-auto object-contain"
                    />
                    <span className="text-gray-700 text-sm md:text-base font-medium">
                        An initiative of Ministry of External Affairs
                    </span>
                </div>

                {/* Minimal Link to PSEB e-Sanad */}
                <div className="mt-10">
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
