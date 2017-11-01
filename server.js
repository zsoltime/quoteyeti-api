'use strict';

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;
const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/quotes';

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect(mongoURL)
  .then((err) => {
    if (err) {
      console.error('Unable to connect to MongoDB');
      process.exit(1);
    } else {
      console.log('Connected to MongoDB');
      app.listen(port, () => console.log('Server is listening on port %s', port));
    }
  });

module.exports = app;
