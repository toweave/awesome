const MenuNav = require('./nav/index')

const { SidebarGuide, SidebarReadMe } = require('./sidebar/index')

module.exports = {
  title: 'Awesome',
  description: 'Awesome Toweave',
  base: "/awesome/",
  themeConfig: {
    nav: MenuNav,
    sidebar: {
      '/project/': SidebarGuide('团队指引', 'Advanced'),
      '/go/': SidebarReadMe('Go', 'Go Project'),
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['container', {
      type: 'vue',
      before: '<pre class="vue-container"><code>',
      after: '</code></pre>',
    }],
    ['container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }],    
    ['container', {
      type: 'description',
      before: info => `<description title="${info}">`,
      after: '</description>',
    }],
  ]
}
