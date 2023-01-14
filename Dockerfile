FROM node:lts-alpine

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . /usr/src/app/

RUN npm install

CMD [ "npm", "start" ]