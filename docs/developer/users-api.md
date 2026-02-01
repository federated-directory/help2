
# Users API

Our fully [SCIM 2.0](http://www.simplecloud.info) compliant API to create, search, retrieve, update and remove user information.


> Looking for an interactive experience? Check out our [Interactive API Reference](/developer/api-reference) to try out these calls directly in your browser.

All described API calls below require a valid token. See here how to <a href="../developer/obtaining-a-token">obtain a token</a>. <br>
Working examples can be found in our Postman collection in the <a href="../developer/getting-started">"Getting Started"</a> section.

- [User data model](#d1)
- [Full JSON user representation](#d2)
- [Search users](#f1)
- [Get a user](#f2)
- [Create user](#f3)
- [Update user (PATCH)](#f4a)
- [Update user (PUT)](#f4b)
- [Delete user](#f5)
- [Bulk user updates](#f6)

<h2 id="d1">User data model</h2>

A schema is a collection of attribute definitions that describe the contents and or attributes. The user resource in Federated Directory consists out of 3 schema's:

1.  urn:ietf:params:scim:schemas:core:2.0:User
2.  urn:ietf:params:scim:schemas:extension:enterprise:2.0:User
3.  urn:ietf:params:scim:schemas:extension:fd:2.0:User

The below table describes the attributes and their meta data in each schema. The mutability, type and other pattern constraints can be found in our SCIM Schema endpoint: <a href="https://api.federated.directory/v2/Schemas" target=new>https&#x3A;//api.federated.directory/v2/Schemas</a>.

You can see how these schema's and attributes form a user JSON object in the next chapter.

<br><br>

### urn:ietf:params:scim:schemas:core:2.0:User

| Attribute         | Sub attribute    | Min | Max | Comment                                                                          |
| ----------------- | ---------------- | --- | --- | -------------------------------------------------------------------------------- |
| id                |                  | 36  | 36  | UUID format                                                                      |
| externalId        |                  | 0   | 200 |                                                                                  |
| userName          |                  | 1   | 150 | Unique in a directory                                                            |
| name {}           |                  |     |     |                                                                                  |
|                   | givenName        | 0   | 200 |                                                                                  |
|                   | familyName       | 0   | 200 |                                                                                  |
| displayName       |                  | 1   | 200 |                                                                                  |
| nickName          |                  | 0   | 200 |                                                                                  |
| profileUrl        |                  | 0   | 200 | "Valid URL, starting with 'http(s)://'"                                          |
| title             |                  | 0   | 150 |                                                                                  |
| userType          |                  | 0   | 150 |                                                                                  |
| emails \[]        |                  |     |     | Max 2 email addresses                                                            |
|                   | value            | 0   | 200 | Valid email address                                                              |
|                   | type             | 4   | 4   | "work" or "home"                                                                 |
|                   | primary          |     |     |                                                                                  |
| phoneNumbers \[]  |                  |     |     | Max 3 phone numbers                                                              |
|                   | value            | 0   | 45  | Any number and these: \_ . / ( ) # + -                                           |
|                   | type             | 4   | 5   | "work", "home" or "mobile"                                                       |
|                   | primary          |     |     | Boolean                                                                          |
| addresses \[]     |                  |     |     | Max 2 addresses                                                                  |
|                   | streetAddress    | 0   | 200 |                                                                                  |
|                   | locality         | 0   | 200 |                                                                                  |
|                   | region           | 0   | 200 |                                                                                  |
|                   | postalCode       | 0   | 45  |                                                                                  |
|                   | country          | 0   | 150 |                                                                                  |
|                   | type             | 4   | 4   | "work" or "home"                                                                 |
|                   | primary          |     |     | Boolean                                                                          |
| photos \[]        |                  |     |     | Max 2 photo's                                                                    |
|                   | type             | 4   | 4   | "photo" or "thumbnail"                                                           |
|                   | value            | 0   | 200 | Valid URL, starting with 'http(s)://'                                            |
| preferredLanguage |                  | 0   | 45  |                                                                                  |
| locale            |                  | 0   | 45  |                                                                                  |
| timezone          |                  | 0   | 45  |                                                                                  |
| active            |                  |     |     | Only available for the admin of a user.                                          |
| groups \[]        |                  |     |     | Will only contain the groups the requester is a member of as well                |
|                   | value            | 36  | 36  | UUID format "admin"                                                              |
|                   | display          | 1   | 200 | Group name                                                                       |
|                   | logos \[]        |     |     | Array with 2 objects: Logo & Thumbnail. 'Value' attribute contains path to image |
|                   | owner            |     |     | Boolean                                                                          |
|                   | assignedByFilter |     |     | Boolean. If true, the user can not be removed from the group manually            |
| roles \[]         |                  |     |     | Max 1 role                                                                       |
|                   | type             | 4   | 5   | "user" or "admin"                                                                |
|                   | value            | 4   | 5   | "user" or "admin"                                                                |
| password          |                  | 8   | 30  |                                                                                  |
| meta {}           |                  |     |     | Only available for the admin of a user. Not available in list response           |
|                   | created          | 20  | 20  | ISO 8601 in UTC timezone                                                         |
|                   | lastModified     | 20  | 20  | ISO 8601 in UTC timezone                                                         |
|                   | location         | 77  | 77  | https://api.federated.directory/v2/Users/{id}                              |
|                   | resourceType     | 4   | 4   | "User"                                                                           |

<br><br>

### urn:ietf:params:scim:schemas:extension:enterprise:2.0:User

| Attribute      | Sub attribute | Min | Max | Comment                        |
| -------------- | ------------- | --- | --- | ------------------------------ |
| organization   |               | 1   | 100 | Company Name                   |
| employeeNumber |               | 0   | 200 |                                |
| costCenter     |               | 0   | 200 |                                |
| division       |               | 0   | 200 |                                |
| department     |               | 0   | 200 |                                |
| manager {}     |               |     |     |                                |
|                | value         | 36  | 36  | Id of user in the same company |
|                | displayName   | 0   | 200 |                                |
|                | $ref          | 77  | 77  | ../v2/Users/{id}               |

<br><br>

### urn:ietf:params:scim:schemas:extension:fd:2.0:User

| Attribute        | Sub attribute | Min | Max | Comment                               |
| ---------------- | ------------- | --- | --- | ------------------------------------- |
| description      |               | 0   | 250 |                                       |
| companyId        |               | 36  | 36  | UUID format                           |
| companyLogos \[] |               | 36  | 36  | UUID format                           |
|                  | type          | 4   | 9   | "logo" or "thumbnail"                 |
|                  | value         | 0   | 200 | Valid URL, starting with 'http(s)://' |
| directoryId      |               | 36  | 36  | UUID format                           |
| custom01         |               | 0   | 150 | Custom attribute 1                    |
| custom02         |               | 0   | 150 | Custom attribute 2                    |
| custom03         |               | 0   | 150 | Custom attribute 3                    |

<h2 id="d2">Full JSON user representation</h2>

The following is a non-normative example of the fully populated SCIM representation in JSON format.

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User"
  ],
  "id": "9aa00-e97a-11e7-9faf-236ea7c81614",
  "externalId": "701984",
  "userName": "bjensen@example.com",
  "name": {
    "familyName": "Jensen",
    "givenName": "Barbara"
  },
  "displayName": "Babs Jensen",
  "nickName": "Fruit Loop",
  "profileUrl": "https://profile.example.com/bjensen",
  "emails": [
    {
      "value": "bjensen@example.com",
      "type": "work",
      "primary": true
    },
    {
      "value": "babs@jensen.org",
      "type": "home"
    }
  ],
  "addresses": [
    {
      "streetAddress": "100 Universal City Plaza",
      "locality": "Hollywood",
      "region": "CA",
      "postalCode": "91608",
      "country": "USA",
      "type": "work",
      "primary": true
    },
    {
      "type": "home",
      "streetAddress": "7632 cherry st",
      "postalCode": "coral springs",
      "locality": "nevada",
      "region": "85702",
      "country": "Spain"
    }
  ],
  "phoneNumbers": [
    {
      "type": "work",
      "primary": true,
      "value": "0061 3 9297 1600"
    },
    {
      "type": "home",
      "value": "(345)-767-6101"
    },
    {
      "type": "mobile",
      "value": "(068)-597-6483"
    }
  ],
  "photos": [
    {
      "value": "https://cdn.federated.directory/images/users/demo/w1.jpg",
      "type": "photo"
    },
    {
      "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_w1.jpg",
      "type": "thumbnail"
    }
  ],
  "userType": "Employee",
  "title": "Tour Guide",
  "active": true,
  "groups": [
    {
      "value": "7e9f14a0-fe8d-11ea-b3f4-d179f9eb8415",
      "display": "Tour Guides",
      "logos": [
        {
          "value": "https://cdn.federated.directory/images/groups/defaultgroup_icon_dskgidIYUDFYGUIKJugkj.svg",
          "type": "logo"
        },
        {
          "value": "https://cdn.federated.directory/images/groups/thumb/defaultgroup_icon_dskgidIYUDFYGUIKJugkj.svg",
          "type": "thumbnail"
        }
      ],
      "owner": true,
      "assignedByFilter": false
    }
  ],
  "roles": [
    {
      "value": "user",
      "display": "user"
    }
  ],
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "organization": "Cafe Expresso",
    "employeeNumber": "701984",
    "costCenter": "Hub04387",
    "division": "Getting Started",
    "department": "Bulk",
    "manager": {
      "displayName": "Paul Adam",
      "value": "d09420a0-e97a-11e7-9faf-236ea7c81614",
      "$ref": "../v2/Users/d09420a0-e97a-11e7-9faf-236ea7c81614"
    }
  },
  "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
    "description": "Potest manducare glacies crepito formidolose",
    "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66",
    "companyLogos": [
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "logo"
      },
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/thumb/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "thumbnail"
      }
    ],
    "directoryId": "8dc57fd4-d2af-11e7-9840-e757c2c4aa66"
  },
  "meta": {
    "resourceType": "User",
    "location": "https://api.federated.directory/v2/Users/d0b9aa00-e97a-11e7-9faf-236ea7c81614",
    "created": "2017-12-25T13:52:15.000Z",
    "lastModified": "2018-03-25T11:28:24.000Z"
  }
}
```

<h2 id="f1">Search users</h2>

Search through all the users in your Federated Directory. Over all companies, divisions and departments.

| Key     | Value                                                                                                                                                               |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| method  | GET                                                                                                                                                                 |
| url     | https://api.federated.directory/v2/Users/?filter={filter}&attributes={attributes}&sortBy={sortBy}&sortOrder={sortOrder}&count={count}&startIndex={startindex} |
| headers | Content-Type: application/json <br>Authorization: Bearer {token}                                                                                                    |

<br>

### Parameters

The response can be controlled by the below parameters. Remember that the actual user data in the response, depends on the permissions and scope of the token, the groups memberships of this user and the shared attributes in each of these groups.

All attribute names, operators and parameters are case sensitive.

**attributes**

The attributes, filter and sortBy parameters can be configured by the below list of attributes.

| Attribute                                                                 | Filter operator         |
| ------------------------------------------------------------------------- | ----------------------- |
| **id**                                                                    | eq                      |
| externalId                                                                | eq <br/> co (admin only)    |
| userName                                                                  | eq <br/> co (admin only)    |
| name.givenName                                                            |                         |
| name.familyName                                                           |                         |
| **displayName**                                                           | co                      |
| nickName                                                                  |                         |
| profileUrl                                                                |                         |
| **title**                                                                 | co                      |
| userType                                                                  |                         |
| emails                                                                    |                         |
| phoneNumbers                                                              |                         |
| addresses                                                                 |                         |
| preferredLanguage                                                         |                         |
| locale                                                                    |                         |
| timezone                                                                  |                         |
| active                                                                    |                         |
| **groups**                                                                | eq (group members only) |
| roles                                                                     |                         |
| meta                                                                      |                         |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:organization   |                         |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:employeeNumber |                         |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:costCenter     |                         |
| **urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division**   | co                      |
| **urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department** | co                      |
| urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager        | eq (use manager.value)  |
| urn:ietf:params:scim:schemas:extension:fd:2.0:User:description            |                         |
| urn:ietf:params:scim:schemas:extension:fd:2.0:User:directoryId            | eq                      |
| urn:ietf:params:scim:schemas:extension:fd:2.0:User:companyId              | eq                      |
| urn:ietf:params:scim:schemas:extension:fd:2.0:User:companyLogos           |                         |

When no attributes are specified as a parameter in the query, it will default to the **bold** printed attributes above.

**filter**

Filter supports the following operators:

- `co` → (contains)
- `eq` → (equals)
- `and` → (to combine multiple search operators)

Every filter attribute has a default filter operator which will be used, no matter which filter operator you use in the query. This default filter operator query can be found in the above attribute table.
You can only filter on those attributes that have a default filter operator value.

Retrieve all the users with the same manager by settings a filter on `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager.value`.

An administrator can only filter on directoryId within his own company. If directoryId is provided in the filter, any optional companyId in the filter is ignored.

**sortBy**

All of the attributes in the above table can be used in the 'sortBy' query parameter.

**sortOrder**

The sort order determines the sorting direction:

- ascending
- descending

If not specified. defaults to ascending.

**count**

Specifies the maximum number of results.
Minimum 1 and maximum 50. If not specified it defaults back to 50.

**startIndex**

The 1-based index of the first result in the current set of list results.
Minimum 1. If not specified it defaults back to 1.

### Example Request

```bash
curl -X GET \
  'https://api.federated.directory/v2/Users?filter=urn:ietf:params:scim:schemas:extension:fd:2.0:User:companyId co %228dc57fd0-d2af-11e7-9840-e757c2c4aa66%22 and urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division co%22Getting Started%22 and urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department co %22Bulk%22&attributes=displayName,photos,title,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:division,urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:department,urn:ietf:params:scim:schemas:extension:fd:2.0:User:companyId&sortBy=displayName&sortOrder=ascending&count=4&startIndex=1' \
  -H 'Authorization: Bearer {token}' \
  -H 'Content-Type: application/json'
```

### Example Response

`http status code: 200`

```json
{
  "totalResults": 4,
  "itemsPerPage": 4,
  "startIndex": 1,
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:ListResponse"],
  "Resources": [
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
      ],
      "id": "0fbc35e0-4d2d-11e8-a9c6-fbdcd95513af",
      "displayName": "Armando Pearson",
      "photos": [
        {
          "type": "photo",
          "primary": true,
          "value": "https://cdn.federated.directory/images/users/demo/m26.jpg"
        },
        {
          "type": "thumbnail",
          "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_m26.jpg"
        }
      ],
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "division": "Getting Started",
        "department": "Bulk"
      },
      "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
        "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66"
      }
    },
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
      ],
      "id": "0fbbe7c0-4d2d-11e8-a9c6-fbdcd95513af",
      "displayName": "Deborah Watson",
      "photos": [
        {
          "type": "photo",
          "primary": true,
          "value": "https://cdn.federated.directory/images/users/demo/w18.jpg"
        },
        {
          "type": "thumbnail",
          "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_w18.jpg"
        }
      ],
      "title": "Project Manager",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "division": "Getting Started",
        "department": "Bulk"
      },
      "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
        "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66"
      }
    },
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
      ],
      "id": "0fbbc0b0-4d2d-11e8-a9c6-fbdcd95513af",
      "displayName": "Mae Thomas",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "division": "Getting Started",
        "department": "Bulk"
      },
      "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
        "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66"
      }
    },
    {
      "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
        "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
      ],
      "id": "0fbc5cf0-4d2d-11e8-a9c6-fbdcd95513af",
      "displayName": "Rói Da Rosa",
      "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
        "division": "Getting Started",
        "department": "Bulk"
      },
      "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
        "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66"
      }
    }
  ]
}
```

<h2 id="f2">Get a user</h2>

Get the data of one specific user.

| Key     | Value                                                                       |
| ------- | --------------------------------------------------------------------------- |
| method  | GET                                                                         |
| url     | https://api.federated.directory/v2/Users/{id}?attributes={attributes} |
| headers | Content-Type: application/json <br>Authorization: Bearer {token}            |

### Parameters

The response can only be controlled by the 'attributes' parameters. Remember that the actual user data in the response, depends on the permissions and scope of the token (from a user or key) and the data federated with your company.

All attribute names are case sensitive.

**attributes**

Use the same attributes as during the 'search users' queries above.

When no 'attributes' parameter is specified, all user attributes with a value will be returned. Including the 'meta' object for administrators.

### Example Request

```bash
curl -X GET \
  'https://api.federated.directory/v2/Users/0dc48490-4d2d-11e8-a9c6-fbdcd95513af?attributes=displayName,userName,phoneNumbers,name.givenName,urn:ietf:params:scim:schemas:extension:fd:2.0:User:description,active,roles' \
  -H 'Authorization: Bearer {token}' \
  -H 'Content-Type: application/json'
