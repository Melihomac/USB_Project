FROM node:16-alpine

WORKDIR /client

COPY ./package.json /
COPY ./yarn.lock /
COPY ./nginx.conf /etc/nginx/nginx.conf

RUN yarn install

COPY . /

# EXPOSE 3000
EXPOSE 8080

CMD ["yarn", "start", "&&", "nginx-debug", "-g", "daemon off;"]