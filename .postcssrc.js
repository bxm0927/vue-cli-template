/*
 * PostCSS Configuration
 * https://github.com/postcss/postcss
 * https://cli.vuejs.org/zh/guide/css.html#postcss
 */

module.exports = {
  plugins: {
    // https://github.com/postcss/autoprefixer
    autoprefixer: {},

    // https://github.com/evrone/postcss-px-to-viewport
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 设计稿的视口宽度
      selectorBlackList: [/^.van-/], // 不编译 Vant
      exclude: /node_modules/i, // 忽略 node_modules
    },
  },
}
