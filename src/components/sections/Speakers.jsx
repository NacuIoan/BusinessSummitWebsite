import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { SPEAKERS } from '../../constants/event';

/**
 * Speakers section – dark gradient background with horizontally
 * scrollable speaker cards and a "View All Speakers" CTA.
 */
export default function Speakers() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const amount = 300;
        scrollRef.current.scrollBy({
            left: direction === 'left' ? -amount : amount,
            behavior: 'smooth',
        });
    };

    return (
        <section
            id="speakers"
            className="py-16 md:py-24 relative overflow-hidden bg-gray-light"
        >


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Speakers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Meet the industry experts and thought leaders who will share their knowledge and insights
                    </p>
                </div>

                {/* Scrollable speaker cards */}
                <div className="relative">
                    {/* Left arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
                        aria-label="Scroll left"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" />
                        </svg>
                    </button>

                    <div ref={scrollRef} className="speakers-scroll gap-5 px-2 py-4">
                        {SPEAKERS.map((speaker) => (
                            <SpeakerCard key={speaker.id} {...speaker} />
                        ))}
                    </div>

                    {/* Right arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-colors"
                        aria-label="Scroll right"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </button>
                </div>

                {/* View All Speakers button */}
                <div className="text-center mt-10">
                    <Link
                        to="/speakers"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-dark transition-colors"
                    >
                        View All Speakers
                    </Link>
                </div>
            </div>
        </section>
    );
}

function SpeakerCard({ name, role, company, image }) {
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <div className="w-52 md:w-56 group">
            {/* Photo area */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-3 bg-gray-100 border border-gray-200 group-hover:border-accent/40 transition-colors">
                {image ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent/30 to-accent-dark/30">
                        <span className="text-4xl font-bold text-white/60">{initials}</span>
                    </div>
                )}
            </div>
            {/* Name + role */}
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-accent transition-colors">
                {name}
            </h3>
            <p className="text-sm text-gray-500 mt-0.5">
                {role} <span className="text-accent">@{company}</span>
            </p>
        </div>
    );
}
