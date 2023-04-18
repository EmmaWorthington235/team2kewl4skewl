// Imports the index.js file to be tested.
const server = require('../index'); //TO-DO Make sure the path to your index.js is correctly added
// Importing libraries

// Chai HTTP provides an interface for live integration testing of the API's.
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);
const {assert, expect} = chai;

describe('Server!', () => {
  // Sample test case given to test / endpoint.
  it('Returns the default welcome message', done => {
    chai
      .request(server)
      .get('/welcome')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals('success');
        assert.strictEqual(res.body.message, 'Welcome!');
        done();
      });
  });

it('positive : /login success', done => {
  chai
    .request(server)
    .post('/login')
    .send({username: 'asdf', password: 'asdf'})
    .end((err, res) => {
      res.header['location'].should.include('/home') //for res.redirect change to endpoint name
      expect(res).to.have.status(200);
      done();
    });
});

it('Negative : /login. Checking invalid name, redirect to register', done => {
  chai
    .request(server)
    .post('/login')
    .send({username: 'not real', password: 'not real'})
    .end((err, res) => {
      expect(res).to.have.status(200);
      expect(res).to.have.header('content-type','text/html; charset=utf-8');
      expect(res.text).to.contain('<title>Register</title>'); //for res.render change to title of page
      done();
    });
});

  // ===========================================================================
  // TO-DO: Part A Login unit test case
});