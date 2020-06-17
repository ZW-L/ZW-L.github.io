## 管理单击鼠标右键显示的菜单

&emsp;&emsp;在 win10 系统中，选中文件/文件夹时右键会显示一系列的选项，有些选项是系统默认自带的，而有些选项则是安装软件之后附加的(WPS等)。其实，这些都可以修改系统的注册表来添加/删除某些选项。

&emsp;&emsp;打开注册表方式：`win + r` 启动运行窗口后键入 `regedit` ，单击回车。

### 右键文件新增选项：以记事本方式打开

效果图：

![](D:\截图\临时\Snipaste_2019-03-19_11-27-08.png)

步骤：

1.打开注册表，依次找到 `计算机\HKEY_CLASSES_ROOT\*\shell` 目录

2.右键新建项，这里为 OpenTxtFile (随便写，能区分就行)；接着，选中新建的项，右键新建 `字符串值`，名字填 `Icon`(必须)，在右边可以看到项，修改值；第一项名称为默认，指的是在右键菜单中显示的文本，不填则为左边的项名 OpenTxtFile , `Icon` 的值指定右键菜单中文本前面的图标路径，填应用程序的启动路径名即可

![](D:\截图\临时\Snipaste_2019-03-19_11-23-09.png)

3.选中 OpenTxtFile ，右键新建项，名字为 `command`(必须)，展开 OpenTxtFile  后，选中 command 后在右边修改值，这里的值是应用程序的路径和附加的参数 `%1`

![](D:\截图\临时\Snipaste_2019-03-19_11-26-26.png)

4.选中任意一个文件，右键菜单就会显示一个新的选项

5.以同样方式可以添加选项用 Sublime Text 3 / VS Code 等编辑器打开文件，而在`计算机\HKEY_CLASSES_ROOT\*\shell`该目录下定义的菜单选项会出现在**系统所有文件**的右键菜单中


### 右键文件夹新增选项：作为VS Code项目打开

效果图：

![](D:\截图\临时\Snipaste_2019-03-19_13-10-58.png)



步骤：

1.打开注册表，依次找到 `计算机\HKEY_CLASSES_ROOT\Directory\shell` 目录

2.设置与上述相同，可以额外添加一个项 `Extended`，值为空，这样**只有在按下 shift 键再右键后选项才会出现在菜单中**

![](D:\截图\临时\Snipaste_2019-03-19_13-14-37.png)

![](D:\截图\临时\Snipaste_2019-03-19_13-15-08.png)

### 右键文件夹空白处新增选项：作为VS Code项目打开

效果图：

![](D:\截图\临时\Snipaste_2019-03-19_13-24-02.png)

步骤：

1.打开注册表，依次找到 `计算机\HKEY_CLASSES_ROOT\Directory\background\shell`目录

2.设置与上述相同，但是将 `command` 的参数改为 `%V`

![](D:\截图\临时\Snipaste_2019-03-19_13-23-02.png)

![](D:\截图\临时\Snipaste_2019-03-19_13-23-31.png)


### 总结

+ 首先，`win + r` 启动运行窗口后键入 `regedit` 可以快速打开注册表。一些相关的注册表目录：

|选项|说明|
|-|-|
|HKEY_CLASSES_ROOT\\*\shell|系统所有文件|
|HKEY_CLASSES_ROOT\Directory\shell| 系统所有目录，不包括驱动器|
|HKEY_CLASSES_ROOT\Directory\Background\shell|系统所有文件夹空白处|
|HKEY_CLASSES_ROOT\AllFilesystemObjects\shell|系统所有文件和文件夹，不包括驱动器|
|HKEY_CLASSES_ROOT\Folder\shell|系统所有文件夹，包括驱动器(C盘那些)|

+ 可以给项添加字符串值：名为 `Extended`，值为空。来控制**同时按下 shift 键时才在右键菜单中出现项**，使单纯右键时显示内容保持简洁
+ 可以在 `HKEY_CLASSES_ROOT\AllFilesystemObjects\shell` 目录下添加选项，这样**对于所有文件和文件夹右键时都会出现选项**，但是右键空白处不会出现选项