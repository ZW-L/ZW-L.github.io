## 简介

+ [path](http://nodejs.cn/api/path.html) 模块提供用于处理文件路径和目录路径的实用工具




## 属性

+ `path.delimiter: ':' | ';'`：返回操作系统特定的路径定界符（Windows 为 `;`）
+ `path.sep: '\' | '/'`：返回操作系统特定的路径片段分隔符（Windows 为 `\`）
+ `path.posix: object`：提供对 `path` 方法的 POSIX 特定实现的访问
+ `path.win32: object`：提供对 `path` 方法的 Windows 特定实现的访问




## 方法

+ `path.basename(path: string, ext?: string): string`：返回指定路径的最后一部分，即最后一个 `/` 之后的内容（指定了 `ext` 参数后返回值不包含 `ext` 部分）
+ `path.dirname(path: string): string`：返回指定路径的目录名，即最后一个 `/` 之前的内容
+ `path.extname(path: string): string`：返回指定路径的扩展名，即最后一个 `.` 以及之后的内容
+ `path.parse(path: string): object`：返回一个表示指定路径的各个属性的对象
+ `path.format(pathObj: object): string`：返回路径字符串，与 `parser()` 相反
+ `path.isAbsolute(path: string): boolean`：检测是否为绝对路径
+ `path.relative(from: string, to: string): string`：根据当前工作目录返回相对路径
+ `path.join(...path: string): string`：使用操作系统特定的路径定界符将所有路径片段连接
+ `path.normalize(path: string): string`：将给定的路径规范化
+ `path.resolve(...path: string)`：将路径或路径片段的序列解析为绝对路径
+ `path.toNamespacedPath(path: string): string`：返回指定路径的等效名称空间前缀路径（Windows）