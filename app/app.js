const Koa = require('koa');
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


const test = async () => {
  // let textContent = ''
  let textContent = `
  | Repository | Star | Description | Updated_at |
  | ---- | ---- | ---- | ---- | 
  `
  console.log(36, textContent)
  // repository
  const { data } = await request({
    url: '/repos/vercel/fetch',
    // `method` 是创建请求时使用的方法
    method: 'get', // default
  })
  console.log(43, data)
  textContent += `| ${data.name} | ${data.stargazers_count} | ${data.description} | ${data.updated_at} |`
   console.log(45, textContent)
  await WriteFile(textContent)
}

// 响应
app.use(async (ctx, next) => {
  const start = Date.now();
  await test();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  ctx.body = 'Hello Koa';
});

app.listen(3000);
