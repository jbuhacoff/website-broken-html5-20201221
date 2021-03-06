// reference: https://gridsome.org/docs/server-api

const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = function (api) {
    api.chainWebpack((config, { isServer }) => {
        if (isServer) {
            config.externals([
                nodeExternals({
                    allowlist: [/^vuetify/],
                }),
            ]);
        }
    });
};
