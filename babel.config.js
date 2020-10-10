module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],

  // Vant 按需引入: https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
  plugins: [['import', { libraryName: 'vant', libraryDirectory: 'es', style: true }, 'vant']],
}
