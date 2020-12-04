## 方法

+ 函数
  + 处理字符串
    + json.dumps(python-data)
    + json.loads(json-string)
  + 处理文件
    + json.dump(python-data, json-file-path)
    + json.load(json-file-path)
  + 附加参数
    + 语法： json.dump(python-data, json-file-path, ensure_ascii=False, indent=4)
    + ensure_ascii=False： 写入为非 ascii 格式，否则字符(包括中文)会以 ascii 字符写入
    + indent=4： 设置缩进
+ 转换
  + dict          <=>   object
  + list, tuple   <=>   array
  + string        <=>   string
  + int, float..  <=>   number
  + True          <=>   true
  + False         <=>   false
  + None          <=>   null


```py
# -*- coding: UTF-8 -*-
import os
import json

print(os.getcwd())
# os.system('type nul>test.json')
users = [
    {
        'name': 'Alice',
        'age': 24
    },
    {
        'name': 'Anna',
        'age': 26
    }
]
try:
    with open('test.json', 'w') as file_obj:
        json.dump(users, file_obj)
except Exception as e:
    print('Error: ' + e)
else:
    print('Write successful!')

```