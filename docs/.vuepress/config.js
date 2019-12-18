module.exports = {
  title: 'Web Docs', // 文档标题
  description: '前端开发文档',
  base: '/web-docs/', // 设置打包后的基础路径
  configureWebpack: {
    resolve: {
      alias: {
        '@base': '/base/',
      },
    },
  },
  themeConfig: {
    repo: '',
    // 导航栏
    nav: [
      {
        text: 'API',
        items: [
          { text: 'HTML',  link: '/base/html/' },
          { text: 'CSS',  link: '/base/css/' },
          { text: 'BOM',  link: '/base/javascript/bom/' },
          { text: 'DOM',  link: '/base/javascript/dom/' },
          { text: 'ECMAScript',  link: '/base/javascript/es/' },
          { text: 'Node', link: '/base/node/' },
        ]
      },
      {
        text: '前端深入',
        items: [
          { text: 'HTML',  link: '/deep/html/' },
          { text: 'CSS',  link: '/deep/css/' },
          { text: 'Javascript',  link: '/deep/javascript/' },
          { text: '前端工程化',  link: '/deep/engineering/' },
          { text: '开发技巧',  link: '/deep/business-related/' },
          { text: '计算机基础',  link: '/deep/basis-of-computer/' },
        ]
      },
      {
        text: '了解后端',
        items: [
          { text: 'Node',  link: '/back-end/node/' },
          { text: 'Python',  link: '/back-end/python/' },
          { text: '服务器',  link: '/back-end/server/' },
          { text: '算法',  link: '/back-end/algorithm/' },
        ]
      },
      {
        text: '文章',
        link: '/post/',
      },
      {
        text: '附录',
        link: '/appendix/',
      },
      {
        text: '更多',
        items: [
          { text: 'Win10',  link: '/other/tips/win10' },
          { text: 'PS',  link: '/other/tips/ps' },
          { text: 'Sublime Text 3',  link: '/other/tips/sublime-text3' },
          { text: '技术之外',  link: '/other/suggest' },
          { text: '保持学习',  link: '/other/growth/' },
        ]
      },
    ],
    // 边栏
    sidebar: {
      // API
      '/base/html/': [
        ['', '标签概览'],
        {
          title: 'HTML 分类概述',
          collapsable: false,
          children: [
            ['categories/base', '基础类'],
            ['categories/layout', '布局类'],
            ['categories/format', '格式类'],
            ['categories/list&table', '列表/表格类'],
            ['categories/form', '表单类'],
            ['categories/media', '多媒体类'],
            ['categories/container', '容器类'],
          ],
        },
        {
          title: 'HTML5',
          collapsable: false,
          children: [
            ['html5/tags-change', '标签的变动'],
            ['html5/mathml', 'MathML'],
            ['html5/drag', 'Drag & Drop'],
            ['html5/audio', 'Audio'],
            ['html5/video', 'Video'],
            ['html5/canvas', 'Canvas'],
            ['html5/svg', 'SVG'],
            ['html5/geolocation', 'Geolocation'],
            ['html5/storage', 'Storage'],
            ['html5/indexeddb', 'IndexedDB'],
            ['html5/app-cache', 'AppCache'],
            ['html5/service-worker', 'Service Worker'],
            ['html5/manifest', 'Manifest'],
            ['html5/web-worker', 'Web Worker'],
            ['html5/websocket', 'WebSocket'],
            ['html5/sse', 'Service-Sent Events'],
          ],
        },
      ],
      '/base/css/': [
        {
          title: 'CSS 属性',
          collapsable: false,
          children: [
            ['attributes/selectors', '选择器'],
            ['attributes/position&layout', '定位 & 布局'],
            ['attributes/box-model', '盒子模型'],
            ['attributes/color&background', '颜色 & 背景'],
            ['attributes/font&text', '字体 & 文本'],
            ['attributes/list&table', '列表 & 表格'],
            ['attributes/special-effects', '特效'],
            ['attributes/media-query', '媒体查询'],
            ['attributes/content', '内容'],
            ['attributes/syntax-rules', '语法规则'],
            ['attributes/value', '取值'],
            ['attributes/unit', '单位'],
          ]
        },
      ],
      '/base/javascript/bom/': [
        {
          title: '常用接口',
          collapsable: false,
          children: [
            ['window', 'window'],
            ['console', 'console'],
            ['document', 'document'],
            ['frames', 'frames'],
            ['history', 'history'],
            ['location', 'location'],
            ['navigator', 'navigator'],
            ['screen', 'screen'],
          ]
        },
      ],
      '/base/javascript/dom/': [
        ['', '介绍'],
        {
          title: 'DOM 接口',
          collapsable: false,
          children: [
            ['event-target', 'EventTarget'],
            ['node', 'Node'],
            ['document', 'Document'],
            ['html-document', 'HTMLDocument'],
            ['document-fragment', 'DocumentFragment'],
            ['element', 'Element'],
            ['html-element', 'HTMLElement'],
            ['attr', 'Attr'],
            ['node-list', 'NodeList'],
            ['html-collection', 'HTMLCollection'],
            ['child-node', 'ChildNode'],
            ['parent-node', 'ParentNode'],
            ['non-cnode', 'NonDocumentTypeChildNode'],
            ['document-type', 'DocumentType'],
            ['character-data', 'CharacterData'],
            ['sub-character-data', 'CharacterData 子类'],
            ['event', 'Event'],
            ['sub-event', 'Event 子类'],
          ]
        },
      ],
      '/base/javascript/es/': [
        {
          title: 'ECMAScript 基础',
          collapsable: false,
          children: [
            ['es5/syntax', '语法'],
            ['es5/variables&data-type', '变量和数据类型'],
            ['es5/operator', '操作符'],
            ['es5/process-control', '流程控制语句'],
            ['es5/scope', '作用域和内存'],
            ['es5/oop', '面向对象编程基础'],
            ['es5/fp', '函数式编程基础'],
            ['es5/json&ajax', 'JSON & Ajax'],
          ]
        },
        {
          title: '内置对象',
          collapsable: false,
          children: [
            ['bio/function', 'Function'],
            ['bio/object', 'Object'],
            ['bio/array', 'Array'],
            ['bio/string', 'String'],
            ['bio/number', 'Number'],
            ['bio/boolean', 'Boolean'],
            ['bio/math', 'Math'],
            ['bio/date', 'Date'],
            ['bio/regexp', 'RegExp'],
            ['bio/global', 'Global'],
          ]
        },
        {
          title: 'ES6',
          collapsable: false,
          children: [
            ['es6/let&const', 'let & const'],
            ['es6/destructuring', '解构赋值'],
            ['es6/object-extensions', '内置对象的扩展'],
            ['es6/symbol', 'Symbol'],
            ['es6/set&map', 'Set & Map'],
            ['es6/proxy', 'Proxy'],
            ['es6/reflect', 'Reflect'],
            ['es6/promise', 'Promise'],
            ['es6/iterator', 'Iterator'],
            ['es6/generator', 'Generator'],
            ['es6/class', 'Class'],
            ['es6/module', 'Module'],
          ]
        },
        {
          title: 'ES6+',
          collapsable: false,
          children: [
            ['es7', 'ES7'],
            ['es8', 'ES8'],
            ['es9', 'ES9'],
            ['es10', 'ES10'],
          ]
        }
      ],
      '/base/node/': [
        {
          title: '全局属性',
          collapsable: false,
          children: [
            ['global/buffer', 'Buffer'],
            ['global/dirname', '__dirname'],
            ['global/filename', '__filename'],
            ['global/console', 'console'],
            ['global/timer', 'timer'],
            ['global/process', 'process'],
          ]
        },
        {
          title: '缓冲 & 流',
          collapsable: false,
          children: [
            ['bs/buffer', 'Buffer'],
            ['bs/stream', 'Stream'],
          ]
        },
        {
          title: '其他原生模块',
          collapsable: false,
          children: [
            ['native/assert', 'assert'],
            ['native/child-process', 'child_process'],
            ['native/cluster', 'cluster'],
            ['native/crypto', 'crypto'],
            ['native/dgram', 'dgram'],
            ['native/dns', 'dns'],
            ['native/events', 'events'],
            ['native/fs', 'fs'],
            ['native/os', 'os'],
            ['native/http', 'http'],
            ['native/http2', 'http2'],
            ['native/https', 'https'],
            ['native/net', 'net'],
            ['native/inspector', 'inspector'],
            ['native/path', 'path'],
            ['native/url', 'url'],
            ['native/util', 'util'],
            ['native/zlib', 'zlib'],
          ]
        }
      ],
      // 深入
      '/deep/html/': [
        {
          title: '深入 HTML',
          collapsable: false,
          children: [
            ['html', 'HTML'],
            ['html5', 'HTML5'],
          ]
        },
      ],
      '/deep/css/': [
        {
          title: '深入 CSS',
          collapsable: false,
          children: [
            ['knowledge/selectors', '选择器'],
            ['knowledge/attributes', '属性'],
            ['knowledge/weird', '怪异行为'],
          ]
        },
        {
          title: '专题：响应式',
          collapsable: false,
          children: [
            ['responsive/new-selector', '新增选择器'],
            ['responsive/border', '边框相关'],
            ['responsive/text', '文本效果'],
            ['responsive/gradient', '渐变'],
            ['responsive/flex', '弹性布局'],
            ['responsive/grid', '网格布局'],
            ['responsive/responsive-design', '响应式设计'],
          ]
        },
        {
          title: '专题：动画特效',
          collapsable: false,
          children: [
            ['animation/transform', '转换'],
            ['animation/transition', '过渡'],
            ['animation/animation', '动画'],
          ]
        },
        {
          title: '专题：实现效果',
          collapsable: false,
          children: [
            ['effect/horizontal-center', '水平居中'],
            ['effect/vertical-center', '垂直居中'],
            ['effect/layout', '常用布局'],
            ['effect/more', '常见效果'],
          ]
        },
        {
          title: '专题：开发技巧',
          collapsable: false,
          children: [
            ['dev/compatibility', '兼容性'],
            ['dev/tips', '开发中'],
          ]
        },
      ],
      '/deep/javascript/': [
        {
          title: 'ECMAScript',
          collapsable: false,
          children: [
            ['ecmascript/data-type', '数据类型'],
            ['ecmascript/strict-mode', '严格模式'],
            ['ecmascript/syntax', '语法'],
            ['ecmascript/oop', '面向对象程序设计'],
            ['ecmascript/fp', '函数式编程'],
            ['ecmascript/es6+', 'ES6+'],
          ]
        },
        {
          title: '专题：函数式编程',
          collapsable: false,
          children: [
            ['es-fp/introduction', '简介'],
            ['es-fp/scope&closure', '作用域和闭包'],
            ['es-fp/high-order-function', '高阶函数'],
            ['es-fp/currying', '柯里化'],
            ['es-fp/recursion', '递归'],
            ['es-fp/rules', '规则'],
            ['es-fp/flow', '基于流'],
            ['es-fp/non-class', '无类编程'],
            ['es-fp/referrence', '参考：相关函数'],
          ]
        },
        {
          title: '专题：高性能 Javascript',
          collapsable: false,
          children: [
            ['es-hp/load', '脚本加载和执行'],
            ['es-hp/syntax', 'JS 语法'],
            ['es-hp/bom', 'BOM'],
            ['es-hp/dom', 'DOM'],
            ['es-hp/data', '数据'],
            ['es-hp/apply', '应用'],
          ]
        },
        {
          title: '专题：编码能力',
          collapsable: false,
          children: [
            ['es-power/native', '实现原生功能'],
            ['es-power/array', '实现数组方法'],
            ['es-power/util', '常用工具函数'],
            ['es-power/fw', '深入框架思想'],
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['bom', 'BOM'],
            ['dom', 'DOM'],
            ['browser', '浏览器'],
          ]
        },
      ],
      '/deep/engineering/': [
        {
          title: '工程化',
          collapsable: false,
          children: [
            ['engine/npm&yarn', 'npm & yarn'],
            ['engine/git', 'Git'],
            ['engine/webpack', 'Webpack'],
            ['engine/gulp', 'Gulp'],
            ['engine/babel', 'Babel'],
            ['engine/eslint', 'ESLint'],
            ['engine/jest', 'Jest'],
            ['engine/sass', 'Sass'],
            ['engine/ajax', 'Ajax'],
          ]
        },
        {
          title: 'TypeScript',
          collapsable: false,
          children: [
            ['ts/install', '安装使用'],
            ['ts/strong-type', '强类型'],
            ['ts/es6+', 'ES6+ 语法'],
            ['ts/oop', '面向对象编程'],
            ['ts/ts-file', '.d.ts 文件'],
            ['ts/more', '更多特性'],
          ]
        },
        {
          title: '框架',
          collapsable: false,
          children: [
            ['fw/vue', 'Vue']
          ]
        },
        {
          title: '其他工具库',
          collapsable: false,
          children: [
            ['libraries/element', 'Element'],
            ['libraries/bootstrap', 'Bootstrap'],
            ['libraries/vue-awesome-swiper', 'vue-awesome-swiper'],
          ]
        },
      ],
      '/deep/business-related/': [
        ['speedup', '开发提速'],
        ['debug', '调试'],
        ['cross-platform', '跨平台'],
        ['business-related', '业务相关'],
        ['performance-optimization', '性能优化'],
        ['ci&cd', 'CI & CD'],
      ],
      '/deep/basis-of-computer/': [
        ['computed-network', '计算机网络'],
        ['design-patterns', '设计模式'],
        ['fundamentals-of-compiling', '编译原理'],
        ['software-engineering', '软件工程'],
      ],
      // 文章
      '/post/': [
        {
          title: 'Javascript',
          collapsable: false,
          children: [
            ['es-create-object-patterns', '创建对象的方式'],
            ['es-implement-extend-patterns', '实现继承的方式'],
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['git&github', 'Git & GitHub 初探'],
            ['module-history', '模块化规范发展史'],
            ['webpack-loader&plugin', 'Webpack - Loader & Plugin'],
          ]
        }
      ],
      // 附录
      '/appendix/': [
        {
          title: '常用命令',
          collapsable: false,
          children: [
            ['frequently-command/vim', 'Vim 命令'],
            ['frequently-command/git', 'Git 命令'],
            ['frequently-command/docker', 'Docker 命令'],
            ['frequently-command/mysql', 'MySQL 命令'],
            ['frequently-command/mongodb', 'MongoDB 命令'],
          ],
        },
        {
          title: 'Linux 命令',
          collapsable: false,
          children: [
            ['linux-command/sys', '系统管理与维护'],
            ['linux-command/file', '文件管理与维护'],
            ['linux-command/zip', '压缩与解压'],
            ['linux-command/disc', '磁盘管理与维护'],
            ['linux-command/net', '网络设置与维护'],
          ],
        },
        {
          title: 'HTTP 参考',
          collapsable: false,
          children: [
            ['http-referrence/status-code', '状态码'],
            ['http-referrence/mime-type', 'MIME-TYPE'],
            ['http-referrence/head-fields', '头部字段'],
            ['http-referrence/body-fields', '主体字段'],
          ],
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['jquery-api', 'jQuery API'],
            ['indexeddb-api', 'indexedDB API'],
            ['es-objects', 'ECMAScript 内置对象']
          ],
        },
      ],
      // 后端
      '/back-end/node/': [
        ['', '简介'],
        {
          title: '异步编程',
          collapsable: false,
          children: [
            ['async-theory', '原理'],
            ['async-event-manage', '事件处理方式'],
            ['async-process-control', '异步流程控制'],
          ],
        },
        {
          title: '异步编程',
          collapsable: false,
          children: [
            ['async/concept', '原理和概念'],
            ['async/timer', '定时器和 nextTick()'],
            ['async/callback', 'Callback - 回调地狱'],
            ['async/thunk', 'Thunk - 回调的链式执行'],
            ['async/promise', 'Promise - 更优雅的 Thunk'],
            ['async/generator', 'Generator - 生成一切'],
            ['async/async&await', 'async & await - 终极杀器'],
            ['async/best', '最优美的异步'],
          ]
        },
        {
          title: '缓冲 & 流',
          collapsable: false,
          children: [
            ['bs-buffer', 'Buffer'],
            ['bs-stream', 'Stream'],
          ],
        },
        {
          title: '模块系统',
          collapsable: false,
          children: [
            ['module-standard', '模块化规范'],
            ['module-global-property', '内置全局属性'],
            ['module-native', '原生模块'],
            ['module-third-party', '第三方模块'],
          ],
        },
        {
          title: '使用技巧',
          collapsable: false,
          children: [
            ['tips/npm-module', '使用 npm 开发模块'],
          ],
        },
        {
          title: '框架',
          collapsable: false,
          children: [
            ['fw/express', 'Express'],
            ['fw/koa', 'Koa'],
            ['fw/egg', 'Egg'],
          ],
        },
        {
          title: 'MongoDB',
          collapsable: false,
          children: [
            ['mongodb/start', '开始'],
            ['mongodb/db&collection', '数据库和集合'],
            ['mongodb/document', '文档操作'],
            ['mongodb/document-pro', '文档操作进阶'],
            ['mongodb/mongoose', 'Mongoose'],
            ['mongodb/mongodb-pro', '进阶'],
          ],
        },
      ],
      '/back-end/python/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            ['base/prepare', '准备'],
            ['base/data-type', '数据类型'],
            ['base/variables&operator', '变量 & 操作符'],
            ['base/process-control', '流程控制'],
            ['base/error&exception', '错误 & 异常'],
            ['base/file-operate', '文件操作'],
            ['base/oop', '面向对象编程'],
            ['base/fp', '函数式编程'],
            ['base/multithreading', '多线程'],
            ['base/module&libraries', '模块 & 标准库'],
          ]
        },
      ],
      '/back-end/server/': [
        {
          title: 'Linux',
          collapsable: false,
          children: [
            ['linux/command', '常用命令'],
            ['linux/shell', 'Shell'],
          ]
        },
        {
          title: '运维',
          collapsable: false,
          children: [
            ['om/docker', 'Docker'],
            ['om/nginx', 'Nginx'],
            ['om/pm2', 'pm2'],
          ]
        }
      ],
      '/back-end/algorithm/': [
        {
          title: '数据结构',
          collapsable: false,
          children: [
            ['data-structures/linked-list', '链表'],
          ]
        },
        {
          title: '算法简介',
          collapsable: false,
          children: [
            ['introduction/time-complexity', '时间复杂度'],
            ['introduction/space-complexity', '空间复杂度'],
          ]
        },
        {
          title: '排序算法',
          collapsable: false,
          children: [
            ['sort/bubble-sort', '冒泡排序'],
            ['sort/quick-sort', '快速排序'],
          ]
        },
      ],
      // 更多
      '/other/growth/': [
        {
          title: '成长图谱',
          collapsable: false,
          children: [
            ['growth-map/front-end', '前端'],
            ['growth-map/back-end', '后端'],
            ['growth-map/devops', 'DevOps'],
          ]
        },
        {
          title: '学无止境',
          collapsable: false,
          children: [
            ['learn/books', '书单'],
            ['learn/link', '链接'],
          ]
        },
      ]
    }
  }
}