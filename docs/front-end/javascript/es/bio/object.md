## 简介

+ 参考自 [MDN Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)。




## 属性

|属性|描述|版本|
|-|-|-|
|`prototype`|特定的函数，用于创建一个对象的原型-|
|`__proto__`|指向当对象被实例化的时候，用作原型的对象-|
|`Object.prototype.constructor`|返回创建实例对象的 `Object` 构造函数的引用-|




## 方法

|方法|描述|版本|
|-|-|-|
|`Object.assign()`|通过复制一个或多个对象来创建一个新的对象|-|
|`Object.create()`|使用指定的原型对象和属性创建一个新对象|-|
|`Object.defineProperty()`|给对象添加一个属性并指定该属性的配置|-|
|`Object.defineProperties()`|给对象添加多个属性并分别指定它们的配置|-|
|`Object.getOwnPropertyDescriptor()`|返回对象指定的属性配置|-|
|`Object.getOwnPropertyDescriptors()`|返回对象所有的属性配置|-|
|`Object.freeze()`|冻结对象，不能删除或更改任何属性|-|
|`Object.seal()`|密封对象，不能删除对象的属性|-|
|`Object.preventExtensions()`|禁止对象扩展，不能进行任何扩展|-|
|`Object.isFrozen()`|判断对象是否已经冻结|-|
|`Object.isSealed()`|判断对象是否已经密封|-|
|`Object.isExtensible()`|判断对象是否可扩展|-|
|`Object.getOwnPropertyNames()`|返回包含了指定对象所有的可枚举或不可枚举的属性名的数组|-|
|`Object.getOwnPropertySymbols()`|返回包含了指定对象自身所有的符号属性的数组|-|
|`Object.getPrototypeOf()`|返回指定对象的原型对象|<font color="orange">ES6</font>|
|`Object.setPrototypeOf()`|设置对象的原型（即内部 `[[Prototype]]` 属性）|<font color="orange">ES6</font>|
|`Object.is()`|比较两个值是否相同所有 `NaN` 值都相等（这与 `==` 和 `===` 不同）|<font color="orange">ES6</font>|
|`Object.keys()`|返回包含所有给定对象自身可枚举属性名称的数组|<font color="orange">ES6</font>|
|`Object.values()`|返回给定对象自身可枚举值的数组|<font color="orange">ES6</font>|
|`Object.entries()`|返回给定对象自身可枚举属性的键值对列表|<font color="orange">ES6</font>|
|`Object.fromEntries()`|把键值对列表转换为一个对象|<font color="orange">ES6</font>|
|`Object.prototype.hasOwnProperty()`|判断某个对象是否含有指定的属性，而且此属性非原型链继承的|-|
|`Object.prototype.isPrototypeOf()`|判断指定的对象是否在本对象的原型链中|-|
|`Object.prototype.propertyIsEnumerable()`|判断指定属性是否可枚举|-|
|`Object.prototype.toLocaleString()`|直接调用 `toString()`|-|
|`Object.prototype.toString()`|返回对象的字符串表示|-|
|`Object.prototype.valueOf()`|返回指定对象的原始值|-|


