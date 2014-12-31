var assert = require('chai').assert;

describe('system-litjs', function() {

  it('Can turn markdown into modules', function(done) {
    System.import('test/add.md!md').then(function(add) {
      assert.equal(add(1, 2), 3, 'Function correctly translated');
    }).then(done);
  });

});
