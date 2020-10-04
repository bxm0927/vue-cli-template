# Deploy based on Docker + Nginx
FROM node:12.18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/dist .
COPY nginx.conf /etc/nginx/nginx.conf
