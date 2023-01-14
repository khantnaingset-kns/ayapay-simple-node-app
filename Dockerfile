FROM node:latest-alpine

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . /usr/src/app/

RUN --chown=node:node npm install

CMD [ "npm", "start" ]