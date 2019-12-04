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
        text: '前端核心',
        items: [
          { text: 'HTML',  link: '/base/html/' },
          { text: 'CSS',  link: '/base/css/' },
          { text: 'Javascript',  link: '/base/javascript/' },
        ]
      },
      {
        text: '前端深入',
        items: [
          { text: 'HTML',  link: '/deep/html/' },
          { text: 'CSS',  link: '/deep/css/' },
          { text: 'Javascript',  link: '/deep/javascript/' },
          { text: '前端工程化',  link: '/deep/engineering/' },
          { text: '业务相关',  link: '/deep/business-related/' },
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
          { text: '成长图谱',  link: '/other/growth-map/' },
        ]
      },
    ],
    // 边栏
    sidebar: {
      // 基础
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
        {
          title: '响应式设计',
          collapsable: false,
          children: [
            ['css3/new-selector', '新增选择器'],
            ['css3/border', '边框相关'],
            ['css3/text', '文本效果'],
            ['css3/gradient', '渐变'],
            ['css3/flex', '弹性布局'],
            ['css3/grid', '网格布局'],
            ['css3/responsive-design', '响应式设计'],
          ]
        },
        {
          title: '特效',
          collapsable: false,
          children: [
            ['css3/transform', '转换'],
            ['css3/transition', '过渡'],
            ['css3/animation', '动画'],
          ]
        },
      ],
      '/base/javascript/': [
        {
          title: 'BOM',
          children: [
            ['bom/window', 'window'],
            ['bom/console', 'console'],
            ['bom/document', 'document'],
            ['bom/frames', 'frames'],
            ['bom/history', 'history'],
            ['bom/location', 'location'],
            ['bom/navigator', 'navigator'],
            ['bom/screen', 'screen'],
          ]
        },
        {
          title: 'DOM',
          children: [
            ['dom/', '介绍'],
            ['dom/event-target', 'EventTarget'],
            ['dom/node', 'Node'],
            ['dom/document', 'Document'],
            ['dom/html-document', 'HTMLDocument'],
            ['dom/document-fragment', 'DocumentFragment'],
            ['dom/element', 'Element'],
            ['dom/html-element', 'HTMLElement'],
            ['dom/attr', 'Attr'],
            ['dom/node-list', 'NodeList'],
            ['dom/html-collection', 'HTMLCollection'],
            ['dom/child-node', 'ChildNode'],
            ['dom/parent-node', 'ParentNode'],
            ['dom/non-cnode', 'NonDocumentTypeChildNode'],
            ['dom/document-type', 'DocumentType'],
            ['dom/character-data', 'CharacterData'],
            ['dom/sub-character-data', 'CharacterData 子类'],
            ['dom/event', 'Event'],
            ['dom/sub-event', 'Event 子类'],
          ]
        },
        {
          title: 'ECMAScript',
          children: [
            ['es5/syntax', '语法'],
            ['es5/variables&data-type', '变量和数据类型'],
            ['es5/operator', '操作符'],
            ['es5/process-control', '流程控制语句'],
            ['es5/scope', '作用域和内存'],
            ['es5/reference-type', '引用类型'],
            ['es5/oop', '面向对象编程'],
            ['es5/fp', '函数式编程'],
            ['es5/json&ajax', 'JSON & Ajax'],
          ]
        },
        {
          title: 'ES6',
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
          children: [
            ['es7', 'ES7'],
            ['es8', 'ES8'],
            ['es9', 'ES9'],
            ['es10', 'ES10'],
          ]
        }
      ],
      // 深入
      '/deep/html/': [
        ['html', 'HTML'],
        ['html5', 'HTML5'],
      ],
      '/deep/css/': [
        {
          title: '深入 CSS',
          collapsable: false,
          children: [
            ['knowledge/selectors', '选择器'],
            ['knowledge/attributes', '属性'],
            ['knowledge/weird', '怪异行为'],
            ['knowledge/responsive-design', '响应式设计'],
          ]
        },
        {
          title: '实现效果',
          collapsable: false,
          children: [
            ['effect/horizontal-center', '水平居中'],
            ['effect/vertical-center', '垂直居中'],
            ['effect/layout', '常用布局'],
            ['effect/more', '常见效果'],
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['dev/compatibility', '兼容性'],
            ['dev/tips', '开发中'],
          ]
        },
      ],
      '/deep/javascript/': [
        {
          title: 'BOM',
          collapsable: false,
          children: [
            ['bom', 'BOM'],
          ]
        },
        {
          title: 'DOM',
          collapsable: false,
          children: [
            ['dom', 'DOM'],
          ]
        },
        {
          title: 'ECMAScript',
          collapsable: false,
          children: [
            ['ecmascript/data-type', '数据类型'],
            ['ecmascript/syntax', '语法'],
            ['ecmascript/oop', '面向对象程序设计'],
            ['ecmascript/fp', '函数式编程'],
            ['ecmascript/es6+', 'ES6+'],
            ['ecmascript/es-power', '编码能力'],
          ]
        },
        {
          title: '浏览器',
          collapsable: false,
          children: [
            ['browser', '浏览器'],
          ]
        },
      ],
      '/deep/engineering/': [
        {
          title: '工程化',
          collapsable: false,
          children: [
            ['npm&yarn', 'npm & yarn'],
            ['git', 'Git'],
            ['webpack', 'Webpack'],
            ['gulp', 'Gulp'],
            ['babel', 'Babel'],
            ['eslint', 'ESLint'],
            ['typescript', 'TypeScript'],
            ['jest', 'Jest'],
            ['sass', 'Sass'],
            ['ajax', 'Ajax'],
          ]
        },
        {
          title: '框架',
          collapsable: false,
          children: [
            ['fw/vue', 'Vue']
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
        ['http', 'HTTP'],
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
        {
          title: '异步编程',
          collapsable: false,
          children: [
            ['async-theory', '原理'],
            ['async-event-manage', '事件处理'],
            ['async-process-control', '流程控制'],
          ],
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
      '/other/growth-map/': [
        ['front-end', '前端'],
        ['back-end', '后端'],
        ['devops', 'DevOps'],
      ]
    }
  }
}