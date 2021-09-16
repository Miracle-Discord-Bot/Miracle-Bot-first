module.exports = {
  Admins: ["814170568005124137"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "", //Support Server Link
  Token: process.env.Token || "ODc4MzQxODk4NDE3MzQ4NjE4.YR_xow.MxhaDN5mBsosd1xatFFOImRRvhs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "878341898417348618", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "NeYsfQRq49Cc_fqVWhKvZZ0B_qe-Zhv8", //Discord Client Secret
  Scopes: ["identify", "guilds"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://pm1.narvii.com/6276/924a9118952e0bab4f8d39db45fbe9996236f283_hq.jpg", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 8, //Bot Inviting Permissions
  Website: process.env.Website || "", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "e59d2a9e5211471c883a5a93dbcef0f3", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "b919a00eeb18435a943df63aef9fca02", //Spotify Client Secret
  },
};
