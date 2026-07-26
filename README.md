# Utkrisht Alliance — Website

Marketing website for **Utkrisht Alliance**, a premier media & events company based in
Canada and operating globally.

Built by **Apex Web Studio** (Client 1). The design was created by the client in Figma Make;
this repository is the production build of that design.

## Tech stack

- [Vite 6](https://vite.dev/) + [React 18](https://react.dev/)
- [React Router 7](https://reactrouter.com/) (client-side routing)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) (Framer Motion) for animation
- [lucide-react](https://lucide.dev/) icons

## Pages

Home · About · Services · Events · Partner With Us · Media · Insights · Contact

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Production build

```bash
npm run build    # outputs static files to dist/
npm run preview  # preview the production build locally
```

## Deployment

Deployed on **Vercel** using the Vite preset. `vercel.json` rewrites all routes to
`index.html` so client-side (React Router) deep links work on refresh.

## Before public launch

A few values are placeholders carried over from the client's design:

- Real phone number (currently `+1 (XXX) XXX-XXXX`)
- Contact form submission target (currently a UI-only form — needs a backend/endpoint)
- "Interactive map coming soon" block on the Contact page
- Photography is currently hotlinked from Unsplash
