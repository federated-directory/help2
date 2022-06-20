---
layout: default
title: Getting started
nav_order: 2
---

## Sign up

Before you start using Federated Directory, you have to sign up. It is easy and free.

You can do it here: https://www.federated.directory/signup

To sign up to Federated Directory, you can choose of one of two options.

1. Sign up with your Google or Microsoft account.
2. Sign up manually.

Benefits and use cases by choosing one or another, can be found below.

You can finalize the sign-up process only after you have read and agreed to [terms of service](https://federated.directory/terms). Please read them carefully before continue.

### Sign up with your Google or Microsoft account

The easiest way to sign up is to use your Google or Microsoft. This way you don't have to remember a new set of credentials, and you don't have to fill in a form with your details. To do this, click **SIGN UP WITH MICROSOFT** or **SIGN UP WITH GOOGLE**.

Benefits:

- No extra account details to remember
- Easier to setup your integration with Microsoft or Google

### Sign up manually

If you don't have a Microsoft or Google account or don't want to use it to setup your Federated Directory, you can sign up manually with your email address. In this case you will receive completely isolated Federated Directory account not connected to any identity provider.
To create such an account you need to provide this information:

| Input              | Description                                                                                                                                                                                                                                                 |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Short company name | It must be between 2 and 40 characters long and can contain any letters or numbers, dashes `-` and underscores `_`. It will be a part of your company-specific URL of your Federated Directory: `https://federated.directory/of/<your-short-company-name>`. |
| Your name          | The display name that will be used to create your first user account in Federated Directory.                                                                                                                                                                |
| Email address      | Please make sure it is valid, since we will send all the information you need to get started to this email address.                                                                                                                                         |

Benefits for using isolated Federated Directory account:

- No need to have a Google or Microsoft account

---

## Your company directory

Once you have signed up and logged in to Federated Directory, it's time to fill your Federated Directory with the employees from your organization.

Those employees will be able to [log in](./login) to Federated Directory and [search](./search) each other. As soon as your company directory is filled, you also can start federating with other companies. Federation will help you to search employees of the companies you have federated with.

Here is a possible use cases, how you can 'arrange' your company directory.

### Two to one

Imagine you have 1 company that uses 2 different cloud services like Google Workspace and Azure AD, and you would like to make employees of both services searchable at one place. Or you have 2 separate daughter companies with both equal or different cloud services and you would like to make employees of both companies searchable at one place.

<div style="display: flex">
  <img style="width: 30rem; border: none;" src="%image_url%/two-to-one-first.svg " alt="One company, different providers"/>
  <div style="width: 1px;border-left: 1px dotted black;margin-top: 2rem;margin-bottom: 2rem;"></div>
  <img style="width: 30rem; border: none;" src="%image_url%/two-to-one-second.svg " alt="Two child companies"/>
</div>

In this situation, the most suitable option for you, would be to create 2 separate directories inside 1 Federated Directory tenant and provision employees into them.

<img style="width: 50rem; border: none;" src="%image_url%/two-to-one-with-fd.svg " alt="Two child companies"/>

As soon as both directories are filled with employees, they can login to Federated Directory and start search each other.

For more information :

- About directories refer to [here](./administrator/directories).
- About provisioning from Google Workspace refer to [here](./administrator/google).
- About provisioning from Azure AD refer to [here](./administrator/microsoft).

---

## Federate with other companies using groups

If you want to search for a contacts from another company, you need to be federated with that company. Federating with other company happens by creating or joining a group that is available to all participants within different companies. More information about groups can be found [here](./administrator/groups).

<img style="width: 900px;border: none;" src="%image_url%/overview-overview.svg " alt="Federated Directory Overview"/>
Here are 4 steps to create a federation with other company:

1. Ensure that your partner company has a Federated Directory account
2. Create a new group
3. If you want some employees of your company to be visible to other party too, add them to this group using Smart Filter or by adding them manually
4. Invite employees of other party to the same group

You can skip step 2 and use the existing default group; however, you should bear in mind that the default group created during sign up process includes all the employees from your directories created inside Federated Directory

---

## Search across companies

You and your employees are now able to [search](./search) for your company's contact directory and of the other companies, you are federated with. This can be done, through our web based application or through installing <a href="./client-integrations/outlook-add-on">Microsoft Outlook Add-in</a> in your local account or organization wide.
