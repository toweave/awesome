const axios = require('axios');

// c4af9f22cf02cea2a7a7c8b9547e074a3f7c506e
const baseRequest = axios.create({
  baseURL: 'https://github.com/',
  timeout: 60000
});
const instance = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 60000,
  headers: {
    // 'X-Custom-Header': 'foobar',
    'X-OAuth-Scopes': 'repo, user',
    'X-Accepted-OAuth-Scopes': 'user',
    'Authorization': 'token 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'
  }
});

module.exports = {
  baseRequest: baseRequest,
  request: instance
}