```

### Example Response

`http status code: 200`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
  ],
  "id": "0dc48490-4d2d-11e8-a9c6-fbdcd95513af",
  "userName": "bjensen@example.com",
  "displayName": "Babs Jensen",
  "roles": [
    {
      "value": "user",
      "display": "user"
    }
  ],
  "active": true,
  "name": {
    "givenName": "Barbara"
  },
  "phoneNumbers": [
    {
      "type": "work",
      "primary": true,
      "value": "0061 3 9297 1600"
    },
    {
      "type": "home",
      "value": "(345)-767-6101"
    },
    {
      "type": "mobile",
      "value": "(068)-597-6483"
    }
  ],
  "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
    "description": "Potest manducare glacies crepito formidolose"
  },
}
```

<h2 id="f3">Create user</h2>

Create a new user in a directory in your company.

| Key     | Value                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------ |
| method  | POST                                                                                             |
| url     | https://api.federated.directory/v2/Users |
| headers | Content-Type: application/json <br>Authorization: Bearer {token} <br> directoryId: {directoryId} |
| body    | See below                                                                                        |

<br>

The 'directoryId' in the header indicates the directory in which the user should be created.
This could also be part of the user JSON in the body. If the bearer token comes from a directory key, a reference to
a directoryId is not needed, since the directory key is bound to one single directory.

