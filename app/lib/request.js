const axios = require('axios');
const config = require('../config/index');

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
    'Authorization': config.Authorization
  }
});

module.exports = {
  baseRequest: baseRequest,
  request: instance
}
