module.exports = {
    presets: [
        ['@vue/babel-preset-app', {
            targets: ['> 5%'],
        }],
    ],
    // this doesn't seem to have any effect:
    plugins: [
        ['@babel/plugin-transform-runtime', {
            'corejs': 3,
            "helpers": true,
            "regenerator": true,
            "useESModules": false
        }],
    ],
};
