## 单独配置

&emsp;&emsp;在项目或代码根目录下执行以下命令，开始简单使用 `ESLint`。

先创建 package.json：
```shell
npm init
```

安装 ESLint：
```shell
npm install eslint --save-dev
```

创建 `.eslintrc` 或 `.eslintrc.js` (也可以自行在目录下创建文件和配置 `ESLint`)：
```shell
eslint --init
```

打开 `.eslintrc.js`：
```js
module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'rules': {
    "semi": ["error", "always"] // 也可以是 [2, "always"]
  }
};
```
其中：
+ env：指示了代码检测的环境，若 'es6' 选项缺省(或设置为 false)，则有关 'es6' 的语法都会报错
+ rules：设置错误或提醒的规则，为一个键值对，值是字符串(有些是数组)或数组(0|1|2)；该字符串(数字)指示了错误或提醒，分别为：`off`(或0, 关闭规则)、`warn`(或1, 提醒)、`error`(或2, 错误)


## 使用 Airbnb 的规则

&emsp;&emsp;ESLint 还允许引入使用其他人的配置，只需要安装相应的插件即可。执行以下命令在项目中使用 Airbnb 的配置：
```shell
npm init
npm install eslint --save-dev
// 以下四个是必须安装的包
npm install eslint-config-airbnb --save-dev
npm install eslint-plugin-import --save-dev
npm install eslint-plugin-jsx-a11y --save-dev
npm install eslint-plugin-react --save-dev
// 或者一起安装
npm i eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react -D
```
接着在 `.eslintrc.js` 中声明 `extends` 属性：
```js
module.exports = {
  'env': {
    'commonjs': true,
    'es6': true,
    'node': true
  },
  'extends': 'airbnb',
  'rules': {
    "semi": "off"  // 其中不喜欢的属性可以在这里进行覆盖
  }
};
```

## 在编辑器中

+ 在项目中配置 `ESLint`，还需要编辑器安装相关插件，比如 `VS Code` 中，要先安装 `ESLint` 插件并重启编辑器。
+ 在 `VS Code` 中，将鼠标移动到错误/提醒的地方，会显示 `Quick fix` 蓝色小字，点击打开选项，可以选择自动修改发生错误的地方。