FROM node:17

WORKDIR /curso_app/server

RUN mkdri /curso_app 

COPY package.json /curso_app

RUN npm install

COPY server.js /curso_app

EXPOSE 3000

CMD node server.js