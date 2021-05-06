module.exports.user = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Successfully`,
        input: event,
      },
      null,
      2
    ),
  };
};
