FROM node:16-slim

RUN apt-get update -y

WORKDIR /app

COPY package.json yarn.lock ./
COPY prisma ./

RUN yarn global add next react react-dom
RUN yarn install

COPY . .

USER node

EXPOSE 3000

RUN npx prisma generate

CMD [ "yarn", "dev" ]
