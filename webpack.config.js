const path = require('path');

module.exports = {
    entry: './docs/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
    },
    mode: 'development',
    watch: true
};