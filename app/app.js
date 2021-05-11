const Koa = require('koa');
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
            "repos": "gin-gonic/gin"
          },
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
            "repos": "gofiber/fiber"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "revel/revel"
          }
        ]
      },
      {
        "title": "中间件",
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

const RequestRepository = async () => {
  let textContent = ''
  const reposPath = '/repos/'
  const RequestRecursion = async (dataset, deep = 0) => {
    let tableContent = ''
    for (let item of dataset) {
      if (item.type === 'title') {
        const titleSymbol = `##${Array(deep + 1).join('#')}`
        textContent += `${titleSymbol} ${item.title}\n`
        textContent += `* ${item.description}\n\n`
      }
      if (item.type === 'repos') {
        if (tableContent === '') {
          tableContent = `| Repository :link: | Star | Description | Latest :heart: |\n| :-------- | --------: | :-------- | :-------- |\n`
        }
        // repository
        const { data } = await request({
          url: `${reposPath}${item.repos}`,
          // `method` 是创建请求时使用的方法
          method: 'get', // default
        })
        const latest = moment(data.pushed_at).fromNow()
        tableContent += `| ${data.name} | ${data.stargazers_count} | ${data.description} | ${latest} |\n`
      }
      if (item.children && item.children.length) {
        await RequestRecursion(item.children, deep + 1)
      }
    }
    textContent += tableContent + '\n\n'
  }
  await RequestRecursion(RepositoryJSON)
  console.log(45, textContent)
  await WriteFile(textContent)
}

// 响应
app.use(async (ctx, next) => {
  const start = Date.now();
  await RequestRepository();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  ctx.body = 'Hello Koa';
});

app.listen(3000);
