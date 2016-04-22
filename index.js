'use strict';

const fs = require('fs');

module.exports = {
    plugin: function () { /* noop */},
    hooks: {
        'client:js': fs.readFileSync("./reloader.js", "utf-8") // Link to your file
    }
};
