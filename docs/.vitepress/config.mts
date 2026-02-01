import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Federated Directory",
  description: "Developer Documentation",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API Reference', link: '/developer/api-reference' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Login', link: '/login' },
          { text: 'Search', link: '/search' },
          { text: 'My Account', link: '/myaccount' },
          { text: 'Groups', link: '/groups' },
        ]
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Outlook Add-in', link: '/outlook-add-in' },
          { text: 'Teams App', link: '/teams-app' },
        ]
      },
      {
        text: 'Administrator',
        items: [
          { text: 'Overview', link: '/administrator/administrator' },
          { text: 'Directories', link: '/administrator/directories' },
          { text: 'Company', link: '/administrator/company' },
          { text: 'Integrations', link: '/administrator/integrations' },
          { text: 'Audit Logs', link: '/administrator/auditlogs' },
          { text: 'Integrate with Google', link: '/administrator/google' },
          { text: 'Integrate with Microsoft', link: '/administrator/microsoft' },
          { text: 'Integrate with Okta', link: '/administrator/okta' },
          { text: 'Integrate with OneLogin', link: '/administrator/onelogin' },
          { text: 'Integrate with OIDC', link: '/administrator/oidc' },
          { text: 'Integrate with SAML 2.0', link: '/administrator/saml' },
          { text: 'Integrate with SCIM 2.0', link: '/administrator/scim' },
        ]
      },
      {
        text: 'Developer',
        items: [
          { text: 'Overview', link: '/developer/developer' },
          { text: 'Obtaining a Token', link: '/developer/obtaining-a-token' },
          { text: 'Users API', link: '/developer/users-api' },
          { text: 'Design Principles', link: '/developer/design-principles' },
          { text: 'API Reference', link: '/developer/api-reference' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/federated-directory/help2' }
    ],
    
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Federated Directory'
    }
  },
  ignoreDeadLinks: true
})
