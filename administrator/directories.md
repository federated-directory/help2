---
layout: default
title: Directories
parent: Administrator
nav_order: 2
has_children: false
---

# Directory

A directory contains the users of your company and their contact data. Some of the characteristics of a directory are:

- Contains users that can log in to Federated Directory
- Contains information the way users are authenticated e.g. using SSO or direct login
- Can be provisioned by other services e.g. Azure AD or Google Workspace
- Can co-exist next to other directories

When you sign up to Federated Directory, we create your first directory called "Default Directory". The administrator account you receive during sign up is located in this directory.

Depending on your situation and wishes you might have one or multiple directories inside your tenant at Federated Directory. For possible use-cases please refer to the next paragraph.

---

## Single Directory versus Multiple Directories

In case you have only one cloud service with contacts information, it's obvious that you will have only one directory inside your account. It's going to be one to one relation between cloud service and Federated Directory. But what about the case when you have more than one source of information? This could happen after mergers, but it could also be a deliberate choice of your IT department.

Multiple directories or single directory have no impact on your users search experience. Federated Directory uses [Groups](./groups) to make users searchable to each other and this is what you have to configure, to make search work.

### Single directory

The most common use case for having single directory mapped to multiple sources is when you have two or more sources in the same cloud service, like two G Mail or two Office 365. In this case, you can provision the directory from both sources and have all the users sitting in one directory. The benefit of having such a setup is that your users won't need to select a separate directory when login.

You also can combine multiple sources into one directory when they are from different cloud provider, but in that case you will have to make a choice which cloud provider will perform as identity provider when using Single Sign On. This means that only some of your users will be able to log in.

### Multiple directories

Whenever you have multiple cloud services providing you contact information it's wise to create for every provider one directory. In case you have multiple sources of contact information with the same cloud provider, you also could make for every source one directory.

---

## Create a directory

Creating a new directory is easy: go to 'Directories' in the main menu and click the **CREATE DIRECTORY** button.

In the next step you can configure your new directory with main attributes.

| Attribute   | Description                                            |
| :---------- | :----------------------------------------------------- |
| Name        | Give your new directory a name. Max 100 characters.    |
| Description | Contains users that can login and search contact data. |

You will be able change these settings later on.

Whenever you are done, click **CREATE DIRECTORY** button at the bottom to finalize creation process.

---

## Fill directory with users

To fill a directory, you can choose one of two options:

- Automatically
- Manually

### Automatically

If your company owns a corporate address book, you can provision it to directory with all the users becoming available to you automatically. We have turnkey integrations with following systems:

- [Google](./administrator/google)
- [Office 365 / Azure AD](./administrator/microsoft)
- [OneLogin](./administrator/onelogin)
- [Okta](./administrator/okta)

However, if your contact data are stored on another system then mention above and this platform supports SCIM 2.0 provisioning, you are in luck. You can use our generic [SCIM API interface](./administrator/scim) to push user data into your the directory.

Any user that is created, updated, or deleted on those systems will be automatically replicated into your directory, including all the relevant contact information.

Directory is not limited to single provisioning, that means you can provision multiple corporate address books to one directory. Thus, you virtually concatenate your internal corporate address books into one big directory, thereby allowing your users to search through all separate address books in one place.

### Manually

If your company does not have a corporate address book, you can fill your directory manually. Adding the contact details can be done in one of two ways:

1. Using 'Create user' form, inside our application.

   By using this method you will have to add one user at a time

2. By uploading a CSV file containing the contact information of all your employees.

   This will allow you to add multiple users at the same time

---

## View/Edit directory information

After you've created a directory or just opened an existing one, you will lend onto page with four tabs:

