'use strict';
const upath = require('upath');
const sh = require('shelljs');
const renderPug = require('./render-html');
const srcPath = upath.resolve(upath.dirname(__filename), '../src');

const files = sh.find('./src/html/').filter(function(file) { return file.match(/.pug$/); });

files.forEach(_processFile);

function _processFile(filePath) {
    if (
        filePath.match(/\.pug$/)
        && !filePath.match(/partials/)
        && !filePath.match(/mixin/)
        && !filePath.match(/\/html\/templates\//)
    ) {
        renderPug(filePath);
    }
}