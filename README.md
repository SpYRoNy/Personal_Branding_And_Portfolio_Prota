# Ashutosh Manchanda — Portfolio

React and Vite portfolio featuring career experience, certifications, web projects, and the Recyclopet mobile app.

## Run locally

```sh
cd frontend
npm ci
npm run dev
```

## Build

```sh
cd frontend
npm run build
```

## Vercel

Connect this repository and deploy `main`. With the Root Directory set to the repository root, `vercel.json` installs and builds `frontend` and publishes `frontend/dist`.

If the existing Vercel project uses `frontend` as its Root Directory, use the Vite preset, `npm run build`, and `dist` as the output directory.

The existing `backend` directory is retained; the portfolio runs as a static site and does not require it.
