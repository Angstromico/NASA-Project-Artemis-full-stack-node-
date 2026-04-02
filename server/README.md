# 🚀 Node.js + TypeScript Starter

A **minimal** Node.js + TypeScript starter template for learning and development. Pre-configured with modern tooling so you can focus on writing code, not setting up your environment.

## ✨ What's Included

- **🔷 TypeScript** - Strict type checking configured
- **⚡ tsx** - Instant run without compilation (`npm run dev`)
- **🧪 Vitest** - Fast testing framework
- **📏 ESLint + Prettier** - Code quality and formatting
- **🪝 Husky** - Pre-commit hooks (optional)
- **🎯 Path Aliases** - Use `@/` instead of `../../`

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Start development (hot-reload)
npm run dev

# Build for production
npm run build

# Run compiled code
npm start
```

## 📜 Available Scripts

| Script             | Description                           |
| ------------------ | ------------------------------------- |
| `npm run dev`      | Run with hot-reload (no build needed) |
| `npm run build`    | Compile TypeScript to JavaScript      |
| `npm start`        | Run compiled code                     |
| `npm test`         | Run tests in watch mode               |
| `npm run lint`     | Check code quality                    |
| `npm run format`   | Format code with Prettier             |
| `npm run validate` | Run all checks                        |

## 📁 Project Structure

```text
src/
└── index.ts    # Your code goes here
```

Keep it simple! Add files and folders as you learn and need them.

## 🎯 Path Aliases

Instead of messy relative imports:

```typescript
// ❌ Avoid
import { something } from '../../../utils/something'

// ✅ Use
import { something } from '@/utils/something.js'
```

## 💡 Learning Tips

### TypeScript Basics

```typescript
// Type annotations
const name: string = 'John'
const age: number = 25

// Interfaces
interface User {
  name: string
  age: number
}

// Functions with types
function greet(user: User): string {
  return `Hello, ${user.name}!`
}
```

### Testing with Vitest

Create a file like `src/example.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'

describe('example', () => {
  it('should work', () => {
    expect(1 + 1).toBe(2)
  })
})
```

Run tests:

```bash
npm test
```

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration (strict mode enabled)
- `eslint.config.mjs` - ESLint rules
- `.prettierrc.json` - Code formatting rules
- `vitest.config.ts` - Test configuration

Feel free to modify these as you learn!

## 🚀 Building for Production

```bash
npm run build   # Creates dist/ folder
npm start       # Runs the compiled code
```

## 📚 Next Steps

1. **Learn TypeScript basics** - Types, interfaces, generics
2. **Practice with Node.js** - File system, HTTP, async/await
3. **Write tests** - Use Vitest to test your code
4. **Explore the tooling** - ESLint, Prettier, tsx

## 📖 Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [Vitest Documentation](https://vitest.dev/)

## 📄 License

MIT

---

**Happy Learning! 🎓**
