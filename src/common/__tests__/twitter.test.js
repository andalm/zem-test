const Twitter = require('../twitter')

test('Should receive 5 recent tweets', async () => {
  const twitter = new Twitter({name: 'mock source'})
  const recentTweets = twitter.getRecent({limit: 5})
  expect(recentTweets.leading).toBe(5)
})
