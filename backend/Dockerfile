FROM node:latest as tsc-builder-test

WORKDIR /affluences

COPY . .
COPY tsconfig.json ./tsconfig.json
COPY package.json ./package.json

RUN npm install && npm run build

FROM node:latest

WORKDIR /affluences

COPY --from=tsc-builder-test /build-backend .
COPY package.json ./package.json

RUN npm install --prod

EXPOSE 81

CMD ["node", "server.js"]