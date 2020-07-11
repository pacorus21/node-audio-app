const exphbs = require('express-handlebars');

module.exports = (app) => {
    // settings
    app.set('view engine', '.hbs');
    app.engine('.hbs', exphbs({ extname: '.hbs' }));
}