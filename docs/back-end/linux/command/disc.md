## 常用命令
+ `df`
+ `du`
+ `fsck`
+ `sync`
+ `eject`
+ `mount`/`umount`

## df

&emsp;&emsp;用于检查 Linux 系统的磁盘空间占用情况。

**语法：**

```powershell
df [option]
```

**选项：**

选项|说明
-|-
-h|已容易理解的格式输出分区占用情况
-k|以 KB 大小为单位输出分区占用情况
-m|以 MB 大小为单位输出分区占用情况
-a|列出所有的文件系统分区，包括 0 大小的文件系统分区
-i|列出文件系统分区的 inode 信息
-T|显示磁盘分区的文件系统类型

## du

&emsp;&emsp;用于文件或目录所占用的磁盘空间情况。

**语法：**

```powershell
du [option] 文件/目录
```

**选项：**

选项|说明
-|-
-s|显示文件或整个目录的大小，单位为 KB
-b|以字节为单位显示文件大小或者显示目录下所有文件的大小
-sh|以人性化的格式显示文件或者目录大小
-sm|以 MB 为单位显示文件或者目录大小

## fsck

&emsp;&emsp;用于检查文件系统并尝试修复错误。

**语法：**

```powershell
fsck [option] [-t <文件系统类型>] [设备名]
```

**选项：**

选项|说明
-|-
-a|自动修复文件系统，没有任何提示
-r|采取交互式的修复模式
-A|根据 `/etc/fstab` 配置文件的内容，检查文件内所列的全部文件系统
-T|不显示标题信息
-V|显示指令的执行过程
-N|仅列出实际执行会进行的动作，不执行指令

## sync

&emsp;&emsp;用于强制将内存中的数据写回硬盘，以免数据丢失。

**语法：**

```powershell
sync
```

**说明：**

+ Linux 默认每隔 3s 自动执行一次 sync 操作
+ 正常关机时也会执行 sync 操作


## eject

&emsp;&emsp;用于退出抽离式设备，光驱或磁带等。

**语法：**

```powershell
eject [option] 设备名
```

**选项：**

选项|说明
-|-
-c <光驱编号>|指定光驱号
-d/--default|显示默认设备，而不是实际执行操作
-f/--floppy|退出抽取式软盘
-q/--tape|退出磁带
-r/--cdrom|退出光盘
-t/--trayclose|关闭光盘的托盘
-n/--noop|显示指定的设备名对应的设备文件路径，默认显示光盘的设备文件路径

## mount/umount

&emsp;&emsp;用于挂载/卸载指定的文件系统。

**语法：**

```powershell
mount [option] [-L<标签>] [-o<选项>] [-t<文件系统类型>] [设备名] [挂载点]
或
umount [挂载点]
```

**选项：**

选项|说明
-|-
-a|加载文件 /etc/fstab 中指定的所有设备
-n|不将加载信息记录在 /etc/mtab 文件中
-r|以只读方式加载设备
-w|默认设置。以可读写模式加载设备
-f/-v|不加载设备，仅查看 mount 的挂载状态

**其他：**

+ `-L<标签>`: 标签是磁盘分区标识的别名，可以自定义
+ `-o<选项>`: 指定加载文件系统时的选项：
  + `async`: 以异步的方式执行文件系统的输入/输出
  + `sync`: 以同步的方式执行文件系统的输入/输出
  + `atime`: 默认设置。每次存取都更新 `inode` 的存取时间
  + `auto`: 必须在 `/etc/fstab` 文件中指定此选项
  + `dev`: 刻度文件系统上的字符或块设备
  + `exec`: 可执行二进制文件
  + `suid`: 启动 `set-user-identifier` 与 `set-group-identifier` 设置位
  + `user`: 可以让一般的用户执行加载操作
  + `noatime`: 每次存取时不更新 inode 的存取时间
  + `noauto`: 无法再使用 -a 选项来加载
  + `nodev`: 默认设置。用户无法执行加载操作
  + `noexec`: 无法执行二进制文件
  + `nosuid`: 关闭 `set-user-identifier` 与 `set-group-identifier` 设置位
  + `nouser`: 默认设置。用户无法执行加载操作
  + `incharset=XXX`: 指定 mount 分区时使用的字符集
  + `codepage=XXX`: 指定 mount 分区时使用的内码表
  + `remount`: 重新加载设备
  + `ro`: 以只读模式加载
  + `rw`: 以读写模式加载
  + `defaults`: 使用默认选项(`rw`, `suid`, `dev`, `exec`, `auto`, `nouser`, `async`)
+ `-t<文件系统类型>`: 指定设备的文件系统类型，常用选项：
  + `ext3/ext2`: `Linux` 常用的文件系统
  + `msdos`: `MS-DOS` 的 `FAT`
  + `vfat`: `Windows 95/98` 的 `VFAT`
  + `nfs`: 网络文件系统
  + `iso9660`: `CD-ROM` 光盘的标准文件系统
  + `ntfs`: `Windows NT` 的文件系统
+ 设备名: 硬盘分区在 `Linux` 上的设备标识
+ 挂载点: `Linux` 系统下指定的某个目录