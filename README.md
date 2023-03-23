# steamworks-api
Steamworks Web API wrapper for Node.js.

<p align="center">
  <img src="assets/imgs/steam.png">
</p>

# Features
* Steamworks API endpoints

# Docs
* [Documentation](https://partner.steamgames.com/doc/webapi)

# Prerequisites
* [Node.js](https://nodejs.org/en/)

# Installation
````
npm install steamworks-api
````

# Credentials
### 1. Steam
````
# Account
Create an Steam account on https://store.steampowered.com/.

# API Key
Create an API key on https://steamcommunity.com/login/home/?goto=%2Fdev%2Fapikey.
````

# Example
```javascript
const Steam = require('steamworks-api');

const steam = new Steam({
  key: 'STEAM_API_KEY',
});

(async () => {
  try {
    const recentlyPlayedGames = await steam.get('/IPlayerService/GetRecentlyPlayedGames/v1/', { steamid: '76561198027639832' });
    console.log(await recentlyPlayedGames.json());

    const ownedGames = await steam.get('/IPlayerService/GetOwnedGames/v1/', { steamid: '76561198027639832' });
    console.log(await ownedGames.json());
  } catch (error) {
    console.error(error);
  }
})();
```

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)