---
layout: default
title: Microsoft Outlook add-in
nav_order: 7
---

# Microsoft Outlook add-in

- [Introduction](#introduction)
- [Installation](#installation)
- [Using the add-in in Outlook](#using-the-add-in-in-outlook)
- [Supported versions of Outlook](#supported-versions-of-outlook)
- [Known limitations](#known-limitations)

## Introduction

The contact data within a Federated Directory of a company is precious. The data gets even more powerful when it is accessible at the right moment; within the applications and services this company is already using. It is, therefore logical to deliver an add-in to one of the world's most commonly used e-mail clients: Microsoft Outlook.

## Installation

Our add-in is called "Federated Directory - Contacts" and is available on the [AppSource](https://appsource.microsoft.com/en-us/product/office/WA200001432?tab=Overview).
To install the add-in on a single account, you can follow the [Microsoft Guide](https://support.office.com/en-us/article/get-an-office-add-in-for-outlook-1ee261f9-49bf-4ba6-b3e2-2ba7bcab64c8).
If you would like to deploy our add-in in your organization, you should follow Microsoft's recommendations - https://docs.microsoft.com/en-us/microsoft-365/admin/manage/manage-deployment-of-add-ins?view=o365-worldwide

## Using the add-in in Outlook

After the add-in is installed, you can open your Outlook client - desktop or on the web. If Outlook was already opened, close it entirely and reopen it again.

As soon as you start composing a [new message](https://support.office.com/en-us/article/create-an-email-message-147208af-ca8e-4cdf-b71f-77ba81a54069) you will see a Federated Directory icon in the top bar. If it’s not visible, click on a “Message” tab inside your new message window.

<img src="../../assets/images/microsoft-outlook-using-add-in-step-1.png" alt="Search contacts is available when you start a new mail message"/>

By clicking the Federated Directory icon, you will open an add-in pane on the right of your message. Inside this pane, you will have to log in to Federated Directory by clicking the “Login” button.

<img src="../../assets/images/microsoft-outlook-using-add-in-step-2.png" alt="Start the Outlook add-in"/>

When you click the “Login” button, a popup window will be shown. When you log in, please note, that you will have to provide the Microsoft account details which you usually use when logging in to Federated Directory.

<img src="../../assets/images/microsoft-outlook-using-add-in-step-3.png" alt="Login to Federated Directory to allow Outlook to interact with it"/>

As soon as you’ve finished all the login steps, the popup window will be closed, and you should see list of contacts in the add-in pane

<img src="../../assets/images/microsoft-outlook-using-add-in-step-4.png" alt="Start using Federated DIrectory as you are used to"/>

## Known limitations

Currently there are no known issues.

## Using the beta add-in

We are working on new features for outlook add-in, which are not released yet to AppSource. If you would like to test and try the latest version, you can follow the steps below to install it.

Open your browser and navigate to:

https://outlook.office365.com/owa/?path=/options/manageapps

This will open the page where you can manage your add-ins.

<img src="../../assets/images/microsoft-outlook-add-add-in-step-1.png" alt="Manage your Outlook add-ins"/>

Click on a “plus” icon to open a menu and click “Add from a URL”

<img src="../../assets/images/microsoft-outlook-add-add-in-step-2.png" alt="Add an Outlook add-in from a URL as source"/>

After you’ve clicked the menu item, a new form will be visible where you can enter the URL of the manifest file. Enter https://federated.directory/owa/assets/manifest.xml into the input field and click “Next”

<img src="../../assets/images/microsoft-outlook-add-add-in-step-3.png" alt="Confirm you want to install the add-in from a URL"/>

After you’ve clicked the “Next” button, a warning will be shown regarding unverified add-in. Ignore it for now, till our add-in is available in App Source. Click the “Install” button

<img src="../../assets/images/microsoft-outlook-add-add-in-step-4.png" alt="Install add-in from specified URL source"/>

A confirmation message will be displayed, stating that the add-in is added to your Outlook account.

<img src="../../assets/images/microsoft-outlook-add-add-in-step-5.png" alt="Confirmation Outlook add-in was installed correctly"/>

After you close the confirmation dialog, you should see “Federated Directory” add-in in the list of available add-ins:

<img src="../../assets/images/microsoft-outlook-add-add-in-step-6.png" alt="List of installed add-ins within your Outlook client"/>
