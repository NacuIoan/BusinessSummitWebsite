import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EVENT, NAV_LINKS } from '../../constants/event';
import CTAButton from './CTAButton';

/**
 * Navbar component with logo, navigation links, and CTA
 * - Shows anchor links on landing page
 * - Shows back to home on other pages
 * - Responsive with hamburger menu on mobile
 */
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isLandingPage = location.pathname === '/';

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-white font-bold text-xl md:text-2xl hover:text-accent transition-colors"
                    >
                        {EVENT.name}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {isLandingPage ? (
                            // Anchor links on landing page
                            NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                                >
                                    {link.label}
                                </a>
                            ))
                        ) : (
                            // Back to home on other pages
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                            >
                                ← Back to Home
                            </Link>
                        )}
                        <CTAButton to="/register" variant="small">
                            {EVENT.ctaText}
                        </CTAButton>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            {isLandingPage ? (
                                NAV_LINKS.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                                    >
                                        {link.label}
                                    </a>
                                ))
                            ) : (
                                <Link
                                    to="/"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                                >
                                    ← Back to Home
                                </Link>
                            )}
                            <CTAButton to="/register" onClick={() => setIsMenuOpen(false)}>
                                {EVENT.ctaText}
                            </CTAButton>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
