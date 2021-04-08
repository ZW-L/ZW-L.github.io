## 条件控制

+ 可以使用 `if`、`elif` 和 `else`等关键字进行条件控制，但是没有 `switch` 语句
```python
scope = 80
if scope > 90:
  print('good!')
elif scope > 80:
  print('little good!')
else:
  print('just soso!')
```

+ 使用 and 和 or：
```python
a = 100
b = 20
if a > 90 and b > 10:
  print('well')

c = 10 
d = 20
if c > 10 or d > 10:
  print('well')
```




## 循环控制

+ 有 `while` 循环和 `for` 循环，没有 `do...while` 循环

:::: tabs
::: tab while

+ `while` 循环，并可以使用一些循环控制的语句
```py
count = 1
while count < 5:
  print(count)
  count += 1

# 1
# 2
# 3
# 4
```
:::

::: tab for

+ `for` 循环，使用 `for...in` 关键字和 `range()` 函数，其中 

```py
for i in range(1, 5):
  print(i)

# 1
# 2
# 3
# 4
```

+ `range(start, end, step)` 函数有三个参数：
  + start：开始，左包含，表示从 start 元素开始
  + end：结束，右不包含，结束不包含 end 元素
  + step：可选，默认为 1。指定步长，可以为负数，表示为递减。
+ `range()` 参数的默认步长是 1，因此类似 range(3, -1) 的写法是没有输出的；但是 range(3, -1, -1) 指定了负数的步长，就可以按递减顺序输出结果了
:::
::::



### 循环控制

+ `continue`：结束本轮循环，继续下一轮循环
+ `break`：结束整个循环，如果外面还有循环则执行外面的循环
+ `pass`：空语句，一般用于占位(防止代码报错停止，当需要添加代码时再进行编辑)，还能用于分支、异常捕获和函数等
+ `else`：循环完成后执行的语句块，若因 `break` 跳出则不会执行该语句块
+ CTRL + C：在命令行中取消无限循环

**continue & break & pass:**
```py
for i in range(1, 6):
  if (i == 1):
    pass  # 跳过，但仍会执行 print(1)
  if (i == 3):
    continue  # 跳过，不会执行 print(3)
  if (i == 4):
    break  # 跳出循环，不再执行任何内容
  print(i)

# 1
# 2
```

**else:**
```py
for num in range(30, 40):
  for i in range(2, num):
    if num % i == 0:
      j = num / i
      break
  else:
    print('%d is a prime number.' % num)

# 31 is a prime number.
# 37 is a prime number.
```

**break & else:**
```py
for i in range(1, 5):
  if i == 2:
    break
  print(i)
else:
  print('done')  # 用 break 跳出的循环，不会执行 else 语句块

# 1
```