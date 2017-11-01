'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
// eslint-disable-next-line no-unused-vars
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/quoteyeti';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Seems to be working'));

app.listen(port, () => console.log('Server is listening on port %s', port));

module.exports = app;
