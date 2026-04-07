# Artemis

[![Docker](https://img.shields.io/badge/Docker Hub-Artemis-2496ed?logo=docker&style=flat-square)](https://hub.docker.com/repository/docker/memz28/nasaplanetsnote/general)

A full-stack application inspired by NASA's Artemis II mission, the next step in humanity's return to the Moon. This project serves as an educational implementation based on the "Nasa Project" from the [Complete NodeJS Developer Course (GraphQL, MongoDB, + more)](https://www.udemy.com/course/complete-nodejs-developer-zero-to-mastery/).

## About Artemis II

Artemis II is the first crewed mission of NASA's Artemis program, marking humanity's return to the Moon since Apollo 17 in 1972. This application pays homage to that ambitious endeavor, providing a platform to explore and manage space mission data.

## Project Overview

This is a full-stack application that allows users to:

- **Track lunar missions** and their associated launches
- **Manage mission data** including launch dates, destinations, and mission objectives
- **Explore crew information** for crewed missions like Artemis II
- **Monitor mission status** in real-time

## Tech Stack

### Backend
- **Node.js** with TypeScript
- **Express** for API development
- **MongoDB** for data persistence
- **GraphQL** for flexible data querying
- **Vitest** for testing

### Frontend
- **React** for the user interface
- **Arwes** for sci-fi themed UI components
- Modern JavaScript/TypeScript practices

## Project Structure

```
artemis/
├── package.json       # Root workspace configuration
├── client/            # React frontend
│   ├── package.json
│   └── src/
└── server/            # Node.js/Express backend
    ├── package.json
    └── src/
```

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB (local or Atlas)

### Installation

```bash
# Install all dependencies (root level)
npm install
```

Or install individually:

```bash
npm run install-server  # Install server dependencies
npm run install-client  # Install client dependencies
```

### Managing Packages with npm Workspaces

This project uses npm Workspaces. Use the `-w` flag to install packages to specific workspaces:

```bash
# Install a package in the server
npm install cors -w server

# Install a package in the client
npm install react-router -w client

# Install a package in both workspaces
npm install lodash -w client -w server
```

### Running the Application

**Development mode (both client and server):**
```bash
npm run watch
```

**Individual servers:**
```bash
npm run server  # Start backend on port 5082
npm run client  # Start frontend on port 3000
```

### Root-Level Scripts

| Command | Description |
|---------|-------------|
| `npm run install` | Install all workspace dependencies |
| `npm run install-server` | Install server dependencies |
| `npm run install-client` | Install client dependencies |
| `npm run server` | Start backend development server |
| `npm run client` | Start frontend development server |
| `npm run watch` | Run both client and server concurrently |

### Server Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run start` | Start production server |
| `npm run type-check` | Run TypeScript type checking |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |
| `npm run test` | Run tests with Vitest |
| `npm run validate` | Run all quality checks |

## Course Reference

This project is based on the "Nasa Project" section from the **Complete NodeJS Developer Course** by Andrei Neagoie and the Zero To Mastery team. The original course teaches:

- Building REST and GraphQL APIs
- MongoDB integration and data modeling
- Authentication and security best practices
- Deployment strategies
- Real-world full-stack development patterns

## Docker

This project includes Docker support for running both the frontend and backend in containers.

### Docker Hub

A pre-built image is available on Docker Hub. Pull and run it with:

```bash
docker pull memz28/nasaplanetsnote
docker run -d -p 5080:5080 --name artemis memz28/nasaplanetsnote
```

Then open **http://localhost:5080** in your browser.

### Build from Source

#### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

#### Quick Start

```bash
# Build the image
docker compose build

# Start the container
docker compose up -d
```

The app will be available at **http://localhost:5080**.

#### What the Docker setup does

- **Builds the frontend** (React) and serves it as static assets from the Express server.
- **Builds the backend** (TypeScript → compiled JavaScript) with all production dependencies.
- **Exposes port 5080** where both the frontend and the API are served.
- **Serves static files** from `server/dist/public` via Express.
- **Copies CSV data files** (Kepler exoplanet data) into the image so the planets API works.

#### Environment Variables

The following build arguments are available for the Docker build:

| Argument | Default | Description |
|----------|---------|-------------|
| `REACT_APP_API_URL` | `http://localhost:5080` | API base URL baked into the frontend at build time |
| `REACT_APP_PLANETS_ENDPOINT` | `/api/planets` | Planets API endpoint baked into the frontend |

These can be overridden in `docker-compose.yml` or passed directly:

```bash
docker compose build --build-arg REACT_APP_API_URL=http://localhost:5080
```

#### Common Commands

```bash
# Start the container
docker compose up -d

# Stop the container
docker compose down

# Rebuild after code changes
docker compose build && docker compose up -d

# View logs
docker compose logs -f api

# Start in the foreground (to see logs live)
docker compose up
```

#### Project Structure in Docker

```
Container filesystem (at /app):
  /app/
    server/           # Server source and config
      dist/          # Compiled server JavaScript
        public/      # Frontend static assets
        src/data/    # Kepler CSV data files
      src/           # Server TypeScript source
    package.json     # Root workspace manifest
```

#### Troubleshooting

**`ERR_CONNECTION_REFUSED` in the browser**

Make sure you are accessing the app at `http://localhost:5080`. The frontend was built with `REACT_APP_API_URL=http://localhost:5080` baked in, so it expects the API at that same origin.

**`ENOENT: no such file or directory, open '.../kepler_data.csv'`**

The CSV data files are copied into the image at build time. If you see this error, rebuild the image to ensure the data files are present:

```bash
docker compose build --no-cache && docker compose up -d
```

**Changes to source code not reflected**

Rebuild the image — Docker layers cache each `RUN` command. Frontend and server changes require a fresh build:

```bash
docker compose build && docker compose up -d
```

## License

GPL-3.0

---

Author: Manuel Morales
