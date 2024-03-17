# Stage 1: Building the app
FROM node:16 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies, consider using --only=production for production builds
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

# Copy the rest of your application code
COPY . .

# Build your Next.js application
RUN npm run build

# Stage 2: Setting up the production environment
FROM node:16 AS runner

WORKDIR /app

# Copy the build output from the previous stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
