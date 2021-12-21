FROM node:16-alpine

RUN mkdir /app
WORKDIR /app
ENV NODE_ENV development


ADD package*.json /app
COPY . /app


RUN npm install -g nodemon
RUN npm install -g ts-node
RUN npm install

EXPOSE 9000
CMD ["npm", "start"]