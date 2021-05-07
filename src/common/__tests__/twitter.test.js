const Twitter = require('../twitter')
const TwitterSourceMock = require('./fixtures/twitter.fixture')

let twitter = null

beforeAll(() => {
  twitter = new Twitter(new TwitterSourceMock())
})

describe('Twitter', () => {
  it('Should receive maximum 5 recent tweets', async () => {
    const recentTweets = await twitter.getRecent(5)
    expect(recentTweets.length).toBeGreaterThanOrEqual(5)
  })
  
  it('Should receive maximum 1 recent tweets to validate structure', async () => {
    const recentTweet = await twitter.getRecent()
    expect(typeof recentTweet[0].text).toBe('string')
    expect(typeof recentTweet[0].user.id).toBe('number')
    expect(typeof recentTweet[0].user.description).toBe('string')
    expect(typeof recentTweet[0].user.url).toBe('string')
  })
})
