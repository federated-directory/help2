
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
