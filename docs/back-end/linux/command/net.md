## ifconfig

+ 配置网络或显示当前网络接口
```sh
ifconfig [option] [interface] [inet|up|down|netmask|addr|broadcast]

# option:
#   -a: 显示所有的网络接口信息，包括活动的和非活动的
#   -s: 仅显示每个接口的摘要数据，是有关接口活动性的
#   -v: 若某个网络接口发生错误，则返回错误信息

# interface: 网络接口名
# inet:
# up: 激活一个网络接口
# down: 与 up 相反，使指定的网络接口无效
# netmask:为一个指定的网络接口指定子网掩码
# addr: 为网络接口指定 IP 地址
# broadcast: 为指定的接口设置广播地址
```



## netstat

+ 显示本机网络连接、运行端口和路由表等信息
```sh
netstat [option]

# option:
  # -a: 显示本机所有连接和监听端口
  # -n: 以网络 IP 地址的形式显示当前建立的有效连接和端口
  # -r: 显示路由表信息
  # -s: 显示按协议的统计信息
  # -v: 显示当前的有效连接，与 -n 选项类似
  # -t: 显示所有的 TCP 协议连接情况
  # -u: 显示所有的 UDP 协议连接情况
  # -c: 接 <秒数>，每隔指定的时间刷新显示
  # -i: 显示自动配置接口的状态
  # -l: 仅显示连接状态为 LISTEN 的服务的网络状态
  # -p: 显示连接对应的 PID 与程序名
```

+ 常用：
```sh
# 显示已占用的IP:端口、程序名、PID
netstat -ntlp
```



## traceroute

+ 显示网络数据包传输到指定主机的路径信息，追踪数据传输路由状况
```sh
traceroute [option] [远程主机名/IP地址] [数据包大小]

# option:
#   -i: 接 <网络接口>，使用指定的网络接口发送数据包
#   -n: 直接使用 IP 地址而不是主机名
#   -v: 详细显示命令的执行过程
#   -w: 接 <超时秒数>，设置等待远程主机回应的时间
#   -x: 开启或者关闭对数据包的正确性检验
#   -s: 接 <来源 ip>，设置本地主机发送数据包的 IP 地址
#   -g: 接 <网关地址>，设置来源的路由网关，最多可设置 8 个
```



## telnet

+ 通过 telnet 协议与远程主机通信或者获取远程主机对应端口的信息
```sh
telnet <主机名/IP地址> <端口>
```



## scp

+ `secure copy`：在两个主机之间复制文件或目录，传输数据时使用 `SSH` 协议
```sh
# 将远程系统上某个文件或目录复制到本地系统
scp username@host:/remote/path /local/path

# 将本地的某个文件或者目录复制到远程系统的某个路径下
scp /local/path username@host:/remote/path
```



## wget

+ 从网络上下载某个软件，支持 ftp 和 Recursive，在下载文件方面更擅长
+ 常用：
```sh
# 下载文件
wget http://www.linuxde.net/text.iso

# 下载并重命名
wget -O rename.zip http://www.linuxde.net/text.iso

# 断点续传
wget -c http://www.linuxde.net/text.iso 

# 限速下载
wget --limit-rate=50k http://www.linuxde.net/text.iso

# 显示响应头
wget --server-response http://www.linuxde.net/test.iso

# 打包下载网站
wget --mirror -p --convert-links -P /var/www/html http://man.linuxde.net/
```



## curl

+ 可自定义各种请求参数所以在模拟 web 请求方面更擅长
+ 常用：
```sh
# 打印请求内容，可用于检测一个网站是否能正常访问
curl zwlife.top

# 下载文件
curl -O http://man.linuxde.net/text.iso

# 重命名
curl -o rename.iso http://man.linuxde.net/text.iso

# 断点续传
curl -O -C - http://man.linuxde.net/text.iso

# 限速下载
curl --limit-rate 50k -O http://man.linuxde.net/text.iso

# 显示响应头
curl -I http://man.linuxde.net/text.iso
```