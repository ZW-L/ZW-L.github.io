## 初始化

+ `git init`：初始化 git 仓库(前提是安装了 git)，此时会创建一个空的 git 仓库
```sh
git init
```



## 配置

+ `git config`：配置命令，提交前必须设置一个用户名和邮箱，提交时用户名和邮箱会自动添加到提交记录中
```sh
git config -l     # 查看所有配置
git config --global user.name "Alice"               # 全局配置用户名
git config --global user.email "Alice@example.com"  # 全局配置用户邮箱
```