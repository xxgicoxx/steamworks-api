# steamworks-api
Steamworks Web API wrapper for Node.js.

<p align="center">
  <img src="assets/imgs/steam.png">
</p>

# Docs
[Documentation](https://partner.steamgames.com/doc/webapi)

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
    const recentlyPlayedGames = await steam.get('/IPlayerService/GetRecentlyPlayedGames/v1/', { steamid: '76561198027639832' }, false);
    console.log(recentlyPlayedGames);

    const ownedGames = await steam.get('/IPlayerService/GetOwnedGames/v1/', { steamid: '76561198027639832' }, false);
    console.log(ownedGames);
  } catch (error) {
    console.error(error);
  }
})();
```

# Response example
````json
{ 
  "response": { 
    "total_count": 1, 
    "games": [
      {
        "appid": 730,
        "name": "Counter-Strike: Global Offensive",
        "playtime_2weeks": 387,
        "playtime_forever": 7201,
        "img_icon_url": "69f7ebe2735c366c65c0b33dae00e12dc40edbe4",
        "img_logo_url": "d0595ff02f5c79fd19b06f4d6165c3fda2372820",
        "playtime_windows_forever": 1566,
        "playtime_mac_forever": 3297,
        "playtime_linux_forever": 0
      }
    ]
  }
}
````

# Built With
* [Node.js](https://nodejs.org/en/)

# Authors
* [xxgicoxx](https://github.com/xxgicoxx)

# Acknowledgments
* [FlatIcon](https://www.flaticon.com/)