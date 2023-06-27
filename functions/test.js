export const handler = async (event, context) => {
  const message = "This is a public message.";

  return {
    statusCode: 200,
    body: JSON.stringify({ message }),
  };
};
