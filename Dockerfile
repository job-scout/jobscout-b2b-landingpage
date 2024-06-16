# Use a specific Node.js runtime as the base image
FROM node:18.17-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose port
EXPOSE 3000

# Start the app using PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
