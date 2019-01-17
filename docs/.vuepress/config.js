module.exports = {
  // base: '/element-code-learning/',
  title: 'Element 源码学习',
  description: '2019 年给自己定个小目标：把 ElementUI 源码学习一遍！',
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    }
  },
  themeConfig: {
    // displayAllHeaders: true,
    // sidebarDepth: 4,
    nav: [
      { text: '开始阅读', link: '/art/' },
      { text: '关于', link: '/about/' },
      { text: '仓库地址', link: 'https://github.com/gongph/element-code-learning' },
    ],
    sidebar: {
      '/art/': [
        '',
        'structure',
        'build-command'
      ],
      '/': [
        ''
      ]
    }
  }
}
