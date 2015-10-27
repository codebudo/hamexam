#!/bin/sh

VERSION=$1
if [ -z "$VERSION" ]; then VERSION='latest'; fi

docker stop ham
docker rm ham

docker run -d -p 9003:9000 --name ham ham:$VERSION;


