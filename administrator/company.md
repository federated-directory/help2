---
layout: default
title: Company
parent: Administrator
nav_order: 2
has_children: false
---

# Company

As an administrator you can change your company data by clicking on 'Company' in the menu.

You can update this data on your company:

1. [General](#general)
2. [Logo](#logo)
3. [Session time](#session-time)
4. [Custom user attributes](#custom-user-attributes)
5. [Communication preferences](#communication-preferences)

## General

| Input              | Description                                                                                                                                                                                       |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| short company name | Used in your personalized company URL: `www.federated.directory/of/<your-short-company-name>`. Minimum 2 and maximum 50 characters. You can use letters, numbers, dashes `-` and underscores `_`. |
| name               | User in every reference towards your company. Minimum 1 and maximum 100 characters.                                                                                                               |
| description        | Describe your company within 250 characters. Shown to other companies you federate with.                                                                                                          |

When you change your `short company name`, your company URL also immediately changes. So don't forget to inform your coworkers!

## Logo

Select tab "logo" under "Company" to change your company's logo.

Click the "select logo" button and select a image from your local machine.

<img style="width: 200px" src="../../assets/images/company-photo1.png " alt="Select photo button"/>

The file you select must have:

- the JPG or PNG format
- a maximum file size of 3MB
- a resolution of 350 x 150 pixels
- a transparent background, for the best result (PNG only)

If needed you can resize and crop your image here: resizeimage.net

When you have selected a correct image, you will see it appear on your screen and the "update logo" button lights up.

<img style="width: 300px" src="../../assets/images/company-photo2.png " alt="Upload new company logo"/>

Press the "update logo" button and your new company logo will be uploaded, optimized, and shown in places like the login page and within the navigation bar.

## Session time

Number of minutes a user within your company stays logged onto the Federated Directory portal.

| Input   | Description                                                                     |
| :------ | :------------------------------------------------------------------------------ |
| minutes | Default is 480 minutes (8 hours). Min 1 minute and max 525600 minutes (1 year). |

## Custom user attributes

If your company wants to store some specific data on your users that is not covered by the default attributes available on a user, you should use 'custom user attributes'.

There are 3 custom attributes available which you can give any name you would like. This name, is the name the users in your company will see in their user interface.

<img style="width: 500px" src="../../assets/images/company-custom_attributes.png " alt="Name your custom attributes"/>

Custom attributes can contain 150 characters (max) and users are able to use them in a filter, just like like the 'division' or 'department' attributes.

<img style="width: 500px" src="../../assets/images/company-custom_attributes2.png " alt="Filter on custom attributes"/>

When you name a custom attribute, it will appear as a new attribute on your users as part of the 'enterprise' related attributes.

## Communication preferences

Every Federated Directory administrator within your company, could receive communication from us. Here you can enable or disable the different types of communication we may send the administrators within your company.

| Check box        | Description                                                                          |
| :--------------- | :----------------------------------------------------------------------------------- |
| Offers           | New or updated commercial offers.                                                    |
| New Features     | New features in Federated Directory or in the solutions of our integration partners. |
| Technical Issues | keep up to date when we experience any technical issues.                             |
