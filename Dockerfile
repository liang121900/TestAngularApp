### STAGE 1: Build ###
ARG ENV

# We label our stage as ‘builder’
FROM node:alpine as builder  

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i && npm update && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN $(npm bin)/ng build --configuration=${ENV} --output-path=d

### STAGE 2: Setup ###
FROM nginx:1.17.5-alpine

COPY default.conf /etc/nginx/conf.d/

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist/browser /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]