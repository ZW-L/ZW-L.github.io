module.exports = {
  title: 'Web Docs',
  description: '一份以手册为主的 Web 开发文档',
  base: '/',  // '/' will deploy to http://my-server/; '/a' will deploy to http://my-server/a/
  markdown: {
    // lineNumbers: true
  },
  plugins: [
    '@vuepress/nprogress',  // A progress in top while skipping to other page
    '@vuepress/back-to-top',  // Show back-to-top icon
    'vuepress-plugin-smooth-scroll',  // Make scroll smoothly
    // Zoom the pic, see https://vuepress.github.io/zh/plugins/zooming/
    ['vuepress-plugin-zooming', {
      selector: '.content__default img',
      delay: 100,
      // More options see https://desmonding.me/zooming/docs/#/configuration?id=options
      options: {
        bgColor: 'rgba(0, 0, 0, .6)',
        zIndex: 999,
        transitionDuration: 0.2
      },
    }],
  ],
  themeConfig: {
    lastUpdate: '最后更新于', // 显示最后更新时间
    // 导航栏
    nav: [
      {
        text: '基础',
        items: [
          // { text: '数学',  link: '/base/math/' },
          // { text: 'C 语言',  link: '/base/c/' },
          { text: '数据结构和算法',  link: '/base/algorithm/' },
          { text: '计算机网络',  link: '/base/computed-network/' },
          // { text: '计算机组成',  link: '/base/computed-organization/' },
          // { text: '操作系统',  link: '/base/os/' },
          { text: '编译原理',  link: '/base/fundamentals-of-compiling/' },
          { text: '设计模式',  link: '/base/design-patterns/' },
          { text: '软件工程',  link: '/base/software-engineering/' },
          { text: 'Git',  link: '/base/git/' },
        ]
      },
      {
        text: '前端',
        items: [
          { text: 'HTML',  link: '/front-end/html/' },
          { text: 'HTML5',  link: '/front-end/html5/' },
          { text: 'CSS',  link: '/front-end/css/' },
          { text: 'JavaScript',  link: '/front-end/javascript/' },
          { text: 'Node', link: '/front-end/node/' },
          { text: 'Vue', link: '/front-end/vue/' },
          { text: '前端工程化',  link: '/front-end/engineering/' },
          { text: '开发技巧',  link: '/front-end/business-related/' },
          { text: '开发流程', link: '/front-end/project-setup/'},
          { text: '小程序', link: '/front-end/applet/' }
        ],
      },
      {
        text: '后端',
        items: [
          { text: 'Linux',  link: '/back-end/linux/' },
          { text: 'Nginx',  link: '/back-end/nginx/' },
          { text: 'Docker',  link: '/back-end/docker/' },
          { text: 'MongoDB',  link: '/back-end/mongodb/' },
          { text: 'MySQL',  link: '/back-end/mysql/' },
        ],
      },
      {
        text: 'Python',
        items: [
          { text: '语法',  link: '/python/syntax/' },
          { text: '模块',  link: '/python/module/' },
          { text: '爬虫',  link: '/python/crawler/' },
          { text: '自动化',  link: '/python/automation/' },
          // { text: '数据分析',  link: '/python/data-analysis/' },
          // { text: '深度学习',  link: '/python/deep-learning/' },
        ],
      },
      {
        text: 'R 语言',
        link: '/r/',
      },
      {
        text: '博文',
        link: '/post/',
      },
      {
        text: '更多',
        items: [
          { text: '保持学习',  link: '/other/growth/' },
          { text: '常用工具',  link: '/other/tools/' },
          { text: '编辑器', link: '/other/editor/' },
          { text: '技术之外',  link: '/other/expect-tech/' },
          { text: '关于',  link: '/other/' },
        ]
      },
    ],
    // 边栏
    sidebar: {
      // 基础
      '/base/algorithm/': [
        {
          title: '概念',
          collapsable: false,
          children: [
            ['introduction/time-complexity', '时间复杂度'],
            ['introduction/space-complexity', '空间复杂度'],
          ]
        },
        {
          title: '数据结构',
          collapsable: false,
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
          collapsable: false,
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
          collapsable: false,
          children: []
        },
        {
          title: '字符串算法',
          collapsable: false,
          children: []
        },
        {
          title: '位算法',
          collapsable: false,
          children: []
        },
        {
          title: '树算法',
          collapsable: false,
          children: []
        },
        {
          title: '图算法',
          collapsable: false,
          children: []
        },
        {
          title: '算法设计思想',
          collapsable: false,
          children: [
            ['design/recursion', '递归'],
            ['design/recall', '回溯'],
            ['design/merge', '分治'],
            ['design/dp', '动态规划'],
          ]
        },
      ],
      '/base/computed-network/': [
        {
          title: 'TCP/IP',
          collapsable: false,
          children: [
            ['tcp-ip/intro', '简介'],
          ],
        },
        {
          title: 'HTTP',
          collapsable: false,
          children: [
            ['http/intro', '简介'],
            ['http/status-code', '状态码'],
            ['http/mime-type', 'MIME-TYPE'],
            ['http/head-fields', '头部字段'],
            ['http/url', 'URL'],
            ['http/cdn', 'CDN'],
            ['http/cookie', 'Cookie'],
            ['http/api', 'API 服务'],
          ],
        },
        {
          title: 'DNS',
          collapsable: false,
          children: [
            ['dns/intro', '简介'],
          ],
        },
        {
          title: 'WebSocket',
          collapsable: false,
          children: [
            ['websocket/intro', '简介'],
          ],
        },
      ],
      '/base/git/': [
        {
          title: 'Git 命令分类剖析',
          collapsable: false,
          children: [
            ['command/init', '初始化和配置'],
            ['command/commit', '文件操作和提交'],
            ['command/status', '状态日志和比较'],
            ['command/reset', '撤销和回滚'],
            ['command/branch', '分支管理'],
            ['command/remote', '连接远程仓库'],
            ['command/tag', '标签管理'],
          ]
        },
        {
          title: '参考',
          collapsable: false,
          children: [
            ['ref/about', '简介'],
            ['ref/config', '自定义配置'],
            ['ref/gitignore', '.gitignore'],
          ]
        }
      ],

      // 前端
      '/front-end/html/': [
        {
          title: 'HTML 标签分类',
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
          title: 'HTML5 简介',
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
        {
          title: 'HTML 深入',
          collapsable: false,
          children: [
            ['html', 'HTML'],
            ['html5', 'HTML5'],
          ]
        },
      ],
      '/front-end/html5/': [
        {
          title: 'Canvas',
          collapsable: false,
          children: [
            ['canvas/intro', '简介'],
            ['canvas/graph&path', '图形和路径'],
            ['canvas/style', '样式'],
            ['canvas/effect&transform', '特效和变换'],
            ['canvas/other', '其他'],
          ]
        },
        {
          title: 'SVG',
          collapsable: false,
          children: [
            ['svg/intro', '简介'],
            ['svg/container', '容器'],
            ['svg/shape', '形状&路径'],
            ['svg/effect&animation', '特效&动画'],
            ['svg/filter', '过滤器'],
            ['svg/other', '其他'],
          ]
        },
      ],

      '/front-end/css/': [
        {
          title: 'CSS 属性',
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
          title: 'CSS 深入',
          children: [
            ['knowledge/difference', '区分属性'],
            ['knowledge/questions', '常见问题'],
          ]
        },
        {
          title: '专题：页面布局',
          children: [
            ['effect/flex', 'Flex 详解'],
            ['effect/grid', 'Grid 详解'],
            ['effect/grid-system', '栅格系统详解'],
            ['effect/horizontal-center', '水平居中'],
            ['effect/vertical-center', '垂直居中'],
            ['effect/horizontal-vertical-center', '水平垂直居中'],
            ['effect/layout', '常用布局'],
          ]
        },
        {
          title: '专题：响应式',
          children: [
            ['responsive/media-query', '使用媒体查询'],
            ['responsive/responsive-design', '响应式设计'],
            ['responsive/design-schema', '设计方案'],
          ]
        },
        {
          title: '专题：效果和动画',
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
          children: [
            ['dev/css-reset', '初始化样式'],
            ['dev/compatibility', '兼容性'],
            ['dev/style-manage', '样式管理'],
            ['dev/more', '实现常见效果'],
            ['dev/tips', '其他技巧'],
          ]
        },
        {
          title: '专题：博文',
          children: [
            ['post/bfc&ifc', 'BFC 和 IFC 详解'],
            ['post/float', '解决浮动引起的高度塌陷'],
          ]
        },
      ],
      '/front-end/javascript/': [
        {
          title: 'ECMAScript 基础',
          children: [
            ['base/syntax', '语法'],
            ['base/variables&data-type', '变量和数据类型'],
            ['base/operator', '操作符'],
            ['base/process-control', '流程控制语句'],
            ['base/json&ajax', 'JSON & Ajax'],
            ['base/type-convert', '总结：类型转换']
          ]
        },
        {
          title: 'ECMAScript 深入',
          children: [
            ['deep/es/syntax', '语法'],
            ['deep/es/type&memory', '数据类型和内存'],
            ['deep/es/async-programing', '异步编程'],
            ['deep/es/module', '模块系统'],
            ['deep/es/design-pattern', '设计模式'],
            ['deep/es/es6+', 'ES6+'],
          ]
        },
        {
          title: 'BOM & DOM 深入',
          children: [
            ['deep/bom', 'BOM'],
            ['deep/dom', 'DOM'],
            ['deep/browser', '浏览器'],
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
            ['esp/es7', 'ES7'],
            ['esp/es8', 'ES8'],
            ['esp/es9', 'ES9'],
            ['esp/es10', 'ES10'],
          ]
        },
        {
          title: '专题：函数式编程',
          children: [
            ['subject/fp/intro', '概念'],
            ['subject/fp/closure', '闭包'],
            ['subject/fp/higher', '高阶函数'],
            ['subject/fp/hurry', '柯里化'],
            ['subject/fp/recursion', '递归'],
            ['subject/fp/other', '其他'],
          ]
        },
        {
          title: '专题：面向对象编程',
          children: [
            ['subject/oop/intro', '基础'],
            ['subject/oop/prototype', '趣说-原型和原型链'],
            ['subject/oop/create', '创建对象的方式'],
            ['subject/oop/extend', '实现继承的方式'],
            ['subject/oop/stop', '防篡改对象'],
          ]
        },
        {
          title: '专题：编码能力',
          children: [
            ['subject/power/native', '实现原生功能'],
            ['subject/power/array', '数组相关'],
            ['subject/power/util', '常用工具函数'],
            ['subject/power/validate', '正则和验证'],
            ['subject/power/fw', '深入框架思想'],
            ['subject/power/other', '其他'],
          ]
        },
        {
          title: '专题：性能优化',
          children: [
            ['subject/hp/load', '脚本加载和执行'],
            ['subject/hp/syntax', 'JS 语法'],
            ['subject/hp/bom', 'BOM'],
            ['subject/hp/dom', 'DOM'],
            ['subject/hp/data', '数据'],
            ['subject/hp/apply', '应用'],
          ]
        },
        {
          title: '附录：BOM 接口',
          children: [
            ['appendix/bom/window', 'window'],
            ['appendix/bom/console', 'console'],
            ['appendix/bom/document', 'document'],
            ['appendix/bom/frames', 'frames'],
            ['appendix/bom/history', 'history'],
            ['appendix/bom/location', 'location'],
            ['appendix/bom/navigator', 'navigator'],
            ['appendix/bom/screen', 'screen'],
          ]
        },
        {
          title: '附录：DOM 接口',
          children: [
            ['appendix/dom/event-target', 'EventTarget'],
            ['appendix/dom/node', 'Node'],
            ['appendix/dom/document', 'Document'],
            ['appendix/dom/html-document', 'HTMLDocument'],
            ['appendix/dom/document-fragment', 'DocumentFragment'],
            ['appendix/dom/element', 'Element'],
            ['appendix/dom/html-element', 'HTMLElement'],
            ['appendix/dom/attr', 'Attr'],
            ['appendix/dom/node-list', 'NodeList'],
            ['appendix/dom/html-collection', 'HTMLCollection'],
            ['appendix/dom/child-node', 'ChildNode'],
            ['appendix/dom/parent-node', 'ParentNode'],
            ['appendix/dom/non-cnode', 'NonDocumentTypeChildNode'],
            ['appendix/dom/document-type', 'DocumentType'],
            ['appendix/dom/character-data', 'CharacterData'],
            ['appendix/dom/sub-character-data', 'CharacterData 子类'],
            ['appendix/dom/event', 'Event'],
            ['appendix/dom/sub-event', 'Event 子类'],
          ]
        },
        {
          title: '附录：常用内置对象',
          children: [
            ['appendix/bio/function', 'Function'],
            ['appendix/bio/object', 'Object'],
            ['appendix/bio/array', 'Array'],
            ['appendix/bio/string', 'String'],
            ['appendix/bio/number', 'Number'],
            ['appendix/bio/boolean', 'Boolean'],
            ['appendix/bio/math', 'Math'],
            ['appendix/bio/date', 'Date'],
            ['appendix/bio/regexp', 'RegExp'],
            ['appendix/bio/global', '全局属性'],
          ]
        },
      ],
      '/front-end/node/': [
        {
          title: '全局属性',
          children: [
            ['global/dirname', '__dirname'],
            ['global/filename', '__filename'],
            ['global/console', 'console'],
            ['global/timer', 'timer'],
            ['global/process', 'process'],
            ['global/buffer', 'Buffer'],
            ['global/stream', 'Stream'],
          ]
        },
        {
          title: '原生模块',
          children: [
            ['native/assert', 'assert'],
            ['native/inspector', 'inspector'],
            ['native/path', 'path'],
            ['native/util', 'util'],
            ['native/crypto', 'crypto'],
            ['native/url', 'url'],
            ['native/child-process', 'child_process'],
            ['native/cluster', 'cluster'],
            ['native/events', 'events'],
            ['native/os', 'os'], 
            ['native/fs', 'fs'],
            ['native/zlib', 'zlib'],
            ['native/net', 'net'],
            ['native/dgram', 'dgram'],
            ['native/dns', 'dns'],
            ['native/http', 'http'],
            ['native/http2', 'http2'],
            ['native/https', 'https'],
          ]
        },
        {
          title: '专题：异步编程',
          children: [
            ['async/concept', '原理和概念'],
            ['async/callback', 'Callback - 回调地狱'],
            ['async/promise', 'Promise - 状态机 1'],
            ['async/generator', 'Generator - 状态机 2'],
            ['async/thunk&&co', 'thunk && co - 回调的链式执行'],
            ['async/async&await', 'async & await - 终极杀器'],
          ]
        },
        {
          title: '专题：使用技巧',
          children: [
            ['tips/npm-module', '使用 npm 开发模块'],
          ],
        },
        {
          title: '专题：框架',
          children: [
            ['fw/express', 'Express'],
            ['fw/koa', 'Koa'],
            ['fw/egg', 'Egg'],
          ],
        },
        {
          title: 'MySQL',
          children: [
            ['mysql/start', '开始'],
          ]
        },
        {
          title: 'MongoDB',
          children: [
            ['mongodb/start', '开始'],
            ['mongodb/db&collection', '数据库和集合'],
            ['mongodb/document', '文档操作'],
            ['mongodb/document-pro', '文档操作进阶'],
            ['mongodb/mongoose', 'Mongoose'],
            ['mongodb/mongodb-pro', '进阶'],
          ],
        },
        {
          title: 'Redis',
          children: [
            ['redis/start', '开始'],
          ]
        },
      ],
      '/front-end/vue/': [
        {
          title: 'Vue 2.x',
          collapsable: false,
          children: [
            ['feature/base', '指令和简写'],
            ['feature/component', '组件特性'],
            ['feature/effect', '特效'],
            ['feature/render', '渲染函数'],
            ['feature/reuse', '功能复用'],
            ['feature/api', 'API 简介'],
            ['feature/cli', 'vue-cli'],
            ['feature/loader', 'vue-loader'],
            ['feature/router', 'vue-router'],
            ['feature/vuex', 'vuex'],
            ['feature/ssr', 'ssr'],
            ['feature/interview', '面试题'],
          ]
        },
        {
          title: '源码学习',
          collapsable: false,
          children: [
            ['source/responsive' , '响应式原理'],
            ['source/vdom', '虚拟 DOM'],
            // ['source/vuex', 'Vuex 原理'],
            // ['source/router', 'Router 原理'],
            // ['source/diff', 'diff 算法及实现'],
            // ['source/next-tick', '$nextTick() 原理'],
            // ['source/directive', '指令的实现'],
          ]
        },
        {
          title: '开发技巧',
          collapsable: false,
          children: [
            ['tips/api', 'API 管理'],
          ]
        },
        {
          title: '组件开发',
          collapsable: false,
          children: [
            ['component-skills/svg-component', 'SVG 组件']
          ]
        },
      ],
      '/front-end/engineering/': [
        {
          title: '工程化',
          collapsable: false,
          children: [
            ['engine/npm&yarn', '包管理'],
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
            ['ts/install', '简介'],
            ['ts/type', '类型'],
            ['ts/interface', '接口'],
            ['ts/generic', '泛型'],
            ['ts/function', '函数'],
            ['ts/class', '类'],
            ['ts/other', '其他'],
          ]
        },
        {
          title: '其他工具库',
          collapsable: false,
          children: [
            ['libraries/element', 'Element'],
            ['libraries/bootstrap', 'Bootstrap'],
            ['libraries/vue-awesome-swiper', 'vue-awesome-swiper'],
            ['libraries/mock', 'Mock - 数据模拟'],
            ['libraries/echarts', 'Echarts - 数据图表化']
          ]
        },
      ],
      '/front-end/business-related/': [
        ['speedup', '开发提速'],
        ['debug', '调试'],
        ['cross-platform', '跨平台'],
        ['business-related', '业务相关'],
        ['performance-optimization', '性能优化'],
        {
          title: '持续集成 & 持续交互',
          collapsable: false,
          children: [
            ['ci-cd/', '简介'],
            ['ci-cd/travis', 'Travis'],
          ]
        }
      ],
      '/front-end/project-setup/': [
        {
          title: 'Vue SPA',
          collapsable: false,
          children: [
            ['spa/flow', '流程介绍'],
            ['spa/router', '路由配置']
          ]
        }
      ],
      '/front-end/applet/': [
        {
          title: '小程序基础',
          collapsable: false,
          children: [
            ['base/intro', '介绍'],
            ['base/config', '配置'],
          ]
        }
      ],
      

      // 后端
      '/back-end/linux/': [
        ['', '常用命令'],
        {
          title: 'shell',
          collapsable: false,
          children: [
            ['shell/intro', '简介'],
            ['shell/syntax', '语法'],
            ['shell/program', '编程'],
          ],
        },
        {
          title: 'Linux 命令',
          collapsable: false,
          children: [
            ['command/sys', '系统管理'],
            ['command/file', '文件目录管理'],
            ['command/zip', '压缩与解压'],
            ['command/disc', '磁盘管理与维护'],
            ['command/net', '网络设置和连接'],
            ['command/pkg', '包管理'],
          ],
        },
        {
          title: '软件',
          collapsable: false,
          children: [
            ['install/node', 'node'],
          ],
        },
      ],
      '/back-end/docker/': [
        {
          title: 'Docker 入门',
          collapsable: false,
          children: [
            ['base/intro', '简介'],
            ['base/command', '基础命令'],
            ['base/dockerfile', 'Dockerfile'],
          ]
        }
      ],
      '/back-end/nginx/': [
        {
          title: 'Nginx 入门',
          collapsable: false,
          children: [
            ['base/intro', '简介'],
            ['base/module', '模块简介'],
          ]
        },
        {
          title: '服务器配置实例',
          collapsable: false,
          children: [
            ['demo/static-resource', '静态资源'],
            ['demo/reverse-proxy', '反向代理'],
            ['demo/load-balance', '负载均衡'],
            ['demo/anti-stealing-link', '防盗链'],
          ]
        }
      ],
      '/back-end/mongodb/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            ['base/intro', '简介'],
            ['base/type', '数据类型'],
            ['base/manage', '管理语句'],
            ['base/document', '文档操作'],
          ]
        },
      ],
      '/back-end/mysql/': [
        {
          title: '基础',
          collapsable: false,
          children: [
            ['base/intro', '简介'],
            ['base/type', '数据类型'],
            ['base/keyword', '关键字'],
            ['base/manage', '管理语句'],
            ['base/statement', 'CURD'],
            ['base/sub-statement', '子句'],
            ['base/common-statement', '日常语句'],
          ]
        },
      ],

      // Python
      '/python/syntax/': [
        {
          title: '基础语法',
          collapsable: false,
          children: [
            ['base/intro', '入门'],
            ['base/operator', '运算符参考'],
            ['base/control-flow', '控制流'],
            ['base/function', '函数'],
            ['base/class', '类'],
          ]
        },
        {
          title: '数据结构',
          collapsable: false,
          children: [
            ['data-structure/intro', '简介'],
            ['data-structure/number', '数值'],
            ['data-structure/none', '空值'],
            ['data-structure/boolean', '布尔值'],
            ['data-structure/list&tuple', '列表和元组'],
            ['data-structure/string', '字符串'],
            ['data-structure/dictionary', '字典'],
            ['data-structure/set', '集合'],
            ['data-structure/iterator', '迭代器'],
            ['data-structure/generator', '生成器'],
          ]
        },
        {
          title: '高级语法',
          collapsable: false,
          children: [
            ['deep/fp', '函数式编程'],
            ['deep/oop', '面向对象编程'],
          ]
        },
      ],

      '/python/module/': [
        {
          title: '模块简介',
          collapsable: false,
          children: [
            ['intro', '概念'],
            ['buildin', '内置模块概览'],
            ['third', '第三方模块收集'],
          ]
        },
        {
          title: '常用内置模块详解',
          collapsable: false,
          children: [
            ['buildin/os', 'os'],
            ['buildin/re', 're'],
            ['buildin/file', 'file'],
            ['buildin/json', 'json'],
            ['buildin/urllib', 'urllib'],
          ]
        },
        {
          title: '第三方模块详解',
          collapsable: false,
          children: [
            ['third/beautiful-soup', 'beautifulsoup'],
            ['third/selenium', 'selenium'],
          ]
        },
      ],

      '/r/': [
        {
          title: 'R 语言入门',
          collapsable: false,
          children: [
            ['base/intro', '简介'],
            ['base/dataset', '数据集和数据结构'],
            ['base/data-input', '数据输入'],
            ['base/data-manage', '数据管理'],
            ['base/graph', '图形'],
          ]
        },
        {
          title: '分析方法',
          collapsable: false,
          children: [
            // ['analysis/intro', '简介'],
          ]
        },
      ],

      // 文章
      '/post/': [
        {
          title: 'Javascript - 趣说 OOP',
          collapsable: false,
          children: [
            ['prototype', '原型和原型链'],
            ['es-create-object-patterns', '创建对象的方式'],
            ['es-implement-extend-patterns', '实现继承的方式'],
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            ['module-history', '模块化规范发展史'],
            ['webpack-loader&plugin', 'Webpack - Loader & Plugin'],
            ['libraries', '常用工具库']
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
      ],
      '/other/tools/': [
        ['ps', 'PS'],
        ['editor', '编辑器'],
      ],
      '/other/editor/': [
        {
          title: 'Vim',
          collapsable: false,
          children: [
            ['vim/intro', '简介'],
          ]
        }
      ],
      '/other/expect-tech/': [
        ['', '技术之外'],
      ]
    }
  }
}