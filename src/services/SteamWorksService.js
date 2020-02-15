const request = require('request-promise-native');

const { apiConfig } = require('../configs');

class SteamWorksService {
  constructor(config = {}) {
    this._config = config;
  }

  async _get(uri = '', options = {}, partner = false) {
    try {
      const qs = Object.assign(this._config, options);
      const url = `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${uri}`;
      const result = await request.get({ url, qs });

      return JSON.parse(result);
    } catch (ex) {
      throw new Error(ex);
    }
  }

  async _post(uri = '', options = {}, partner = false) {
    try {
      const qs = Object.assign(this._config, options);
      const url = `${partner === null || partner !== true ? apiConfig.url : apiConfig.partner}${uri}`;
      const result = await request.post({ url, qs });

      return JSON.parse(result);
    } catch (ex) {
      throw new Error(ex);
    }
  }
}

module.exports = SteamWorksService;