### Body

User JSON object. See chapter "[User data model](#d1)" and "[Full JSON user representation](#d2)".

Always include the mandatory attributes `userName` & `displayName` when creating a user. However a <a href="../directories/introduction">contact</a> does not contain a `userName`.
Do not include an `id` attribute or the `meta` object.

### Example Request

```bash
curl -X POST \
  https://api.federated.directory/v2/Users \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {token}' \
  -H 'directoryId: 8dc57fd4-d2af-11e7-9840-e757c2c4aa66' \
  -d '{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
  ],
  "externalId": "701984",
  "userName": "bjensen@example.com",
  "name": {
    "familyName": "Jensen",
    "givenName": "Barbara"
  },
  "displayName": "Babs Jensen",
  "nickName": "Fruit Loop",
  "profileUrl": "https://profile.example.com/bjensen",
  "emails": [
    {
      "value": "bjensen@example.com",
      "type": "work",
      "primary": true
    },
    {
      "value": "babs@jensen.org",
      "type": "home"
    }
  ],
  "addresses": [
    {
      "streetAddress": "100 Universal City Plaza",
      "locality": "Hollywood",
      "region": "CA",
      "postalCode": "91608",
      "country": "USA",
      "type": "work",
      "primary": true
    },
    {
      "type": "home",
      "streetAddress": "7632 cherry st",
      "postalCode": "coral springs",
      "locality": "nevada",
      "region": "85702",
      "country": "Spain"
    }
  ],
  "phoneNumbers": [
    {
      "type": "work",
      "primary": true,
      "value": "0061 3 9297 1600"
    },
    {
      "type": "home",
      "value": "(345)-767-6101"
    },
    {
      "type": "mobile",
      "value": "(068)-597-6483"
    }
  ],
  "photos": [
    {
      "value": "https://cdn.federated.directory/images/users/demo/w1.jpg",
      "type": "photo"
    },
    {
      "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_w1.jpg",
      "type": "thumbnail"
    }
  ],
  "userType": "Employee",
  "title": "Tour Guide",
  "active": true,
  "roles": [
    {
      "value": "user",
      "display": "user"
    }
  ],
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "employeeNumber": "701984",
    "costCenter": "Hub04387",
    "division": "Getting Started"
  },
  "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
    "description": "Potest manducare glacies crepito formidolose"
  }
}'
```

