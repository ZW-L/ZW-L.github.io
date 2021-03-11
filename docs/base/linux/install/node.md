## 简介

+ Centos 下安装



## node

+ 参考：
  + [centos下安装nodejs的三种方式](https://blog.csdn.net/bbwangj/article/details/82253785)

+ 法1：官网下载
```sh
# 选择版本下载后上传到服务器
rsync -az node-v10.9.0-linux-x64.tar.xz username@host:/root
# 解压
tar -xvf node-v10.9.0-linux-x64.tar.xz
# 重命名
mv node-v10.9.0-linux-x64 node
# 移动到其他地方保存
mv node /usr/local
# 建立软连接
ln -s /usr/node/bin/npm /usr/local/bin/
ln -s /usr/node/bin/node /usr/local/bin/
```

+ 法2：nvm 安装
```sh
# 安装 nvm
curl https://raw.github.com/creationix/nvm/master/install.sh | sh
# 安装 node
nvm install stable
# 查看
node -v
```

+ 法3：yum 安装
```sh
# 执行脚本
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
# 安装 node
yum install -y nodejs
# 查看
node -v
```



## cnpm


```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```



## pm2


```sh
cnpm install -g pm2
```
