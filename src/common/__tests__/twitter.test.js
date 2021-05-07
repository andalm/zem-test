const Twitter = require('../twitter')

describe('Twitter', () => {
  const twitter = new Twitter({name: 'mock source'})
  
  it('Should receive 5 recent tweets', async () => {
    const recentTweets = await twitter.getRecent(5)
    expect(recentTweets.length).toBe(5)
  })
  
  it('Should receive 1 recent tweets to validate structure', async () => {
    const recentTweet = await twitter.getRecent()
    expect(typeof recentTweet[0].text).toBe('string')
    expect(typeof recentTweet[0].user.id).toBe('number')
    expect(typeof recentTweet[0].user.description).toBe('string')
    expect(typeof recentTweet[0].user.url).toBe('string')
  })
})
