module.exports = {
  Admins: ["your user id"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "", //Support Server Link
  Token: process.env.Token || "Your Discord Bot Token Here", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "Your Discord Client ID", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "Your Discord Client Secret", //Discord Client Secret
  Scopes: ["identify", "guilds"], //Discord OAuth2 Scopes //do not change
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://pm1.narvii.com/6276/924a9118952e0bab4f8d39db45fbe9996236f283_hq.jpg", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 8, //Bot Inviting Permissions
  Website: process.env.Website || "", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku (do not edit if on repl.it

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink Change this to your server
  /*
  Lavalink: {
    id: "",
    host: "",
    port: ,
    pass: "", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "Spotify Client ID", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "Spotify Client Secret", //Spotify Client Secret
  },
};
