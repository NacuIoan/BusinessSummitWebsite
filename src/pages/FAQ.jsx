import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * FAQ page with accordion-style questions
 */
export default function FAQ() {
    return (
        <main className="min-h-screen bg-white pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600">
                        Find answers to common questions about Business Summit.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    <AccordionItem
                        question="When and where is Business Summit 2026?"
                        answer="Business Summit 2026 will take place on April 18, 2026 at the Convention Center in Downtown Bucharest. Doors open at 8:00 AM for registration and networking breakfast."
                    />
                    <AccordionItem
                        question="How do I register for the event?"
                        answer="You can register directly on our website by clicking the 'Reserve your seat' button. You'll be directed to our registration form where you can provide your details and secure your spot."
                    />
                    <AccordionItem
                        question="What is included in the registration?"
                        answer="Your registration includes access to all keynotes, panels, and workshops throughout the day, as well as networking breakfast, lunch, and the closing cocktail hour. You'll also receive event materials and access to exclusive networking opportunities."
                    />
                    <AccordionItem
                        question="Is there a dress code?"
                        answer="We recommend business casual attire. The event is a professional networking opportunity, so dress to impress while remaining comfortable throughout the day."
                    />
                    <AccordionItem
                        question="Can I get a refund if I can't attend?"
                        answer="Refund policies depend on when you request the cancellation. Please contact us at info@businesssummit.com for specific details about your registration and refund eligibility."
                    />
                </div>

                {/* Back button */}
                <div className="text-center mt-12">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold rounded-lg px-8 py-3 hover:bg-accent-dark transition-colors"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}

function AccordionItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 text-left flex items-center justify-between bg-gray-light hover:bg-gray-200 transition-colors"
            >
                <span className="text-lg font-medium text-gray-900">{question}</span>
                <svg
                    className={`w-5 h-5 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="M6 9l6 6 6-6" />
                </svg>
            </button>
            {isOpen && (
                <div className="px-6 py-5 bg-white">
                    <p className="text-gray-600 leading-relaxed">{answer}</p>
                </div>
            )}
        </div>
    );
}
