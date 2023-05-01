FROM node:16.10.0 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM  node:16.10.0 AS production
WORKDIR /app
RUN ls
COPY . .

EXPOSE 8000
CMD npm run start