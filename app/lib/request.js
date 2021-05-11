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
