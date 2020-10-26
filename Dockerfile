FROM node:lts-alpine
WORKDIR /twitter_clone_front
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
