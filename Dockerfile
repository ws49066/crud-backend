FROM  node:16.10.0 AS production
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ls
RUN npx prisma generate

EXPOSE 3001
CMD npm run start