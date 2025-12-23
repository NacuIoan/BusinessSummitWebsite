import { EVENT } from '../constants/event';

/**
 * Register page with Tally form embed
 * - Embedded Tally form
 * - Fallback link to open in new tab
 */
export default function Register() {
    return (
        <main className="min-h-screen bg-gray-light pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Register for {EVENT.name} {EVENT.year}
                    </h1>
                    <p className="text-lg text-gray-600">
                        Complete the form below to secure your spot at the summit.
                    </p>
                </div>

                {/* Tally Form Embed */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <iframe
                        src={EVENT.tallyFormUrl}
                        width="100%"
                        height="600"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Registration Form"
                        className="w-full"
                        loading="lazy"
                    />
                </div>

                {/* Fallback Link */}
                <div className="text-center mt-6">
                    <p className="text-gray-600 mb-2">
                        Having trouble with the form?
                    </p>
                    <a
                        href={EVENT.tallyFormUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                    >
                        Open registration form in a new tab
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                    </a>
                </div>

                {/* Event details reminder */}
                <div className="mt-12 p-6 bg-dark rounded-xl text-center">
                    <h3 className="text-lg font-semibold text-white mb-2">Event Details</h3>
                    <p className="text-gray-400">
                        📅 {EVENT.displayDate} &nbsp;|&nbsp; 📍 {EVENT.venue}, {EVENT.city}
                    </p>
                </div>
            </div>
        </main>
    );
}
