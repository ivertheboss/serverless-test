exports.handler = async (event) => {
  const { method, body } = event;

  if (method === 'POST') {
    // Handle new chat message
    const message = JSON.parse(body);
    console.log(`New message from ${message.username}: ${message.text}`);
  } else if (method === 'GET') {
    // Return all chat messages
    const messages = [{ username: 'Alice', text: 'Hello!' }, { username: 'Bob', text: 'Hi there!' }];
    return {
      statusCode: 200,
      body: JSON.stringify(messages),
    };
  }

  return {
    statusCode: 404,
    body: 'Not found',
  };
};
