FROM node:18.12.1-slim

ARG EnvironmentVariable

WORKDIR /app/medusa

COPY package.json .
COPY develop.sh .
COPY package-lock.json .

RUN apt-get update

RUN apt-get install -y python3

RUN npm install -g npm@8.19.2

RUN npm install -g @medusajs/medusa-cli@latest

RUN npm install

COPY . .

ENTRYPOINT ["./develop.sh"]
