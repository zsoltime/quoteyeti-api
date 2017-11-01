'use strict';

const db = require('../db');

module.exports.random = function random(limit = 1, cb) {
  const col = db.collection('quotes');

  const cursor = col.aggregate([
    {
      $sample: {
        size: limit,
      },
    },
  ]);

  cursor.toArray()
    .then(docs => cb(null, docs))
    .catch(err => cb(err));
};
