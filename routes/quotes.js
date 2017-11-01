'use strict';

const express = require('express');
const Quotes = require('../models/quote');

const router = express.Router();

router.route('/:limit(\\d+)?')
  .get((req, res) => {
    Quotes.random(req.params.limit, (err, docs) => {
      if (err) {
        res.json({
          error: true,
          message: err,
        });
      }
      res.json(docs);
    });
  });

module.exports = router;
