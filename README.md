# Artemis

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
- React (coming soon)
- Modern JavaScript/TypeScript practices

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd artemis

# Install server dependencies
cd server
npm install

# Install client dependencies (when available)
cd ../client
npm install
```

### Running the Application

```bash
# Development mode (server)
cd server
npm run dev

# Build for production
cd server
npm run build
npm start
```

### Available Scripts

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

## License

MIT
