# Stage 1: Build the application
FROM node:22-alpine AS builder

WORKDIR /app

# Copy source code first (needed for workspaces)
COPY . .

# Install dependencies (prefer lockfile if present)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Build the application
RUN npm run build-client && npm run build --prefix server

# Stage 2: Run the application
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/server/public ./public
COPY --from=builder /app/server/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Install only production dependencies (handle cases with or without lockfile)
RUN chown -R node:node /app
USER node
WORKDIR /app/server
# Temporarily remove prepare script to avoid husky issues
RUN sed -i '/"prepare": "husky",/d' package.json
# Remove install script from root package.json to avoid workspace issues
RUN sed -i '/"install": "npm run install-server && npm run install-client",/d' ../package.json
# Install only server dependencies
RUN npm install --omit=dev --production

# Execute the application
WORKDIR /app/server
CMD ["npm", "start"]
