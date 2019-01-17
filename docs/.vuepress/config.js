module.exports = {
  title: 'Element 源码学习',
  description: '2019 年给自己定个小目标：把 ElementUI 源码学习一遍！',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  markdown: {
    toc: {
      includeLevel: [2, 3, 4, 5, 6]
    },
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '开始阅读', link: '/art/' },
      { text: '关于', link: '/about/' },
      { text: '仓库地址', link: 'https://github.com/gongph/element-code-learning' },
    ],
    sidebar: {
      '/art/': [
        {
          title: '第一部分： 序章',
          children: [
            '',
            'structure',
          ]
        }, {
          title: '第二部分： 开端',
          children: [
            'command-line',
            'build-file',
            'build-theme'
          ]
        }
      ],
      '/': [
        ''
      ]
    }
  }
}
