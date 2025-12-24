# Business Summit Website

A modern, responsive website for Business Summit 2026 - a premier business conference in Bucharest.

## Tech Stack

- **Vite 7** - Fast build tool and dev server
- **React 19** - UI library
- **React Router v7** - Client-side routing
- **Tailwind CSS v4** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Navbar, Footer, CTAButton
│   └── sections/        # Hero, WhyAttend, Speakers, Schedule, Organizers
├── constants/
│   └── event.js         # Event data, speakers, schedule, social links
├── pages/
│   ├── Landing.jsx      # Home page
│   ├── Register.jsx     # Tally form registration
│   ├── BusinessClub.jsx # About organizers
│   └── Terms.jsx        # Terms & Conditions (Romanian)
├── App.jsx              # Router setup
├── main.jsx             # Entry point
└── index.css            # Tailwind CSS & custom theme
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with Hero, Speakers, Schedule, Organizers |
| `/register` | Fullscreen Tally form registration |
| `/businessclub` | About the organizers |
| `/terms` | Terms & Conditions (Termeni și Condiții) |

## Features

- ✅ Responsive design (mobile-first)
- ✅ Countdown timer until event date
- ✅ Smooth scroll navigation
- ✅ Fullscreen registration form
- ✅ Terms & Conditions page (Romanian)
- ✅ Configurable social media links
- ✅ SEO meta tags and OpenGraph
- ✅ Accessible focus states

## Configuration

Edit `src/constants/event.js` to customize:

### Event Details
```javascript
export const EVENT = {
  name: 'Business Summit',
  year: 2026,
  city: 'Bucharest',
  date: '2026-04-18',
  tallyFormUrl: 'https://tally.so/r/YOUR_FORM_ID',
};
```

### Social Media Links
```javascript
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/your-page',
  tiktok: 'https://tiktok.com/@your-account',
  linkedin: 'https://linkedin.com/company/your-company',
  instagram: 'https://instagram.com/your-account',
};
```

### Other Configurable Data
- `SPEAKERS` - Speaker cards (name, role, company, bio)
- `SCHEDULE` - Event agenda with time slots
- `FEATURES` - "Why Attend" section benefits
- `NAV_LINKS` - Navigation anchor links

## License

MIT
