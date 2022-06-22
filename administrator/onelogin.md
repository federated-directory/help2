---
layout: default
title: Integrate with OneLogin
parent: Administrator
nav_order: 9
has_children: false
---

# Integrate with OneLogin

In case your company uses OneLogin as their identity and access management solution, a lot of contact data is already centrally available.
Which is great, because you can [provision your OneLogin users](#automatic-user-provisioning) directly to your Federated Directory.

Users within the directory of OneLogin can also [login to Federated Directory](#authentication) with their OneLogin account.

We are finalizing this document at the moment. Until then: if you need help with this integration, let us know.

<!-- ----------

## Authentication




The <a href="../login">login</a> chapter describes how users can login with their Google account. Enabling this, is as easy as selecting `Google accounts` from the authentication drop-down on a directory.

<img style="width: 600px;" src="../../assets/images/directories-google-authentication.png" alt="Set authentication to Google"/>



During the authentication process we map the users Google ID with the `externalId` of this user within our directory. We only allow access to those users we know.

|  | Google Directory | Federated Directory |
| :------- | :----: | :---: |
| Attribute mapping | id | externalId ️️|
|  |  |  |  |

So make sure these are filled in correctly.

---------

## Automatic user provisioning

A Google integration delivers SSO for your users.  It can be combined with any of the user management options we [offer](./introduction).
Just make sure the externalId of the user is filled properly.

If your dealing with a lot of users, you can easily export those (including the user id) with the '[Users: list](https://developers.google.com/admin-sdk/directory/v1/reference/users/list)' API of Google.

PS. We are working hard, together with Google, to integrate their [SCIM User Provisioning](https://support.google.com/a/topic/6400789) capability with our APIs. So stay tuned.
 -->
