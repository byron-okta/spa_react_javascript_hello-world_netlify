import { wrap } from "@netlify/integrations";
import { withAuth0 } from "@netlify/auth0";

const withIntegrations = wrap(withAuth0);

export const handler = withIntegrations(
  async (event, context) => {
    const message = "This is a protected message.";

    return {
      statusCode: 200,
      body: JSON.stringify(message),
    };
  },
  {
    auth0: {
      required: true,
    },
  }
);
