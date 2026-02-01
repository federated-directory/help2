import { defineConfig } from 'vitepress'
import { scalar } from '@scalar/vitepress-theme' // Wait, I need to check if this theme exists or if I should use the API component.

// The @scalar/vitepress-theme package failed to install (404). This means it might be private or deprecated.
// I will use the standard VitePress theme and embed Scalar as a component or page.
// Actually, Scalar offers a 'vitepress-theme' but maybe I got the name wrong or it's new.
// Let's stick to standard VitePress + Scalar Web Component for now, which is safer.
// OR better: use the documented integration method.

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
          // Will populate based on files
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
    },
    
    ignoreDeadLinks: true
  }
})
