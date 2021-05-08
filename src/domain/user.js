module.exports = class User {
  
  #service
  
  constructor(service) {
    this.#service = service
  }
  
  async getById(id) {
    return this.#service.get(id)
  }
  
  async updateById(id, params) {
    return this.#service.update(id, params)
  }
}
