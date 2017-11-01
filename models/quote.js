'use strict';

const db = require('../db');

module.exports.random = function random(limit, cb) {
  const col = db.collection('quotes');
  const size = parseInt(limit, 10) || 1;
  const cursor = col.aggregate([{
    $sample: { size },
  }]);

  cursor.toArray()
    .then(docs => cb(null, docs))
    .catch(err => cb(err));
};
