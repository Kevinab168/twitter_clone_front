FROM node:lts-alpine
WORKDIR /twitter_clone_front
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "build" ]
