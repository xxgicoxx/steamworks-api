const { request } = require('../utils');

const { apiConfig } = require('../configs');

class SteamWorksService {
  constructor(config = {}) {
    this.config = config;
  }

  async get(endpoint = '', options = {}, partner = false) {
    const qs = { ...this.config, ...options };
    const result = await request({ url: `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${endpoint}`, method: 'GET', qs });

    return result;
  }

  async post(endpoint = '', options = {}, partner = false) {
    const qs = { ...this.config, ...options };
    const result = await request({ url: `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${endpoint}`, method: 'POST', qs });

    return result;
  }
}

module.exports = SteamWorksService;
