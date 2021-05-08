FROM node:12.19.0-alpine3.10 as base

WORKDIR /node/src/app
COPY . .

RUN npm i
RUN chmod +x src/script/start.sh
ENTRYPOINT ["src/script/start.sh"]
