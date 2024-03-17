# Use an official Node runtime as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies, consider using --only=production for production builds
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

# Bundle your app's source code inside the Docker image
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Use an argument to set the NODE_ENV environment variable
ARG NODE_ENV
ENV NODE_ENV=${NODE_ENV}

# Run the app when the container launches
CMD ["node", "app.js"]
