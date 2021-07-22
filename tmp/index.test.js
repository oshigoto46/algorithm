var should  = require('should');
var index = require('./index.js');

describe('index', function(){
  it('3+4=7', function(){
    index.addition(3,4).should.equal(7);
  });
});