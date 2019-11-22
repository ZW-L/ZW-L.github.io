## npm 常用命令


### 设置

```shell
# 初始化 package.json 文件
$ npm init

# 查看 npm 配置，包括 npm 源等信息
$ npm config list

# 设置镜像源
$ npm set registry https://registry.npm.taobao.org/
$ npm config set registry https://registry.npmjs.org

```


### 安装包

```shell
# 根据 package.json 安装全部依赖包
$ npm install
$ npm i # 缩写

# 安装指定包
$ npm install jquery

# 安装指定版本，默认为 @latest 安装最新版本
$ npm install jquery@latest # 最新版本
$ npm install jquery@1.7.1 # 指定版本
$ npm install jquery@1.7 # 1.7 版本下的最后一个版本

# 全局安装，默认为局部安装
$ npm install jquery -g

# 安装至 devDependencies
$ npm install jquery --save-dev
$ npm install jquery -D # 缩写

# 安装至 dependencies
$ npm install jquery --save
$ npm install jquery -S # 缩写
```