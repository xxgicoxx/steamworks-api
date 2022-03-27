const { request } = require('../utils');

const { apiConfig } = require('../configs');

class SteamWorksService {
  constructor(config = {}) {
    this.config = config;
  }

  async get(endpoint = '', options = {}, partner = false) {
    return this.request(endpoint, options, partner);
  }

  async post(endpoint = '', options = {}, partner = false) {
    return this.request(endpoint, options, partner, 'POST');
  }

  async request(endpoint = '', options = {}, partner = false, method = 'GET') {
    const qs = { ...this.config, ...options };
    return request({ url: `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${endpoint}`, method, qs });
  }
}

module.exports = SteamWorksService;
