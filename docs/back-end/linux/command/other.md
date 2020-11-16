## 常用命令

```sh
# 发送公钥到服务器
ssh-copy-id -i deploy_rsa.pub root@192.168.1.1

# ssh 连接远程服务器
ssh root@192.168.1.1

# 传输文件到服务器
rsync -az --delete ./dist root@192.168.1.1:/root/dist
```
