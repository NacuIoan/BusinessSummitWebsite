import { EVENT } from '../constants/event';

/**
 * Register page with Tally form embed
 * - Fullscreen-like Tally form
 * - Minimal header
 */
export default function Register() {
    return (
        <main className="min-h-screen bg-white pt-20">
            {/* Minimal Header */}
            <div className="bg-dark py-6">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-white">
                        Register for {EVENT.name} {EVENT.year}
                    </h1>
                    <p className="text-gray-400 mt-1">
                        📅 {EVENT.displayDate} &nbsp;•&nbsp; 📍 {EVENT.city}
                    </p>
                </div>
            </div>

            {/* Fullscreen Tally Form Embed */}
            <div className="w-full" style={{ height: 'calc(100vh - 140px)' }}>
                <iframe
                    src={EVENT.tallyFormUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title="Registration Form"
                    className="w-full h-full"
                    loading="lazy"
                />
            </div>

            {/* Fallback Link - fixed at bottom */}
            <div className="bg-gray-light py-3 text-center border-t border-gray-200">
                <a
                    href={EVENT.tallyFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:underline"
                >
                    Open form in new tab
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                </a>
            </div>
        </main>
    );
}
