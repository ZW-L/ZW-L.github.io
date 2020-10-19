## 方法

+ os.getcwd(): 返回当前工作目录，不包含文件名
+ os.system('command'): 执行命令行命令
+ os.rename(src, dst): 重命名目录或文件
+ os.remove(path): 删除文件，若是文件夹则报错
+ os.rmdir(path): 删除空目录，若非空则报错
+ os.removeddirs(path): 递归删除目录




## 案例

+ 获取路径
```py
print(os.getcwd())
```

+ 执行命令行命令
```py
os.system('python -V')
os.system('mkdir mydocs')
os.system('type nul>test.json')
os.system('echo helloworld>test.txt')
```

+ 切换工作目录
```py
import os

os.chdir('g:/')
os.system('mkdir page1')
os.chdir('g:/page1')
os.system('echo helloworld>hello.txt')
os.chdir('g:/')
os.system('mkdir page2')
os.chdir('g:/page2')
os.system('echo helloworld>world.txt')
```