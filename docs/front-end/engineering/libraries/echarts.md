---
sidebarDepth: 2
---

## 文档和教程

+ [echarts](https://github.com/apache/incubator-echarts) 用于绘制图表
+ [官方教程](https://echarts.apache.org/zh/tutorial.html)



## 安装

```
npm install echarts --save
```


## 解析

### 概念

+ `echarts` 实例：挂载在 DOM 节点上，一个 `echarts` 实例独占一个 DOM 节点
+ `option` - 选项：作为 `echarts.setOption()` 的参数
+ `component` - 组件：所有内容(`option` 的大部分属性)，都被理解为 “组件”，包括：
  + xAxis（直角坐标系 X 轴）
  + yAxis（直角坐标系 Y 轴）
  + grid（直角坐标系底板）
  + angleAxis（极坐标系角度轴）
  + radiusAxis（极坐标系半径轴）
  + polar（极坐标系底板）
  + geo（地理坐标系）
  + dataZoom（数据区缩放组件）
  + visualMap（视觉映射组件）
  + tooltip（提示框组件）
  + toolbox（工具栏组件）
  + series（系列）
  + ...
+ `series` - 系列：一组数值以及将要映射成的图类型，是一个数组，因此可以在一个 `echarts` 实例上渲染多个图表
+ 组件定位：不同的组件、系列，常有不同的定位方式
  + 类 CSS 的绝对定位：`left` / `width` / `right` 控制横向，`top` / `height` / `bottom` 控制纵向(设置两项，第三项会自动推导；允许使用百分比和数值)
  + 中心半径定位：圆形组件/系列(`pie`/`sunburst`/`polar`)，可以根据 `center` 和 `radius` 决定位置
  + 其他定位：特定组件的定位
+ 坐标系：支持直角坐标系、极坐标系、地理坐标系（GEO）、单轴坐标系、日历坐标系等坐标系


### API

+ `echarts`：全局 `echarts` 实例，可以进行初始化 `echartsInstance`、销毁 `echartsInstance` 等操作
+ `echartsInstance`：通过 `echarts.init()` 创建的实例，可以通过 `echartsInstance.setOption()` 渲染数据
+ `action`：触发事件，方式为 `dispatchAction()`
+ `events`：注册监听，方式为 `echarts.on()`


### option

|选项|描述|
|-|-|
|title|标题组件|
|legend|图例组件，可以点击切换某数据是否显示|
|tooltip|提示框组件，焦点悬停在数据上方时显示|
|series|系列，可以在一个图上对同一组数据以几种形式进行渲染|
|grid|直角坐标系内的网格|
|xAxis|直角坐标系的 x 轴|
|yAxis|直角坐标系的 y 轴|
|polar|极坐标系|
|radiusAxis|极坐标系的径向轴|
|angleAxis|极坐标系的角度轴|
|radar|雷达图坐标系|
|geo|地理坐标系|
|parallel|平行坐标系|
|parallelAxis|平行坐标系的坐标轴|
|calendar|日历坐标系|
|singleAxis|单轴|
|dataZoom|区域缩放组件，用户可以控制显示哪一部分区间的数据|
|visualMap|视觉映射组件，将数据映射到视觉元素|
|axisPointer|坐标轴指示器，用于指示坐标轴当前刻度|
|toolbox|工具栏组件，可以一放置些工具|
|brush|区域选择组件，用户可以控制显示哪一部分区间的数据|
|timeline|时间线组件，可以自动播放或手动切换显示不同时期的数据|
|graphic|原生图形元素组件|
|dataset|数据集，用于集中管理数据|
|aria|无障碍交互|
|color|调色盘，渲染数据时会从调色盘提取颜色|
|backgroundColor|背景色|
|textStyle|全局字体样式|
|animation|是否开启动画|
|animationThreshold|是否开启动画的阈值|
|animationDuration|初始动画的时长，支持回调函数|
|animationEasing|初始动画的缓动效果|
|animationDelay|初始动画的延迟，支持回调函数|
|animationDurationUpdate|数据更新动画的时长|
|animationEasingUpdate|数据更新动画的缓动效果|
|animationDelayUpdate|数据更新动画的延迟，支持回调函数|
|blendMode|图形的混合模式|
|hoverLayerThreshold|图形数量阈值|
|useUTC|是否使用 UTC 时间|


::: tip 备注
+ `series` 是所有图表<font color="red">必选的属性</font>，他也可以从 dataset 选取
+ 如果想要使用默认配置(如 `tooltip`/`legend` 等)，也必需配置它们，属性值为空对象即可
```js
const option = {
  tooltip: {},
  legend: {},
  // other option
}
```
:::


### series

+ 该属性的值只能是数组，它可以指定一系列的数据对象，因此可以在同一个坐标轴上渲染多种类型的图表
+ `type` 属性是必选的，它指定了该组数组渲染的图表类型
+ `data` 属性是必选的，它指定了用于渲染图表的一组数据，也可以从外部的 `dataset` 获取
```js
const option = {
  dataset: {
    source: [
      ['product', '销量', '库存'],
      ['衬衫', 5, 45],
      ['羊毛衫', 20, 30],
      ['雪纺衫', 36, 14]
    ]
  },
  xAxis: { type: 'category' }, // 自动引用分类作为坐标轴
  yAxis: {},
  series: [
    { type: 'bar' }, // 销量
    { type: 'bar' }  // 库存
  ]
}
```
+ 很多属性(如 `tooltip`/`animation` 等)用于覆盖外部的值



## 快速使用

### 模板

```js
const echarts = require('echarts') // 引入库
require('echarts/theme/macarons') // 引入主题

const chart = echarts.init(document.getElementById('target')) // 初始化 echarts 实例
const option = { /* chart options */ } // 配置图表类型及更多选项
chart.setOption(option) // 根据选项绘制图表
```

### 柱状图

```js
const option = {
  tooltip: {}, // 使用默认的设置
  legend: {}, // 使用默认的设置
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {}, // 使用默认的设置
  series: [{
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
  }, {
    name: '库存',
    type: 'bar', // 设置为柱状图
    data: [45, 30, 14, 40, 40, 30]
  }]
}
```


### 散点图

+ 普通散点图
```js
const option = {
  tooltip: {},
  legend: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'scatter', // 设置为散点图
    data: [5, 20, 36, 10, 10, 20]
  }]
}
```
+ 带涟漪特效的散点图
```js
const option = {
  tooltip: {},
  legend: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'effectScatter', // 设置为带涟漪特效的散点图
    data: [5, 20, 36, 10, 10, 20]
  }]
}
```


### 线性图

+ `series.[i].smooth` 指定线性图的平滑程度(接收布尔值和数值，但 `true` 表示 0.5，值越大越平滑)，通过该属性可以变换折线图和平滑的曲线图
```js
option: {
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [{
    name: '预测',
    type: 'line', // 设置为线性图
    smooth: true, // 开启平滑，默认也是开启平滑
    animationDuration: 1000,
    data: [5, 20, 36, 10, 10, 20]
  }, {
    name: '实际',
    type: 'line',
    smooth: false, // 关闭平滑，变为折线图
    animationDuration: 1500,
    data: [29, 30, 20, 6, 23, 13]
  }]
}
```


### 饼状图

+ `series.[i].roseType` 用于指定特定的饼状图 -- 南丁格尔图(每块扇形的半径不同，相对于数据值而定)
+ 由于饼状图没有坐标轴，因此它的 `legend.data` 属性对应的是 `series[i].data[j].name`
```js
const option = {
  title: {
    text: '访客来源'
  },
  legend: {
    left: 'center',
    bottom: 10,
    textStyle: {
      fontSize: 10
    },
    data: ['视频广告', '邮件营销', '直接访问', '搜索引擎']
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    roseType: 'angle', // 使用南丁格尔图，缺省则为默认饼状图
    radius: '55%',
    bottom: 10,
    data: [
      { value: 835, name: '视频广告' },
      { value: 710, name: '邮件营销' },
      { value: 335, name: '直接访问' },
      { value: 400, name: '搜索引擎' }
    ]
  }]
}
```


### 雷达图

+ `radar` 属性用于描述雷达图的样式以及刻度(指示器)
+ `radar.indicator[i].name` 对应 `series.[i].data[j].name`
```js
option: {
  radar: {
    radius: '55%',
    center: ['50%', '45%'],
    indicator: [
      { name: '衬衫', max: 50 }, // name 与 series[i].data[j].name 对应
      { name: '羊毛衫', max: 50 },
      { name: '雪纺衫', max: 50 },
      { name: '裤子', max: 50 },
      { name: '高跟鞋', max: 50 },
      { name: '袜子', max: 50 }
    ]
  },
  series: [{
    type: 'radar',
    data: [{
      value: [20, 10, 30, 14, 25, 33],
      name: '视频广告'
    }, {
      value: [33, 45, 41, 28, 8, 28],
      name: '搜索引擎'
    }, {
      value: [45, 11, 6, 25, 22, 11],
      name: '邮件营销'
    }, {
      value: [12, 34, 23, 33, 45, 28],
      name: '直接访问'
    }]
  }]
}
```

### 树图

+ `series.[i].data` 属性/或子孙属性的 `name` 属性值标记为树节点
+ 在 `series` 中配置多组选项可以绘制森林
```js
option: {
  series: [{
    type: 'tree',
    data: [
      {
        name: 'Alice',
        children: [
          {
            name: 'Anna',
            children: [{ name: 'Zed' }, { name: 'Bob' }]
          },
          {
            name: 'Joy',
            children: [{ name: 'Lucy' }]
          }
        ]
      }
    ]
  }]
}
```



## 使用技巧





