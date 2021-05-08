const faker = require('faker')

module.exports = class UserFixture {
  
  #data = [{
    id: '61a7ce5b-7a26-1e8e-9ac8-06474d96a566',
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    image: faker.image.image(),
    title: faker.name.title(),
    text: faker.lorem.text()
  }]
  
  async get(id) {
    return Object.assign(
      {},
      this.#data.find(user => user.id === id)
    )
  }
  
  async update(id, params) {
    let index = this.#data.findIndex(user => user.id === id)
    if (index === -1) {
      throw new Error('Record not found')
    }
    this.#data[index] = Object.assign(
      this.#data[index],
      params
    )
  }
}
