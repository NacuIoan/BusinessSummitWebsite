// Event constants - centralized configuration
export const EVENT = {
    name: 'Business Summit',
    year: 2026,
    city: 'Bucharest',
    venue: 'Convention Center, Downtown',
    date: '2026-04-18',
    displayDate: 'April 18, 2026',
    ctaText: 'Reserve your seat',
    tallyFormUrl: 'https://tally.so/r/ODlrjp',
};

// Speakers data
export const SPEAKERS = [
    {
        id: 1,
        name: 'Alexandra Ionescu',
        role: 'CEO',
        company: 'TechVentures Global',
        bio: 'Leading digital transformation across 50+ enterprises with innovative tech solutions.',
        image: null,
    },
    {
        id: 2,
        name: 'Marcus Chen',
        role: 'Founder & Managing Partner',
        company: 'Horizon Capital',
        bio: 'Invested in over 100 startups with combined valuation exceeding $5 billion.',
        image: null,
    },
    {
        id: 3,
        name: 'Elena Dragomir',
        role: 'Chief Innovation Officer',
        company: 'FutureBank Romania',
        bio: 'Pioneering fintech solutions that have transformed banking for millions.',
        image: null,
    },
    {
        id: 4,
        name: 'David Okonkwo',
        role: 'VP of Strategy',
        company: 'GlobalScale Industries',
        bio: 'Scaling businesses from local markets to international success stories.',
        image: null,
    },
];

// Schedule data
export const SCHEDULE = [
    {
        time: '11:00 - 12:00',
        title: 'Registration',
        description:
            'Check-in, pick up your bracelet, and connect with fellow attendees over coffee.',
        tags: ['Networking'],
    },
    {
        time: '12:30 - 13:20',
        title: 'Opening Panel: AI in Action',
        description:
            'Move beyond the buzzwords to see how AI actually works in practice.',
        tags: ['Panel', 'AI'],
    },
    {
        time: '13:20 - 13:35',
        title: 'Keynote: Agents over Employees',
        description:
            'Learn how to build and manage an entire department using specialized AI agents.',
    tags: ['Keynote', 'AI'],
    },
    {
        time: '13:40 - 14:25',
        title: '35 Points & Networking Lunch',
        description: '',
        tags: ['Networking', 'Lunch'],
    },
    {
        time: '14:30 - 15:15',
        title: 'Second Panel: Beyond the Culture',
        description:
            'Founders and investors share the raw truth about raising capital and scaling beyond the first round.',
        tags: ['Panel', 'Growth', 'Investment'],
    },
    {
        time: '15:15 - 15:30',
        title: 'Keynote: Smart Scaling',
        description:
        'Join Termene.ro to see how real-world data can stress-test your business model before you spend a dime.',
    tags: ['Keynote', 'Growth'],
    },
    {
    time: '15:35 - 15:50',
    title: 'Short Meetings: A Different Type of Networking',
    description:
        'Rotational networking designed to help you meet as many relevant people as possible in 15 minutes.',
    tags: ['Networking'],
    },
    {
        time: '15:55 - 17:00',
        title: 'Late Night Business Talks',
        description:
            'Relaxed talks and untold stories. A fun segment to discover the human side of success and the failures that shaped it.',
        tags: ['Talks', 'Community'],
    },
    {
        time: '17:00 - 17:10',
        title: 'Closing Remarks',
        description:
            'A final thank you to the community and a brief word on the vision behind the Summit and what’s next.',
    tags: ['Closing'],
    },
];


// Why Attend features
export const FEATURES = [
    {
        icon: 'target',
        title: 'The Clarity You need',
        description: 'Get direct access to the playbooks of market experts. Understand what works in 2026 and how you can apply it to your own journey.',
    },
    {
        icon: 'users',
        title: 'Networking',
        description: 'Connect with those who share your ambition and build the circle you need.',
    },
    {
        icon: 'lightbulb',
        title: 'Perspective',
        description: 'See where things are going. Get a clear look at how the world is changing and what it means for you.',
    },
    {
        icon: 'trending-up',
        title: 'Growth',
        description: 'Find opportunities to scale your business and accelerate success.',
    },
];

// Navigation links
export const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Organizers', href: '#organizers' },
];

// Social media links - update these with your actual URLs
export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/businesssummit',
    tiktok: 'https://tiktok.com/@businesssummit',
    linkedin: 'https://linkedin.com/company/businesssummit',
    instagram: 'https://instagram.com/businesssummit',
};
