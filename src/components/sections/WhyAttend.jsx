import { FEATURES } from '../../constants/event';

/**
 * Why Attend section with feature cards
 * - Grid of 4 feature cards
 * - Icons with light orange backgrounds
 */
export default function WhyAttend() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Why Attend?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover what makes Business Summit the must-attend event for forward-thinking professionals.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {FEATURES.map((feature) => (
                        <FeatureCard key={feature.title} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-gray-light rounded-2xl p-6 md:p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent-light rounded-full flex items-center justify-center">
                <FeatureIcon name={icon} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function FeatureIcon({ name }) {
    const icons = {
        target: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
            </svg>
        ),
        users: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        lightbulb: (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4.6 12.32A3 3 0 0 0 6 17h12a3 3 0 0 0-1.4-2.68A7 7 0 0 0 12 2z" />
            </svg>
        ),
        'trending-up': (
            <svg className="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
            </svg>
        ),
    };

    return icons[name] || null;
}
