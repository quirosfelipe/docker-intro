
// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });


var server = require('../server.js');

describe('server', function () {
  before(function () {
    server.listen(8081);
  });


  //after(function () {
   // server.close();
  //});

});

var assert = require('assert'),
    http = require('http');

describe('/', function () {
  it('should return 200', function (done) {
    http.get('http://localhost:8081', function (res) {
      assert.equal(200, res.statusCode);
      done();
    });
  });

  it('should say "Hello, world!"', function (done) {
    http.get('http://localhost:8081', function (res) {
      var data = '';

      res.on('data', function (chunk) {
        data += chunk;
      });

      res.on('end', function () {
        assert.equal('Hello, world!', data);
        done();
      });
    });
  });
});