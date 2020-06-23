## 原生函数

### apply


### call


## Undescore




## 自定义

### splat

```js
function splat(fun) {
  return function(array) {
    return fun.apply(null, array);
  };
}
```

::: tip 说明:
+ 捕获一个函数 fun，生成并返回一个新的函数（假设为 gen）；函数 gen 接收一个数组参数，把它传递给函数 fun 并执行
+ 使用：
```js
// 构造一个累加器
var addArrayElements = splat(function(x, y) { return x + y; });
addArrayElements([1, 2]); // 3
```
:::

### unsplat

```js
function unsplat(fun) {
  return function() {
    return fun.call(null, _.toArray(arguments));
  };
}
```

::: tip 说明:
+ 捕获一个函数 fun，生成并返回一个新的函数（假设为 gen）；函数 gen 接收任意数量的参数，把这些参数传递给函数 fun 并执行
+ 使用：
```js
// 构造一个接收任意数量参数的 join()
var joinElements = unsplat(function(array) { return array.join(' '); });
joinElements(1, 2); // '1 2'
```
:::