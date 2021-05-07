const handler = require('../handler')

test('Expected handler statusCode', async () => {
  let result = await handler.user({event: 'mock-event'})
  expect(result.statusCode).toBe(200)
})
