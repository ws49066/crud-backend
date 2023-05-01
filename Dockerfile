FROM node:16.10.0 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

RUN ls
RUN npm install next

EXPOSE 8000
CMD npm run start