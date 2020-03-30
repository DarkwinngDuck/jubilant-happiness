#!/bin/bash

DOCKER_COMPOSE=./docker/docker-compose.yml

docker-compose -f $DOCKER_COMPOSE down -v
docker-compose -f $DOCKER_COMPOSE up --build
