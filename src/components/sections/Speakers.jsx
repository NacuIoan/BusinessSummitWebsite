import { SPEAKERS } from '../../constants/event';

/**
 * Speakers section with speaker cards
 * - Grid layout with circular headshots
 * - Name, role, company, and bio
 * - Social media icons
 */
export default function Speakers() {
    return (
        <section id="speakers" className="py-16 md:py-24 bg-gray-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Featured Speakers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Learn from industry pioneers and thought leaders shaping the future of business.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {SPEAKERS.map((speaker) => (
                        <SpeakerCard key={speaker.id} {...speaker} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SpeakerCard({ name, role, company, bio }) {
    // Generate initials for placeholder avatar
    const initials = name
        .split(' ')
        .map((n) => n[0])
        .join('');

    return (
        <div className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            {/* Avatar placeholder */}
            <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-accent to-accent-dark rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{initials}</span>
            </div>

            {/* Name and role */}
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
            <p className="text-sm text-accent font-medium mb-1">{role}</p>
            <p className="text-sm text-gray-500 mb-3">{company}</p>

            {/* Bio */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{bio}</p>

            {/* Social links */}
            <div className="flex justify-center gap-3">
                <SocialLink href="#" label="LinkedIn">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                    </svg>
                </SocialLink>
                <SocialLink href="#" label="TikTok">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                </SocialLink>
            </div>
        </div>
    );
}

function SocialLink({ href, label, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all"
        >
            {children}
        </a>
    );
}
