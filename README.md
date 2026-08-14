# Portfolio — MERN Stack (MVC)

A full-stack developer portfolio built with MongoDB, Express, React, and Node,
structured using the MVC pattern on the backend.

## Structure

```
mern-portfolio/
├── backend/                 # Express API (Model - Controller)
│   ├── config/db.js         # MongoDB connection
│   ├── models/               # Mongoose schemas (Project, Message)
│   ├── controllers/          # Route logic (CRUD for projects/messages)
│   ├── routes/                # Express routers, map URLs -> controllers
│   ├── seed.js                # Populates sample project data
│   └── server.js              # App entry point
│
└── frontend/                 # React app (View)
    └── src/
        ├── api/api.js          # fetch() calls to the backend API
        ├── components/         # Header, Hero, Projects, About, Contact, Footer
        └── App.jsx              # Composes all sections
```

**MVC mapping:** Model = Mongoose schemas (`backend/models`). Controller =
`backend/controllers` (handles requests, talks to the DB). View = the React
app in `frontend/` (renders whatever the controllers return).

## 1. Backend setup

```bash
cd backend
npm install
cp .env.example .env
```

Edit `.env` and set `MONGO_URI` — either a local MongoDB
(`mongodb://127.0.0.1:27017/portfolio`) or a free MongoDB Atlas cluster
connection string.

Seed some sample projects, then start the server:

```bash
npm run seed   # adds 3 sample projects to the database
npm run dev    # starts the API on http://localhost:5000 (needs nodemon)
# or: npm start
```

Confirm it's working: open `http://localhost:5000/api/projects` in a
browser — you should see JSON.

## 2. Frontend setup

In a second terminal:

```bash
cd frontend
npm install
npm run dev
```

This starts the React app on `http://localhost:5173`. It proxies `/api`
requests to the backend on port 5000 (configured in `vite.config.js`), so
both servers need to be running at the same time during development.

## 3. Customize

- Edit your name, about text, and skills directly in the component files
  under `frontend/src/components/`.
- Manage projects through the API instead of hardcoding them:
  - `POST /api/projects` — add a project
  - `PUT /api/projects/:id` — edit one
  - `DELETE /api/projects/:id` — remove one
  - (You can call these with Postman/Insomnia, or build a small admin
    page later — not included here to keep this focused.)
- Contact form submissions are saved to the `messages` collection —
  view them via `GET /api/messages`.

## 4. Deploying

- **Backend:** Render, Railway, or Fly.io all have free/cheap tiers for
  a small Node/Express API. Set `MONGO_URI` as an environment variable
  there (use MongoDB Atlas for the database in production).
- **Frontend:** `npm run build` in `frontend/` produces a `dist/` folder —
  deploy that to Vercel or Netlify. Point its API calls at your deployed
  backend URL instead of `/api` (e.g. via an environment variable).
