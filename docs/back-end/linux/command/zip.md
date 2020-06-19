## zip/unzip

+ 将文件或目录压缩为 `.zip` 类型的文件，或者解压该类型的文件
```sh
# 压缩
zip [option] 压缩文件名 压缩文档列表

# 解压
unzip [option] 压缩文件名
```



## gzip/gunzip

+ 将文件(不能压缩目录，传递目录也只会分别压缩目录下的文件)压缩为 `.gz` 类型的文件，或者解压该类型的文件；`gunzip` 是 `gzip` 的硬链接，等同于使用 `gzip`
```sh
gzip [option] 压缩/解压缩的文件名
```




## bzip2/bunzip2

+ 将文件(不能压缩目录，传递目录也只会分别压缩目录下的文件)压缩为 `.bz2` 类型的文件，或者解压该类型的文件；`bunzip2` 是 `bzip2` 的硬链接，等同于使用 `bzip2`
```sh
bzip2 [option] 压缩/解压缩的文件名
```




## tar

+ 归档工具，对文件或目录进行打包归档成一个文件，但是不压缩
```sh
tar [主选项 + 辅助选项] 文件/目录
```




## dd

+ 转换或复制文件，同时可以对设备进行备份
```sh
dd if="input_file" of="output_file" bs="block_size" count="number"
```

::: tip 备注 
+ `if`: 输入文件，可以是设备(磁盘或磁盘分区)
+ `of`: 输出文件，可以是设备(磁盘或磁带)
+ `bs`: 指定一个 `block` 的大小，默认为 512 字节
+ `count`: `bs` 的数量
:::



## cpio

+ 通过重定向的方式将文件进行打包、备份、还原、回复；也可以解压 `.cpio` 或 `.tar` 结尾的文件
```sh
cpio [option] > 文件名/设备名
cpio [option] < 文件名/设备名
```