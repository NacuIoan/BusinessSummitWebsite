import Hero from '../components/sections/Hero';
import WhyAttend from '../components/sections/WhyAttend';
import Speakers from '../components/sections/Speakers';
import Schedule from '../components/sections/Schedule';
import Organizers from '../components/sections/Organizers';
import CTAButton from '../components/common/CTAButton';
import { EVENT } from '../constants/event';

/**
 * Landing page - assembles all sections
 * Order: Hero → Organizers → WhyAttend → Speakers → Schedule → Final CTA
 */
export default function Landing() {
    return (
        <main>
            <Hero />
            <Organizers />
            <WhyAttend />
            <Speakers />
            <Schedule />

            {/* Final CTA Section */}
            <section className="py-16 md:py-24 bg-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Join Us?
                    </h2>
                    <p className="text-lg text-gray-400 mb-8">
                        Don&apos;t miss your chance to be part of the most impactful business event of 2026.
                    </p>
                    <CTAButton to="/register" className="text-lg px-8 py-4">
                        {EVENT.ctaText}
                    </CTAButton>
                </div>
            </section>
        </main>
    );
}
