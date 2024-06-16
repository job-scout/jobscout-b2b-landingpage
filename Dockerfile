# Use a specific Node.js runtime as the base image
FROM node:18.17-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all the dependencies for your project
RUN npm install 

# Install PM2 globally
RUN npm install pm2 -g

# Copy all the files from the current directory into the working directory of the container
COPY . .

# Expose port 4000 from the container to the local network
EXPOSE 3000

# Build the production version of your Next.js app
RUN npm run build

# Start the production server inside the container using pm2
CMD ["pm2-runtime", "npm", "--", "start"]
