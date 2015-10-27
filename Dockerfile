FROM node:latest

RUN mkdir -p /data

ADD . /data/
WORKDIR /data
RUN npm install

# set environment variables
ENV PORT=9000

EXPOSE 9000

CMD npm start
