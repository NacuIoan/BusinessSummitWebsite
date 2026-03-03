import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SPEAKERS, EVENT } from '../constants/event';
import CTAButton from '../components/common/CTAButton';

/**
 * SpeakersPage – /speakers route
 * Full speaker profiles with photos, bios, topics, and social links.
 */
export default function SpeakersPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section
                className="pt-24 md:pt-28 pb-16 md:pb-24 relative overflow-hidden"
                style={{
                    background:
                        'linear-gradient(135deg, #0A0A0A 0%, #1a0e05 30%, #2d1608 55%, #1a0e05 80%, #0A0A0A 100%)',
                }}
            >
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none"
                    style={{
                        background:
                            'radial-gradient(ellipse, #F2500D 0%, transparent 70%)',
                    }}
                />
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Our Speakers
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        The industry experts and thought leaders sharing their knowledge at {EVENT.name} {EVENT.year}.
                    </p>
                </div>
            </section>

            {/* Speakers grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {SPEAKERS.map((speaker) => (
                            <SpeakerProfile key={speaker.id} speaker={speaker} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Don't miss their insights
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Reserve your seat at {EVENT.name} {EVENT.year} and learn directly from the best.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <CTAButton to="/register">
                            {EVENT.ctaText}
                        </CTAButton>
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white border-2 border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

function SpeakerProfile({ speaker }) {
    const { name, role, company, bio, longBio, image, topics, linkedin, tiktok } = speaker;
    const initials = name.split(' ').map((n) => n[0]).join('');
    const displayBio = longBio || bio;

    return (
        <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-gray-light hover:shadow-lg transition-shadow">
            {/* Photo */}
            <div className="w-full sm:w-44 shrink-0">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-200">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-accent to-accent-dark">
                            <span className="text-4xl font-bold text-white">{initials}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-sm text-accent font-medium mb-1">{role}</p>
                <p className="text-sm text-gray-500 mb-3">@{company}</p>

                {/* Topics */}
                {topics && topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {topics.map((topic) => (
                            <span
                                key={topic}
                                className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full font-medium"
                            >
                                {topic}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-sm text-gray-600 leading-relaxed mb-4">{displayBio}</p>

                {/* Social links */}
                <div className="flex gap-3">
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                            </svg>
                        </a>
                    )}
                    {tiktok && (
                        <a
                            href={tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
