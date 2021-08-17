const { SteamWorksService } = require('../services');

class SteamController {
  /**
   * @param {Object} config configs
   * @param {string} config.key steam key
   */
  constructor(config) {
    this._config = config;

    this._service = new SteamWorksService(this._config);
  }

  /**
   * SteamWorks API GET
   *
   * @param {string} endpoint Endpoint
   * @param {Object} [options] Query parameters
   * @param {Boolean} [partner = false] Partner url
   *
   * @returns {Promise} Promise
   */
  get(endpoint = '', options = {}, partner = false) {
    return this._service.get(endpoint, options, partner);
  }

  /**
   * SteamWorks API POST
   *
   * @param {string} endpoint Endpoint
   * @param {Object} [options] Query parameters
   * @param {Boolean} [partner = false] Partner url
   *
   * @returns {Promise} Promise
   */
  post(endpoint = '', options = {}, partner = false) {
    return this._service.post(endpoint, options, partner);
  }
}

module.exports = SteamController;
