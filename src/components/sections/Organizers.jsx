import { Link } from 'react-router-dom';

/**
 * Organizers section
 * - Features Business Club and partner logos
 * - Link to /businessclub page
 */
export default function Organizers() {
    return (
        <section id="organizers" className="py-16 md:py-24 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Organized & Hosted By
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Brought to you by the leaders in business innovation and community building.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {/* Business Club */}
                    <Link
                        to="/businessclub"
                        className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white transition-colors"
                    >
                        <div className="w-24 h-24 bg-dark rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                            <span className="text-2xl font-bold text-white">BC</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                                Business Club
                            </h3>
                            <p className="text-sm text-gray-500">Main Organizer</p>
                        </div>
                    </Link>

                    {/* Partner placeholder */}
                    <div className="flex flex-col items-center gap-4 p-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-2xl flex items-center justify-center">
                            <span className="text-2xl font-bold text-gray-400">ST</span>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900">StartUp Hub</h3>
                            <p className="text-sm text-gray-500">Partner</p>
                        </div>
                    </div>
                </div>

                {/* Learn more link */}
                <div className="text-center mt-10">
                    <Link
                        to="/businessclub"
                        className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                    >
                        Learn more about our organizers
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
