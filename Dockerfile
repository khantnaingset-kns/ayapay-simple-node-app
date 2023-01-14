FROM node:lts-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app/

RUN npm install --only=production

CMD [ "npm", "start" ]