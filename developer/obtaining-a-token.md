---
layout: default
title: Obtaining a token
parent: Developer
nav_order: 2
has_children: false
---

Any service or application that wants to integrate with the Federated Directory APIs needs to obtain an access token. This access token should be placed in the `Authorization` header of every API call as a Bearer token. Like this:

    Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...

In this chapter we will explain in more detail:

- The different [audiences and roles](#audiencesandroles) of access tokens and their impact
- How to [retrieve an access token with a key](#key)

<h2 id="audiencesandroles"> Audiences and roles </h2>

The combination of an audience (aud) and a role describe the authorizations of an access token.

An audience basically says for what kind of user the access token was created.

| Audience | Description                                                                                                                                                                     |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User     | A user represents a person and is contained in a user directory. It's main purpose is for the usage of the platform by a person.                                                |
| Key      | A key is not linked to a natural person and is mainly intended for system integration. There are two kind of keys: a directory key and a admin key. Both have a different role. |

A role determines the authorizations given to an access token.

| Role         | Description                                                                                                                                                                                                                        |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User         | Is not able to make changes to any other user in or the configuration in its company                                                                                                                                               |
| directoryKey | Always a key (audience) that has admin permissions on one specific directory in your Federated Directory. Ideal for integration with your current corporate address book or IAM solution (like Azure AD, Google Directory or Okta) |
| admin        | Full administrative permissions. Can modify all users and settings in its company                                                                                                                                                  |

<h2 id="key"> Retrieve and access token with a key </h2>

There are two sort of keys.

1. Directory key (role = directoryKey)
2. API key (role = admin)

Decide which key is appropriate for your integration scenario.

#### Create a directory key

Go to 'directories' and select the directory you want to integrate with.
Go to the "KEYS" tab and create a new key.

After the key has been created you will receive three things:

1. issuer
2. private key
3. access token

The access token is only returned directly after you create the key. This access token is
valid for many years. So keep it secure!

The 'issuer' and 'private key' can be used to [create access tokens](#createtokenwithkey). These tokens have the
same lifetime as a user session. This is [configurable per tenant](/administrator/company)
but has a default value of 480 minutes (8 hours).

#### Create an API key

An API key has the same permissions as a user with the 'administrator' role.

To create such a key, go to 'integrations' in the menu and create a new key.

After the key has been created you will receive two things:

1. issuer
2. private key

The 'issuer' and 'private key' can be used to [create access tokens](#createtokenwithkey). These tokens have the
same lifetime as a user session. This is [configurable per tenant](/administrator/company)
but has a default value of 480 minutes (8 hours).

<h3 id="createtokenwithkey">Create an access token with the issuer and private key</h3>

Place the 'issuer' value of your key in the below JSON.

```json
{
  "iss": "<issuer>",
  "scope": ["directoryKey"],
  "aud": "key"
}
```

Use RS256 encryption to create and parse a JWT token. Use your 'private key' for this.
There are a [a lot of libraries](https://www.jwt.io) available that can do this.

This JWT can then be submitted by a POST action to this end-point :

|        |                                                             |
| ------ | ----------------------------------------------------------- |
| method | POST                                                        |
| url    | ht<span>tps://api.federated.directory/v2/Login/Oauth2/Token |
| body   | See below                                                   |

#### Body

The JWT needs to be called "assertion" in the final payload :

```json
{
  "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "<JWT>"
}
```

### Example Request

```json
{
  "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
  "assertion": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI1MWYxZTY1NmVsa3YzMXlwdXlmMWVlemlhd3VzbDM5a0BmZCIsInNjb3BlIjpbImFkbWluIl0sImF1ZCI6ImtleSJ9.NTcYu4kNx6xw7YeTuG0fEOgFccPco9oyDT1KcK5QLLT26_3VhF7kRTuHxDxxBrMjNDlb2RxkEXN0a3buME0lYDUoEcsooQlVCgH1teZsg8lzr4LdYmvY0j2EEH5FlkHDHRxejrstbGajlespxnFTK0c8t31sROaNMnKYBpwyf7I"
}
```

### Example Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3d3dy5mZWRlcmF0ZWQuZGlyZWN0b3J5LyIsImF1ZCI6ImtleSIsImV4cCI6MTYwMjQ1ODg2OCwianRpIjoiN2RhNGUwYzAtZmRjYS0xMWVhLWEwZmEtNDdjMmFmMzE5YmU0In0.GIrdUmIccnFBTGKUmlLLOtIEGxqUL3uJ54yG1SJYGyo",
  "token_type": "Bearer",
  "expires_in": 28800
}
```

You can use this token by including it in the header of any following request as:
<br>
`"Authorization" : "Bearer <access_token>"`
