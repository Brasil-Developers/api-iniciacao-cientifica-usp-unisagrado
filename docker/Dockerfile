FROM node:16-alpine

# WORKDIR /app

COPY package.json . 
COPY package-lock.json .
COPY /app .

# RUN npm install -g nodemon1
# RUN npm install -g ts-node
RUN npm install -g node-gyp
RUN npm i -g ts-node-dev
RUN npm i

EXPOSE 9000
CMD ["npm", "start"]