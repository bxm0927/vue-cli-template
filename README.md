# vue-cli-template

## 项目简介

这是一个基于 `Vue CLI v4` 和 `Vue v2` 搭建的一个开箱即用的 Vue SPA 模板项目 📦

已经集成了以下功能：

- [x] `Vuex`: Vue.js 官方状态管理库
- [x] `Vue Router`: Vue.js 官方路由库，本项目使用 `history` 模式
- [x] `axios`: HTTP 客户端
- [x] `Vant`: 有赞前端团队开源的 Vue.js 移动端组件库，支持按需加载
- [x] `postcss-px-to-viewport`: 基于 Viewport 的移动端适配方案
- [x] `Sass/SCSS (with node-sass)`: CSS Pre-processor
- [x] `style-resources-loader`: CSS Automatic imports
- [x] `normalize.css`: CSS resets
- [x] `ESLint + Stylelint + Prettier`: Linter / Formatter
- [x] `husky + lint-staged`: Git Hooks
- [x] `Nginx + Jenkins + Docker`: Deployment

以下功能尚未集成：

- [ ] TypeScript
- [ ] Unit Testing
- [ ] E2E Testing
- [ ] Progressive Web App (PWA) Support

> Tips: 本项目默认为移动端模板项目，PC 端项目需要去掉 `postcss-px-to-viewport`，并将 `Vant` 替换为 `Element UI`.

## 快速开始

```bash
# install dependencies
npm install

# Compiles and hot-reloads for development
npm run serve

# Compiles and minifies for production
npm run build

# Lints and fixes files
npm run lint
```

## 部署

使用 Nginx + Docker 部署：

```bash
# Build Docker image
# docker build -t vue-cli-template .

# Run Docker image
# docker run -d -p 9000:80 vue-cli-template

# Run Docker image with Docker Compose
docker-compose up -d --build # or: npm run deploy
```
