const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class SteamWorksService {
  constructor(config) {
    this.config = config;
  }

  async get(uri = '', options = {}, partner = false) {
    try {
      const qs = Object.assign(this.config, options);
      const url = `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${uri}`;
      const result = await request.get({ url, qs });

      return JSON.parse(result);
    } catch (ex) {
      throw new Error(ex);
    }
  }

  async post(uri = '', options = {}, partner = false) {
    try {
      const qs = Object.assign(this.config, options);
      const url = `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${uri}`;
      const result = await request.post({ url, qs });

      return JSON.parse(result);
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = SteamWorksService;
