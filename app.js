const express = require('express');
const chalk = require('chalk');
const debug = require('debug');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 3000

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('response from app.js');
    res.render('index', { title: 'Globomantics', data: ['a', 'b', 'c'] });
})

app.listen(PORT, () => {
    console.log(`listening on port ${chalk.green(PORT)}`);
})