### Example Response

`http status code: 201`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
  ],
  "id": "dfc73700-586b-11e8-8519-2b3682bb456c",
  "externalId": "701984",
  "userName": "bjensen@example.com",
  "name": {
    "familyName": "Jensen",
    "givenName": "Barbara"
  },
  "displayName": "Babs Jensen",
  "nickName": "Fruit Loop",
  "profileUrl": "https://profile.example.com/bjensen",
  "addresses": [
    {
      "type": "work",
      "primary": true,
      "streetAddress": "100 Universal City Plaza",
      "postalCode": "91608",
      "locality": "Hollywood",
      "region": "CA",
      "country": "USA"
    },
    {
      "type": "home",
      "streetAddress": "7632 cherry st",
      "postalCode": "coral springs",
      "locality": "nevada",
      "region": "85702",
      "country": "Spain"
    }
  ],
  "emails": [
    {
      "type": "work",
      "primary": true,
      "value": "bjensen@example.com"
    },
    {
      "type": "home",
      "value": "babs@jensen.org"
    }
  ],
  "phoneNumbers": [
    {
      "type": "work",
      "primary": true,
      "value": "0061 3 9297 1600"
    },
    {
      "type": "home",
      "value": "(345)-767-6101"
    },
    {
      "type": "mobile",
      "value": "(068)-597-6483"
    }
  ],
  "photos": [
    {
      "type": "photo",
      "primary": true,
      "value": "https://cdn.federated.directory/images/users/demo/w1.jpg"
    },
    {
      "type": "thumbnail",
      "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_w1.jpg"
    }
  ],
  "userType": "Employee",
  "title": "Tour Guide",
  "groups": [
    {
      "value": "7e9f14a0-fe8d-11ea-b3f4-d179f9eb8415",
      "display": "All users",
      "logos": [
        {
          "value": "https://cdn.federated.directory/images/groups/defaultgroup_icon_dskgidIYUDFYGUIKJugkj.svg",
          "type": "logo"
        },
        {
          "value": "https://cdn.federated.directory/images/groups/thumb/defaultgroup_icon_dskgidIYUDFYGUIKJugkj.svg",
          "type": "thumbnail"
        }
      ],
      "owner": false,
      "assignedByFilter": true
    }
  ],
  "active": true,
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "organization": "Cafe Expresso",
    "employeeNumber": "701984",
    "costCenter": "Hub04387",
    "division": "Getting Started"
  },
  "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
    "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66",
    "companyLogos": [
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "logo"
      },
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/thumb/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "thumbnail"
      }
    ],
    "directoryId": "5b0afcc1-3262-11e7-9579-1d8db7d7ec6a",
    "description": "Potest manducare glacies crepito formidolose"
  },
  "roles": [
    {
      "value": "user",
      "display": "user"
    }
  ],
  "meta": {
    "resourceType": "User",
    "location": "https://api.federated.directory/v2/Users/dfc73700-586b-11e8-8519-2b3682bb456c",
    "created": "2018-05-15T18:14:57.392Z"
  }
}
```

<h2 id="f4a">Update user (PATCH)</h2>

Update a user with a PATCH call to update one or more attributes.

| Key     | Value                                                            |
| ------- | ---------------------------------------------------------------- |
| method  | PATCH                                                            |
| url     | https://api.federated.directory/v2/Users/{id} |
| headers | Content-Type: application/json <br>Authorization: Bearer {token} |
| body    | See below                                                        |

<br>

The body of a patch call includes an `Operations` array. Every object in this array contains
a specific operation (add, remove, replace) on one or more attributes of this user.

There are two types of `Operation` objects:

1. [With a path key](#patchwithpath)  
One user attribute per operation can be changed. The path indicates the user attribute that needs to be changed. In case of an 'add' or 'replace' operation, will the new value be present in the 'value' key.

2. [Without a path key](#patchwithoutpath)  
Every operation can change multiple user attributes. Every operation can basically contain part .

<h3 id="patchwithpath"> Body with a path key </h3>
This operation consists out of the following attributes.

| Key   | Value                           |
| ----- | ------------------------------- |
| op    | 'add', 'replace' or 'remove'    |
| path  | The user attribute.             |
| value | The new value of the attribute. |

Every operation modifies one attribute. Since every attribute should be defined
explicitly (even in a multi valued attribute like `emails`), an 'add' operation is the same as
a 'replace' operation.

An attribute is defined in the **path** and MAY be uniquely identified by prefixing the attribute name with its schema URN separated by a
colon (":") character; e.g., the core User resource attribute 'userName' is identified
as "urn:ietf:params:scim:schemas:core:2.0:User:userName" or just as "userName".

Complex attributes' sub-attributes are referenced via nested dot
('.') notation, i.e., {urn}:{Attribute name}.{Sub-Attribute name}.
For example, the fully qualified path for a User's givenName is
"urn:ietf:params:scim:schemas:core:2.0:User:name.givenName" (or just 'name.givenName'). All
facets (URN, attribute, and sub-attribute name) of the fully encoded
attribute name are case insensitive.

Multi value attributes like 'emails','phoneNumbers' & 'addresses' include the 'type' in the 'path':

- emails[type eq \"work\"].value
- phoneNumbers[type eq \"home\"].value
- addresses[type eq \"work\"].streetAddress
- photos[type eq \"thumbnail\"].value

The 'manager' and 'roles' attributes are not multi valued but rather complex. Their 'path' is
actually pretty easy:

- manager
- roles

The **value** is defined as a string or as an array with one object.  
Usually, this object contains one `value` attribute, except for the 'manager'. In that case it could
also contain a `displayName`. If they are both defined, the value of the manager |
takes precedence.

<br>

<h3 id="patchwithoutpath"> Body without a path key </h3>  
This operation consists out of the following attributes.

| Attribute | Value                                                                   |
| --------- | ----------------------------------------------------------------------- |
| op        | 'add' or 'replace'                                                      |
| value     | The new value of the attribute. Only in case of an 'add' or a 'replace' |

Every operation modifies one or more attribute. Since every attribute should be defined
explicitly (even in a multi valued attribute like `emails`), an 'add' operation is the same as
a 'replace' operation.

The attributes in the value object have the exact same format as the user attributes in a `POST` or `PUT` call.
But in this case it can contain parts of user and only the attributes mentioned in this object will be replaced on the user.

<br>

### Example Request

The below example contains the three patch operation methods:

1. with path attribute and value as an array with one object
2. with path attribute and value as a string
3. without a path attribute

```bash
curl -X PATCH \
  https://api.federated.directory/v2/Users/dfc73700-586b-11e8-8519-2b3682bb456c \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {token}' \
  -d '{
    "schemas": [
        "urn:ietf:params:scim:api:messages:2.0:PatchOp"
    ],
    "Operations": [
        {
            "op": "Replace",
            "path": "userName",
            "value": [
                {
                    "value": "babs@example.net"
                }
            ]
        },
        {
            "op": "Replace",
            "path": "name.familyName",
            "value": [
                {
                    "value": "Gibson"
                }
            ]
        },
        {
            "op": "Replace",
            "path": "password",
            "value": [
                {
                    "value": "Mndsjgdh!d1265@4JH#FJGDH"
                }
            ]
        },
        {
            "op": "Add",
            "path": "manager",
            "value": [
                {
                    "value": "dfc73700-586b-11e8-8519-2b3682bb456c",
                    "display": "Babs"
                }
            ]
        },
        {
            "op": "Add",
            "path": "emails[type eq \"home\"].value",
            "value": "babs@example.net"
        },
        {
            "op": "Add",
            "path": "urn:ietf:params:scim:schemas:extension:fd:2.0:User:description",
            "value": "Company Chess Champion of 2012"
        },
        {
            "op": "Replace",
            "path": "roles",
            "value": "admin"
        },
        {
            "op": "Add",
            "value": {
                "userType": "Patched UserType",
                "addresses": [
                    {
                        "country": "DE",
                        "type": "work",
                        "primary": "true",
                        "locality": "Berlin"
                    }
                ]
            }
        },
        {
            "op": "Replace",
            "value": {
                "phoneNumbers": [
                    {
                        "value": "03012345678",
                        "type": "home",
                        "primary": "false"
                    },
                    {
                        "value": "02012345678",
                        "type": "work",
                        "primary": "true"
                    }
                ]
            }
        }
    ]
}'
```

### Example Response

`http status code: 200`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
  ],
  "id": "dfc73700-586b-11e8-8519-2b3682bb456c",
  "externalId": "701984",
  "userName": "babs@example.net",
  "name": {
    "familyName": "Gibson",
    "givenName": "Barbara"
  },
  "displayName": "Ms. Barbara J Jensen, III",
  "nickName": "Fruit Loop",
  "profileUrl": "https://profile.example.com/bjensen",
  "addresses": [
    {
      "type": "work",
      "primary": true,
      "streetAddress": "100 Universal City Plaza",
      "postalCode": "91608",
      "locality": "Berlin",
      "region": "CA",
      "country": "DE"
    },
    {
      "type": "home",
      "streetAddress": "7632 cherry st",
      "postalCode": "coral springs",
      "locality": "nevada",
      "region": "85702",
      "country": "Spain"
    }
  ],
  "emails": [
    {
      "type": "work",
      "primary": true,
      "value": "bjensen@example.com"
    },
    {
      "type": "home",
      "value": "babs@example.net"
    }
  ],
  "phoneNumbers": [
    {
      "type": "work",
      "primary": true,
      "value": "02012345678"
    },
    {
      "type": "home",
      "value": "03012345678"
    },
    {
      "type": "mobile",
      "value": "(068)-597-6483"
    }
  ],
  "photos": [
    {
      "type": "photo",
      "primary": true,
      "value": "https://cdn.federated.directory/images/users/demo/w1.jpg"
    },
    {
      "type": "thumbnail",
      "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_w1.jpg"
    }
  ],
  "userType": "Patched UserType",
  "title": "Tour Guide",
  "active": true,
  "groups": [
    {
      "value": "7e9f14a0-fe8d-11ea-b3f4-d179f9eb8415",
      "display": "All users",
      "logos": [
        {
          "value": "https://cdn.federated.directory/images/groups/defaultgroup_icon_dskgidIYUDFYGUIKJugkj.svg",
          "type": "logo"
        },
        {
          "value": "https://cdn.federated.directory/images/groups/thumb/defaultgroup_icon_dskgidIYUDFYGUIKJugkj.svg",
          "type": "thumbnail"
        }
      ],
      "owner": false,
      "assignedByFilter": true
    },
    {
      "value": "5e9f14a0-fe8d-11ea-b3f4-d179f9eb8422",
      "display": "Project Muffin",
      "logos": [
        {
          "value": "https://cdn.federated.directory/uploads/groups/5e9f14a0-fe8d-11ea-b3f4-d179f9eb8422/5e9f14a0-fe8d-11ea-b3f4-d179f9eb8422_IKJuk.svg",
          "type": "logo"
        },
        {
          "value": "https://cdn.federated.directory/uploads/groups/5e9f14a0-fe8d-11ea-b3f4-d179f9eb8422/thumb/5e9f14a0-fe8d-11ea-b3f4-d179f9eb8422_IKJuk.svg",
          "type": "thumbnail"
        }
      ],
      "owner": true,
      "assignedByFilter": false
    }
  ],
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "organization": "Cafe Expresso",
    "employeeNumber": "701984",
    "costCenter": "Hub04387",
    "manager": {
      "value": "dfc73700-586b-11e8-8519-2b3682bb456c",
      "$ref": "../v2/Users/dfc73700-586b-11e8-8519-2b3682bb456c",
      "displayName": "Babs Jensen"
    }
  },
  "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
    "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66",
    "companyLogos": [
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "logo"
      },
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/thumb/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "thumbnail"
      }
    ],
    "directoryId": "5b0afcc1-3262-11e7-9579-1d8db7d7ec6a",
    "description": "Company Chess Champion of 2012"
  },
  "roles": [
    {
      "value": "admin",
      "display": "admin"
    }
  ],
  "meta": {
    "resourceType": "User",
    "location": "https://api.federated.directory/v2/Users/dfc73700-586b-11e8-8519-2b3682bb456c",
    "created": "2018-05-15T18:14:57.000Z",
    "lastModified": "2018-05-15T18:41:35.736Z"
  }
}
```

