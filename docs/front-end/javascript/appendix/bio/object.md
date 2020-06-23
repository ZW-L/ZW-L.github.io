## 简介

+ 参考 [MDN Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)




## 属性

+ 它们都是在 `Object` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`prototype`|特定的函数，用于创建一个对象的原型|-|
|`assign()`|通过复制一个或多个对象来创建一个新的对象|-|
|`create()`|使用指定的原型对象和属性创建一个新对象|-|
|`defineProperty()`|给对象添加一个属性并指定该属性的配置|-|
|`defineProperties()`|给对象添加多个属性并分别指定它们的配置|-|
|`getOwnPropertyDescriptor()`|返回对象指定的属性配置|-|
|`getOwnPropertyDescriptors()`|返回对象所有的属性配置|-|
|`freeze()`|冻结对象，不能删除或更改任何属性|-|
|`seal()`|密封对象，不能删除对象的属性|-|
|`preventExtensions()`|禁止对象扩展，不能进行任何扩展|-|
|`isFrozen()`|判断对象是否已经冻结|-|
|`isSealed()`|判断对象是否已经密封|-|
|`isExtensible()`|判断对象是否可扩展|-|
|`getOwnPropertyNames()`|返回包含了指定对象所有的可枚举或不可枚举的属性名的数组|-|
|`getOwnPropertySymbols()`|返回包含了指定对象自身所有的 `Symbol` 属性的数组|-|
|`getPrototypeOf()`|返回指定对象的原型对象|<Badge>6</Badge>|
|`setPrototypeOf()`|设置对象的原型（即内部 `[[Prototype]]` 属性）|<Badge>6</Badge>|
|`is()`|比较两个值是否相同(包括 `NaN`)|<Badge>6</Badge>|
|`keys()`|返回包含所有给定对象自身可枚举属性名称的数组|<Badge>6</Badge>|
|`values()`|返回给定对象自身可枚举值的数组|<Badge>6</Badge>|
|`entries()`|返回给定对象自身可枚举属性的键值对列表|<Badge>6</Badge>|
|`fromEntries()`|把键值对列表转换为一个对象|<Badge>6</Badge>|




## 原型

+ 它们都是在 `Object.prototype` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`constructor`|返回创建实例对象的 `Object` 构造函数的引用|-|
|`hasOwnProperty()`|判断某个对象是否含有指定的属性，而且此属性非原型链继承的|-|
|`isPrototypeOf()`|判断指定的对象是否在本对象的原型链上|-|
|`propertyIsEnumerable()`|判断指定属性是否可枚举|-|
|`toLocaleString()`|直接调用 `toString()`|-|
|`toString()`|返回对象的字符串表示|-|
|`valueOf()`|返回指定对象的原始值|-|