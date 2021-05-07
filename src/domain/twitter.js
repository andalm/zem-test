module.exports = class Twitter {
  
  #service
  
  constructor(service) {
    this.#service = service
  }
  
  async getRecent(count) {
    return this.#service.get(count)
  }
}