- [USERS](#users)
- [CONFIG](#configure-directory)
- [KEYS](#directory-keys)
- [LOGS](#logs)

By default you will appear on the first tab **USERS**

### Users

On this tab you can manage users of the current directory. You can create, update and remove them. Additionally you can import and export users using CSV format.

To export users click <i class="material-icons with-border">get_app</i> icon and to import click <i class="material-icons with-border">publish</i> button.

### Configure directory

On this tab you will find a couple of separate settings:

- [Basic settings](#basic-settings)
- [Authentication method](#authentication-method)
- [Logo](#logo)

#### Basic settings

Set the name and a description of this directory.

You will also find the **DELETE DIRECTORY** button here. Be careful, this will immediately delete all the users in this directory.

#### Authentication Method

Authentication method defines the way your users will log in to Federated Directory. You can enable multiple options at the same time.

<table>
  <tr>
    <td><img style="width: 40px; display:inline;" src="../../assets/images/directories-introduction-none.svg" alt="No authentication method for users in this directory"/></td>
    <td>None</td>
    <td>This way, users in current directory will not be able to log in at all. For security reasons, we have made this the default authentication method setting when you create a new directory. For example it's a great way to prevent users from logging in, while you are still setting things up for</td>
  </tr>
  <tr>
    <td><img style="width: 40px;   display:inline;" src="../../assets/images/directories-introduction-federateddirectory.svg" alt="Federated Directory accounts"/> </td>
    <td>Federated Directory accounts</td>
    <td>Users from this directory will be able to log in directly with their Federated Directory credentials. If a user has forgotten his or her username or password, he can reset it, as long as there is a valid email address present on the account.</td>
  </tr>
    <tr>
    <td><img style="width: 40px;   display:inline;" src="../../assets/images/directories-introduction-azure.svg" alt="Microsoft accounts"/> </td>
    <td>Microsoft accounts</td>
    <td>Users will log in with their Microsoft account. The same set of credentials they use to log in to Office 365 and other applications that are integrated with Microsoft Azure AD. <a href="./microsoft">Setup authentication with Microsoft accounts</a></td>
  </tr>
    <tr>
    <td><img style="width: 40px;   display:inline;" src="../../assets/images/directories-introduction-gsuite.svg" alt="Google accounts"/> </td>
    <td>Google accounts</td>
    <td>Users will log in with their Google account. The same set of credentials they use to log in to their Google Workspace services and other applications that are integrated with Google Cloud Identity. <a href="./google">Setup authentication with Google accounts</a></td>
  </tr>
    <tr>
    <td><img style="width: 40px;   display:inline;" src="../../assets/images/directories-introduction-saml.svg" alt="No authentication method for users in this directory"/> </td>
    <td>SAML 2.0</td>
    <td>SAML 2.0 is an open standard for logging users into applications. If you already have a SAML 2.0 Identity Provider (IDP) in your organization, select this option to integrate it with your Federated Directory. <a href="./saml">Setup authentication with SAML 2.0</a></td>
  </tr>
</table>

#### Logo

Logo is used whenever the directories of your company are displayed during the login process.

To change logo click the **SELECT LOGO** button and select an image from your machine.

The file you select must have:

- the JPG or PNG format
- a maximum file size of 3MB
- a resolution of 150 x 150 pixels (for best results)

To resize and crop an image you can use one of the online image resizing tools, like http://www.resizeimage.net

When you have selected a logo it will appear on your screen and the **SAVE LOGO** button will lights up.

As soon as you press it your directory logo will be uploaded to our servers.

### Directory keys

The best way to integrate another system with one directory, is to use a directory key. A directory key only has administrator privileges inside the directory it is created.
With a directory key, the other system can create, read, update and delete the users inside that directory only.

All [user management introductions](#automaticusermanagement) mentioned above require a directory key for their integration with Federated Directory.

Select tab **KEYS** to manage the directory keys. Click **CREATE KEY** button to create a new key.

After the key is created, you will receive an `issuer`, `private key` and an `access token`.
Access token gives direct access to all user data inside this directory, so store it safely. Also make sure you copy the `access token` because it will be only visible once after the creation of a new directory key.

The `issuer` and `private key` can be used to create an access token, based upon the OAuth2 principle. Check out our [developer help section](../developer/obtaining-a-token) for the details.

If you do not use a directory key, remove it by opening a key and clicking **DELETE KEY** button.

---

## Delete a directory

Every directory can be easily removed. However remember that all users in this directory will also be removed from Federated Directory.
Their user data will no longer be available; Not only for the users of your own company but also for any company you federated with.

You can delete a directory from the 'directory overview'.

1. Go to **Directories** in the side menu
2. Choose the directory you want to delete
3. In the directory overview navigate to **CONFIG** tab
4. Click **DELETE DIRECTORY** button

---
