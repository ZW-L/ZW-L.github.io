## vue-cli


### vue.config.js

```js
module.exports = {
  // 
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  // 代理服务器
  devServer: {
    proxy: {
      '/api': { // 请求发送至 /api 下时相当于请求 http://localhost:4000
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 打包时请求路径重命名
          '^/api': '/',
        },
      },
      '/foo': {
        target: 'http://localhost:5000'
      }
    }
  },
  // 
  chainWebpack: config => {
    // 设置路径别名
    config.resolve.alias
      .set('~api', resolve('src/api'))
      .set('~css', resolve('src/assets/css'))
      .set('@', resolve('src'))
      .set('@discover', resolve('src/views/discover'))
      .set('@friend', resolve('src/views/friend'))
      .set('@my', resolve('src/views/my'));
  },
};
```