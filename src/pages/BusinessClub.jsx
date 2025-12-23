import { Link } from 'react-router-dom';
import CTAButton from '../components/common/CTAButton';
import { EVENT } from '../constants/event';

/**
 * BusinessClub page - About the organizers
 * - Mission statement
 * - Why this summit
 * - Contact/social placeholders
 * - CTA to register
 */
export default function BusinessClub() {
    return (
        <main className="min-h-screen bg-white pt-24">
            {/* Hero section */}
            <section className="bg-dark py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-accent rounded-2xl flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">BC</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Business Club
                    </h1>
                    <p className="text-xl text-gray-400">
                        Empowering entrepreneurs and leaders to shape the future
                    </p>
                </div>
            </section>

            {/* About section */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Business Club is a thriving community of entrepreneurs, executives, and innovators
                            dedicated to fostering meaningful connections and driving business excellence.
                            Founded with the vision of creating a platform where ambitious professionals can
                            learn, grow, and collaborate, we have become the leading business network in the region.
                        </p>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                            Why We Created Business Summit
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            {EVENT.name} was born from our community&apos;s desire for a premium,
                            in-person experience that brings together the brightest minds in business.
                            After years of successful networking events and workshops, we recognized the need
                            for a flagship annual conference that would:
                        </p>
                        <ul className="text-gray-600 space-y-3 mb-6">
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                Showcase thought leadership and cutting-edge business strategies
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                Create high-value networking opportunities for our members
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                Inspire the next generation of business leaders
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent font-bold">•</span>
                                Celebrate innovation and entrepreneurial spirit
                            </li>
                        </ul>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 mt-12">
                            Join Our Community
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Whether you&apos;re a seasoned executive or an aspiring entrepreneur,
                            Business Club offers resources, connections, and opportunities to accelerate
                            your professional journey. Join thousands of members who are already part of
                            our growing community.
                        </p>
                    </div>

                    {/* Contact info */}
                    <div className="mt-12 p-8 bg-gray-light rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Email</p>
                                    <a href="mailto:hello@businessclub.com" className="text-gray-900 font-medium hover:text-accent transition-colors">
                                        hello@businessclub.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="text-gray-900 font-medium">{EVENT.city}, Romania</p>
                                </div>
                            </div>
                        </div>

                        {/* Social links */}
                        <div className="mt-8 flex gap-4">
                            <SocialLink href="#" label="Facebook" />
                            <SocialLink href="#" label="LinkedIn" />
                            <SocialLink href="#" label="Instagram" />
                            <SocialLink href="#" label="Twitter" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Join Us at {EVENT.name} {EVENT.year}
                    </h2>
                    <p className="text-gray-400 mb-8">
                        Experience the best of what Business Club has to offer.
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

function SocialLink({ href, label }) {
    const icons = {
        Facebook: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" />
            </svg>
        ),
        LinkedIn: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
            </svg>
        ),
        Instagram: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <path d="M17.5 6.5h.01" />
            </svg>
        ),
        Twitter: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
            </svg>
        ),
    };

    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-accent hover:text-white transition-all"
        >
            {icons[label]}
        </a>
    );
}
