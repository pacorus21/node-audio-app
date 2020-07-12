const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    // directories
    const static = path.join(__dirname, '../../static');

    // settings
    app.set('view engine', '.hbs');
    app.engine('.hbs', exphbs({ extname: '.hbs' }));

    // static dir
    app.use('/', express.static(static));
}