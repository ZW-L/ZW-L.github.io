## 方法

+ 可选修饰符
  + re.l: 大小写不敏感
  + re.L: 本地识别匹配(locale-aware)
  + re.M: 多行匹配，影响 ^ 和 $
  + re.S: 使 . 匹配包括换行符在内的所有字符
  + re.U: 根据 Unicode 解释字符，影响 \w, \W, \b, \B
  + re.X: 给予灵活格式？

+ 常用函数
  + re.match(pattern, string, flags=0)
    + 描述：从字符串的起始位置开始匹配，成功则返回一个对象，否则为 None
    + 参数
      + pattern: 正则字符串
      + string: 目标字符串
      + flags: 标志位，控制匹配方式
    + 匹配对象方法
      + group(num=0): 匹配的整个表达式的字符串，输入多个组号则返回一个元组
      + groups(): 返回包含所有组号的元组

  + re.search(pattern, string, flags=0)
    + 描述： 返回第一个匹配的对象，否则为 None
    + 参数
      + pattern: 正则字符串
      + string: 目标字符串
      + flags: 标志位，控制匹配方式
    + 匹配对象方法
      + group(num=0): 匹配的整个表达式的字符串，输入多个组号则返回一个元组
      + groups(): 返回包含所有组号的元组

  + re.sub(pattern, repl, string, max=0)
    + 描述：以指定字符串替换匹配的内容
    + 参数
      + pattern: 正则字符串
      + repl: 要替换的内容
      + string: 目标字符串
      + max: 非负整数，指定替换次数，0 为替换所有匹配