const headConfig = require('./config/head')
const pluginsConfig = require('./config/plugins')
const navConfig = require('./config/nav')
const sidebarConfig = require('./config/sidebar/index')

module.exports = {
  title: 'Web Docs',
  description: '一份以手册为主的 Web 开发文档',
  base: '/',                // '/' will deploy to http://my-server/; '/a' will deploy to http://my-server/a/
  head: headConfig,         // 注入到当前页面的 HTML <head> 中的标签
  plugins: pluginsConfig,   // 插件
  themeConfig: {
    logo: '/image/logo.png',   // logo
    lastUpdated: '最后更新于',  // 显示最后更新时间
    nav: navConfig,           // 导航栏
    sidebar: sidebarConfig,   // 边栏
  }
}