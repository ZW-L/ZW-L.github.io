module.exports = {
  title: 'Web Docs', // 文档标题
  description: '一份以手册为主的关于 Web 开发文档',
  base: '/web-docs/', // 设置打包后的基础路径
  configureWebpack: {
    resolve: {
      alias: {
        '@base': '/base/',
      },
    },
  },
  markdown: {
    lineNumbers: true, // 显示代码块行号
    lastUpdate: '最后更新', // 显示最后更新时间
    // smoothScroll: true,
  },
  themeConfig: {
    // repo: '',
    // 导航栏
    nav: [
      {
        text: '基础',
        items: [
          { text: 'HTML 标签',  link: '/base/html/' },
          { text: 'CSS 属性',  link: '/base/css/' },
          { text: 'BOM API',  link: '/base/javascript/bom/' },
          { text: 'DOM API',  link: '/base/javascript/dom/' },
          { text: 'ECMAScript API',  link: '/base/javascript/es/' },
          { text: 'Node API', link: '/base/node/' },
          { text: '算法',  link: '/base/algorithm/' },
          { text: 'HTTP',  link: '/base/http/' },
          { text: 'Linux',  link: '/base/linux/' },
          { text: 'Git',  link: '/base/git/' },
          { text: 'MongoDB',  link: '/base/mongodb/' },
          { text: 'MySQL',  link: '/base/mysql/' },
        ]
      },
      {
        text: '深入',
        items: [
          { text: 'HTML',  link: '/deep/html/' },
          { text: 'CSS',  link: '/deep/css/' },
          { text: 'Javascript',  link: '/deep/javascript/' },
          { text: 'Node',  link: '/deep/node/' },
          { text: '前端工程化',  link: '/deep/engineering/' },
          { text: '开发技巧',  link: '/deep/business-related/' },
          { text: '开发流程', link: '/deep/project-setup/'},
          { text: '计算机基础',  link: '/deep/basis-of-computer/' },
        ]
      },
      {
        text: '开源库',
        items: [
          { text: 'Vue',  link: '/open-repo/vue/' },
          { text: 'TypeScript',  link: '/open-repo/ts/' },
          { text: 'Webpack',  link: '/open-repo/webpack/' },
          { text: '其他库',  link: '/open-repo/other/' },
          { text: '服务器运维',  link: '/open-repo/om/' },
        ]
      },
      {
        text: '博文',
        link: '/post/',
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
      '/base/algorithm/': [
        {
          title: '概念',
          children: [
            ['introduction/time-complexity', '时间复杂度'],
            ['introduction/space-complexity', '空间复杂度'],
          ]
        },
        {
          title: '数据结构',
          children: [
            ['data-structures/string', '字符串(String)'],
            ['data-structures/array', '数组(Array)'],
            ['data-structures/linked-list', '链表(LinkedList)'],
            ['data-structures/stack', '栈(Stack)'],
            ['data-structures/queen', '队列(Queue)'],
            ['data-structures/heap', '堆(Heap)'],
            ['data-structures/set', '集合(Set)'],
            ['data-structures/hash-table', '哈希表(HashTable)'],
            ['data-structures/tree', '树(Tree)'],
            ['data-structures/dynamic-search-tree', '动态查找树'],
            ['data-structures/fenwick-tree', '树状数组'],
            ['data-structures/segment-tree', '线段树'],
            ['data-structures/trie', '字典树(Trie)'],
            ['data-structures/graph', '图(Graph)'],
            ['data-structures/bloom-filter', '布隆过滤器(BloomFilter)'],
            ['data-structures/disjoint-set', '并查集(DisjointSet)'],
          ]
        },
        {
          title: '排序算法',
          children: [
            ['sort/', '概览'],
            ['sort/bubble-sort', '冒泡排序'],
            ['sort/insert-sort', '插入排序'],
            ['sort/select-sort', '选择排序'],
            ['sort/merge-sort', '归并排序'],
            ['sort/quick-sort', '快速排序'],
            ['sort/heap-sort', '堆排序'],
            ['sort/bucket-sort', '桶排序'],
            ['sort/radix-sort', '基数排序'],
          ]
        },
        {
          title: '查找算法',
          children: []
        },
        {
          title: '字符串算法',
          children: []
        },
        {
          title: '位算法',
          children: []
        },
        {
          title: '树算法',
          children: []
        },
        {
          title: '图算法',
          children: []
        },
        {
          title: '算法设计思想',
          children: [
            ['design/recursion', '递归'],
            ['design/recall', '回溯'],
            ['design/merge', '分治'],
            ['design/dp', '动态规划'],
          ]
        },
      ],
      '/base/http/': [
        {
          title: 'HTTP 参考',
          collapsable: false,
          children: [
            ['status-code', '状态码'],
            ['mime-type', 'MIME-TYPE'],
            ['head-fields', '头部字段'],
            ['body-fields', '主体字段'],
          ],
        },
      ],
      '/base/linux/': [
        ['', '常用命令'],
        ['shell', 'Shell'],
        {
          title: 'Linux 命令',
          collapsable: false,
          children: [
            ['command/sys', '系统管理与维护'],
            ['command/file', '文件管理与维护'],
            ['command/zip', '压缩与解压'],
            ['command/disc', '磁盘管理与维护'],
            ['command/net', '网络设置与维护'],
          ],
        },
      ],
      '/base/git/': [
        ['command', '命令']
      ],
      '/base/mongodb/': [
        ['command', '命令']
      ],
      '/base/mysql/': [
        ['command', '命令']
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
            ['knowledge/difference', '区分属性'],
            ['knowledge/questions', '常见问题'],
          ]
        },
        {
          title: '专题：布局和效果',
          collapsable: false,
          children: [
            ['effect/flex', 'Flex 详解'],
            ['effect/grid', 'Grid 详解'],
            ['effect/grid-system', '栅格系统详解'],
            ['effect/horizontal-center', '水平居中'],
            ['effect/vertical-center', '垂直居中'],
            ['effect/horizontal-vertical-center', '水平垂直居中'],
            ['effect/layout', '常用布局'],
            ['effect/more', '常见效果'],
          ]
        },
        {
          title: '专题：响应式',
          collapsable: false,
          children: [
            ['responsive/media-query', '使用媒体查询'],
            ['responsive/responsive-design', '响应式设计'],
            ['responsive/design-schema', '设计方案'],
          ]
        },
        {
          title: '专题：效果和动画',
          collapsable: false,
          children: [
            ['special-effects/text', '文本'],
            ['special-effects/border', '边框'],
            ['special-effects/gradient', '渐变'],
            ['special-effects/transform', '转换'],
            ['special-effects/transition', '过渡'],
            ['special-effects/animation', '动画'],
          ]
        },
        {
          title: '专题：开发技巧',
          collapsable: false,
          children: [
            ['dev/compatibility', '兼容性'],
            ['dev/tips', '技巧'],
          ]
        },
        {
          title: '专题：未分类',
          collapsable: false,
          children: [
            ['unclassified/css-reset', '初始化样式'],
            ['unclassified/bfc&ifc', 'BFC 和 IFC 详解'],
            ['unclassified/float', '解决浮动引起的高度塌陷'],
          ]
        },
      ],
      '/deep/javascript/': [
        {
          title: '深入 ECMAScript',
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
          title: '深入 BOM & DOM',
          collapsable: false,
          children: [
            ['bom', 'BOM'],
            ['dom', 'DOM'],
            ['browser', '浏览器'],
          ]
        },
        {
          title: '专题：面向对象编程',
          collapsable: false,
          children: [
            ['es-oop/introduction', '简介'],
            ['es-oop/create', '创建对象的方式'],
            ['es-oop/extend', '实现继承的方式'],
            ['es-oop/stop', '防篡改对象'],
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
          title: '专题：编码能力',
          collapsable: false,
          children: [
            ['es-power/native', '实现原生功能'],
            ['es-power/array', '数组相关'],
            ['es-power/util', '常用工具函数'],
            ['es-power/validate', '正则和验证'],
            ['es-power/fw', '深入框架思想'],
            ['es-power/other', '其他'],
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
        }
      ],
      '/deep/node/': [
        ['', '简介'],
        {
          title: '异步编程',
          collapsable: false,
          children: [
            ['async/concept', '原理和概念'],
            ['async/callback', 'Callback - 回调地狱'],
            ['async/promise', 'Promise - 状态机 1'],
            ['async/generator', 'Generator - 状态机 2'],
            ['async/thunk&&co', 'thunk && oo - 回调的链式执行'],
            ['async/async&await', 'async & await - 终极杀器'],
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
          title: 'Vue',
          collapsable: false,
          children: [
            ['vue/vue-cli', 'Cli 详解'],
            ['vue/vue-router', 'Router 详解'],
            ['vue/vuex', 'Vuex 详解'],
            ['vue/vue', '面试题'],
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
        ['ci&cd', 'CI & CD']
      ],
      '/deep/project-setup/': [
        {
          title: 'Vue SPA',
          collapsable: false,
          children: [
            ['spa/flow', '流程介绍'],
            ['spa/router', '路由配置']
          ]
        }
      ],
      '/deep/basis-of-computer/': [
        ['computed-network', '计算机网络'],
        ['design-patterns', '设计模式'],
        ['fundamentals-of-compiling', '编译原理'],
        ['software-engineering', '软件工程'],
      ],
      // 开源库入门
      '/open-repo/vue/': [
        {
          title: '功能特性',
          collapsable: false,
          children: [
            ['feature/base', '指令和简写'],
            ['feature/component', '组件特性'],
            ['feature/effect', '特效'],
            ['feature/render', '渲染函数'],
            ['feature/reuse', '功能复用'],
            ['feature/api', 'API 简介'],
            ['feature/router', 'vue-router'],
            ['feature/vuex', 'vuex'],
            ['feature/ssr', 'ssr'],
            ['feature/cli', 'vue-cli'],
            ['feature/loader', 'vue-loader'],
          ]
        },
        {
          title: '组件开发技巧',
          collapsable: false,
          children: [
            ['component-skills/svg-component', 'SVG 组件']
          ]
        }
      ],
      '/open-repo/other/': [
        ['mock', 'Mock - 数据模拟'],
        ['echarts', 'Echarts - 数据图表化']
      ],
      '/open-repo/om/': [
        ['docker', 'Docker'],
        ['nginx', 'Nginx'],
        ['pm2', 'pm2'],
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