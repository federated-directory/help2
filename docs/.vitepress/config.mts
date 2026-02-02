import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Federated Directory",
  description: "Developer Documentation",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Open Graph meta tags
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Federated Directory' }],
    ['meta', { property: 'og:image', content: 'https://help.federated.directory/og-image.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Federated Directory - Corporate Address Book Federation' }],
    // Twitter Card meta tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@fed_dir' }],
    ['meta', { name: 'twitter:image', content: 'https://help.federated.directory/og-image.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Federated Directory - Corporate Address Book Federation' }],
    // ['script', {}, `
    //   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    //   (function(){
    //   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    //   s1.async=true;
    //   s1.src='https://embed.tawk.to/5cffe951267b2e578531e177/1i0lolii4';
    //   s1.charset='UTF-8';
    //   s1.setAttribute('crossorigin','*');
    //   s0.parentNode.insertBefore(s1,s0);
    //   })();
    // `]
  ],
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'scalar-api-reference'
      }
    }
  },
  themeConfig: {
    siteTitle: false,
    logo: '/images/FederatedDirectory_horizontal.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API Documentation', link: '/developer/api-reference' },
      { text: 'Contact Us', link: '/contact-us' },
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
          { text: 'Agentic AI', link: '/agentic-ai' },
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
          { text: 'Getting Started', link: '/developer/getting-started' },
          { text: 'API Documentation', link: '/developer/api-reference' },
          { text: 'Design Principles', link: '/developer/design-principles' }
        ]
      }
    ],


    socialLinks: [
      { icon: 'github', link: 'https://github.com/federated-directory/help2' }
    ],
    
    footer: {
      copyright: 'Copyright © 2026 Federated Directory'
    },

    search: {
      provider: 'local'
    }
  },
    ignoreDeadLinks: [
      // Ignore localhost links in documentation (e.g. for running locally)
      /^http:\/\/localhost/
    ]
})
