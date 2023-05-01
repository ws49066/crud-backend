FROM  node:16.10.0 AS production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ls


EXPOSE 8000
CMD npm run start