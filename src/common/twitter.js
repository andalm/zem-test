module.exports = class Twitter {
  
  #source
  
  constructor(source) {
    this.#source = source
  }
  
  async getRecent(count = 1) {
    return await this.#source.get('statuses/user_timeline.json', {count})
  }
}
