const get = require('lodash/get')

const User = require('../../domain/user')
const UserService = require('../../dataservice/user')
const UserAdapter = require('../../adapter/user')

module.exports.get = async event => {
  const user = new User(
    new UserService(
      new UserAdapter()
    )
  )
  let response
  if (event.httpMethod === 'GET') {
    response = await user.getById(get(event, 'pathParameters.userId'))
  } else {
    response = await user.updateById(
      get(event, 'pathParameters.userId'),
      get(event, 'body', {})
    )
  }
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}
