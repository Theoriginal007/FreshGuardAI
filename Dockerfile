#Frontend

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY frontend/ .

# Build the frontend
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]


#Backend

# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY backend/ .

# Expose port 5000
EXPOSE 5000

# Define the command to run the app
CMD ["npm", "start"]
