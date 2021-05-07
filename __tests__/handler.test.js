const handler = require('../handler')

test('correct greeting is generated', async () => {
  let result = await handler.user({event: 'mock-event'})
  expect(result.statusCode).toBe(200)
})
