---
sidebarDepth: 2
---

## 模块和包

### 简介

+ **包**：多个模块放在一个目录下就构建成一个包，包内可包含子包，但每个包的根目录下必须包含 `__init__.py` 文件
+ **模块**：逻辑上来说就是一组功能的组合，其中可被认为是模块的情况：
  + 一个 python 文件
  + 包好一组模块的包
  + 已被编译为共享库/dll 的 c/c++ 扩展
  + 用 c 编写并链接到 python 解释器的内置模块
+ 导入模块时 python 解释器的规则：
  1. 在所运行的程序的目录下寻找
  2. 在 python 的安装路径下的标准库目录下寻找
  3. 在操作系统环境变量下的 PYTHONPATH 所包含的路径内寻找



### 创建一个包

+ 目录：
```
|- mypkg\
  |- __init__.py
  |- hello.py
  |- math\
    |- __init.py__
    |- calc.py
```

+ hello.py
```py
def sayHi(name):
  print('Hello ' + name)

person = {
  'name': 'Alice',
  'age': 26
}
```

+ calc.py
```py
def add(a, b):
  return a + b

def sub(a, b):
  return a - b
```

::: tip 说明
+ 创建了一个 mypkg 包，它包含一个 hello 模块和一个 math 子包，math 子包内包含一个 calc 模块
+ 在各个包的根目录下创建 `__init.py__` 文件，保留为空文件即可
:::



## 导入模块

+ 第一次导入模块时会将模块名加载到内存，后续的 `import` 语句仅是对已经加载到内存中的模块对象增加了一次引用，不会重新执行模块内的语句
+ 有两种导入语法：
  + `import`：导入模块
  + `from ... import ...`：导入模块或模块内成员
+ 当导入的模块名/变量名过长或命名冲突时，可以使用 `as` 重命名
```py
import mypkg as m

m.hello.sayHi('Alice')  # Hello Alice
```

::: tip 说明
+ `from ... import ...` 的功能比 `import` 强，因为它还能选择性地导入某个模块的成员
+ `import` 的语法格式：
  + 以模块名结尾：`import pkg1.pkg2.···.module_name`
  + 以包名结尾：`import pkg1.pkg2.···.pkgN`
+ `from ... import ...` 的语法格式：
  + 以模块名结尾：`from pkg1.pkg2.···.pkgN import module_name`
  + 以包名结尾：`from pkg1.pkg2 import pkg3`
  + 以变量结尾：`from pkg1.pkg2.module_name import calc`
+ 实际上包是一个组织了众多模块的模块，因此 `__init.py__` 文件不可缺省
:::

::: danger 当导入本地模块(自定义模块)时，由于模块的解释规则，需要指示本地模块的路径，解释器才会解释到该路径下，可以用以下方式修改路径：
+ 在程序中，导入本地模块前添加以下内容，为程序添加临时的解释路径：
```py
import sys

sys.path.append(r'module_path')
# 接着再导入本地模块
```
+ 在 Python 安装目录下的 \Lib\site-packages 文件夹中建立一个 .pth 文件，内容为本地模块的绝对路径
```
/Users/seven/mypkg
或
E:\\seven\\Python\\mypkg
```
+ 将本地模块拷贝到 python 安装目录下储存内置模块的目录下(不太建议)
:::



### 导入模块

+ 导入单个模块
```py
import mypkg
import mypkg.hello        # 相当于 from mypkg import hello
import mypkg.math.calc
```

+ 一次性导入多个模块：不建议的方式，使用多行导入时可读性更强
```py
import mypkg, mypkg.hello
```



### 导入模块内成员

+ 使用 `from ... import ...` 的语法可以导入模块内的成员(多个成员之间用逗号隔开)
```py
from mypkg.hello import person

print(person)   # {'age': 26, 'name': 'Alice'}
```





## 管理模块

+ 使用 pip 命令：
```sh
# 安装
pip install pillow
```