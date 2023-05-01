FROM node:16.10.0 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

FROM base AS build
WORKDIR /build
COPY --from=base /base ./
RUN npm -v

FROM  node:16.10.0 AS production
WORKDIR /app
RUN ls
COPY --from=build ./ ./


RUN ls
RUN npm install


EXPOSE 8000
CMD npm run start