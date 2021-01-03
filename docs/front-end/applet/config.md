## npm

1. 微信开发者工具界面，“详情” -> “本地设置” -> 勾选 “使用 npm 模块”
2. 在项目根目录生成 package.js，安装模块
3. 微信开发者工具菜单栏，“工具” -> “构建 npm”



## vant-ui

参考[Vant Weapp](https://youzan.github.io/vant-weapp/#/quickstart)：
1. 安装
```sh
npm i @vant/weapp -S --production
# 或
yarn add @vant/weapp --production
```
2. 微信开发者工具菜单栏，“工具” -> “构建 npm”
3. 修改 tsconfig.json（视情况而定）
4. 将 app.json 中的 "style": "v2" 去除，小程序的新版基础组件强行加上了许多样式，难以去除，不关闭将造成部分组件样式混乱
5. 引入组件：配置 app.json
```json
"usingComponents": {
  "van-button": "@vant/weapp/button/index"
}
```





## sass

使用 Gulp 监听 sass/scss 文件变化，自动编译为 wxss：
1. 安装相关模块
```sh
# 全局安装 gulp 以使用 gulp-cli
npm i gulp -g

# 项目依赖
yarn add gulp gulp-sass gulp-rename
```
2. 配置 gulpfile.js
```js
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')

// 创建 sass 任务，监听 pages 下所有子目录内的 scss 文件
gulp.task('sass', function () {
  return gulp.src('./pages/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(rename({ extname: '.wxss' }))
        .pipe(gulp.dest('pages'))
})

// 创建 watch 任务
gulp.task('watch', function () {
  gulp.watch('./pages/**/*.scss', gulp.parallel('sass'))
})
```
3. 启动监听服务，监听文件变化
```sh
cd /project/root/path
gulp watch
```