<h2 id="f4b">Update user (PUT)</h2>

Update a user with a PUT call to replace all the users attributes.

| Key     | Value                                                            |
| ------- | ---------------------------------------------------------------- |
| method  | PUT                                                              |
| url     | https://api.federated.directory/v2/Users/{id} |
| headers | Content-Type: application/json <br>Authorization: Bearer {token} |
| body    | See below                                                        |

The body of a PUT call is comparable with that of the POST call, but can include all
the attributes retrieved of the user in a GET call. Like the `id` or `meta` object.
Those are not mutable but can be included.

_Mutable_ attributes not included in the body of the PUT will be emptied or reset to its default value.
Group memberships can be included in the PUT but will be ignored. Group memberships can only be changed in a PATCH.

### Example Request

```bash
curl -X PUT \
  https://api.federated.directory/v2/Users/0fbc35e0-4d2d-11e8-a9c6-fbdcd95513af \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {token}' \
  -d '{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
  ],
  "userName": "armando.pearson@example.com",
  "name": {
    "familyName": "Pearson",
    "givenName": "Armando Lawrence"
  },
  "displayName": "Armando Pearson",
  "emails": [
    {
      "type": "work",
      "primary": true,
      "value": "armando.pearson@example.com"
    }
  ],
  "photos": [
    {
      "type": "photo",
      "value": "https://cdn.federated.directory/images/users/demo/m26.jpg"
    },
    {
      "type": "thumbnail",
      "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_m26.jpg"
    }
  ],
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "manager": {
      "value": "0fbbe7c0-4d2d-11e8-a9c6-fbdcd95513af"
    }
  }
}'
```

