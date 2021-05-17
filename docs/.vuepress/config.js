const MenuNav = require('./nav/index')

const { SidebarGuide, SidebarReadMe } = require('./sidebar/index')

module.exports = {
  title: 'Awesome',
  description: 'Awesome Toweave',
  base: "/awesome/",
  themeConfig: {
    nav: MenuNav,
    sidebar: {
      '/go/': SidebarReadMe('Go From Github.', 'Go Project'),
      '/': SidebarReadMe('Language form Github.', 'Top 10 Rank'),
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
