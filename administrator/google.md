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

From your Google admin menu, browse to Apps ⇒ Marketplace apps. Once the screen is opened, click "Add app to domain install list". Alternatively go directly to https://gsuite.google.com/marketplace/search/Federated%20Directory

<img style="width: 600px;" src="../../assets/images/google-install-1.png" alt="GSuite Admin"/>

Search for "Federated Directory" app by typing in the search field.

<img style="width: 600px;" src="../../assets/images/google-install-2.jpg" alt="Search Federated Directory in Google Marketplace"/>

Click the tile and a detail screen will open, on this screen click 'Domain install'.

<img style="width: 600px;" src="../../assets/images/google-install-3.jpg" alt="Federated Directory in Google Marketplace"/>

This will kick-off the consent process to allow users to login to Federated Directory using a Google Workspace account. Click **CONTINUE**:

<img style="width: 600px;" src="../../assets/images/google-install-4.jpg" alt="Prompt in Marketplace to install Federated Directory" />

<img style="width: 600px;" src="../../assets/images/google-install-5.png" alt="Admin console consent" />

After you've accepted consent, you will see information dialog.

<img style="width: 600px;" src="../../assets/images/google-install-6.jpg" alt="App installed in Marketplace" />

Then select 'Federated Directory' from your Apps Launcher icon. This will show up Federated Directory but since your company hasn't been created on our side (and the name may/can deviate from your actual Google Workspace domain name), choose **Sign up**

<img style="width: 600px;" src="../../assets/images/google-install-7.png" alt="Federated Directory sign in"/>

Choose 'Sign up with Google'

<img style="width: 600px;" src="../../assets/images/google-install-8.png" alt="Federated Directory sign up"/>

After a couple of redirects you will arrive your Federated Directory and dialog will be show. Populate the finalize setup screen and select **FINALIZE SIGNUP**

<img style="width: 600px;" src="../../assets/images/google-install-9.jpg" alt="Finalize signup"/>

From this moment onwards, when you select 'Federated Directory' from your Google Workspace App Launcher it will automatically log in to this company. You can also see your own account which was automatically created.

<img style="width: 600px;" src="../../assets/images/google-install-10.jpg" alt="Federated Directory portal"/>

Now that you have created a company within Federated Directory it is time to setup provisioning of the Google Workspace accounts from your organization to Federated Directory.

---

## Google Workspace configure provisioning

From your Google admin console, browse to Apps ⇒ SAML Apps. Once that screen is shown, click yellow "Plus" button 'Enable SSO for a SAML application'

<img style="width: 600px;" src="../../assets/images/google-install-1.png" alt="SAML Apps"/>

In the filter box enter 'Federated Directory' and select it.

<img style="width: 600px;" src="../../assets/images/google-install-saml-1.png" alt="Enable SSO for a SAML application dialog"/>

Click **NEXT**

<img style="width: 600px;" src="../../assets/images/google-install-saml-2.png" alt="Google IdP Information dialog"/>

Accept defaults and click **NEXT**

<img style="width: 600px;" src="../../assets/images/google-install-saml-3.png" alt="Basic information for Federated Directory dialog "/>

Click **NEXT** again

<img style="width: 600px;" src="../../assets/images/google-install-saml-4.png" alt="Service Provider Details dialog"/>

Change 'ACS URL' to `https://federated.directory` and 'Entity ID' to `federated.directory` and click **FINISH**.

In the next screen click **SETUP NOW** to configure user provisioning, but if you are planning to use SAML for authentication instead of OAuth 2.0, please follow [these](#configure-saml-login) instructions instead.

<img style="width: 600px;" src="../../assets/images/google-install-saml-5.png" alt="Set authentication to Google"/>

Select **EDIT SERVICE**

<img style="width: 600px;" src="../../assets/images/google-install-saml-6.jpg" alt="Federated Directory edit screen"/>

Enable the service for all users within your Google Workspace domain by selecting "ON for everyone".

<img style="width: 600px;" src="../../assets/images/google-install-saml-5b.jpg" alt="Set authentication to Google"/>

After you click **SAVE** you should navigate back to the SAML APPS and open it. Click **User provisioning** area and choose **SET UP USER PROVISIONING**:

<img style="width: 600px;" src="../../assets/images/google-install-saml-6a.jpg" alt="Federated Directory edit screen"/>

Enter your directory API key from Federated Directory and select **NEXT**. If you don't know how to create an API key, please see [Directories guide](./directories)

<img style="width: 600px;" src="../../assets/images/google-install-saml-7.png" alt="Authorize dialog"/>

On the "Map attributes" screen, accept the default attribute mapping between Google Workspace and Federated Directory and click **NEXT**

<img style="width: 600px;" src="../../assets/images/google-install-saml-8.png" alt="Map attributes dialog"/>

No scope is required, click **FINISH**

<img style="width: 600px;" src="../../assets/images/google-install-saml-9.png" alt="Set provisioning scope dialog"/>

Now you can **ACTIVATE PROVISIONING**

<img style="width: 600px;" src="../../assets/images/google-install-saml-10.png" alt="Activate provisioning dialog"/>

<img style="width: 600px;" src="../../assets/images/google-install-saml-11.png" alt="Consent dialog"/>

## Configure SAML login

The steps above will provide a Federated Directory that is automatically maintained by (de)provisioning actions and that allow your users to login to
Federated Directory using OAuth 2.0.

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
