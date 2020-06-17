# WAMP配置

+ 预期文件目录

  ```json
  WAMP\
    -Apache
    -PHP
    -MySQL
  ```

  将相关文件放置同一文件夹，有利于管理。

## Apache

**1. 下载**

&emsp;在官网下载压缩包，需要注意的是后面的 `VC14`，要与下载的PHP一致。

```
httpd-2.4.37-o102q-x64-vc14-r2
```

&emsp;下载完解压，拷贝`Apache24`（不同版本数字不同）到`F:\WAMP`目录下。

**2.配置**

&emsp;打开 Apache24\conf\httpd.conf 文件：

+ `ctrl + f` 搜索并修改：Define SRVROOT "F:/WAMP/Apache24"
+ 可选，修改端口号，搜索： Listen 8080 ，修改为不冲突的端口

**3.加载并启动Apache服务**

&emsp;管理员权限下启动 cmd，进入到 F:\WAMP\Apache24\bin

```
--安装apache
httpd.exe -k install
--卸载apache
httpd.exe -k uninstall
--启动apache
httpd.exe -k start
--停止apache
httpd.exe -k stop
--重启apache
httpd.exe -k restart
```

&emsp;执行报错时，根据提示用 `.\httpd` 代替 `httpd` 。

&emsp;在浏览器打开 `localhost:8080` 或 `127.0.0.1：8080`  查看服务器。

## PHP

**1.下载**

&emsp;下载与Apache关联的`VC14` 后缀的 php 压缩包:

```
php-7.1.25-Win32-VC14-x64
```

&emsp;并且，要下载 `Thread Safe` 版本，不能是 `Non Thread Safe ` 版本的。

&emsp;解压后拷贝到`F:\WAMP`目录下。

**2.配置**

+ 复制php.ini-development后重命名为php.ini，放于同一目录下
+ 修改 Apache24\conf\httpd.conf 文件：

```
在“#LoadModule watchdog_module modules/mod_watchdog.so
#LoadModule xml2enc_module modules/mod_xml2enc.so”后面添加：

PHPIniDir "D:/php-7.1.4"
AddType application/x-httpd-php .php .html .htm
LoadModule php7_module "D:/php-7.1.4/php7apache2_4.dll"

修改：
<IfModule dir_module>
    DirectoryIndex index.html index.php index.htm
</IfModule>
```

+ 修改php.ini文件：

```
找到
; On windows:
; extension_dir = "ext"
修改为：
; On windows:
extension_dir = "F:/WAMP/php-7.1.25/ext"
```

+ 修改控件：去掉 extension 前面的 `;` 即可，然后必须要<font color = "red">重启 Apache</font>。
+ 在环境变量中添加php的路径，两个

```
win10:
F:\WAMP\php-7.1.25
F:\WAMP\php-7.1.25\ext
```

**3.测试**

&emsp;在 F:\WAMP\Apache24\htdocs 下新建php文件(info.php)：

```php
<?php
  phpinfo();
?>
```

&emsp;访问文件：打开浏览器 `http://localhost:8080/info.php`，出现php配置说明则证明配置成功。

## MySQL

**1.下载**

&emsp;下载想要使用的压缩包，解压并拷贝 到`F:\WAMP`目录下：

```
mysql-5.5.62-winx64
```

**2.配置**

+ 复制my-default.ini文件后重命名为my.ini，放于同一目录下，如有多个ini文件，选择一个合适的即可(my-large.ini、my-huge.ini都可以)
+ 搜索 `[mysqld]`，在下面添加：

```
basedir = F:\WAMP\mysql-5.5.62
datadir = F:\WAMP\mysql-5.5.62/data
```

**3.安装**

&emsp;打开管理员模式的 cmd，进入目录 F:\WAMP\mysql-5.5.62\bin：

```
mysqld -install
// 出错时根据提示，使用命令 .\mysqld -install
显示如下即可：
Service successfully installed
```

**4.启动数据库**

```
-- 启动数据库
net start mysql
-- 关闭数据库
net stop mysql
-- 进入数据库
mysql -u root -p  // 接着键入密码，初始密码为空
-- 查看数据库
show databases;
-- 选择数据库
use db_name;
```

**5.添加MySQL至Path路径**

&emsp;在Path下添加:

```
F:\WAMP\mysql-5.5.62\bin
```

&emsp;这样就不用每次都进入到 mysql 的 bin 目录下，直接打开 cmd 键入命令即可启动数据库。

**6.php连接数据库**

&emsp;启动数据库和 apache 后，在 F:\WAMP\Apache24\htdocs 下新建php文件(index.php)：

```php
<?php
  $conn = mysqli_connect('localhost', 'root', 'password');
  if($conn) {
  	echo "connecting...";
  } else {
    echo "something error!";
  }
?>
```

 &emsp;接着打开 `http://localhost:8080/index.php` 查看连接是否成功（不报错误即成功）。

&emsp;若出现错误，先<font color="red">检查 php.ini文件中的 `mysqli` 是否打开，或者是打开了Apache没有重启</font>。

