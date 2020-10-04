# Deploy based on Docker + Nginx
FROM node:12.18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf
