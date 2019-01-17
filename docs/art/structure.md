# 了解 Element 的项目结构

你可以把 Element 的源码 clone 到本地，也可以安装方便在线查看 GitHub 仓库代码的 Chrome 扩展，总之我们首先要做的事情就是先把 Element 源码的目录结构都弄清楚：了解每个文件的作用是什么，Element 是如何规划目录的等等。

详细目录介绍如下：

```bash
element
├── build    # 存放所有的打包，自动化生成、构建、部署工具
├── examples # 项目示例，官网页面等
├── packages # 所有的组件及主题文件
├── src      # 源码
│    ├── directives  # 指令
│    ├── locale      # 国际化
│    ├── mixins      # 混合
│    ├── transitions # 内置过度动画组件
│    ├── utils       # 工具
│    └── index.js    # 入口文件。这个文件是自动生成的
├── test             # 存放测试文件
├── types            # .ts 文件，为组件定义一些数据类型规范
├── .babelrc         # babel 配置文件
├── .eslintignore    # eslint 校验忽略
├── .eslintrc        # eslint 配置文件
├── .gitattributes   # github 自动识别项目属于哪种语言
├── .gitignore       # git 提交忽略
├── .travis.yml      # 线上构建配置
├── CHANGElOG.*.MD   # 更新日志
├── FAQ.MD           # 一些开发中的常见问题汇总及解决方法
├── LICENSE          # 项目版权声明
├── Makefile         # Make 配置文件。用来自动化部署项目
├── README.md        # 项目介绍
├── components.json  # 组件及入口文件。为了后续自动化处理
├── element_logo.svg
├── package.json     # 项目依赖及配置
├── postcss.config.js # Css 预处理配置
└── yarn.lock        # yarn 模块安装工具生成的版本锁文件
```

关于上面对目录和文件的描述也许你一眼看上去一头雾水，还是不理解他在干什么，没关系，这是正常的，在你没有深入到源码之前，仅仅凭借几句话就理解这个文件的作用是不可能的，所以不要灰心，只需要有个大概印象混个眼熟就可以了。