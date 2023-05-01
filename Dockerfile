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

EXPOSE 3000
CMD npm run start