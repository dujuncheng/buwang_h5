'use strict'
const path = require('path')
const glob = require('glob')
const pages = {}

// 用户访问到的链接是 http://ngcc.bytedance.com/linkchat
// 打包出来的路径是
// /output/linkchat/js
// /output/linkchat/index.html
// output
// html 里面请求的js 资源的文件是 //s3b.pstatp.com/cg_growth/ngcc_im_mobile/

glob.sync('./src/pages/**/index.js').forEach(appPath => {
  const chunk = appPath.split('./src/pages/')[1].split('/index.js')[0]
  pages[chunk] = {
    entry: appPath,
    template: path.resolve(appPath, '../index.html'),
    chunks: ['chunk-vendors', 'chunk-common', chunk]
  }
})

module.exports = {
  pages,
  publicPath: '/buwang_h5',
  outputDir: path.resolve(__dirname, './output'),
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        globalVars: {
          '@base': '23.4375rem',
          '@primary-color': '#338AFF'
        }
      }
    }
  },
  configureWebpack: {
    devtool: 'inline-source-map',
    resolve: {
      alias: {
        '!': path.join(path.resolve(__dirname), './src'),
        '#': path.resolve(__dirname, './src/common'),
        '@': path.resolve(__dirname, './src/pages')
      }
    }
  },
  chainWebpack: config => config.resolve.symlinks(false),
  devServer: {
    open: true,
    disableHostCheck: true,
    port: 80,
    proxy: {
      "/notebook": {
        target: 'https://dujuncheng.com/',
        changeOrigin: true,
        logLevel: 'error',
        onProxyReq: function(proxyReq) {
       
          proxyReq.setHeader("Cookie", "_x_session=MTYwMDgzMDUzMjAzODE3XzE2MDA4MzA1MzIwMzg3");
        }
      },
    }
  }
}
