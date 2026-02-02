---
layout: default
title: Company
parent: Administrator
nav_order: 2
has_children: false
---

# Company

As an administrator you can change your company data by clicking on 'Company' in the menu.

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

<img style="width: 200px" src="/images/company-photo1.png " alt="Select photo button"/>

The file you select must have:

- the JPG or PNG format
- a maximum file size of 3MB
- a resolution of 350 x 150 pixels
- a transparent background, for the best result (PNG only)

If needed you can resize and crop your image here: resizeimage.net

When you have selected a correct image, you will see it appear on your screen and the "update logo" button lights up.

<img style="width: 300px" src="/images/company-photo2.png " alt="Upload new company logo"/>

Press the "update logo" button and your new company logo will be uploaded, optimized, and shown in places like the login page and within the navigation bar.

## Verified domains

By adding and verifying your company's domains, you can restrict users within your organization from creating their own Federated Directory. Once you verify a domain, users with email addresses using that domain will not be able to create their own directory.

To validate a domain follow these steps

1. Log in to your domain registrar's website and access your DNS settings.
2. Create a new TXT record with the following information:
   - Name: Enter "@" or leave it blank.
   - Value: Enter the CompanyID provided to you.
3. Save the changes to your DNS settings.
4. Wait for the DNS changes to propagate, which can take up to 24-48 hours.
5. Enter the domain name below and click on the "Verify" button.

Please note that the exact steps to create a TXT record may vary depending on your domain registrar.

## Session time

Number of minutes a user within your company stays logged onto the Federated Directory portal.

| Input   | Description                                                                     |
| :------ | :------------------------------------------------------------------------------ |
| minutes | Default is 480 minutes (8 hours). Min 1 minute and max 525600 minutes (1 year). |

## Custom user attributes

If your company wants to store some specific data on your users that is not covered by the default attributes available on a user, you should use 'custom user attributes'.

There are 3 custom attributes available which you can give any name you would like. This name, is the name the users in your company will see in their user interface.

<img style="width: 500px" src="/images/company-custom_attributes.png " alt="Name your custom attributes"/>

Custom attributes can contain 150 characters (max) and users are able to use them in a filter, just like like the 'division' or 'department' attributes.

<img style="width: 500px" src="/images/company-custom_attributes2.png " alt="Filter on custom attributes"/>

When you name a custom attribute, it will appear as a new attribute on your users as part of the 'enterprise' related attributes.

## Communication preferences

Every Federated Directory administrator within your company, could receive communication from us. Here you can enable or disable the different types of communication we may send the administrators within your company.

| Check box        | Description                                                                          |
| :--------------- | :----------------------------------------------------------------------------------- |
| Offers           | New or updated commercial offers.                                                    |
| New Features     | New features in Federated Directory or in the solutions of our integration partners. |
| Technical Issues | keep up to date when we experience any technical issues.                             |

## Subscription

The first 20 users in your Federated Directory are for free. If you need to create more users, you need a subscription. Here's how to get started:

1. Navigate to company settings and open the subscription tab.
2. Add Payment Information. Securely enter your credit card details.
   - Usually you will be asked to validate your credit card in this process.
3. Choose the Number of Licenses.
   - Before confirming your subscription, the system will calculate the monthly costs based on the number of users you've selected. You will see these costs displayed for your review.
4. Confirm Subscription.
   - Once you've reviewed the monthly costs and are ready to proceed, confirm your subscription. The system will then securely deduct the monthly charges from your credit card.

### Tiered pricing

Benefit from tiered pricing with cost savings as you add more licenses. You can find detailed pricing information on the Pricing page at https://federated.directory/pricing.
Alternative Payment Methods or Annual Payments:

### Alternative payment methods or periods

If you require an alternative payment method or prefer to pay annually, please contact our subscription support team at subscriptions@federated.directory. They will assist you with your specific payment requirements.
