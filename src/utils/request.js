const fetch = require('node-fetch');

/**
 * Request URL
 *
 * @param {Object} options Options
 * @param {string} options.url URL
 * @param {Object} [options.qs] Query parameters
 * @param {Object} [options.body] Body
 * @param {Object} [options.headers] Headers
 * @param {string} [options.method = 'GET'] Method
 * @param {string} [options.type = 'json'] Response type
 */
async function request(options = {}) {
  const params = new URLSearchParams();
  Object.keys(options.qs || {}).forEach((key) => params.append(key, options.qs[key]));

  return fetch(`${options.url}?${params || ''}`, { method: options.method || 'GET', body: options.body ? JSON.stringify(options.body) : null, headers: options.headers || {} });
}

module.exports = request;
