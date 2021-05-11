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
        "description": "*用于操作音频的库。 (翻译出错了? 试试 [英文版](README_EN.md#audio-and-music) 吧~)*",
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
        "description": "*全栈 web 框架。 (翻译出错了? 试试 英文版 吧~)*",
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
  }

]

const RequestRepository = async () => {
  // let textContent = ''
  const reposPath = '/repos/'
  let textContent = ''
  // let textContent = `
  // | Repository | Star | Description | Latest |
  // | ---- | ---- | ---- | ---- |
  // `
  for (let item of RepositoryJSON) {
    if (item.type === 'title') {
      textContent = `## ${item.title}  \n`
      textContent += `* ${item.description} *  \n`
    }
    if (item.children && item.children.length) {
      for (let element of item.children) {
        if (element.type === 'title') {
          textContent += `### ${element.title}  \n`
          textContent += `* ${element.description} *  \n`
        }
        if (element.children && element.children.length) {
          let tableContent = `| Repository | Star | Description | Latest |  \n| ---- | ---- | ---- | ---- |    \n`
          for (let term of element.children) {
            if (term.type === 'title') {
              textContent += `#### ${term.title}  \n`
              textContent += `* ${term.description} *  \n`
            }
            if (term.type === 'repos') {
              // repository
              const { data } = await request({
                url: `${reposPath}${term.repos}`,
                // `method` 是创建请求时使用的方法
                method: 'get', // default
              })
              const latest = moment(data.pushed_at).fromNow()
              tableContent += `| ${data.name} | ${data.stargazers_count} | ${data.description} | ${latest} | \n `
            }

            if (term.children && term.children.length) {
              let childContent = `| Repository | Star | Description | Latest |  \n| ---- | ---- | ---- | ---- |    \n`
              for (let child of term.children) {
                if (child.type === 'title') {
                  childContent += `#### ${child.title}  \n`
                  childContent += `* ${child.description} *  \n`
                }
                if (child.type === 'repos') {
                  // repository
                  const { data } = await request({
                    url: `${reposPath}${child.repos}`,
                    // `method` 是创建请求时使用的方法
                    method: 'get', // default
                  })
                  const latest = moment(data.pushed_at).fromNow()
                  childContent += `| ${data.name} | ${data.stargazers_count} | ${data.description} | ${latest} | \n `
                }
              }
              // 拼接子级 table
              textContent += childContent + '  \n'
            }
          }
          // 拼接 table
          textContent += tableContent + '  \n'
        }
      }
    }
  }
  console.log(45, textContent)
  await WriteFile(textContent)
  // // repository
  // const { data } = await request({
  //   url: '/repos/vercel/fetch',
  //   // `method` 是创建请求时使用的方法
  //   method: 'get', // default
  // })
  // console.log(43, data)
  // const latest = moment(data.pushed_at).fromNow()
  // textContent += `| ${data.name} | ${data.stargazers_count} | ${data.description} | ${latest} |`
  // console.log(45, textContent)
  // await WriteFile(textContent)
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
