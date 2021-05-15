const { fs, path } = require('@vuepress/shared-utils')
// 侧边导航栏

function SidebarGuide(groupA, groupB) {
    // 侧边栏分组
    return [{
        title: groupA,
        collapsable: false,
        children: [
            'team/foreword',
            'team/tools',
            'team/project'
            // 'getting-started',
            // 'directory-structure',
            // 'basic-config',
            // 'assets',
            // 'markdown',
            // 'using-vue',
            // 'i18n',
            // 'deploy'
        ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'Advanced/frontmatter',
                'Advanced/permalinks',
                'Advanced/markdown-slot',
                'Advanced/global-computed'
            ]
        }
    ]
}

function SidebarReadMe (groupA, introduction) {
    return [{
        title: groupA,
        path: '',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ['', introduction],
        ]
      }]
  }

module.exports = {
    SidebarGuide,
    SidebarReadMe
}
