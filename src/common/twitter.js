module.exports = class Twitter {
  
  async getRecent(limit = 1) {
    return [{
      text: 'RT @TwitterDev: 1/ Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP',
      user: {
        id: 6253282,
        name: 'Twitter API',
        description: 'The Real Twitter API. I tweet about API changes, service issues and happily answer questions about Twitter and our API. Don\'t get an answer? It\'s on my website.',
        url: 'http://t.co/78pYTvWfJd'
      }
    }]
  }
}
