const Koa = require('koa');
const _ = require('lodash');
const moment = require('moment');
const { request } = require('./lib/request');

let fs = require("fs");
let path = require("path");
const BasePath = path.dirname(__dirname)

const app = new Koa();

console.log(10, "BasePath:", BasePath)

async function WriteFile(data, date) {
  const dataHTML = data.toString()
  return new Promise((resolve, reject) => {
    fs.writeFile(`${BasePath}/markdown/test.md`, dataHTML, async (err) => {
      if (err) {
        console.log("写入失败", err)
        reject(false)
      } else {
        console.log("写入成功了！！！")
        resolve(true)
      }
    })
  })
}

const RepositoryJSON = [
  {
    "title": "[Awesome Go](#awesome-go)",
    "type": "title",
    "description": "",
    "repos": "",
    "children": [
      {
        "title": "[音频和音乐](#音频和音乐)",
        "type": "title",
        "description": "用于操作音频的库。 (翻译出错了? 试试 [英文版](README_EN.md#audio-and-music) 吧~)",
        "repos": "",
        "children": [
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "hajimehoshi/oto"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "gordonklaus/portaudio"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "go-music-theory/music-theory"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "mdlayher/waveform"
          }
        ]
      },
      {
        "title": "[Web框架](#Web框架)",
        "type": "title",
        "description": "全栈 web 框架。 (翻译出错了? 试试 英文版 吧~)",
        "repos": "",
        "children": [
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "labstack/echo"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "gin-gonic/gin"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "gofiber/fiber"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "revel/revel"
          },
          {
            "title": "中间件 123",
            "type": "title",
            "description": "仿真中间件",
            "children": [
              {
                "title": "",
                "type": "repos",
                "description": "",
                "repos": "didip/tollbooth"
              },
              {
                "title": "",
                "type": "repos",
                "description": "",
                "repos": "rs/cors"
              },
              {
                "title": "",
                "type": "repos",
                "description": "",
                "repos": "ulule/limiter"
              },
              {
                "title": "中间件 123-child",
                "type": "title",
                "description": "仿真中间件",
                "children": [
                  {
                    "title": "",
                    "type": "repos",
                    "description": "",
                    "repos": "didip/tollbooth"
                  },
                  {
                    "title": "",
                    "type": "repos",
                    "description": "",
                    "repos": "rs/cors"
                  },
                  {
                    "title": "",
                    "type": "repos",
                    "description": "",
                    "repos": "ulule/limiter"
                  }
                ]
              }
            ]
          },
          {
            "title": "中间件 abc",
            "type": "title",
            "description": "仿真中间件",
            "children": [
              {
                "title": "",
                "type": "repos",
                "description": "",
                "repos": "didip/tollbooth"
              },
              {
                "title": "",
                "type": "repos",
                "description": "",
                "repos": "rs/cors"
              },
              {
                "title": "",
                "type": "repos",
                "description": "",
                "repos": "ulule/limiter"
              },
              {
                "title": "中间件 abc-child",
                "type": "title",
                "description": "仿真中间件",
                "children": [
                  {
                    "title": "",
                    "type": "repos",
                    "description": "",
                    "repos": "didip/tollbooth"
                  },
                  {
                    "title": "",
                    "type": "repos",
                    "description": "",
                    "repos": "rs/cors"
                  },
                  {
                    "title": "",
                    "type": "repos",
                    "description": "",
                    "repos": "ulule/limiter"
                  }
                ]
              }
            ]
          }
        ]
      },
    ]
  }
]

const FlattenData = (dataset, deep = 0) => {
  const data = []
  if (Array.isArray(dataset)) {
    // 第一层
    dataset.forEach((k0, i0) => {
      data.push({
        title: k0.title,
        type: k0.type,
        description: k0.description,
        repos: k0.repos,
      })
      if (Array.isArray(k0.children)) {
        // 第二层
        data[i0].children = []
        k0.children.forEach((k1, i1) => {
          data[i0].children.push({
            title: k1.title,
            type: k1.type,
            description: k1.description,
            repos: k1.repos,
          })
          if (Array.isArray(k1.children)) {
            // 第三层
            data[i0].children[i1].children = []
            k1.children.forEach((k2, i2) => {
              if (k2.type === 'repos') {
                data[i0].children[i1].children.push({
                  title: k2.title,
                  type: k2.type,
                  description: k2.description,
                  repos: k2.repos,
                })
              }
              // 第四层 提升到 第三层
              if (k2.type === 'title') {
                data[i0].children.push({
                  title: k2.title,
                  type: k2.type,
                  description: k2.description,
                  repos: k2.repos,
                  children: k2.children.filter(element => element.type === 'repos'),
                })
                // 第五层 提升到 第三层
                if (Array.isArray(k2.children)) {
                  k2.children.forEach((k3, i3) => {
                    if (k3.type === 'title') {
                      data[i0].children.push({
                        title: k3.title,
                        type: k3.type,
                        description: k3.description,
                        repos: k3.repos,
                        children: k3.children,
                      })
                    }
                  })
                }
              }

            })
          }
        })
      }
    })
  }
  return data
}

const RequestRepository = async () => {
  let textContent = ''
  const reposPath = '/repos/'
  const RequestRecursion = async (dataset, deep = 0) => {
    let prepareTableData = []
    deep++
    for (let item of dataset) {
      if (item.type === 'title') {
        const titleSymbol = `##${Array(deep).join('#')}`
        textContent += `${titleSymbol} ${item.title}\n`
        textContent += `* ${item.description}\n\n`
      }
      if (item.type === 'repos') {
        // repository
        const { data } = await request({
          url: `${reposPath}${item.repos}`,
          // `method` 是创建请求时使用的方法
          method: 'get', // default
        })
        // 添加扩展数据
        // const latest = moment(data.pushed_at).fromNow()
        data.latest = moment(data.pushed_at).fromNow()
        prepareTableData.push(data)
      }
      if (deep < 3 && item.children && item.children.length) {
        await RequestRecursion(item.children, deep)
      }
    }
    if (prepareTableData.length) {
      const orderTableData = _.orderBy(prepareTableData, ['stargazers_count'], ['desc'])
      let tableContent = `| Repository | Star | Description | Latest |\n| :---- | ----: | :---- | :---- |\n`
      orderTableData.forEach((element) => {
        tableContent += `| ${element.name} | ${element.stargazers_count} | ${element.description} | ${element.latest} |\n`
      })
      textContent += tableContent + '\n\n'
    }
  }
  console.log(1111, JSON.stringify(FlattenData(RepositoryJSON), null, 2))
  await RequestRecursion(FlattenData(RepositoryJSON))
  console.log(45, textContent)
  await WriteFile(textContent)
}

// 响应
app.use(async (ctx, next) => {
  const start = Date.now();
  await RequestRepository();
  // await GetAccessToken()
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  ctx.body = 'Hello Koa';
});

app.listen(3000);
