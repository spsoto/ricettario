#!/bin/sh

export PROJECT_NAME=ricettario

trap 'docker-compose -p ricettario down' SIGINT EXIT
