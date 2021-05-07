const get = require('lodash/get')

const Twitter = require('../../domain/twitter')
const TwitterService = require('../../dataservice/twitter')
const TwitterAdapter = require('../../adapter/twitter')

module.exports.get = async event => {
  const twitter = new Twitter(
    new TwitterService(
      new TwitterAdapter()
    )
  )
  return {
    statusCode: 200,
    body: JSON.stringify(
      await twitter.getRecent(get(event, 'queryStringParameters.count'))
    )
  }
}
