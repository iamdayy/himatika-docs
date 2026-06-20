# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies using npm
# We copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Nuxt application
RUN npm run build

# Production stage
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
# Nuxt 3/4 builds everything needed for production into the .output folder
COPY --from=builder /app/.output ./.output

# Set default environment variables
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

# Expose the listening port
EXPOSE 3000

# Start the Nitro server
CMD ["node", ".output/server/index.mjs"]
