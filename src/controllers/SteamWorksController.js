const { SteamWorksService } = require('../services');

class SteamController {
  /**
    * Steam config.
    * @param {String} config.key - steam key
    */
  constructor(config) {
    this.config = config;
  }

  /**
    * SteamWorks API GET
    *
    * @param {String} uri - uri string
    * @param {Object} options - request params
    * @param {Boolean} partner - is partner url?
    */
  get(uri = '', options = {}, partner = false) {
    const steamWorks = new SteamWorksService(this.config);
    return steamWorks.get(uri, options, partner);
  }

  /**
    * SteamWorks API POST
    *
    * @param {String} uri - uri string
    * @param {Object} options - request params
    * @param {Boolean} partner - is partner url?
    */
  post(uri = '', options = {}, partner = false) {
    const steamWorks = new SteamWorksService(this.config);
    return steamWorks.post(uri, options, partner);
  }
}

module.exports = SteamController;
