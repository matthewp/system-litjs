var processComment = require('documentjs/process/comment');
var tags = require('documentjs/tags/tags');

exports.translate = function(load) {
  var source = load.source;
  debugger;

  return new Promise(function(resolve, reject) {
    debugger;
    processComment({
      comment: load.source,
      tags: tags
    }, function(props, scope) {
      debugger;
    });
  });
};
