const axios = require('axios');

// e6bfae9a939991ac7136
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
