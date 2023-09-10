const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/page/index/main.js',
      title: 'home | アジ鯖寄付 Amazon受付',
    },
    identify: {
      entry: 'src/page/identify/main.js',
      title: 'identify | アジ鯖寄付 Amazon受付',
    },
  }
})
