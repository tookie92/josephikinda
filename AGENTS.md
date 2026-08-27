## Learned User Preferences

- Portfolio audiences are recruiters and clients; preferred direction is an immersive showreel (visual proof first, not CV-style hero bio).
- Prefers step-by-step delivery: create a dedicated git branch, then implement redesign work in phases.
- Communicates in French for product and design feedback; keep replies and UI copy aligned when collaborating.
- Prefers a light, friendlier site theme over a dark cinema-heavy look when friendliness or readability regresses.
- LottieCraft should include the Lottie assets that previously lived in Services, without duplicate entries.
- Frontend Forge should show more than two sites/projects.
- Header Rive logo and Lottie playback are critical; regressions that blank text or break those assets are high priority to fix.

## Learned Workspace Facts

- This repo is Joseph Ikinda’s personal Next.js portfolio (package name `rehoboth`) showcasing UX/UI, frontend, Lottie/motion, and 3D work.
- Brand signature colors are orange `#F49F0A` and teal `#006B5F`.
- Main works narrative is structured as showreel chapters (UI, Frontend Forge, LottieCraft, 3D), largely driven from `app/Components/autres/Portofolio.tsx` and related chapter components.
- Navbar brand mark uses Rive (`@rive-app/react-canvas`); Lottie JSON assets live under `public/lottie/` (many files use a `.json.json` extension).
