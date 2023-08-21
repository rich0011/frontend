# Use an official Node.js 18 runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install --force

# Copy the rest of the app files to the container
COPY . .

# Build the React app
RUN npm run build

# Specify the command to run the app
CMD ["npm", "start"]
