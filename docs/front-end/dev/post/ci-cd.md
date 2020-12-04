---
sidebarDepth: 2
---

## 介绍

+ 什么是 CI & CD
```
+ CI：持续集成(Continuous Integration)
+ CD：持续交付(Continuous Delivery), 持续部署(Continuous Deployment)
```

+ CI/CD 技术的意义





## Travis

+ 参考
  + [阮一峰 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)
  + [使用 Travis-ci 自动 SSH 部署 vue 代码](https://blog.csdn.net/weixin_34029680/article/details/91459017)
  + [Travis CI 设置 Push 权限配置](https://www.jianshu.com/p/f05ce2573b3c)
+ Travis 只能在 GitHub 上使用，而且访问速度较慢
+ 优点是配置相对 jenkins 来说要简单，但是可配置性较低

::: tip 用途：
+ 测试/构建并推送到分支：不需要自建服务器，适用于 github pages 或一些静态的项目；push 代码后，travis 会自动构建并 push 到指定的分支
+ 测试/构建并部署到服务器：自动构建后推送到服务器
+ 仅测试，然后执行服务器的构建和部署脚本，其余操作在服务器执行
:::


### 构建并推送到分支

1. 使用 GitHub 授权登录 [Travis](https://travis-ci.org)，并勾选需要自动构建的仓库
2. 本地安装 travis(需要使用 gem 命令，也就是要安装 Ruby)
```sh
# 使用国内 gem 源
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
# 安装
sudo gem install travis
```

3. 一系列命令
```sh
# 使用 github 授权登录，需要输入账号密码，或者使用 token
travis login --org
# cd 到项目目录，然后生成密钥
ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
# 使用 Travis 加密
travis encrypt-file deploy_rsa --add
# 删除敏感文件，这些文件不需要 push 到远程仓库
rm -f deploy_rsa deploy_rsa.pub
# 将修改添加到 git 中，这两个文件必须提交到远程仓库
git add deploy_rsa.enc .travis.yml
```

4. 配置 .travis.yml
```yml
language: node_js

# 使用的 node 版本
node_js:
- '12'

# 安装依赖前的操作，主要是解密私钥
before_install:
# 解密私钥，自动生成时 -out 后面的反斜杠需要删除
- openssl aes-256-cbc -K $encrypted_4e26a7ec6acd_key -iv $encrypted_4e26a7ec6acd_iv
  -in deploy_rsa.enc -out deploy_rsa -d
# 以下三个命令需要手动添加，用于使密钥生效(暂时看不懂)
- eval "$(ssh-agent -s)"
- chmod 600 deploy_rsa
- ssh-add deploy_rsa

# 安装依赖
install:
- npm install

# 执行构建命令(取决与 package.json 的设置)
script:
- npm run docs:build

# 主要是初始化 git 仓库，并提交、推送到指定分支
after_success:
- cd ./docs/.vuepress/dist
- git init
- git config --global user.name "Seven"
- git config --global user.email "1041214157@qq.com"
- git add .
- git commit -m "Automatically update from travis-ci"
- git push -f "git@github.com:username/repo-name.git" gh-pages  # 覆盖至某分支
```


### 构建并部署到服务器

+ 操作与上述基本相同
```sh
# cd 到项目目录，然后生成密钥
ssh-keygen -t rsa -b 4096 -C 'build@travis-ci.org' -f ./deploy_rsa
# 加密，因为解密时报错 `iv undefined`，因此这里加入了仓库名
travis encrypt-file user/your-repo deploy_rsa --add
# 发送公钥到服务器
ssh-copy-id -i deploy_rsa.pub <USER>@<HOST>
# 删除敏感文件，这些文件不需要 push 到远程仓库
rm -f deploy_rsa deploy_rsa.pub
# 将修改添加到 git 中，这两个文件必须提交到远程仓库
git add deploy_rsa.enc .travis.yml
```
+ 配置 .travis.yml
```yml
language: node_js
node_js:
- '12'
addons:
  ssh_known_hosts:
  - <Host>            # 添加说明，防止第一次登录询问是否建立连接
branch:
  only:
  - master
before_install:
- openssl aes-256-cbc -K $encrypted_db2095f63ba3_key -iv $encrypted_db2095f63ba3_iv
  -in deploy_rsa.enc -out deploy_rsa -d
- eval "$(ssh-agent -s)"
- chmod 600 deploy_rsa
- ssh-add deploy_rsa
install:
- npm install
script:
- npm run build
after_success:
- rsync -az --delete ./dist <User>@<Host>:/root/netease-music/web/dist  # 传输到服务器
```

::: tip 备注
+ travis 使用 rsync 的传输速度很慢，构建时间可能超过10分钟，因此可以选择在服务端构建：
```yml
after_success:
- .sh /root/netease-music/web/deploy.sh   # 脚本包含构建和部署的操作
```
:::



## Jenkins

