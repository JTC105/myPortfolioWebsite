FROM node:20

WORKDIR /app

COPY server/package*.json ./
RUN npm install

COPY server .

EXPOSE 8080

CMD ["node", "server.js"]
