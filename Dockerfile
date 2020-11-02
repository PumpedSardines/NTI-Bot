FROM node:14.11.0

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

CMD npm run start:watch