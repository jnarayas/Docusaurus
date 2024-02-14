// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Amazon Payment Services Documentation',
  tagline: 'Explore our guides and examples to integrate Amazon Payment Services.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://prod.d23uz3cs89b736.amplifyapp.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'asmadi', // Usually your GitHub org/user name.
  projectName: 'apsdocs', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/asmadi/aps-docs-poc/blob/main/docs/',

          // lastVersion: 'current',
          // // disableVersioning: true,
          // versions: {
          //   current: {
          //     label: '1.0',
          //     // path: '1.0',
          //   },
          // },
          
              
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            'https://github.com/asmadi/aps-docs-poc/blob/main/docs/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      // Replace with your project's social card
      image: 'img/logo.svg',
       algolia: {
          apiKey: 'c8ed458a39e31b611aca441cd1a4010c',
          indexName: 'dev_smadi',
          contextualSearch: true,
          placeholder: 'Search in smadi magic',
          appId: 'THSM9Z4EB4',
    
        },
      navbar: {
        // title: 'Amazon Payment Services',
        title: '',
        hideOnScroll: false,
        logo: {
          alt: 'APS Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-footer.svg',
          width: 260, 
        },
        
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          }, 
          {
            label: 'API Reference',
            href: 'https://docs.payfort.com',
            position: 'left',
            className: 'api-ref-link',
            target: '_self'
          },

         
          {
            type: 'dropdown',
            label: 'SDKs & Plugins',
            position: 'left',
            items: [
              // {
              //   type: 'html',
              //   value: '<a href="#" class="" target="_blank"> <img src="" width="22" height="22"> Developer Portal </a>',
              // },
              {
                label: 'SDKs',
                to: 'docs/Live-Editor',
              },
              {
                label: 'Plugins',
                to: 'docs/Live-Editor',
              },
              // ... more items
            ],
          },

          {
            type: 'dropdown',
            label: 'Resources',
            position: 'left',
            items: [
              {
                to: 'docs/Live-Editor',
                label: 'FAQ',
              },
              {
                to: 'docs/Live-Editor',
                label: 'Videos',
              },
              {
                to: 'docs/Live-Editor',
                label: 'Sample Apps',
              },
              {
                to: 'docs/Live-Editor',
                label: 'Release Notes',
              },
              // ... more items
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          //   // dropdownActiveClassDisabled: true,
          // },
          
          {
            href: 'https://paymentservices.amazon.com/support-center',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://github.com/payfort',
            label: 'GitHub',
            position: 'right',
          },
         
        ],
      },
      footer: {
        logo: {
          alt: 'APS Logo',
          // src: 'img/logo-small.svg',
          src: 'img/logo-footer.svg',
          width: 260, 
        },
        style: 'dark',
        links: [
          
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/before-starting',
              },
              {
                html: `
                    <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="/img/logo-small.svg" alt="Deploys by Amazon Payment Services" width="80" height="auto" />
                    </a>
                  `,
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/payfort',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/amzpymntservs',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/amazonpaymentservices',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/payfort',
              },
              {
                href: 'https://paymentservices.amazon.com/support-center',
                label: 'Support',
                position: 'right',
              },
             
            ],
          },
        ],
        // copyright: `Copyright © 1996-${new Date().getFullYear()}, Amazon.com, Inc. or its affiliates.`,
        copyright: `Copyright © 2023 Amazon.com, Inc. or its affiliates.`,
        
      },
      prism: {
        // theme: lightCodeTheme,
        theme: darkCodeTheme,
        
        // theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['php', 'ruby', 'java'],

      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      }
    }),
    themes:['@docusaurus/theme-live-codeblock'],
    

    plugins: [
      require.resolve('docusaurus-plugin-image-zoom')
    ],
    
};

module.exports = config;

