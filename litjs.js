var markedModuleName = __dirname.indexOf('bower_components')
  ? 'bower_components/marked/lib/marked' : 'marked';

exports.translate = function(load) {
  return this.import(markedModuleName).then(function(marked) {
    var parsed = marked.lexer(load.source);
    var source = '';

    parsed.forEach(function(item) {
      if(item.type === 'code') {
        source += item.text + '\n';
      }
    });
    load.source = source;
  });
};
