FROM node:latest

EXPOSE 81

WORKDIR /affluences

COPY . .

RUN npm install

# CMD ["node","server.js"]
CMD ["npm", "run", "dev-docker"]