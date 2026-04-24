# NXTWAVE LIVE

Live music and comedy events across the US — tickets, lineups, and artist/comedian applications.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- Two lanes: **Music** and **Comedy**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── music/
│   │   ├── page.tsx          # Music overview
│   │   ├── tickets/page.tsx  # Music tickets
│   │   ├── lineup/page.tsx   # Music lineup
│   │   └── apply/            # Artist application (server page + client form)
│   ├── comedy/
│   │   ├── page.tsx          # Comedy overview
│   │   ├── tickets/page.tsx  # Comedy tickets
│   │   ├── lineup/page.tsx   # Comedy lineup
│   │   └── apply/            # Comedian application (server page + client form)
│   ├── privacy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── DropAlerts.tsx        # Email signup widget
│   ├── TicketChooserModal.tsx
│   └── LaneNav.tsx           # Per-lane sub-navigation
└── content/                  # JSON data files — edit these to update content
    ├── cities.json           # Cities for drop alert dropdown
    ├── spotlights.json       # Featured artist/comedian spotlights
    ├── featured-moments.json # Homepage moment grid
    ├── events-music.json     # Music show dates/venues/ticket links
    ├── events-comedy.json    # Comedy show dates/venues/ticket links
    ├── lineup-music.json     # Music lineup artists
    └── lineup-comedy.json    # Comedy lineup comedians
```

## Editing Content

All site content lives in `src/content/*.json`. Edit these files to:

- **Add show dates**: Update `events-music.json` or `events-comedy.json`
- **Add lineup artists**: Update `lineup-music.json` or `lineup-comedy.json`
- **Update spotlights**: Edit `spotlights.json`
- **Add cities**: Edit `cities.json`

## Social / Contact

- Instagram: [@thenxtwave](https://instagram.com/thenxtwave)
- Email: hello@nxtwavelive.com
