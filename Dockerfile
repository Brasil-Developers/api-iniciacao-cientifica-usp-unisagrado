FROM node:latest

RUN mkdir /app
WORKDIR /app
ENV NODE_ENV development
COPY package*.json /app
RUN npm install -g nodemon
RUN npm install
RUN npm i -g ts-node-dev
COPY . /app
EXPOSE 9000
CMD ["npm", "start"]