/*
 * Vue Configuration
 * https://github.com/eslint/eslint
 */

const path = require('path')
console.log('NODE_ENV: ', process.env.NODE_ENV)
console.log('VUE_APP_TITLE: ', process.env.VUE_APP_TITLE)

module.exports = {
  pluginOptions: {
    /**
     * vue-cli-plugin-style-resources-loader
     * https://github.com/nguyenvanduocit/vue-cli-plugin-style-resources-loader
     */
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, './src/assets/stylesheets/vars.scss'),
        path.resolve(__dirname, './src/assets/stylesheets/mixins.scss'),
      ],
    },
  },
}
