FROM node:latest as build-stage
WORKDIR /twitter_frontend
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["npm", "run", "build"]
