const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": { //  /api 의 경로 밑에 있는 것들을 다 포함
        target: 'http://localhost:9090',
        changeOrigin: true,
      },
    },
  }
})
