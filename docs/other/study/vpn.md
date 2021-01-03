## v2ray





## BBR 加速

```sh
# 下载脚本
wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
# 提高权限
chmod +x bbr.sh
# 执行脚本
./bbr.sh
# 查看是否成功启动
lsmod | grep bbr
```



## ios

使用 IPsec/L2TP 脚本搭建
在这里感谢hwdsl2提供的脚本，我们在连接到服务器后使用如下命令：

安装 wget ：
```sh
# 安装 wget
yum install wget
# 下载脚本并安装
wget https://git.io/vpnsetup-centos -O vpnsetup.sh && sudo sh vpnsetup.sh

# 保存信息用于设置
Server IP: xxx.xx.xx.xx
IPsec PSK: xxxx
Username: xxxx
Password: xxxx
```