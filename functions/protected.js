import { withAuth0 } from "@netlify/auth0";

export const handler = withAuth0(
  async (event, context) => {
    const message = "This is a protected message.";

    return {
      statusCode: 200,
      body: JSON.stringify({ message }),
    };
  },
  {
    auth0: {
      required: true,
    },
  }
);
