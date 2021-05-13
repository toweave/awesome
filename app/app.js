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
    "description": "A curated list of awesome Go frameworks, libraries, software and resources.",
    "repos": "",
    "children": [
      {
        "title": "[Audio and Music](#audio-and-music)",
        "type": "title",
        "description": "Libraries for manipulating audio",
        "repos": "",
        "children": [
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "mewkiz/flac"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "Comcast/gaad"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "DylanMeeus/GoAudio"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "dh1tw/gosamplerate"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "bogem/id3v2"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "gen2brain/malgo"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "tosone/minimp3"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "go-mix/mix"
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
            "repos": "rakyll/portmidi"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "mccoyst/vorbis"
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
        "title": "[Authentication and OAuth](#authentication-and-oauth)",
        "type": "title",
        "description": "Libraries for implementing authentications schemes.",
        "repos": "",
        "children": [
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "volatiletech/authboss"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "hako/branca"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "hsluoyz/casbin"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "mengzhuo/cookiestxt"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "dimuska139/go-email-normalizer"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "shaj13/go-guardian"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "square/go-jose"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "RichardKnop/go-oauth2-server"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "dghubble/gologin"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "mikespook/gorbac"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "markbates/goth"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "goji/httpauth"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "abraithwaite/jeff"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "robbert229/jwt"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "pascaldekloe/jwt"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "cristalhq/jwt"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "adam-hanna/jwt-auth"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "tarent/loginsrv"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "golang/oauth2"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "openshift/osin"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "jltorresm/otpgo"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "o1egl/paseto"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "xyproto/permissions2"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "zpatrick/rbac"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "SonicRoshan/scope"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "alexedwards/scs"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "chmike/securecookie"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "icza/session"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "f0rmiga/sessiongate-go"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "adam-hanna/sessions"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "swithek/sessionup"
          },
          {
            "title": "",
            "type": "repos",
            "description": "",
            "repos": "brianvoe/sjwt"
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
              // 第四层 提升到 第二层
              if (k2.type === 'title') {
                data[i0].children.push({
                  title: k2.title,
                  type: k2.type,
                  description: k2.description,
                  repos: k2.repos,
                  children: k2.children.filter(element => element.type === 'repos'),
                })
                // 第五层 提升到 第二
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

const navigationText = () => {
  let textContent = ''
  const navigationRecursion = (dataset, deep = 0) => {
    deep++
    for (let item of dataset) {
      if (item.type === 'title') {
        const placeholderBlank = `${Array(deep).join('  ')}`
        textContent += `${placeholderBlank} - ${item.title}\n`
        navigationRecursion(item.children, deep)
      }
    }
  }
  navigationRecursion(RepositoryJSON)
  return textContent
}

const RequestRepository = async () => {
  let textContent = `
  # Awesome Go [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)]\n
  * A curated list of awesome Go frameworks, libraries, software and resources.\n
  * We have no monthly cost, but we have employees working hard to maintain the Awesome Go.\n
  * If you see a package or project here that is no longer maintained or is not a good fit, please submit a issue to improve this file. Thank you!
  * Order by alphabetical and star count.\n
  `
  textContent += navigationText() + '\n---\n\n'
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
      let tableContent = `| Repository | StarCount | Description | LatestUpdates |\n| :---- | ----: | :---- | :---- |\n`
      orderTableData.forEach((element) => {
        tableContent += `| [${element.name}](${element.html_url}) | ${element.stargazers_count} | ${element.description} | ${element.latest} |\n`
      })
      textContent += tableContent + '\n\n'
    }
  }
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
