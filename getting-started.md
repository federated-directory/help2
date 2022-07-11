---
layout: default
title: Getting started
nav_order: 2
---

# Getting started

1. [Sign up](#sign-up)
2. [Set up](#set-up)
   1. [Sync your current directories](#sync-your-current-directories)
   2. [Combine users into groups](#combine-users-into-groups)
   3. [Search through the contact details](#search-through-the-contact-details)
   4. [Optional: Sync a group to Azure AD](#optional-sync-a-group-to-azure-ad)
3. [Scenarios](#scenarios)
   1. [Combine directories within your company](#combine-directories-within-your-company)
   2. [Combine directories over multiple companies](#combine-directories-over-multiple-companies)

## Sign up

Continue to [set up your Federated Directory](#set-up) if you already signed up before.

Before you start using Federated Directory, you have to sign up. It is easy and free.

[SIGN UP HERE](https://www.federated.directory/signup){: .btn .btn-outline .v-align-middle}

Two ways to sign up:

1. Sign up with your Google or Microsoft account.
2. Sign up manually.

During your sign up you will need to provide this information:

| Input              | Description                                                                                                                                                                                                                                        |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Short company name | Must be between 2 and 40 characters and can contain only letters, numbers, dashes `-` and underscores `_`. It will be a part of your company-specific URL of your Federated Directory: `https://federated.directory/of/<your-short-company-name>`. |
| Your name          | The display name that will be used to create your first user account.                                                                                                                                                                              |
| Email address      | Please make sure it is valid, since we send all the information you need to get started to this email address.                                                                                                                                     |

Only finalize the sign-up process after you have read and agreed to our [terms of service](https://federated.directory/terms).

---

## Set up

The setup of your Federated Directory consists out of a few steps.

<img src="../../assets/images/getting_started-3-steps.svg " alt="Setup your Federated Directory in 3 steps"/>

1. [Sync your current directories](#sync-your-current-directories)
2. [Combine users into groups](#combine-users-into-groups)
3. [Search through the contact details](#search-through-the-contact-details)
4. [Optional: Sync a group to Azure AD](#optional-sync-a-group-to-azure-ad)

### Sync your current directories

After you sign up, your Federated Directory will only contain your user account. There are multiple ways to import the contact data of your current corporate address book. You can create the users manually or upload a CSV file but you can also sync the data directly from:

- [Google](./administrator/google)
- [Microsoft 365 / Azure AD](./administrator/microsoft)
- [OneLogin](./administrator/onelogin)
- [Okta](./administrator/okta)

Any other source can be integrated with our [User API](./administrator/scim) (SCIM compliant).

[GO TO DIRECTORIES](./administrator/directories){: .btn .btn-outline .v-align-middle}

### Combine users into groups

A user can only search through the contact data of those users that are in the same group. A group can contain users from multiple companies and/or directories.

Your company contains one group after sign up: the "all users" group. By default, this group will contain all the users within your company. This makes sure all the users in your company are able to find each other. You can remove this group if required.

There are two ways you can add users to a group:

1. [Invite them](#invite-them)
2. [Automatically](#automatically)

#### **Invite them**

After you create a group you can invite other to that group by inviting them. Invited users will receive an email that they can accept.

This is the only way you can add a user from another company to your group. Once that user has accepted your invite, you can make it a 'group owner' as well. At that point it can add more users from its company.

#### **Automatically**

When you are a group owner and an admin within your company you can add users to a group automatically with a 'smart filter'.
This 'smart filter' adds all the users to this group that meets this specific filter. For example users that are:

- Part of a division or department
- Have been synced from a specific directory

[GO TO GROUPS](./administrator/groups){: .btn .btn-outline .v-align-middle}

### Search across companies

You and your colleagues can now [login](./login) and [search](./search) through all the directories at the same time.
This can be done, through our web based application (PWA) or through our <a href="./client-integrations/outlook-add-in">Microsoft Outlook add-in</a>.

### Optional: Sync a group to Azure AD

This has not been released yet.
We are working on a way to sync all the users from a group in your Federated Directory back to an Azure AD. This would make it possible to find the contact data of the users in this group, directly in the Office apps your employees already use. Like Teams & Outlook.

## Scenarios

### Combine directories within your company

Imagine you have one company that uses two different cloud services like Google Workspace and Azure AD.
Or you have two daughter companies with separate Azure AD's and you would like to make employees of both services searchable at one place.

<div style="display: flex">
  <img style="width: 30rem; border: none;" src="../../assets/images/two-to-one-first.svg " alt="One company, different providers"/>
  <div style="width: 1px;border-left: 1px dotted black;margin-top: 2rem;margin-bottom: 2rem;"></div>
  <img style="width: 30rem; border: none;" src="../../assets/images/two-to-one-second.svg " alt="Two child companies"/>
</div>

In this situation, the most suitable option for you, would be to create 2 separate directories inside 1 Federated Directory tenant and provision employees into them.

<img style="width: 50rem; border: none;" src="../../assets/images/two-to-one-with-fd.svg " alt="Two child companies"/>

As soon as both directories are filled with employees, they can login to Federated Directory and start search each other.

For more information :

- About directories refer to [here](./administrator/directories).
- About provisioning from Google Workspace refer to [here](./administrator/google).
- About provisioning from Azure AD refer to [here](./administrator/microsoft).

---

### Combine directories over multiple companies

If you want to search through the directories of other companies, you need to create cross-company group.

<img style="width: 900px;border: none;" src="../../assets/images/overview-overview.svg " alt="Federated Directory Overview"/>

Create a cross-company group in a few steps:

1. Ensure that the other companies have signed up for Federated Directory as well
2. Create a group
3. If you want some of your employees to be visible to other companies, add them to this group
4. Invite employees of the other companies to this group
5. Optionally: make some of the users of these companies 'group owners'. This way they can add users from their company to this group directly.

You can skip step 2 and use an existing default group; however, you should bear in mind that the default group created during the sign up process includes all the users within your Federated Directory.
