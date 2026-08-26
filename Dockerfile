# ⚠️ DEPRECATED: This Dockerfile is NOT used in production.
# Production deployment uses Vercel. Kept for local development reference only.
# Build stage
FROM oven/bun:1-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies using bun
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Nuxt application
RUN bun run build

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/.output ./.output

# Set default environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose the listening port
EXPOSE 3000

# Start the Nitro server
CMD ["node", ".output/server/index.mjs"]
