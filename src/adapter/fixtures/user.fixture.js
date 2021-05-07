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
}
