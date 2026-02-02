
# Integrations

To integrate other services or applications with your Federated Directory you will need an API key. This is an OAuth 2 key with administrative permissions for your entire Federated Directory. It has the same permissions as an administrator, except the ability to log in to our portal.
So make sure you submit these keys only at locations you trust and remove the keys you don't use.

Whenever you need to have an automatic user provisioning e.g, from Entra ID or Okta you will need to create a "Directory Key". This key only has administrative permissions for the directory it was created for and you can create it within directory view. Find out more [here](../administrator/directories#directory-keys)

To create an API key you need to provide a name and a description for it.

Every key has the following attributes:

| Key attribute | Description                                                          |
| :------------ | :------------------------------------------------------------------- |
| issuer        | Unique identifier of the key.                                        |
| private key   | To sign the JWT token to request a new access token. Keep it secure! |

The `issuer` and `private key` can be used to create an access token, based upon the OAuth2 principle. Check out our [developer help section](../developer/obtaining-a-token) for the details.

Also find out how to use such an integration key at the [developer section](../developer/getting-started).