### Example Response

`http status code: 200`

```json
{
  "schemas": [
    "urn:ietf:params:scim:schemas:core:2.0:User",
    "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
    "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
  ],
  "id": "0fbc35e0-4d2d-11e8-a9c6-fbdcd95513af",
  "userName": "armando.pearson@example.com",
  "name": {
    "familyName": "Pearson",
    "givenName": "Armando Lawrence"
  },
  "displayName": "Armando Pearson",
  "emails": [
    {
      "type": "work",
      "primary": true,
      "value": "armando.pearson@example.com"
    }
  ],
  "photos": [
    {
      "type": "photo",
      "primary": true,
      "value": "https://cdn.federated.directory/images/users/demo/m26.jpg"
    },
    {
      "type": "thumbnail",
      "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_m26.jpg"
    }
  ],
  "active": false,
  "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
    "organization": "Cafe Expresso",
    "manager": {
      "value": "0fbbe7c0-4d2d-11e8-a9c6-fbdcd95513af",
      "$ref": "../v2/Users/0fbbe7c0-4d2d-11e8-a9c6-fbdcd95513af",
      "displayName": "Deborah Watson"
    }
  },
  "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
    "companyId": "8dc57fd0-d2af-11e7-9840-e757c2c4aa66",
    "companyLogos": [
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "logo"
      },
      {
        "value": "https://dev.federated.directory/uploads/8dc57fd0-d2af-11e7-9840-e757c2c4aa66/thumb/8dc57fd0-d2af-11e7-9840-e757c2c4aa66_ow8fl.png",
        "type": "thumbnail"
      }
    ],
    "directoryId": "5b0afcc1-3262-11e7-9579-1d8db7d7ec6a"
  },
  "roles": [
    {
      "value": "user",
      "display": "user"
    }
  ],
  "meta": {
    "resourceType": "User",
    "location": "https://api.federated.directory/v2/Users/0fbc35e0-4d2d-11e8-a9c6-fbdcd95513af",
    "created": "2018-05-01T10:47:36.000Z",
    "lastModified": "2018-05-15T18:55:54.102Z"
  }
}
```

