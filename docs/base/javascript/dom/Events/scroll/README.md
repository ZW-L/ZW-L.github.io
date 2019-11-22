## 事件

+ scroll

&emsp;&emsp;[scroll](https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll_event) 事件：

+ 针对可滚动的元素，如设置了 css 属性：`overflow: scroll;` ，且内部元素的内容比该元素的实际大小要大
+ 鼠标滑轮，拖拽滚动条，移动端触控，scroll 系列方法都会触发 scroll 事件


## 方法

&emsp;&emsp; 下列三个方法都会触发 `scroll` 事件：

+ scrollBy(x, y)：滚动到某个位置
+ scrollTo(x, y)：滚动到某个位置
+ scrollIntoView(alignToTop || scrollIntoViewOptions)


### scrollBy

&emsp;&emsp;[scrollBy](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollBy) 滚动到可滚动元素的某个位置。两种方式使用该方法：

+ scrollBy(x, y)
+ scrollBy(options): options 是一个对象，IE 和 Safari 对该方法兼容不好
  + top: 离顶部距离
  + left: 离左部距离
  + behavior: 'smooth' - 滚动平滑



### scrollTo

&emsp;&emsp;[scrollTo](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo) 类似 scrollBy，同样是滚动到可滚动元素的某个位置。两种方式使用该方法：

+ scrollTo(x, y)
+ scrollTo(options): options 是一个对象，IE 和 Safari 对该方法兼容不好
  + top: 离顶部距离
  + left: 离左部距离
  + behavior: 'smooth' - 滚动平滑

### scrollIntoView

&emsp;&emsp;[scrollIntoView](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) 。该方法支持三种参数形式：

+ scrollIntoView()：空参数
+ scrollIntoView(alignToTop)：布尔类型参数
+ scrollIntoView(scrollIntoViewOptions)：对象参数






## 样式


### 伪类样式

+ [::-webkit-scrollbar](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::-webkit-scrollbar) 等一些伪类可以修改 WebKit 内核的浏览器中元素滚动条的样式。

