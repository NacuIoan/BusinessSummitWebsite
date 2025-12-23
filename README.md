<<<<<<< HEAD
# BusinessSummitWebsite
=======
# Business Summit Website

A modern, responsive website for Business Summit 2026 - a premier business conference in Bucharest.

## Tech Stack

- **Vite** - Fast build tool and dev server
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
│   ├── common/          # Shared components (Navbar, Footer, CTAButton)
│   └── sections/        # Landing page sections (Hero, Speakers, etc.)
├── constants/
│   └── event.js         # Event data (date, speakers, schedule)
├── pages/               # Route pages (Landing, Register, BusinessClub)
├── App.jsx              # Main app with routing
├── main.jsx             # Entry point
└── index.css            # Tailwind CSS imports & custom theme
```

## Routes

- `/` - Landing page with Hero, Speakers, Schedule, and Organizers sections
- `/register` - Registration page with Tally form embed
- `/businessclub` - About the organizers

## Features

- ✅ Responsive design (mobile-first)
- ✅ Countdown timer until event date
- ✅ Smooth scroll navigation
- ✅ SEO meta tags and OpenGraph
- ✅ Accessible focus states

## Event Configuration

Edit `src/constants/event.js` to update:
- Event name, date, and location
- Speakers list
- Schedule/agenda
- Tally form URL

## License

MIT
>>>>>>> 76d5ec9 (Initial website structure)
