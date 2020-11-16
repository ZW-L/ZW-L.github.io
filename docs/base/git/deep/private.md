## 简介

+ 搭建私有的 git 仓库



## 入门

+ 服务器配置
```sh
# 安装 git
sudo apt-get install git

# 创建新用户(名为 git)来管理 git
sudo adduser git

# 使用证书登陆，将信任的用户的公钥拷贝到 /home/git/.ssh/authorized_keys
# 客户端可使用 scp 命令或其他方式上传公钥
cat id_rsa.pub > authorized_keys
rm -f id_rsa.pub

# 在 /svr 目录下创建空仓库(--bare 参数)
sudo cd /svr && git init --bare sample.git

# 修改权限
sudo chown -R git:git sample.git

# 编辑 /etc/passwd 防止 git 用户登陆 shell
vim /etc/passwd
git:x:1001:1001:,,,:/home/git:/usr/bin/git-shell # 之前为 bash
```

+ 本地客户端
```sh
# 补充：上传本机公钥，server 替换为服务器或 ip 地址
scp ~/.ssh/id_rsa.pub git@server:/home/git/.ssh

# 确保已安装 git，server 替换为服务器或 ip 地址
git clone git@server:/srv/sample.git
touch README
git add README
git commit -m "add readme"
git push origin master
```