## 常用插件

### 前端插件

+ Emmet： 快捷生成HTML模板

+ advancedNewFile：快捷新建文件，填写路径

+ sidebarEnhancement：右键HTML文件快捷在浏览器打开

+ AutoFileName：文件路径补全提示

+ Autoprefixer：CSS 属性前缀补全

+ ColorPicker：拾色器

+ SublimeCodeIntel：JS 代码提示

  + 同时修改插件的 `Settings-Default` 中 JavaScript 部分："jQuery" ==> "javascript"

+ javascript complections：JS 基础 API 补全

+ HTML-CSS-JS Prettify：代码格式优化

+ 运行JS代码片段：


```json 
// 1. 下载安装nodejs，记录安装路径
// 2. Tools --> Build System --> New Build System：
{
    "cmd": ["C:/Program Files/nodejs/node.exe", "$file"],
    "selector": "*.js"
}
// 3.保存为 `javascript.sublime-build` ，在sublime中选择 `Build System `为 `javascript` ， `Ctrl + B` 运行 javascript文件
```

+ Sass：Sass 语法高亮
+ Sass Build：编译 Sass 文件，要安装 Ruby 和 Sass
+ Less：Less 语法高亮




### Java插件

+ 编译运行 java 文件：

  + 打开Sublime Text 3 的安装目录，找到 `Packages` 文件夹，用解压软件打开 `Java.sublime-package`（注意不要解压）
  + 找到 `JavaC.sublime-build` 文件，双击打开，将内容修改为：

  ```json
  {
      "cmd": ["javac", "$file_name", "&&", "java", "$file_base_name"], 
      "working_dir": "${project_path:${folder}}", 
      "selector": "source.java", 
      "shell": true, 
      "encoding":"utf-8" 
  }
  
  ```

  + 保存，关闭。打开 Sublime，`Ctrl + B` 运行 java 文件