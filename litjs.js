var marked = require('marked');

exports.translate = function(load) {
  var parsed = marked.lexer(load.source);
  var source = '';

  parsed.forEach(function(item) {
    if(item.type === 'code') {
      source += item.text + '\n';
    }
  });
  load.source = source;
};
