FROM node:latest as build-stage
WORKDIR /twitter_frontend
COPY package*.json ./
RUN npm install --production
COPY ./ .
CMD ["npm", "run", "build"]
