'use strict';

const request = require('supertest');
const app = require('../server');

describe('GET /', () => {
  it('should return status 200 for the index page', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });
});
