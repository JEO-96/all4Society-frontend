const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://43.200.22.134:8088/',
        changeOrigin: true,
        logLevel: 'debug'
      }
    },
  },
})

