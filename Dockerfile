FROM node:12-alpine

WORKDIR /node-expess-mysql
COPY package.json .
RUN npm install
COPY . .
CMD npm start
