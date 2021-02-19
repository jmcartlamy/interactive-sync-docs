module.exports = {
    title: 'Interactive Sync',
    tagline: 'Customizable extension, promoting interactions between Twitch community and any application',
    url: 'https://interactive-sync.com',
    baseUrl: '/interactive-sync-docs/',
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
                    to: 'blog',
                    label: 'Blog',
                    position: 'left',
                },
                {
                    href: 'https://github.com/jmcartlamy/interactive-sync-docs',
                    position: 'right',
                    className: 'header-github-link'
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
                            label: 'Getting started',
                            to: 'docs/getting-started/prerequisites',
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
                            label: 'Join us',
                            to: 'community',
                        },
                        {
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'Github',
                            href: 'https://github.com/jmcartlamy/interactive-sync-docs',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
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
