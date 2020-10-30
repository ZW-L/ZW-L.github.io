## 简介

+ 渲染函数用于代替模板语法：
```vue
<!-- 模板语法 -->
<template>
  <h1>{{ blogTitle }}</h1>
</template>

<script>
export default {
  data () {
    return {
      blogTitle: 'a blog title'
    }
  }
}
</script>

<!-- 渲染函数 -->
<script>
export default {
  data () {
    return {
      blogTitle: 'a blog title'
    }
  },
  render (h) {
    return h('h1', this.blogTitle)
  }
}
</script>
```

+ 也可以是一个 js 为后缀的文件：
```js
export default {
  name: 'item',
  data () {
    return {
      blogTitle: 'a blog title'
    }
  },
  render (h) {
    return h('h1', this.blogTitle)
  }
}
```

+ 渲染函数的参数有三个，它执行后返回一个 `VNode`：
```js
// @returns { VNode }
createElement(
  // { String | Object | Function }，必填
  // HTML 标签名、组件选项对象、resolve 上述任何一种的 async 函数
  'div',

  // { Object }，可选
  // 与模板中 attribute 对应的数据对象
  {
    // (详情见下一节)
  },

  // { String | Array }，可选
  // 子级虚拟节点 (VNodes)，由 createElement() 构建而成，
  // 也可以使用字符串来生成“文本虚拟节点”
  [
    '先写一些文字',
    createElement('h1', '一则头条'),
    createElement(MyComponent, {
      props: {
        someProp: 'foobar'
      }
    })
  ]
)
```
+ [数据对象](https://cn.vuejs.org/v2/guide/render-function.html#深入数据对象)与模板语法中的类似
+ `VNode` 必须唯一，需要重复使用时可以使用工厂函数生成





## JSX

+ JSX 能简化 `render` 函数的重复性书写
+ [JSX 插件](https://github.com/vuejs/jsx)提供 JSX 语法的支持
```sh
# 安装
npm install @vue/babel-preset-jsx @vue/babel-helper-vue-jsx-merge-props

# 配置 .babelrc
{
  "presets": ["@vue/babel-preset-jsx"]
}
```

+ 使用
```js
export default {
  name: 'item',
  data () {
    return {
      blogTitle: 'a blog title'
    }
  },
  render (h) {
    return (
      <div>
        <h1>{this.blogTitle}</h1>
        <base-input></base-input>
      </div>
    )
  }
}
```