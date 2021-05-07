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
    const user = await user.get(123456)
    expect(user).toBeDefined()
  })
})
