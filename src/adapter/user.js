const AWS = require('aws-sdk')

AWS.config.update({
  region: 'us-east-1',
  endpoint: process.env.ENDPOINT
})

const docClient = new AWS.DynamoDB.DocumentClient()

module.exports = class UserAdapter {
  
  async get(id) {
    let params = {
      TableName: 'User',
      Key: {
        id: id
      }
    }
    let result = await docClient.get(params).promise()
    return result.Item
  }
  
  async update(id, params) {
    let dbParams = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: id
      },
      ExpressionAttributeValues: {
        ':firstName': params.firstName,
        ':lastName': params.lastName,
        ':image': params.image,
        ':title': params.title,
        ':text': params.text
      },
      UpdateExpression: 'SET firstName = :firstName, lastName = :lastName, image = :image, title = :title, text = :text',
      ReturnValues: 'ALL_NEW'
    }
    
    return docClient.update(dbParams).promise()
  }
}
