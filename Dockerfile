FROM node:latest as build-stage
WORKDIR /twitter_frontend
COPY package*.json ./
RUN npm install --production
RUN npm install -g @vue/cli
COPY ./ .
CMD ["npm", "run", "build"]
