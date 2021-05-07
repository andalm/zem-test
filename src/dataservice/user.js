module.exports = class User {
  
  #source
  
  constructor(source) {
    this.#source = source
  }
  
  async get(id) {
    return this.#source.get(id)
  }
}
