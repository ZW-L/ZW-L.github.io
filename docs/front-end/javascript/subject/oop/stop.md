## 对比

+ 防篡改对象：
  + 不可扩展的对象：**不能添加成员**，但是仍**可以删除、修改已有成员**
  + 密封的对象：**不能添加、删除成员**，但是仍**可以修改已有成员**
  + 冻结的对象：**不能添加、删除、修改成员**，但是仍**可以通过 `[[Set]]` 描述符修改已有成员**
+ 相关 API：
  + `Object.preventExtensions()`：防止对象扩展
  + `Object.seal()`：密封对象
  + `Object.freeze()`：冻结对象
  + `Object.isExtensible()`：指示对象是否可扩展
  + `Object.isSealed()`：指示对象是否被密封
  + `Object.isFrozen()`：指示对象是否被冻结

::: tip 说明：
+ 一旦将对象定义为防篡改后无法撤销
+ 若进行对象禁止的操作，非严格模式下会忽略，严格模式下会抛出错误
+ 密封对象会将对象成员的 `[[Configurable]]` 特性设置为 `false`
+ 冻结对象会将对象成员的 `[[Configurable]]`/`[[Writable]]` 特性设置为 `false`
+ 因为密封的对象也是不可扩展的，所以通过 `Object.isExtensible()` 也会返回 `false`
+ 因为冻结的对象也是不可扩展且是密封的，所以通过 `Object.isSealed()`/`Object.isExtensible()` 分别返回 `true` 和 `false`
:::



## 不可扩展的对象

```js
const person = {
  name: 'Alice'
}

Object.preventExtensions(person)

person.age = 24         // 严格模式下会报错 TypeError
console.log(person.age) // undefined
console.log(Object.isExtensible(person))    // false
```



## 密封的对象

```js
const person = {
  name: 'Alice'
}

Object.seal(person)

person.age = 24
console.log(person.age)                   // undefined
delete person.name
console.log(person.name)                  // Alice
person.name = 'Anna'
console.log(person.name)                  // Anna
console.log(Object.isSealed(person))      // true
console.log(Object.isExtensible(person))  // false
```



## 冻结的对象

```js
const person = {
  name: 'Alice'
}

Object.freeze(person)

person.age = 24
console.log(person.age)                   // undefined
delete person.name
console.log(person.name)                  // Alice
person.name = 'Anna'
console.log(person.name)                  // Alice
console.log(Object.isFrozen(person))      // true
console.log(Object.isSealed(person))      // true
console.log(Object.isExtensible(person))  // false
```