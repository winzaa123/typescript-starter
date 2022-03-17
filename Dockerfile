FROM keymetrics/pm2:14-alpine

WORKDIR /mnt/app

COPY ./app/package.json .
COPY ./app/yarn.lock .

RUN yarn install

COPY ./app .

RUN yarn build
