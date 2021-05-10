const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar',
    'Authorization': 'token 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'
  }
});

module.exports = {
  request: instance
}
