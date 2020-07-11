const express = require('express');
const app = express();

const PORT = process.env.PORT || 8081;

// settings
require('./server')(app);

// routes
app.use('/', require('./routes'));

// run server
app.listen(PORT, () => {
    console.log('runing: http://localhost:' + PORT);
});