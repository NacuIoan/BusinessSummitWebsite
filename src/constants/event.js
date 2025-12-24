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
        time: '8:00 AM - 9:00 AM',
        title: 'Registration & Networking Breakfast',
        description: 'Check-in, pick up your badge, and connect with fellow attendees over coffee.',
        tags: ['Networking'],
    },
    {
        time: '9:00 AM - 9:30 AM',
        title: 'Opening Keynote: The Future of Business',
        description: 'Setting the stage for a day of innovation, insights, and inspiration.',
        tags: ['Keynote'],
    },
    {
        time: '9:45 AM - 10:45 AM',
        title: 'Panel: Digital Transformation in 2026',
        description: 'Industry leaders discuss the latest trends shaping the digital landscape.',
        tags: ['Panel', 'Technology'],
    },
    {
        time: '11:00 AM - 12:00 PM',
        title: 'Workshop: Strategic Leadership',
        description: 'Hands-on session on developing leadership skills for the modern era.',
        tags: ['Workshop', 'Leadership'],
    },
    {
        time: '12:00 PM - 1:30 PM',
        title: 'Networking Lunch',
        description: 'Enjoy a curated lunch experience while building valuable connections.',
        tags: ['Networking'],
    },
    {
        time: '1:30 PM - 2:30 PM',
        title: 'Fireside Chat: Scaling Your Business',
        description: 'An intimate conversation about growth strategies and overcoming challenges.',
        tags: ['Fireside Chat', 'Growth'],
    },
    {
        time: '2:45 PM - 3:45 PM',
        title: 'Panel: Innovation & Investment',
        description: 'VCs and founders share insights on what makes a startup investment-ready.',
        tags: ['Panel', 'Investment'],
    },
    {
        time: '4:00 PM - 4:30 PM',
        title: 'Closing Keynote & Awards',
        description: 'Wrapping up with key takeaways and recognizing outstanding achievements.',
        tags: ['Keynote'],
    },
    {
        time: '4:30 PM - 6:00 PM',
        title: 'Cocktail Hour & Networking',
        description: 'End the day with drinks, conversations, and new partnerships.',
        tags: ['Networking'],
    },
];

// Why Attend features
export const FEATURES = [
    {
        icon: 'target',
        title: 'Strategic Insights',
        description: 'Gain actionable strategies from industry leaders and market experts.',
    },
    {
        icon: 'users',
        title: 'Networking',
        description: 'Connect with 500+ executives, entrepreneurs, and innovators.',
    },
    {
        icon: 'lightbulb',
        title: 'Innovation',
        description: 'Discover cutting-edge technologies and emerging business trends.',
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
