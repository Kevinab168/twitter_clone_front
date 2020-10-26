FROM node:10
WORKDIR /twitter_frontend
COPY . /twitter_frontend
RUN npm install --production
CMD [ "/bin/sh", "npm run build" ]