'use strict';

const request = require('supertest');
const expect = require('expect');
const app = require('../server');

describe('GET /', () => {
  it('should respond with JSON', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('should support CORS requests', (done) => {
    request(app)
      .get('/')
      .expect('Access-Control-Allow-Origin', '*')
      .expect(200, done);
  });

  it('should return one random quote', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        console.log(res.body.length);
        expect(res.body).toBeTruthy();
        expect(res.body.length).toBe(1);
      })
      .end((err) => {
        if (err) { return done(err); }
        return done();
      });
  });
});

describe('GET /:num', () => {
  it('should return `:num` number of random quotes', (done) => {
    request(app)
      .get('/7')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeTruthy();
        expect(res.body.length).toBe(7);
      })
      .end((err) => {
        if (err) { return done(err); }
        return done();
      });
  });
});
