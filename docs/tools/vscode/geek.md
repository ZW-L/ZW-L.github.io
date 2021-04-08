## 添加至终端

```sh
# 打开终端配置文件，默认为 ~/.bash_profile
vim ~/.zshrc    # 我的终端为 zsh

# 在末尾添加 VS Code 的 bin 路径
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

# 刷新配置
source ~/.zshrc

# 接着可以使用 code 命令
code      # 直接启动 VS Code
code .    # 在当前目录启动
code ~/project/path   # 打开指定目录
```