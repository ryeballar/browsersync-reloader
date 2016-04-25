'use strict';

const fs = require('fs');

module.exports = {
    plugin: function () { /* noop */},
    hooks: {
        'client:js': fs.readFileSync(__dirname + '/reloader.js', 'utf-8')
    }
};
