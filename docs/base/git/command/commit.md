## 文件操作

+ `git add`：添加文件到暂存区
```sh
git add hello.txt   # 添加单个文件到暂存区
git add *.js        # 通过正则匹配添加多个文件到暂存区
git add .           # 添加所有文件到暂存区
```

+ `git rm`：从暂存区删除文件(只有在用其他方式删除文件时，该命令才可用)
```sh
echo hello world > a.txt  # 新建文件
git add .         # 添加到暂存区
rm a.txt          # 使用其他方式删除了文件
git rm a.txt      # 将文件从暂存区中删除
```

+ `git mv`：重命名一个文件，与直接 mv 执行的结果不同
```sh
# 场景1：对比 mv
echo hello world > a.txt
git add .
# mv 操作
mv a.txt b.txt
git status          # 暂存区显示 delete file：a.txt 和未跟踪的 b.txt
# git mv 操作
git mv a.txt b.txt
git status          # 暂存区只显示 new file：b.txt
```




## 提交修改

+ `git commit`：提交修改，默认会弹出一个编辑器，用于书写提交说明
  + -m 参数：快捷添加提交说明
  + -a 参数：快捷添加文件到暂存区(文件必须是之前被跟踪但修改后被移出暂存区的)
```sh
git commit
git commit -m "fix some problem"  # 快捷提交，同时添加提交说明
git commit -am "fix some problem" # 将跟踪过的文件添加到暂存区，并快捷提交
```