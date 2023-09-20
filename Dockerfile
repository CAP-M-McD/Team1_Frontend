FROM node:14

WORKDIR /Team1_Frontend

COPY . /Team1_Frontend

ARG API_URL

ENV API_URL ${API_URL}

RUN npm install && npm ci

EXPOSE 3000

CMD [ "npm", "start"]
