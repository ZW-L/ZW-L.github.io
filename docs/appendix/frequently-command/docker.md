## 命令概览

**概览：**

+ `docker pull`：拉取镜像
+ `docker images`：查看本地镜像
+ `docker create`：创建容器
+ `docker start`：运行容器
+ `docker ps`：查看容器
+ `docker exec`：在容器中执行命令
+ `docker run`：快捷创建容器
+ `docker stop`：暂停容器
+ `docker restart`：重启容器
+ `docker rm`：删除容器
+ `docker commit`：创建镜像
+ `docker push`：推送镜像


**约定：**

+ `OPTIONS`: 选项，每个命令都提供了选项进行特定/快捷操作。
+ `TAG`: 标签，同一仓库源可以有多个 `TAG`，代表这个仓库源的不同个版本，若不指定 `TAG`，默认会使用 `latest` (如`ubuntu:latest `)。


## docker pull

&emsp;&emsp;[docker pull](https://docs.docker.com/engine/reference/commandline/pull/) 命令用于从相关镜像仓库拉取镜像或仓库。

**语法：**

```powershell
docker pull [OPTIONS] NAME[:TAG|@DIGEST]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--all-tags|-a||下载仓库中所有标记的镜像
--disable-content-trust||true|跳过镜像验证
--platform|||设置平台(若服务器支持多平台)
--quiet|-q||控制台只显示简短信息(不显示详细信息)

## docker images

&emsp;&emsp;[docker images](https://docs.docker.com/engine/reference/commandline/images/) 命令用于查看本地镜像列表。

**语法：**

```powershell
docker images [OPTIONS] [REPOSITORY[:TAG]]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--all-tags|-a||显示所有镜像(默认会隐藏中间镜像)
--digests|||查看摘要
--filter|-f||根据条件过滤输出
--format|||美化输出(使用 Go 模板)
--no-trunc|||不截断输出
--quiet|-q||只显示数字 ID

## docker create

&emsp;&emsp;[docker create](https://docs.docker.com/engine/reference/commandline/create/) 命令用于创建一个新的容器。该命令的选项非常之多，这里只列出一些常用的选项。

**语法：**

```powershell
docker create [OPTIONS] IMAGE [COMMAND] [ARG...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--name|||为容器分配一个名称

## docker start

&emsp;&emsp;[docker start](https://docs.docker.com/engine/reference/commandline/start/) 命令用于启动一个或多个容器。

**语法：**

```powershell
docker start [OPTIONS] CONTAINER [CONTAINER...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--attach|-a||附加容器的 STDOUT/STDERR 和信号转发
--checkpoint|||从检查点恢复
--checkpoint-dir|||使用自定义检查点存储目录
--detach-keys|||覆盖用于分离容器的键序列
--interactive|-i||附加容器的 STDIN

## docker ps

&emsp;&emsp;[docker ps](https://docs.docker.com/engine/reference/commandline/ps/) 命令用于查看容器列表。

**语法：**

```powershell
docker ps [OPTIONS]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--all|-a||显示所有容器(默认只显示正在运行的容器)
--filter|-f||根据条件过滤输出
--format|||美化输出(使用 Go 模板)
--last|-n|-1|显示最后创建的 n 个容器(包括所有状态)
--latest|-l||显示最新创建的容器(包括所有状态)
--no-trunc|||不截断输出
--quiet|-q||只显示容器 ID
--size|-s||显示总文件大小

## docker exec

&emsp;&emsp;[docker exec](https://docs.docker.com/engine/reference/commandline/exec/) 命令用于在容器中执行命令。

**语法：**

```powershell
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--detach|-d||分离模式(在后台运行命令)
--detach-keys|||覆盖用于分离容器的键序列
--env|-e||设置环境变量
--interactive|-i||保持 STDIN 打开，即使没有连接
--privileged|||为该命令授予扩展特权
--tty|-t||分配一个伪 TTY
--user|-u||用户名或 UID (格式: `<name|uid>[:<group|gid>]`)
--workdir|-w||容器内的工作目录

## docker run

&emsp;&emsp;[docker run](https://docs.docker.com/engine/reference/commandline/run/) 命令用于创建一个新的容器并在其中执行命令。该命令的选项非常之多，这里只列出一些常用的选项。

**语法：**

```powershell
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--detach|-d||在后台运行容器并打印容器 ID
--interactive|-i||保持 STDIN 打开，即使没有连接
--name|||为容器分配一个名称
--publish|-p||将容器内部使用的网络端口映射到主机
--tty|-t||分配一个伪 TTY

## docker stop

&emsp;&emsp;[docker stop](https://docs.docker.com/engine/reference/commandline/stop/) 命令用于暂停一个或多个容器。

**语法：**

```powershell
docker stop [OPTIONS] CONTAINER [CONTAINER...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--time|-t|10|若干秒后停止该容器


## docker restart

&emsp;&emsp;[docker restart](https://docs.docker.com/engine/reference/commandline/restart/) 命令用于重启一个或多个容器。

**语法：**

```powershell
docker restart [OPTIONS] CONTAINER [CONTAINER...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--time|-t|10|若干秒后停止该容器

## docker rm

&emsp;&emsp;[docker rm](https://docs.docker.com/engine/reference/commandline/rm/) 命令用于删除一个或多个容器(在此之前必须先暂停容器)。

**语法：**

```powershell
docker rm [OPTIONS] CONTAINER [CONTAINER...]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--force|-f||强制移除正在运行的容器(使用 SIGKILL)
--link|-l||删除指定链接
--volumes|-v||删除与容器关联的卷

## docker commit

&emsp;&emsp;[docker commit](https://docs.docker.com/engine/reference/commandline/commit/) 命令用于从现有容器的更改中创建一个新的镜像。

**语法：**

```powershell
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--author|-a||作者 (例如：`“John Hannibal Smith hannibal@a-team.com”`)
--change|-c||对创建的映像应用 Dockerfile 指令
--message|-m||提交信息
--pause|-p|true|提交期间暂停容器

## docker push

&emsp;&emsp;[docker push](https://docs.docker.com/engine/reference/commandline/push/) 命令用于将镜像或仓库推送到镜像仓库。

**语法：**

```powershell
docker push [OPTIONS] NAME[:TAG]
```

**选项：**

选项|缩写|默认值|说明
-|-|-|-
--disable-content-trust	||true|跳过镜像签名