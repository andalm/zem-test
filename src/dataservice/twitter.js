module.exports = class Twitter {
  
  #source
  
  constructor(source) {
    this.#source = source
  }
  
  async get(count = 1) {
    return this.#source.get('statuses/user_timeline.json', {count})
  }
}
