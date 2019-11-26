## 介绍

[MDN Manifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)：

+ Web 应用程序清单(`Manifest`)是渐进式 Web 应用(PWA)技术的一部分
+ 它以 JSON 文件的形式提供了与 Web 应用程序有关的信息，该信息对于 Web 应用程序的下载是必需的，并且类似于本机应用程序
+ 部署：使用文档中的 `<link>` 元素部署在 HTML 文档中 `<head>` 标签内

```html
<link rel="manifest" href="/manifest.webmanifest">
```

::: warning 注意：
+ `.webmanifest` 扩展名是在规范的“媒体类型注册”部分中指定的(清单文件的响应应返回 `Content-Type: application/manifest+json`)
+ 浏览器通常支持带有其他适当扩展名的清单，例如 `.json`(`Content-Type: application/json`)
+ 如果清单要求获取凭证，即使清单文件与当前页面具有相同的来源，也必须将 `crossorigin` 属性设置为 `use-credentials`
:::


## 键

|键|说明|
|-|-|
|background_color|定义了一个占位符背景色，供应用程序页面在加载样式表之前显示|
|categories|字符串数组，用于定义应用程序应属于的类别的名称|
|description|解释应用程序的功能|
|dir|显示清单中具有方向功能的成员的基本方向，取值：<br>auto<br>ltr<br>rtl|
|display|优选显示模式，取值：<br>fullscreen<br>standalone<br>minimal-ui<br>browser|
|iarc_rating_id|国际年龄分级联盟(IARC)的 Web 应用程序认证码，用于指定 Web 应用程序适合的年龄|
|icons|指定不同的上下文的应用程序图标的一个对象数组，包含属性(sizes, src, type, purpose)|
|lang|为清单中具有方向性的成员指定语言|
|name|表示Web应用程序的名称|
|orientation|定义浏览网站的默认方向，取值：<br>any<br>natural<br>landscape<br>landscape-primary<br>landscape-secondary<br>portrait<br>portrait-primary<br>portrait-secondary|
|prefer_related_applications|布尔值，设置是否只允许用户安装原生应用|
|related_applications|对象数组，用于定义对应的原生应用(推广，引流等)，包含属性(platform, url, id)|
|scoped|设置 manifest 对网站的作用范围|
|screenshots|对象数组，定义用于展示该程序的截图，包含属性(sizes, src, type)|
|serviceworker|描述用于 PWA 的 Service Worker，包含属性(src, scope, type, update_via_cache)|
|short_name|name 的简写|
|start_url|描述当用户从设备的主屏幕点击图标进入时，出现的第一个画面|
|theme_color|定义应用程序的默认主题颜色|


::: tip 说明：
+ `background_color` 应与样式表 CSS 中的 background-color 匹配，使启动 Web 应用程序和加载网站内容之间进行平滑过渡
+ categories 仅用作目录或商店列表 Web 应用程序的提示，鼓励开发人员首先使用小写字母
+ dir 省略或设置为  auto，浏览器将使用  Unicode 双向算法来对文本的方向做出最佳猜测
+ display 默认为 browser
+ orientation 可以在运行时通过 Screen Orientation API 进行更改
:::

::: warning 注意：
+ 具有方向性的成员：name, short_name, description
:::


## 示例

```json
{
  "name": "HackerWeb", // 程序名称
  "short_name": "HackerWeb", // 程序简称
  "start_url": ".", // 起始 url
  "display": "standalone", // 横竖屏显示
  "background_color": "#fff", // 背景色
  "description": "A simply readable Hacker News app.", // 描述
  "icons": [{ // 不同尺寸下的图标
    "src": "images/touch/homescreen48.png",
    "sizes": "48x48",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen72.png",
    "sizes": "72x72",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen96.png",
    "sizes": "96x96",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen144.png",
    "sizes": "144x144",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen168.png",
    "sizes": "168x168",
    "type": "image/png"
  }, {
    "src": "images/touch/homescreen192.png",
    "sizes": "192x192",
    "type": "image/png"
  }],
  "related_applications": [{ // 推荐相关的原生应用
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=cheeaun.hackerweb"
  }]
}
```