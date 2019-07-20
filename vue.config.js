const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_style', api.resolve('src/assets/style'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:8080',
    open: true
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',   //代理接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/mock'    //代理的路径
        }
      }
    }
  }
}