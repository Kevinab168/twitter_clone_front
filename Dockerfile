FROM node:latest as build-stage
WORKDIR /twitter_frontend
COPY package*.json ./
RUN npm install --production
COPY ./ .
RUN npm run build
