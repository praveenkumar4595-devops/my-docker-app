# Stage 1: Build
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Stage 2: Run
FROM node:18-alpine
WORKDIR /app

# Copy from builder
COPY --from=builder /app /app

# Environment variables
ENV NODE_ENV=production
ENV APP_VERSION=1.0.0

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:3000/health || exit 1

# Start command
CMD ["npm", "start"]
