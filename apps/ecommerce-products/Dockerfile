FROM node:lts-alpine
WORKDIR /microservice

COPY ./package.json .
COPY ./yarn.lock .

RUN yarn install --production=true

COPY dist/apps/ecommerce-products/* .

EXPOSE 3000

CMD yarn start:prod
