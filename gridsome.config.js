// reference: https://gridsome.org/docs/config

module.exports = {
    siteName: 'Test',
    siteUrl: 'https://example.com',
    transformers: {
        remark: {
            externalLinksTarget: '_blank',
            externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
            plugins: ['@gridsome/remark-prismjs'],
        },
    },
    chainWebpack: (config) => {
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader');
    },
};
