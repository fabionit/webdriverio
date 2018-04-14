/* eslint-disable */
// wdio.conf.ci.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

var path = require('path');
const OUTPUT_PATH = path.resolve(__dirname, 'downloads');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {

    debug: false,

    // host: 'localhost',
    // port: 4444,
    // path: '/wd/hub',
});
