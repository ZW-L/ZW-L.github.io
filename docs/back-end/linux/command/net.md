## 常用命令

+ `ifconfig`
+ `scp`
+ `netstat`
+ `traceroute`
+ `telnet`
+ `wget`

## ifconfig

&emsp;&emsp;用于配置网络或显示当前网络接口。

**语法：**

```powershell
ifconfig [option] [interface] [inet|up|down|netmask|addr|broadcast]
```

**选项：**

选项|说明
-|-
-a|显示所有的网络接口信息，包括活动的和非活动的
-s|仅显示每个接口的摘要数据，是有关接口活动性的
-v|若某个网络接口发生错误，则返回错误信息

**说明：**

+ `interface`: 网络接口名
+ `inet`:
+ `up`: 激活一个网络接口
+ `down`: 与 `up` 相反，使指定的网络接口无效
+ `netmask`:为一个指定的网络接口指定子网掩码
+ `addr`: 为网络接口指定 `IP` 地址
+ `broadcast`: 为指定的接口设置广播地址


## scp

&emsp;&emsp;即 `secure copy`，用于将文件或目录从一个 Linux 系统复制到另一个 Linux 系统，传输数据时使用 `SSH` 协议。

**语法：**

+ 将远程 `Linux` 系统上某个文件或目录复制到本地 `Linux` 系统：

```powershell
scp 远程用户名@ip地址:文件的绝对路径 本地Linux系统路径 
```

+ 将本地的某个文件或者目录复制到远程 `Linux` 系统的某个路径下

```powershell
scp 本地Linux系统文件路径 远程用户名@ip地址:远程系统文件的绝对路径
```

## netstat

&emsp;&emsp;用于显示本机网络连接、运行端口和路由表等信息。

**语法：**

```powershell
netstat [option]
```

**选项：**

选项|说明
-|-
-a|显示本机所有连接和监听端口
-n|以网络 IP 地址的形式显示当前建立的有效连接和端口
-r|显示路由表信息
-s|显示按协议的统计信息
-v|显示当前的有效连接，与 `-n` 选项类似
-t|显示所有的 TCP 协议连接情况
-u|显示所有的 UDP 协议连接情况
-c<秒数>|每隔指定的时间刷新显示
-i|显示自动配置接口的状态
-l|仅显示连接状态为 `LISTEN` 的服务的网络状态
-p|显示连接对应的 PID 与程序名

## traceroute

&emsp;&emsp;用于显示网络数据包传输到指定主机的路径信息，追踪数据传输路由状况。

**语法：**

```powershell
traceroute [option] [远程主机名/IP地址] [数据包大小]
```

**选项：**

选项|说明
-|-
-i<网络接口>|使用指定的网络接口发送数据包
-n|直接使用 IP 地址而不是主机名
-v|详细显示命令的执行过程
-w<超时秒数>|设置等待远程主机回应的时间
-x|开启或者关闭对数据包的正确性检验
-s<来源 ip>|设置本地主机发送数据包的 IP 地址
-g<网关地址>|设置来源的路由网关，最多可设置 8 个

## telnet

&emsp;&emsp;通过 telnet 协议与远程主机通信或者获取远程主机对应端口的信息。

**语法：**

```powershell
telnet 主机名或IP地址 端口
```

## wget

&emsp;&emsp;用于从网络上下载某个软件。

**语法：**

```powershell
wget [下载的软件的url]
```