FROM node:12-alpine
RUN apk update \
  && apk add python \
  && apk add make \
  && apk add g++
WORKDIR /usr/src/app

COPY ./package* ./

RUN npm i

COPY ./ ./