# 🎮 Games Catalog

A responsive and performant web application that displays and filters video game data from the [RAWG.io](https://rawg.io/apidocs) API. Built with a modern front-end stack, this project features a polished UI with dynamic filtering, responsive layout, and optimized loading behavior.

---

## 🚀 Why This Project Matters

This app is designed as a showcase of front-end engineering best practices, including:

- **API client abstraction** for clean data access
- **Dynamic filtering UI** (genre, platform, sort)
- **Skeleton loading states** for better UX
- **Reusable, component-driven design**
- **CI/CD pipeline**: Automatically builds and deploys via GitHub and remote server

---

## 🧠 Features

- 🧩 Custom dropdown filters for **platform, genre, and sort order**
- 🔍 **Search bar** with real-time input tracking
- 🎨 **Responsive grid layout** for game previews
- ⚡ **Skeleton loading** states for perceived performance
- 🧼 Built with ESLint, Prettier, Husky, and commit hooks

---

## ⚙️ Tech Stack

| Area     | Tools                          |
| -------- | ------------------------------ |
| Frontend | React, TypeScript, Vite        |
| Styling  | Tailwind CSS, SCSS Modules     |
| API      | RAWG.io REST API               |
| Tooling  | ESLint, Prettier, Husky        |
| CI/CD    | GitHub Actions + Remote Deploy |

---

## 📦 Installation

> Requires **Node.js v18.19.0**

1. Clone the repository:

```bash
git clone https://github.com/nbuzzerio/games-catalog.git
cd games-catalog
```

2. Install dependencies:

```bash
npm install
```

3. Create a .env file in the root with your API key:

```bash
API_KEY=your_rawg_api_key
API_URL=https://api.rawg.io/api
PORT=3000
```

4. Start the development server:

```bash
npm run dev
```

## 📂 Project Structure

```
games-catalog/
├── public/              # Static assets
├── src/
│   ├── assets/          # Fonts, icons, images
│   ├── components/      # Reusable UI elements
│   ├── hooks/           # Custom React hooks
│   ├── services/        # API clients and data logic
│   └── App.tsx          # Root component
├── server.js            # Lightweight Node server
├── example.env          # Environment variable template
├── .husky/              # Git hooks
└── ...

```

## 🧑‍💻 Developer Takeaways
This project demonstrates my ability to:

- 🧱 Build scalable front-end apps with reusable components
- ⚙️ Integrate external APIs using clean client abstractions
- 🎯 Optimize UX with smart UI feedback and skeleton loaders
- 🚀 Set up CI/CD pipelines for automatic deployment
