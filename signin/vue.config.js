const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer:{
    proxy:{
      '^/api':{
        target: 'http://localhost:3070',
        changeOrigin:true
      }
    }
  },
  transpileDependencies: true,

  pluginOptions: {
    webpack: {
      dir: [
        './webpack'
      ]
    }
  }
})
