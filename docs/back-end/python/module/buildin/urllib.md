## 方法

+ 方法
  + urllib.request.urlopen(): 打开一个 url， 返回请求内容对象
  + f.read(): 读取返回数据，若是数据文件( html 或 json 等)
  + f.getheaders(): 读取响应头所有内容，返回为一个字典
  + decode('utf-8'): 设置数据编码

+ 属性
  + f.status: 响应状态码
  + f.reason: 响应状态

```py
import urllib.request

url = 'https://api.douban.com/v2/book/2129650'
with urllib.request.urlopen(url) as f:
    data = f.read()
    print('Status: ', f.status, f.reason)
    for k, v in f.getheaders():
        print('%s: %s' % (k, v))
    print('Data: ', data.decode('utf-8'))

```