const { SteamWorksService } = require('../services');

class SteamController {
  /**
    * Steam config
    *
    * @param {!Object} config configs
    * @param {!string} config.key steam key
    */
  constructor(config = {}) {
    this._steamWorks = new SteamWorksService(config);
  }

  /**
    * SteamWorks API GET
    *
    * @param {!string} uri uri string
    * @param {Object} [options] request params
    * @param {Boolean} [partner = false] is partner url?
    * @returns {Promise} return Promise
    */
  get(uri = '', options = {}, partner = false) {
    return this._steamWorks._get(uri, options, partner);
  }

  /**
    * SteamWorks API POST
    *
    * @param {!string} uri uri string
    * @param {Object} [options] request params
    * @param {Boolean} [partner = false] is partner url?
    * @returns {Promise} return Promise
    */
  post(uri = '', options = {}, partner = false) {
    return this._steamWorks._post(uri, options, partner);
  }
}

module.exports = SteamController;