<h2 id="f5">Delete user</h2>

Delete a user. Will remove the user and it's data completely. Can not be restored. This will also remove the user from all its groups.

| Key     | Value                                                            |
| ------- | ---------------------------------------------------------------- |
| method  | DELETE                                                           |
| url     | https://api.federated.directory/v2/Users/{id} |
| headers | Content-Type: application/json <br>Authorization: Bearer {token} |

### Example Request

```bash
curl -X DELETE \
  https://api.federated.directory/v2/Users/dfc73700-586b-11e8-8519-2b3682bb456c \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {token}' \
```

### Example Response

`http status code: 204`

<h2 id="f6">Bulk user updates</h2>

Perform multiple (**max 1000**) user CRUD (Create, Update, Delete) actions in one API call.

| Key     | Value                                                                                            |
| ------- | ------------------------------------------------------------------------------------------------ |
| method  | POST                                                                                             |
| url     | https://api.federated.directory/v2/Bulk |
| headers | Content-Type: application/json <br>Authorization: Bearer {token} <br> directoryId: {directoryId} |
| body    | See below                                                                                        |

The 'directoryId' in the header indicates the directory in which the users should be created.
All users in a bulk action should be located in the same directory.

### Body

The body of a bulk call includes an `Operations` array. Every object in this array contains
a user CRUD action.

