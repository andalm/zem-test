const User = require('../user')
const UserService = require('../../dataservice/user')
const UserAdapterMock = require('../../adapter/fixtures/user.fixture')

let user = null

beforeAll(() => {
  const userService = new UserService(
    new UserAdapterMock()
  )
  user = new User(userService)
})

describe('User', () => {
  it('Should get a user by id', async () => {
    const userResult = await user.getById('61a7ce5b-7a26-1e8e-9ac8-06474d96a566')
    expect(userResult).toBeDefined()
  })
  
  it('Should get a user by id to validate structure', async () => {
    const userResult = await user.getById('61a7ce5b-7a26-1e8e-9ac8-06474d96a566')
    expect(typeof userResult.id).toBe('string')
    expect(typeof userResult.firstName).toBe('string')
    expect(typeof userResult.lastName).toBe('string')
    expect(typeof userResult.image).toBe('string')
    expect(typeof userResult.title).toBe('string')
    expect(typeof userResult.text).toBe('string')
  })
  
  it('Should get an empty object if user doesn`t exist', async () => {
    const userResult = await user.getById(123156)
    expect(typeof userResult).toBe('object')
  })
})
