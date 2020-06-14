## 简介

+ .gitignore 文件一般放在项目根目录
+ 用于指示会被 git 忽略的文件，一般为与不用提交的文件(如依赖库、敏感文件等)
+ 远程仓库一般为准备了各种配置文件，只需要组合一下就可以使用了
+ 也可以自己添加忽略的文件，使用相对路径
```sh
/node_modules # 忽略 npm 模块
deploy.sh     # 忽略部署脚本
```


## 参考

+ [GitHub gitignore 通用配置列表](https://github.com/github/gitignore)