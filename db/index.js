'use strict';

const { MongoClient } = require('mongodb');

const state = { db: null };

module.exports.get = function get() {
  return state.db;
};

module.exports.connect = function connect(uri) {
  return new Promise((resolve, reject) => {
    if (state.db) {
      resolve();
    } else {
      MongoClient.connect(uri)
        .then(
          (database) => {
            state.db = database;
            resolve();
          },
          (err) => {
            console.log("Can't connect to MongoDB:", err.message);
            reject(err.message);
          }
        );
    }
  });
};

module.exports.close = function close() {
  if (state.db) {
    state.db.close()
      .then(
        () => { },
        (err) => {
          console.log("Can't close the database:", err.message);
        }
      );
  }
};

module.exports.collection = function collection(col) {
  if (state.db) {
    return state.db.collection(col);
  }
  return null;
};
