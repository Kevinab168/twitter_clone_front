FROM node:10
WORKDIR /twitter_frontend
COPY . /twitter_frontend
RUN npm install --production
CMD [ "./node_modules/.bin/vue-cli-service", "build" ]