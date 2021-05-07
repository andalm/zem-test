const Twitter = require('../twitter')

describe('Twitter', () => {
  it('Should receive 5 recent tweets', async () => {
    const twitter = new Twitter({name: 'mock source'})
    const recentTweets = await twitter.getRecent(5)
    expect(recentTweets.length).toBe(5)
  })
})
