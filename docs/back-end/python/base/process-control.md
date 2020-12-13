## 条件控制

&emsp;&emsp;python 只有 if···else，没有 switch

基础语法：

```python
  scope = 80
  if scope > 90:
    print('good!')
  elif scope > 80:
    print('little good!')
  else:
    print('just soso!')
```
使用 and 和 or：
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

&emsp;&emsp;python 有 while 循环和 for 循环，没有 do...while 循环

+ while 循环

基础语法：

```python
  count = 1
  while count < 10:
    print(count)
    count += 1
```

+ for 循环

基础语法：

```python
  for i in range(1, 10):
    print(i)
```

## break、continue 和 pass

+ break 用于退出整个循环
+ continue 用于结束当次循环
+ pass 不做任何事情，用于占位