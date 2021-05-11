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
