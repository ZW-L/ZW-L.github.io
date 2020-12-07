## 参考

+ [GitHub gitignore 通用配置列表](https://github.com/github/gitignore)



## 简介

+ .gitignore 文件一般放在项目根目录
+ 用于指示会被 git 忽略的文件，一般为与不用提交的文件(如依赖库、敏感文件等)
+ 远程仓库一般为准备了各种配置文件，只需要组合一下就可以使用了
+ 也可以自己添加忽略的文件，使用相对路径
```sh
node_modules  # 忽略 npm 模块
/dist         # 忽略打包目录
/config       # 忽略配置文件

# 忽略本地环境配置文件
.env.local
.env.*.local

# 忽略日志文件
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# 编辑器相关配置文件
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```