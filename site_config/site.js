// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 80, // 本地开发服务器的启动端口
  domain: 'rdtstudio.cn/', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/demo1.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/demo1.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/demo2.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '产品介绍',
        link: '/zh-cn/docs/团队介绍.html',
      },
      {
        key: 'blog',
        text: '技术沉淀',
        link: '/zh-cn/docs/技术驱动型.html',
      },
      {
        key: 'community',
        text: '团队发展【暂未开放】',
        link: '/zh-cn/docs/团队介绍.html',
      },
    ],
    disclaimer: {
      title: '联系方式',
      content: '电话：13265809498 （微信同号）',
    },
    documentation: {
      title: '团队介绍',
      list: [
        {
          text: '团队介绍',
          link: '/zh-cn/docs/团队介绍.html',
        },
        {
          text: '项目列表',
          link: '/zh-cn/docs/项目列表.html',
        },
      ],
    },
    resources: {
      title: '沉淀',
      list: [
        {
          text: '技术沉淀[暂未开放]',
          link: '/zh-cn/docs/团队介绍.html',
        },
        {
          text: '前观测控',
          link: '/zh-cn/docs/前观测控公司介绍.html',
        },
      ],
    },
    copyright: 'Copyright © 2021 ',
  },
};
