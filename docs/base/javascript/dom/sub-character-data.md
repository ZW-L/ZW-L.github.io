## 说明

+ 以下对象均实现了 [CharacterData](/base/javascript/dom/character-data) 抽象接口
  + `Comment`
  + `Text`

## [Comment](https://developer.mozilla.org/zh-CN/docs/Web/API/Comment)

**介绍：**

+ 代表文档中的注释

**构造函数：**

```js
const comment = new Comment(content?: String)
```


## [Text](https://developer.mozilla.org/zh-CN/docs/Web/API/Text)

**介绍：**

+ 每个文本块都有一个 `Text` 节点，随着文档内容的更改可能会创建更多的 `Text` 节点

**构造函数：**

```js
const text = new Text(content?: String)
```

**属性：**

|常量|类型|描述|
|-|-|-|
|`wholeText`|`readonly String`|相邻的文本节点的所有文本|

**方法：**

+ `splitText(offset: Number): Text`: 根据指定的偏移分隔文本节点