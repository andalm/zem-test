const Twitter = require('twitter')

module.exports = class TwitterAdapter {
  
  #api
  
  constructor() {
    this.#api = new Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.ACCESS_TOKEN_KEY,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET
    })
  }
  
  async get(path, params) {
    return this.#api.get(path, params)
  }
}
