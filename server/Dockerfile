# Stage 1: Build the application
FROM node:22-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy source code and build
COPY . .
## Build the client (frontend) inside the same image and expose assets
WORKDIR /app/client
RUN npm ci --silent
RUN npm run build
WORKDIR /app
RUN mkdir -p public
RUN cp -r client/build/. public/

# Stage 2: Run the application
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copy necessary files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Install only production dependencies
# Using valid user permissions
RUN chown -R node:node /app
USER node
RUN npm ci --omit=dev

# Execute the application
CMD ["npm", "start"]
