## 介绍

[HTMLElement](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement)：

+ 继承并扩展了 `Element` 接口，表示所有的 `HTML` 元素
+ 所有 `HTML` 元素都直接或简介实现了 `HTMLElement` 接口

## 属性

### 尺寸

|属性|类型|说明|
|-|-|-|
|`offsetWidth`|`readonly NUmber`|元素的布局宽度|
|`offsetHeight`|`readonly NUmber`|元素的布局高度|
|`offsetLeft`|`readonly NUmber`|元素的左上角距离其父元素的左上角的水平偏移|
|`offsetTop`|`readonly NUmber`|元素的左上角距离其父元素的左上角的垂直偏移|
|`offsetParent`|`readonly Element`|元素定位时相对的父元素|

::: tip 说明：
+ `offsetWidth`/`offsetHeight` 在各浏览器的表现可能不一致
+ `offsetWidth`/`offsetHeight` 表示元素的布局宽/高，包括元素的内边距(`padding`)、边框(`border`)、滚动条
+ 利用 `offsetLeft`/`offsetTop`/`offsetParent` 创建一个递归方法，获取元素相对于文档左上角的偏移：
```js
function getOffsetRoot(element) {
  let left = element.offsetLeft
  let top = element.offsetTop
  const parent = element.offsetParent

  if (parent) {
    const [c_left, c_top] = getOffsetRoot(parent)
    left += c_left
    top += c_top
  }

  return [left, top]
}
```
:::

### 其他

|属性|类型|说明|
|-|-|-|
|`accessKeyLabel`|`readonly String`|元素访问的快捷键的字符串|
|`dataset`|`readonly 	DOMStringMap`|元素的自定义属性|
|`isContentEditable`|`readonly Boolean`|指示元素的内容是否可编辑|
|`accessKey`|`String`|获取/设置访问元素的快捷键|
|`contentEditable`|`String`|获取/设置元素的可编辑状态|
|`contextMenu`|`HTMLMenuElement`|获取/设置元素的右键菜单|
|`dir`|`String`|获取/设置元素的方向(取值 `auto`/`ltr`/`rtl`)|
|`draggable`|`Boolean`|获取/设置元素是否可拖拽|
|`hidden`|`Boolean`|获取/设置元素是否隐藏|
|`lang`|`String`|获取/设置元素属性、文本、内容的语言|
|`style`|`CSSStyleDeclaration`|获取/设置元素的 `style` 属性|
|`tabIndex`|`Number`|获取/设置元素的 `tab` 键控制次序|
|`title`|`String`|获取/设置元素的 `title` 属性|
|`itemScope`|`Boolean`||
|`itemId`|`String`||
|`dropzone`|`DOMSettableTokenList`||
|`itemType`|`DOMSettableTokenList`||
|`itemRef`|`DOMSettableTokenList`||
|`itemProp`|`DOMSettableTokenList`||
|`itemValue`|`Object`||
|`properties`|`HTMLPropertiesCollection`||
|`spellcheck`|`Boolean`||


::: tip 其他属性：
+ 从 [Element](/base/javascript/dom/element) 对象继承了属性
+ 从 `GlobalEventHandlers` 接口扩展了属性
:::


## 方法

+ 从 [Element](/base/javascript/dom/element) 对象继承了方法
+ 从 `GlobalEventHandlers` 接口扩展了方法