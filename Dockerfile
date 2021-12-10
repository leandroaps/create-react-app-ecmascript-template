# Stage 0
# Frontend build based on Node.js
FROM node:alpine as build-stage

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN yarn
RUN yarn add react-scripts@latest -g

COPY . /usr/src/app

RUN yarn build

# Stage 1
# Production build based on Nginx with artefacts from Stage 0
FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
