import { Link } from 'react-router-dom';
import logoBC from '../../assets/logo-bc.svg';
import { PARTNERS } from '../../constants/event';

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
                        Organized & supported by
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Brought to you by the student leaders in business innovation and community building.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {/* Business Club */}
                    <Link
                        to="/businessclub"
                        className="group flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-white transition-colors"
                    >
                        <div className="w-36 h-36">
                            <img src={logoBC} alt="Business Club" className="w-full h-full object-contain" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-accent transition-colors">
                                Business Club
                            </h3>
                            <p className="text-sm text-gray-500">Main Organizer</p>
                        </div>
                    </Link>


                </div>

                {/* Learn more link */}
                <div className="text-center mt-10 mb-16">
                    <Link
                        to="/businessclub"
                        className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                    >
                        Learn more about our community
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* Partners Carousel */}
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                            Our Partners
                        </h3>
                    </div>

                    <div className="partners-carousel">
                        <div className="partners-track">
                            {/* Render partners twice for seamless infinite loop */}
                            {[...PARTNERS, ...PARTNERS].map((partner, index) => {
                                const card = (
                                    <div className="bg-white rounded-xl p-6 flex flex-col items-center justify-center w-48 h-48 shrink-0 mx-3 border border-gray-100 hover:shadow-md transition-shadow">
                                        <div className="w-28 h-28 mb-3 flex items-center justify-center">
                                            {partner.image ? (
                                                <img src={partner.image} alt={partner.name} className="w-full h-full object-contain" />
                                            ) : (
                                                <svg className="opacity-30 w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-2a2 2 0 012-2h4a2 2 0 012 2v2" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="text-xs text-gray-400 font-medium text-center leading-tight">
                                            {partner.name}
                                        </span>
                                    </div>
                                );

                                return partner.url ? (
                                    <a
                                        key={`partner-${partner.id}-${index}`}
                                        href={partner.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0"
                                    >
                                        {card}
                                    </a>
                                ) : (
                                    <div key={`partner-${partner.id}-${index}`} className="shrink-0">
                                        {card}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
