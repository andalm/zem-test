const faker = require('faker')

module.exports = class TwitterFixture {
  
  async get(_, params) {
    return new Array(params.count)
    .fill(null)
    .map(_ => {
      return {
        text: faker.lorem.text(),
        user: {
          id: faker.datatype.number(),
          name: faker.name.findName(),
          description: faker.lorem.text(),
          url: faker.internet.url()
        }
      }
    })
  }
}
