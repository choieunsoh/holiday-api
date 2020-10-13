FROM node:lts-alpine3.12

ENV NODE_ENV=production
ENV PORT=8080

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE ${PORT}
CMD [ "node", "server.js" ]
