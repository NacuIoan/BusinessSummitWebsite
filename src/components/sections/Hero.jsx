import { useState, useEffect } from 'react';
import { EVENT } from '../../constants/event';
import CTAButton from '../common/CTAButton';

/**
 * Hero section with event info, countdown timer, and CTA
 * - Dark background with gradient overlay
 * - Countdown to event date (April 18, 2026)
 * - Shows "Event started" if date has passed
 */
export default function Hero() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    function calculateTimeLeft() {
        const eventDate = new Date(EVENT.date + 'T09:00:00');
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            return null; // Event has started
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return (
        <section
            id="about"
            className="relative min-h-screen flex items-center justify-center bg-dark overflow-hidden"
        >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6">
                    {EVENT.name}{' '}
                    <span className="text-accent">{EVENT.year}</span>
                </h1>

                {/* Tagline */}
                <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium mb-4">
                    Join the Future of Business
                </p>

                {/* Short pitch */}
                <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                    Connect with industry leaders, discover innovative strategies, and unlock new
                    opportunities at the most anticipated business event of the year.
                </p>

                {/* Event details */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span className="font-medium">{EVENT.displayDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="font-medium">{EVENT.venue}, {EVENT.city}</span>
                    </div>
                </div>

                {/* Countdown Timer */}
                <div className="mb-10">
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
                        Time left to register
                    </p>
                    {timeLeft ? (
                        <div className="flex flex-wrap justify-center gap-4">
                            <CountdownUnit value={timeLeft.days} label="Days" />
                            <CountdownUnit value={timeLeft.hours} label="Hours" />
                            <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                            <CountdownUnit value={timeLeft.seconds} label="Seconds" />
                        </div>
                    ) : (
                        <p className="text-xl text-accent font-semibold">
                            🎉 Event has started!
                        </p>
                    )}
                </div>

                {/* CTA Button */}
                <CTAButton to="/register" className="text-lg px-8 py-4">
                    {EVENT.ctaText}
                </CTAButton>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 14l-7 7-7-7M19 7l-7 7-7-7" />
                </svg>
            </div>
        </section>
    );
}

function CountdownUnit({ value, label }) {
    return (
        <div className="bg-dark-secondary border border-white/10 rounded-lg px-4 sm:px-6 py-3 min-w-[80px]">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                {label}
            </div>
        </div>
    );
}
