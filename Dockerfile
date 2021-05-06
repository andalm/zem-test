FROM node:12.19.0-alpine3.10 as base

WORKDIR /node/src/app
COPY . .

RUN npm i
