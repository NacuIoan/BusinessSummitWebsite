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
import logoSeedBlink from '../assets/logoSeedblink.svg'
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

//speakers images
import photoAdrianBanarescu from '../assets/photoAdrianBanarescu.jpeg'
import photoAlexPadure from '../assets/photoAlexPadure.jpeg'
import photoRaduMinea from '../assets/photoRaduMinea.jpeg'
import photoVladIchim from '../assets/photoVladIchim.jpeg'
import photoBogdanStoian from '../assets/photoBogdanStoian.jpeg'
import photoCatalinaBanuleasa from '../assets/photoCatalinaBanuleasa.JPG'
import photoAnaMariaOnica from '../assets/photoAnaMariaOnica.jpeg'
import photoStefanOlaru from '../assets/photoStefanOlaru.jpeg'
import photoAlexGavril from '../assets/photoAlexGavril.png'


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
        name: 'Adrian Bănărescu',
        role: 'R&D Director',
        company: 'Termene.ro',
        bio: 'TBD',
        image: photoAdrianBanarescu,
        linkedin: 'https://www.linkedin.com/in/adrian-banarescu-37080061/ ',
        tiktok: '',
        longBio: 'As Director of R&D at Termene.ro, Adrian Bănărescu shapes the strategic direction of Romania’s largest business intelligence platform serving over 120,000 users. His career combines deep academic expertise in macroeconomics with extensive field experience in financial risk assessment and fraud detection. Adrian is dedicated to transforming official data into intelligence that drives business growth while frequently representing the company in high-level B2G relationships and industry forums.',
        topics: [],
    },
    {
        id: 2,
        name: 'Alex Pădure',
        role: 'Product Owner',
        company: 'ASSIST Software',
        bio: 'With a decade in sales & finance, and another 10+ years in gaming/software industry, I am still learning something new every day! Started as a Jr. QA, and so far I have shipped 4 mobile games as Producer (2 for Netflix) and I work on LiveOps now! Also experienced in almost every triple A game from EA. Worked for EA, Amber & Playtika and collaborated with Bioware, PopCap, DICE, Big Fish Games, Scopely, Jam City & Netflix!',
        image: photoAlexPadure,
        linkedin: 'https://www.linkedin.com/in/alexandrupadure-producer-productowner/',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 3,
        name: 'Radu Minea',
        role: 'Product Manager',
        company: 'eMAG',
        bio: 'Radu is a Product Manager at eMAG, where he builds the advertising platform, focusing on balancing user experience with platform profitability through data-driven decision-making.He is also a Mentor and Coach at Innovation Labs, Romania’s largest startup pre-accelerator for young founders, and a member of the organizing team at Product Makers, one of the country’s largest technology communities.',
        image: photoRaduMinea,
        linkedin: 'https://www.linkedin.com/in/radu-minea/',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 4,
        name: 'Vlad Ichim',
        role: 'Founder',
        company: 'BreeStudio',
        bio: 'Vlad is the Co-Founder of BreeStudio, a project management platform for interior designers. His entry into tech was built on a single realization: in entrepreneurship, the only constant is change. After navigating three major pivots and winning the Future Makers 2023 incubator, Vlad has spent the last four years building software from the ground up, relying on a "bootstrap" mentality and pure curiosity.',
        image: photoVladIchim,
        linkedin: 'https://www.linkedin.com/in/vlad--ichim/',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 5,
        name: 'Bogdan Stoian',
        role: 'Head of Investment Syndicates',
        company: 'SeedBlink',
        bio: 'TBD',
        image: photoBogdanStoian,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 6,
        name: 'Cătălina Bănuleasa',
        role: 'Founder',
        company: 'Idea Morph',
        bio: 'Catalina Banuleasa is on a mission to democratize innovation and problem-solving, making it possible for companies of all sizes to build products customers truly want. As the founder of Idea Morph, she is transforming how organizations and entrepreneurs turn customer insight into growth, helping teams co-create with customers, clarify priorities faster, and validate solutions before investing time and budget. With a career spanning top global brands like Vodafone, ING Bank, Google, and Electronic Arts — where she led the Romanian UX team for FIFA — Catalina brings deep expertise in product strategy, customer experience, and innovation. She is a certified Google Design Sprint Master, trained at Google’s Mountain View HQ in Design Sprint methodologies and Voice Design. Before launching Idea Morph, Catalina co-founded and scaled Design Thinking Society, a boutique innovation consultancy.',
        image: photoCatalinaBanuleasa,
        linkedin: 'https://www.linkedin.com/in/alinacatalina/ ',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 7,
        name: 'AnaMaria Onică',
        role: 'Program Manager',
        company: 'MyIdEA',
        bio: 'AnaMaria Onică is a Program Manager at idEA – The Institute for Excellence in Entrepreneurship, where she works directly with startups and innovative projects to help them scale through acceleration programs, mentoring, and connections with investors and industry experts. In parallel, she is a tech entrepreneur, serving as the COO of a software company and a startup founder, involved in developing scalable digital products and initiatives that support the innovation and entrepreneurship ecosystem.',
        image: photoAnaMariaOnica,
        linkedin: 'https://www.linkedin.com/in/anamaria-onică/',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
        id: 8,
        name: 'Ștefan Olaru',
        role: 'Moderator',
        company: 'Business Summit',
        bio: 'Olaru Ștefan is an entrepreneur who has been building projects since the age of 15, gaining experience across multiple industries, from e-commerce to talent acquisition and recruitment technology. He will serve as the moderator of the upcoming Business Summit, where he aims to guide meaningful conversations between students and industry professionals. He is the co-founder of EarlyHire, a hub that helps students find their first internships and entry-level roles, while also making the hiring process easier and more efficient for companies.',
        image: photoStefanOlaru,
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
    id: 9,
        name: 'Alex Gavril',
        role: 'CEO',
        company: 'Promocrat',
        bio: 'Alex Gavril, a strong advocate of growth marketing in CEE, helps put regional players on global maps. Alex & ▲promocrat support the local ecosystem flourish through growth marketing, mentoring, education, networking, and direct investment.',
        image: photoAlexGavril,
        linkedin: 'https://www.linkedin.com/in/alexgavril/',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    {
    id: 10,
        name: 'More To Be Announced',
        role: '',
        company: 'BusinessSummit',
        bio: '',
        image: '',
        linkedin: '',
        tiktok: '',
        longBio: '',
        topics: [],
    },
    ]

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
