const express = require('express');
const handlebars = require('express-handlebars');
const {PORT} = require('../config/config')
const app = express();

app.get('/', (req, res) => {
    res.write('Hello');
    res.end()
});

app.listen(PORT, console.log.bind(console, `server is running on http://locahost${PORT}`));