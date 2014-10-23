
var normalize = System.normalize;
System.normalize = function(name, parentName, parentAddress) {
  if(name.substr(name.length - 3) === '.js') {
    name = name.substr(0, name.length - 3);
  }

  return normalize.call(this, name, parentName, parentAddress);

};


System.config({
  map: {
    documentjs: "bower_components/documentjs/lib"
  },
  paths: {
    lodash: "bower_components/lodash/dist/lodash.js"
  },
  ext: {
    md: "litjs"
  }
});
