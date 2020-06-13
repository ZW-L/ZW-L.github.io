## 命令


### 常用命令

```powershell
# 查看文件，-a 为显示隐藏文件
$ ls -a

# 查看磁盘占用
$ df -l

# 删除文件，-r 为递归删除，-f 为强制删除(没有提示)
$ rm -rf

# 重命名文件
$ mv a.txt b.txt

# 重命名文件夹
$ mv abc cba

# 移动文件
$ mv a.txt /b

# 查看命令，安装位置等
$ whereis node
```

### 软链接

&emsp;&emsp;`/usr/local/bin` 目录下是一些全局命令，将一些命令建立软连接，就可以全局使用
```powershell
$ ln -s /root/node-v6.9.5-linux-x64/bin/node /usr/local/bin/node
```
