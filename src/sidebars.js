module.exports = {
    docs: [
        {
            label: 'Interactive Sync',
            type: 'category',
            items: ['introduction', 'architecture', 'usingtwitch'],
            collapsed: false,
        },
        {
            label: 'Getting Started',
            type: 'category',
            items: [
                'getting-started/prerequisites',
                'getting-started/extension',
                'getting-started/general',
                'getting-started/javascript',
                'getting-started/create-ui',
            ],
            collapsed: false,
        },
        {
            id: 'websocket',
            type: 'doc',
        },
        {
            label: 'UI Schema',
            type: 'category',
            items: [
                'user-interface/root',
                'user-interface/config',
                'user-interface/video-overlay',
                'user-interface/mobile',
                'user-interface/panel',
                'user-interface/component',
                'user-interface/mouse',
                'user-interface/extension',
                'user-interface/style',
            ],
        }
    ],
};
