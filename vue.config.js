const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_style', resolve('src/assets/style'))
      .set('_common', resolve('src/common'))
      .set('_gallary', resolve('src/common/gallary'))
      .set('_static', resolve('src/assets/static'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',   //代理接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': './mock'    //代理的路径
        }
      }
    },
    open: true,
    disableHostCheck: true
  }
}