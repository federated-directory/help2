---
title: Login Guide - SSO, SAML & OAuth Authentication
description: Login with Google, Microsoft, or company credentials. Support for SSO, SAML, and OpenID Connect authentication. Password reset available.
head:
  - - meta
    - property: og:title
      content: How to Login to Federated Directory
  - - meta
    - property: og:description
      content: Login with Google, Microsoft, or company credentials. Support for SSO, SAML, and OpenID Connect authentication. Password reset available.
  - - meta
    - property: og:url
      content: https://help.federated.directory/login
  - - meta
    - name: twitter:title
      content: How to Login to Federated Directory
  - - meta
    - name: twitter:description
      content: Login with Google, Microsoft, or company credentials. Support for SSO, SAML, and OpenID Connect authentication. Password reset available.
---

# Login

You can start your login process at https://federated.directory/of

Login with your Google or Microsoft account if your Federated Directory is integrated with one of these.

If you are not sure, enter your email address. You will be taken to Google, Microsoft or your companies login page at Federated Directory to authenticate.

<img style="width:350px;" src="/images/login-homeland.webp" alt="Login with Google, Microsoft or enter your email address" />

Your companies login page will only show you the authentication methods available in your company. It is located at:

`https://federated.directory/of/<your-company-name>`

Here is an example: `https://federated.directory/of/expresso` where `expresso` is the short name of the company.

When logging in, always make sure that you use your company's login URL and verify that both the login URL and your company's logo are on the login page. If the administrator of your company has not uploaded a company logo, you will see a default logo provided by Federated Directory.

If you are on the wrong login page, click the **SWITCH COMPANY** button at the bottom of the page or just change the URL in the address bar of your browser.

---

## Two account types

Federated Directory supports a single sign-on login process, meaning you can use your Google account, Microsoft account or any other company account to login to Federated Directory.
To do this, click button **LOGIN WITH GOOGLE** or **LOGIN WIH MICROSOFT** or **LOGIN WITH SAML** button. It is possible that not all the buttons are visible on the login landing page. This depends on the way your Federated Directory tenant is configured. Take as an example, page below, which has only Microsoft authentication enabled.

<img style="width:350px" src="/images/login-page.webp" alt="Login landing page" />

We also support the usage of isolated Federated Directory accounts, which is not associated with any Cloud or identity service. You can use it by clicking **LOGIN WITH CREDENTIALS**. To be able to use such type account, your Federated Directory tenant should be configured appropriately and you need to know your username and password.

### Single Sign-On

As soon as you click one of the SSO buttons, you will be redirected to the corresponding login page to authenticate. After authentication, you will be automatically returned to Federated Directory.

In this case, your login page will show a login button that says something like:

- Login with your Microsoft account
- Login with your Google account
- Login with your company account

The login flow is displayed below:

<img style="width: 600px" src="/images/login-sso1.svg " alt="Login with SSO flow"/>

We cannot show you what step 3 looks like as it is a company specific step. If you have logged in to your company account before, you will not see any login page. Contact the administrator of your company if something goes wrong along step 3.

### Login with a Federated Directory account

If you have isolated Federated Directory account with a username and password, the login process is straightforward. First enter your email address and press the **NEXT** button. Enter your password and press the **LOGIN** button.

If the email address and password combination don't match, an error will be displayed at the bottom of the screen. If you forgot your credentials, you could reset your password, as shown below.

<img style="width: 350px" src="/images/login-fd.webp " alt="Login with a Federated Directory account"/>

---

## Reset password

If you use a Federated Directory account to login and you have forgotten your password, then you should follow the procedure below. If you're utilizing a Microsoft, Google, or any other third-party account to sign into Federated Directory, you'll need to adhere to their respective password recovery process.

**The password reset page**

Once you click the <span style="white-space:nowrap">**FORGOT PASSWORD**</span> button, you will be prompted to enter your email address, as you can see below:

<img style="width: 350px" src="/images/login-resetpw1.webp" alt="Forgot Password "/>

Once you enter your details and click the **SUBMIT** button, we will send you an email containing your password reset link within 24 hours. If we cannot find your email address you won't be able to reset your password. In this case, you will need to contact your system administrator.

**Reset your password**

The link in the email will take you to the location below. This is the second step of the password reset process where you can specify your new password.

<img style="width: 350px" src="/images/login-resetpw2.webp " alt="Password policy"/>
 
Our password policy states that your new password must be between 8 and 30 characters long, with at least one lowercase character, one uppercase character, a number, and one special character.
