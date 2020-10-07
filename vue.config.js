/*
 * Vue Configuration
 * https://github.com/eslint/eslint
 */

const path = require('path')

module.exports = {
  pluginOptions: {
    /**
     * webpack-dev-server
     * https://webpack.docschina.org/configuration/dev-server/
     */
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          ws: true,
          changeOrigin: true,
        },
        '/foo': {
          target: 'http://localhost:4001',
        },
      },
    },
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
