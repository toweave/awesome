const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: {
    // 'X-Custom-Header': 'foobar',
    'X-OAuth-Scopes': 'repo, user',
    'X-Accepted-OAuth-Scopes': 'user',
    'Authorization': 'token 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'
  }
});

module.exports = {
  request: instance
}
