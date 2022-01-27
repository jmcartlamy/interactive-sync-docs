module.exports = {
    title: 'Interactive Sync',
    tagline: 'Ready-to-use Twitch extension promoting interactions',
    url: 'https://www.interactive-sync.com/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'jmcartlamy',
    projectName: 'interactive-sync-docs',
    themeConfig: {
        prism: {
            defaultLanguage: 'javascript',
        },
        navbar: {
            title: 'Interactive Sync',
            hideOnScroll: true,
            logo: {
                alt: 'Interactive Sync Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                {
                    label: 'Tools',
                    position: 'left',
                    items: [
                        {
                            label: 'UI Validator',
                            to: 'tools/ui/validator',
                        },
                        {
                            label: 'UI Sandbox',
                            to: 'tools/ui/sandbox',
                        },
                    ],
                },
                {
                    label: 'Example',
                    href: 'https://github.com/jmcartlamy/phaser3-bta-tpe',
                },

                {
                    href: 'https://discord.gg/xfGXX6GAsX',
                    position: 'right',
                    className: 'header-discord-link',
                    alt: 'fsfrs',
                },
                {
                    href: 'https://github.com/jmcartlamy/interactive-sync-docs',
                    position: 'right',
                    className: 'header-github-link',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'What is Interactive Sync?',
                            to: 'docs',
                        },
                        {
                            label: 'Getting started',
                            to: 'docs/getting-started/registering-your-application',
                        },
                    ],
                },
                {
                    title: 'Tools',
                    items: [
                        {
                            label: 'UI Validator',
                            to: 'tools/ui/validator',
                        },
                        {
                            label: 'UI Sandbox',
                            to: 'tools/ui/sandbox',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.gg/xfGXX6GAsX',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/jmcartlamy/interactive-sync-docs',
                        },
                        {
                            label: 'Example',
                            href: 'https://github.com/jmcartlamy/phaser3-bta-tpe',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Terms of use',
                            to: 'terms-of-use',
                        },
                        {
                            label: 'Twitch Dev',
                            href: 'https://dev.twitch.tv/login',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Jean-Marie Cart-Lamy.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./src/sidebars.js'),
                    editUrl: 'https://github.com/jmcartlamy/interactive-sync-docs/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/facebook/interactive-sync-docs/edit/master/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
