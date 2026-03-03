import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * FAQ page with accordion-style questions
 */
export default function FAQ() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        question="How do I get a seat?"
                        answer="The process is simple: just fill out a 2-minute form. We don’t care about your CV; we just want to see that you’re actually interested in tech or building something. If you're a good fit, you'll receive your ticket confirmation via email shortly after."
                    />
                    <AccordionItem
                        question="Is there a dress code?"
                        answer="Business Casual. Wear something you feel comfortable in for a full day of networking, but professional enough to close a deal. No suits required, but leave the hoodies at home."
                    />
                    <AccordionItem
                        question="How do I get to the venue? "
                        answer="Business Summit takes place at One United Cotroceni, easily accessible by  metro, or ride-sharing. The nearest metro stations are Academia Militară (5–7 min walk) and Politehnica (10–15 min walk)."
                    />
                    <AccordionItem
                        question="How do I find the right people to talk to?"
                        answer="We use color-coded wristbands to make networking simple. Your color tells everyone your role immediately: Black is for Founders building projects, White is for Decision Makers and investors, and Orange is for Students looking to connect. This way, you skip the small talk and get straight to the point."
                    />
                    <AccordionItem
                        question="Is there parking available?"
                        answer="There is no dedicated public parking available at the venue, and street parking in the area is very limited. We strongly recommend using public transport or ride-sharing services to ensure a smooth arrival."
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
