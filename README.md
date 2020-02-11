# steamworks-api
Node package for SteamWorks API.

[Documentation](https://partner.steamgames.com/doc/webapi)

### Installation
````
npm install steamworks-api
````

### Example
```javascript
const Steam = require('steamworks-api');

const steam = new Steam({
  key: 'STEAM_KEY', // https://steamcommunity.com/dev/apikey
});

/**
  * SteamWorks API GET
  *
  * @param {String} uri - uri string
  * @param {Object} options - request params
  * @param {Boolean} partner - is partner url?
  */ 
steam.get(uri, options, partner).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

/**
  * SteamWorks API POST
  *
  * @param {String} uri - uri string
  * @param {Object} options - request params
  * @param {Boolean} partner - is partner url?
  */ 
steam.post(uri, options, partner).then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});
```

### Built With
* [Node.js](https://nodejs.org/en/)

### Authors
* **Giovani de Oliveira** - [xxgicoxx](https://github.com/xxgicoxx)