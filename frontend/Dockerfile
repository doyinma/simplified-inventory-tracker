# Use the Node.js image as a base
FROM node:16

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend files
COPY . .

# Expose port 8080
EXPOSE 3000

# Command to run the frontend
CMD ["npm", "run", "dev"]