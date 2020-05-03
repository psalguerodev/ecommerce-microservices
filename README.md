# Simple Ecommerse Project

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Start up Mysql by Docker
```bash
# Docker run
$ docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=ecommerce-secret -d mysql
```

## Build docker

```bash
# Build ecommerce-auth
$ yarn build ecommerce-auth
$ docker build -t psalguero/ecommerce-auth -f apps/ecommerce-auth/Dockerfile .

# Build ecommerce-customers
yarn build ecommerce-customers
$ docker build -t psalguero/ecommerce-customers -f apps/ecommerce-customers/Dockerfile .

# Build ecommerce-products
yarn build ecommerce-products
$ docker build -t psalguero/ecommerce-products -f apps/ecommerce-products/Dockerfile .

# Build ecommerce-shopping-cart
yarn build ecommerce-shopping-cart
$ docker build -t psalguero/ecommerce-shopping-cart -f apps/ecommerce-shopping-cart/Dockerfile .

```