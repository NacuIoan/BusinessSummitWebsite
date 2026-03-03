//Imports
//Termene.ro, KitKat, LLLDental, VIP, FWDPrint, EA, Launch
//Romania, Start-up Cafe, IAF, Business Podcast Room 
//SeedBlink, One United Properties, VSFA, Idea Morph
//MyIdEA, Bursa.ro, Oveit, Exminds, Innovation Labs
import logoTermene from '../assets/logoTermene.svg'
import logoKitKat from '../assets/logoKitkat.png'
import logoLLLDental from '../assets/logoLLLDental.svg'
import logoVIP from '../assets/logoVIPnegru.svg'
import logoFWDPrint from '../assets/logoFWDPrint.svg'
import logoEA from '../assets/logoEA.png'
import logoLaunchRomania from '../assets/logoLaunch.webp'
import logoStartUpCafe from '../assets/logoStartUpCafe.svg'
import logoIAF from '../assets/logoIAF.png'
import logoBusinessPodcastRoom from '../assets/logoBusinessRoom.png'
import logoSeedBlink from '../assets/logoSeedBlink.svg'
//import logoOneUnitedProperties from '../assets/logoOneUnitedProperties.svg'
import logoVSFA from '../assets/logoVSFA.svg'
import logoIdeaMorph from '../assets/logoIdeaMorph.png'
import logoMyIdEA from '../assets/logoMyIdEA.png'
import logoBursa from '../assets/logoBursa.svg'
//import logoOveit from '../assets/logoOveit.svg'
import logoExminds from '../assets/logoExminds.png'
import logoILabs from '../assets/logoILabs.svg'

//logo for the header
import logoBSU from '../assets/logoBSU-header.svg'


// Event constants - centralized configuration
export const EVENT = {
    name: 'Business Summit',
    year: 2026,
    city: 'Bucharest',
    venue: 'One Cotroceni Park',
    date: '2026-04-18',
    displayDate: 'April 18, 2026',
    ctaText: 'Reserve your seat',
    tallyFormUrl: 'https://tally.so/r/ODlrjp',
    venueMapUrl: 'https://maps.app.goo.gl/WcEMtRzPUv14YYyMA',
};

// Speakers data
export const SPEAKERS = [
    {
        id: 1,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 2,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 3,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 4,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 5,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 6,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 7,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 8,
        name: 'TBD',
        role: 'TBD',
        company: 'TBD',
        bio: 'TBD',
        image: null,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
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
        title: 'Networking Lunch',
        description: '',
        tags: ['Networking', 'Lunch'],
    },
    {
        time: '14:30 - 14:45',
        title: '35 Points',
        description: '',
        tags: ['Networking'],
    },
    {
        time: '14:50 - 15:30',
        title: 'Second Panel: Beyond the Culture',
        description:
            'Founders and investors share the raw truth about raising capital and scaling beyond the first round.',
        tags: ['Panel', 'Growth', 'Investment'],
    },
    {
        time: '15:30 - 15:45',
        title: 'Keynote: Smart Scaling',
        description:
        'Join Termene.ro to see how real-world data can stress-test your business model before you spend a dime.',
    tags: ['Keynote', 'Growth'],
    },
    {
    time: '15:50 - 16:15',
    title: 'Short Meetings: A Different Type of Networking',
    description:
        'Rotational networking designed to help you meet as many relevant people as possible in 15 minutes.',
    tags: ['Networking'],
    },
    {
        time: '16:20 - 17:15',
        title: 'Late Night Business Talks',
        description:
            'Relaxed talks and untold stories. A fun segment to discover the human side of success and the failures that shaped it.',
        tags: ['Talks', 'Community'],
    },
    {
        time: '17:15 - 17:20',
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
    { label: 'Speakers', href: '/speakers', route: true },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Organizers', href: '#organizers' },
    { label: 'FAQ', href: '/faq', route: true },
];

// Social media links - update these with your actual URLs
export const SOCIAL_LINKS = {
    facebook: 'https://facebook.com/businesssummit',
    tiktok: 'https://tiktok.com/@businesssummit',
    linkedin: 'https://linkedin.com/company/businesssummit',
    instagram: 'https://instagram.com/businesssummit',
};

// Partners data
//Termene.ro, KitKat, LLLDental, VIP, FWDPrint, EA, Launch
//Romania, Start-up Cafe, IAF, Business Podcast Room 
//SeedBlink, One United Properties, VSFA, Idea Morph
//MyIdEA, Bursa.ro, Oveit, Exminds
export const PARTNERS = [
    { id: 1, name: 'Termene.ro', image: logoTermene, url: 'https://termene.ro/articole' },
    { id: 2, name: 'KitKat', image: logoKitKat, url: 'http://www.kitkat.ro/f1' },
    { id: 3, name: 'LLLDental', image: logoLLLDental, url: 'https://www.instagram.com/lll.dental/' },
    { id: 4, name: 'VIP Romania', image: logoVIP, url: 'https://www.vipromania.ro' },
    { id: 5, name: 'FWDPrint', image: logoFWDPrint, url: 'https://www.fwdprint.com' },
    { id: 6, name: 'The Entrepreneurship Academy', image: logoEA, url: 'https://entrepreneurship-academy.ro' },
    { id: 7, name: 'Launch Romania', image: logoLaunchRomania, url: 'https://launch.ro' },
    { id: 8, name: 'Start-up Cafe', image: logoStartUpCafe, url: 'https://startupcafe.ro' },
    { id: 9, name: 'Facilitare.ro', image: logoIAF, url: 'https://facilitare.ro' },
    { id: 10, name: 'Business Podcast Room', image: logoBusinessPodcastRoom, url: 'https://businessroom.ro' },
    { id: 11, name: 'SeedBlink', image: logoSeedBlink, url: 'https://seedblink.com' },
    { id: 12, name: 'One United Properties', image: null, url: '' },
    { id: 13, name: 'VSFA', image: logoVSFA, url: 'https://vsfa.ro' },
    { id: 14, name: 'Idea Morph', image: logoIdeaMorph, url: 'https://trymorph.com' },
    { id: 15, name: 'MyIdEA', image: logoMyIdEA, url: 'https://myidea.ro' },
    { id: 16, name: 'Bursa.ro', image: logoBursa, url: 'https://www.bursa.ro' },
    { id: 17, name: 'Oveit', image: null, url: '' },
    { id: 18, name: 'Exminds', image: logoExminds, url: 'https://www.exminds.com/en' },
    { id: 19, name: 'Innovation Labs', image: logoILabs, url: 'https://www.innovationlabs.ro' }
];
