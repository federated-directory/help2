
# Users API

Our fully [SCIM 2.0](http://www.simplecloud.info) compliant API to create, search, retrieve, update and remove user information.

::: info
All API calls require a valid token. See how to [obtain a token](./obtaining-a-token).
:::

## User Data Model

The User resource in Federated Directory is composed of three schemas:
1. **Core User**: `urn:ietf:params:scim:schemas:core:2.0:User`
2. **Enterprise Extension**: `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User`
3. **FD Extension**: `urn:ietf:params:scim:schemas:extension:fd:2.0:User`

Technical details for all attributes (types, constraints, and descriptions) are available in the interactive sections below.

## User Operations

### Search Users
Search through all the users in your Federated Directory across all companies, divisions, and departments. You can use standard SCIM filters like `co` (contains) and `eq` (equals).

<ScalarEndpoint operationId="getV2UsersId" />

### Get a User
Retrieve the full SCIM representation of a specific user by their unique ID.

<ScalarEndpoint operationId="getV2UsersId" />

### Get Current User (Me)
Retrieve the SCIM representation of the currently authenticated user based on the provided token.

<ScalarEndpoint operationId="getV2Me" />

### Create User
Create a new user in a specific directory. When using a Directory Key, the user is automatically created in the associated directory.

<ScalarEndpoint operationId="postV2Users" />

### Update User (PATCH)
Update specific attributes of a user without replacing the entire resource. This supports `add`, `remove`, and `replace` operations as per the SCIM 2.0 specification.

#### PATCH Operations Guide
- **Add/Replace**: Used to set or update attribute values.
- **Remove**: Used to clear attribute values.
- **Complex Attributes**: Sub-attributes are referenced using dot notation (e.g., `name.givenName`).
- **Multivalued Attributes**: Can be targeted using filters (e.g., `emails[type eq "work"].value`).

<ScalarEndpoint operationId="patchV2UsersId" />

### Replace User (PUT)
Replace the entire user resource. Any mutable attributes not included in the request body will be emptied or reset to their default values.

<ScalarEndpoint operationId="putV2UsersId" />

### Delete User
Permanently remove a user and all associated data. This action is irreversible and removes the user from all groups.

<ScalarEndpoint operationId="deleteV2UsersId" />

### Bulk User Updates
Perform multiple CRUD actions (Create, Update, Delete) in a single API call (up to 1000 operations).

<ScalarEndpoint operationId="postV2Bulk" />
