FROM node:12.3.1

ENV NUXT_HOST=0.0.0.0

WORKDIR /app

RUN npm install -g firebase-tools


COPY ./app/package.json ./app/yarn.lock ./
RUN yarn install

COPY ./app .

CMD ["yarn", "run", "dev"]