An operation object consists out of the following attributes.

| Attribute | Comment                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------- |
| data      | The same JSON you would use in the body of a normal POST or PUT call                           |
| method    | 'POST', 'PUT' or 'DELETE'. 'PATCH' is not supported                                            |
| bulkId    | Temporary id, used in the response. Can not be used to assign a user as manager to other users |
| path      | Optional. Path to user endpoint                                                                |

### Example Request

```bash
curl -X POST \
  https://api.federated.directory/v2/Bulk \
  -H 'Authorization: Bearer {token}' \
  -H 'Content-Type: application/json' \
  -H 'directoryid: 8dc57fd4-d2af-11e7-9840-e757c2c4aa66' \
  -d '{
  "schemas": [
    "urn:ietf:params:scim:api:messages:2.0:BulkRequest"
  ],
  "Operations": [
    {
      "data": {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "externalId": "701984",
        "userName": "bjensen@example.com",
        "name": {
          "familyName": "Jensen",
          "givenName": "Barbara"
        },
        "displayName": "Babs Jensen",
        "emails": [
          {
            "value": "bjensen@example.com",
            "type": "work",
            "primary": true
          }
        ],
        "addresses": [
          {
            "streetAddress": "100 Universal City Plaza",
            "locality": "Hollywood",
            "region": "CA",
            "postalCode": "91608",
            "country": "USA",
            "type": "work",
            "primary": true
          }
        ],
        "phoneNumbers": [
          {
            "type": "mobile",
            "value": "(068)-597-6483"
          }
        ]
      },
      "method": "POST",
      "bulkId": "bjensen@example.com",
      "path": "/Users"
    },
    {
      "data": {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User",
          "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",
          "urn:ietf:params:scim:schemas:extension:fd:2.0:User"
        ],
        "id": "d6b52060-4d7f-11e8-8b44-3d5adce8c545",
        "userName": "armando.pearson@example.com",
        "name": {
          "familyName": "Pearson",
          "givenName": "Armando Lawrence"
        },
        "displayName": "Armando Pearson",
        "emails": [
          {
            "type": "work",
            "primary": true,
            "value": "armando.pearson@example.com"
          }
        ],
        "photos": [
          {
            "type": "photo",
            "value": "https://cdn.federated.directory/images/users/demo/m26.jpg"
          },
          {
            "type": "thumbnail",
            "value": "https://cdn.federated.directory/images/users/demo/thumb/thumb_m26.jpg"
          }
        ],
        "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User": {
          "manager": {
            "value": "c6d02640-593c-11e8-a0b7-ed7a977b183b"
          },
          "division": "Getting Started",
          "department": "Bulk"
        },
        "urn:ietf:params:scim:schemas:extension:fd:2.0:User": {
          "description": "Never watched Game of Thrones"
        }
      },
      "method": "PUT",
      "bulkId": "d6b52060-4d7f-11e8-8b44-3d5adce8c545",
      "path": "/Users/d6b52060-4d7f-11e8-8b44-3d5adce8c545"
    },
    {
      "data": {
        "schemas": [
          "urn:ietf:params:scim:schemas:core:2.0:User"
        ],
        "id": "d6b52060-4d7f-11e8-8b44-3d5adce8c545"
      },
      "method": "DELETE",
      "bulkId": "d6b52060-4d7f-11e8-8b44-3d5adce8c545",
      "path": "/Users/d6b52060-4d7f-11e8-8b44-3d5adce8c545"
    }
  ]
}
```

### Example Response

`http status code: 200`

```json
{
  "schemas": ["urn:ietf:params:scim:api:messages:2.0:BulkResponse"],
  "Operations": [
    {
      "bulkId": "bjensen@example.com",
      "method": "POST",
      "location": "https://api.federated.directory/v2/Users/a9460fa0-eb0e-11e7-b1e2-6f788593d827",
      "status": {
        "code": 201
      }
    },
    {
      "bulkId": "d6b52060-4d7f-11e8-8b44-3d5adce8c545",
      "method": "PUT",
      "location": "https://api.federated.directory/v2/Users/d6b52060-4d7f-11e8-8b44-3d5adce8c545",
      "status": {
        "code": 200
      }
    },
    {
      "bulkId": "d6b52060-4d7f-11e8-8b44-3d5adce8c545",
      "method": "DELETE",
      "location": "https://api.federated.directory/v2/Users/d6b52060-4d7f-11e8-8b44-3d5adce8c545",
      "status": {
        "code": 204
      }
    }
  ]
}
```
