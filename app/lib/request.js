const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: {
    // 'X-Custom-Header': 'foobar',
    'Authorization': 'token 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'
  }
});

module.exports = {
  request: instance
}
