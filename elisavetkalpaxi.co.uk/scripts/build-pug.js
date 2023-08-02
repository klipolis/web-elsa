'use strict';
const upath = require('upath');
const sh = require('shelljs');
const renderPug = require('./render-pug');
const srcPath = upath.resolve(upath.dirname(__filename), '../src');

// sh.find(srcPath).forEach(_processFile);

const files = sh.find('./src/pug/').filter(function(file) { return file.match(/.pug$/); });

// console.log("files:" + files);

files.forEach(_processFile);

function _processFile(filePath) {
    if (
        filePath.match(/\.pug$/)
        && !filePath.match(/partials/)
        && !filePath.match(/mixin/)
        && !filePath.match(/\/pug\/templates\//)
    ) {
        renderPug(filePath);
    }
}