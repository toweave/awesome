const axios = require('axios');

// c4af9f22cf02cea2a7a7c8b9547e074a3f7c506e
const baseRequest = axios.create({
  baseURL: 'https://github.com/',
  timeout: 60000
});
// learn repo :: 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
// learn use github api :: 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
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
