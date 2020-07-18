const express = require('express');
const exphbs = require('express-handlebars');
const multer = require('multer');
const path = require('path');

module.exports = (app) => {
    // directories
    const static = path.join(__dirname, '../../static');
    const uploads = path.join(static, 'uploads/tmp');

    // settings
    app.set('view engine', '.hbs');
    app.engine('.hbs', exphbs({ extname: '.hbs' }));

    // midlewares
    app.use(multer({ dest: uploads }).single('file'));

    // static dir
    app.use('/static', express.static(static));
}