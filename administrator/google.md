---
layout: default
title: Integrate with Google
parent: Administrator
nav_order: 6
has_children: false
---

# Integrate with Google

In case your company uses Google, your corporate address book resides in Google Workspace
Users in this Google Workspace directory login to Federated Directory with their Google account (based on OAuth 2.0 but alternatively you can also configure SAML for this).

Enabling Federated Directory to work with Google Workspace consists of two steps:

- [Install Federated Directory from Google Workspace marketplace](#g-suite-install-from-marketplace)

- [Enable auto (de)provisioning of users within Federated Directory by Google Workspace ](#g-suite-configure-provisioning)

Alternatively you can use SAML instead of OAuth 2.0, which is described here:

- [Configure SAML login for Google Workspace users](#configure-saml-login)

Integrating Federated Directory with Google Workspace provides you with the following benefits:

- [Users can login (Single Sign-On) with their Google accounts.](#authentication)

## Install from Google Workspace Marketplace

Open your aps in Google Admin Console by visiting link: [https://admin.google.com/ac/apps/gmail/marketplace/apps?hl=en_GB](https://admin.google.com/ac/apps/gmail/marketplace/apps?hl=en_GB).
From here you should click "INSTALL APP" button and you will arrive in the marketplace. Alternatively you can visit directly our app on Google Marketplace: [https://workspace.google.com/marketplace/app/federated_directory/293967924849](https://workspace.google.com/marketplace/app/federated_directory/293967924849)

<img style="width: 600px;" src="../../assets/images/google-install-1.png" alt="GSuite Admin"/>

If you have decided to go to Marketplace via "INSTALL APP" button, search for "Federated Directory" app by typing in the search field and click on the tile.

<img style="width: 600px;" src="../../assets/images/google-install-2.png" alt="Search Federated Directory in Google Marketplace"/>

On the screen of Federated Directory app click 'Admin install'.

<img style="width: 600px;" src="../../assets/images/google-install-3.png" alt="Federated Directory in Google Marketplace"/>

This will kick-off the consent process to allow users to login to Federated Directory using a Google Workspace account. Click **CONTINUE**:

<img style="width: 600px;" src="../../assets/images/google-install-4.png" alt="Prompt in Marketplace to install Federated Directory" />

<img style="width: 600px;" src="../../assets/images/google-install-5.png" alt="Admin console consent" />

After you've accepted consent, you will see information dialog.

<img style="width: 600px;" src="../../assets/images/google-install-6.png" alt="App installed in Marketplace" />

After that you should be able to see Federated Directory app inside installed apps in Google Admin Console

<img style="width: 600px;" src="../../assets/images/google-install-6a.png" alt="Federated Directory sign in"/>

Visit this link to confirm: [https://admin.google.com/ac/apps/gmail/marketplace/apps?hl=en_GB](https://admin.google.com/ac/apps/gmail/marketplace/apps?hl=en_GB).

## Creating new company

If you haven't created a company within Federated Directory, follow this steps, otherwise skip to next section about [User Provisioning](#google-workspace-configure-provisioning)

Head directly to Sign Up page of Federated Directory at [https://www.federated.directory/signup](https://www.federated.directory/signup) 

<img style="width: 600px;" src="../../assets/images/google-install-7.png" alt="Federated Directory sign in"/>

Choose 'Sign up with Google'

<img style="width: 600px;" src="../../assets/images/google-install-8.png" alt="Federated Directory sign up"/>

After a couple of redirects you will arrive your Federated Directory and dialog will be show. Populate the finalize setup screen and select **FINALIZE SIGNUP**

<img style="width: 600px;" src="../../assets/images/google-install-9.jpg" alt="Finalize signup"/>

From this moment onwards, when you select 'Federated Directory' from your Google Workspace App Launcher it will automatically log in to this company. You can also see your own account which was automatically created.

<img style="width: 600px;" src="../../assets/images/google-install-10.jpg" alt="Federated Directory portal"/>

Now that you have created a company within Federated Directory it is time to setup provisioning of the Google Workspace accounts from your organization to Federated Directory.

---

## Google Workspace configure Federated Directory for SSO

From your Google admin console, browse to Apps ⇒ Web and Mobile Apps. Once that screen is shown, click "Add app" button and then "Search for apps"

<img style="width: 600px;" src="../../assets/images/google-install-saml-0.png" alt="SAML Apps"/>

In the filter box enter 'Federated Directory' and select it by clicking "Select" button

<img style="width: 600px;" src="../../assets/images/google-install-saml-1.png" alt="Selecting Federated Directory app"/>

You will arrive on the configuration screen. 

<img style="width: 600px;" src="../../assets/images/google-install-saml-2.png" alt="Google IdP Information dialog"/>

Accept defaults and click **CONTINUE**:

<img style="width: 600px;" src="../../assets/images/google-install-saml-3.png" alt="Service provider details dialog"/>

Change 'ACS URL' to `https://federated.directory` and 'Entity ID' to `federated.directory` and click **CONTINUE**.

<img style="width: 600px;" src="../../assets/images/google-install-saml-5.png" alt="Set authentication to Google"/>

Click **FINISH**.


## Configure User Provisioning

In this chapter we will configure user provisioning, but if you are planning to use SAML for authentication instead of OAuth 2.0, please follow [these](#configure-saml-login) instructions instead.

<img style="width: 600px;" src="../../assets/images/google-install-saml-4.png" alt="Configured app"/>

First of all enable the service for all users within your Google Workspace domain by clicking header **User access**

<img style="width: 600px;" src="../../assets/images/google-install-saml-5b.png" alt="Set authentication to Google"/>

Select **ON for everyone** and click **SAVE**. Now navigate back to Configuration dialog by clicking "Federated Directory" in the breadcrumbs:

<img style="width: 600px;" src="../../assets/images/google-install-saml-5a.png" alt="Breadcrumbs"/>

Click **Configure auto-provisioning** in the "Auto-provisioning" pane.

<img style="width: 600px;" src="../../assets/images/google-install-saml-6a.png" alt="Federated Directory edit screen"/>

Enter your directory API key from Federated Directory and select **CONTINUE**. If you don't know how to create an API key, please see [Directories guide](./directories)

<img style="width: 600px;" src="../../assets/images/google-install-saml-7.png" alt="Mapping dialog"/>

On the "Map attributes" screen, set the mapping to correct values:

|  Google directory attributes | App attributes |
|------------------------------|:--------------:|
| Country | addresses.country |
| Address > Locality | addresses.locality |
| Address > Is primary | addresses.primary |
| Address > Region | addresses.region |
| Address > Value |  addresses.streetAddress |
| Additional Details > Formatted name | displayName |
| Email > Is primary | email.primary |
| Email > Type | emails.type |
| Email > Value | emails.value |
| Basic Information > Last name | name.familyName |
| Basic Information > First name | name.givenName |
| - | nickName |
| Phone > Is primary | phoneNumbers.primary |
| Phone > Value | phoneNumbers.value |
| Additional Details > Website URL |  profileUrl |
| Employee  Details > Title | title |
| Employee  Details > Department | urn:ietf:params:scim:schemas:extension:enterprise:2.0:User.department |
| Basic Information > Username | userName | 
| Employee Details > Type | userType |

Click **CONTINUE**

<img style="width: 600px;" src="../../assets/images/google-install-saml-8.png" alt="Set provisioning scope" />

No scope is required, click **CONTINUE**

<img style="width: 600px;" src="../../assets/images/google-install-saml-9.png" alt="Set deprovisioning"/>

Choose "Deprovisoning" options which you think are appropriate for your company and click **FINISH**

<img style="width: 600px;" src="../../assets/images/google-install-saml-10.png" alt="provisioning active"/>

Now it's time to turn on provisioning by switching the state from "Inactive" to "active". When you click "Inactive" switch you will get a consent dialog

<img style="width: 600px;" src="../../assets/images/google-install-saml-11.png" alt="Consent dialog"/>

Click **TURN ON** and you're good to go.

## Configure SAML login

The steps above will provide a Federated Directory that is automatically maintained by (de-)provisioning actions and that allow your users to login to Federated Directory using OAuth 2.0.

Alternatively, you can also switch to SAML login. This is described in this article : https://support.google.com/a/answer/7530226?hl=en

<b>IMPORTANT</b> If you follow the instruction provided by the link above, in step 3, you don't need to replace directoryId in the ACS URL, but replace the complete url by:

` https://api.federated.directory/v2/Login/Saml2/{directoryId}/Acs`

## Authentication

The <a href="../login">login</a> chapter describes how users can login with their Google account. Enabling this, is as easy as selecting `Google accounts` from the authentication drop-down on a directory.

<img style="width: 600px;" src="../../assets/images/directories-google-authentication.png" alt="Set authentication to Google"/>

We only allow access to users that are created in your directory. During the authentication process we map the users Google ID with the `userName` of the user in our directory.

|                   | Google Directory | Federated Directory |
| :---------------- | :--------------: | :-----------------: | --- |
| Attribute mapping |        id        |     userName ️️     |
|                   |                  |                     |     |

So make sure these are filled in correctly.
