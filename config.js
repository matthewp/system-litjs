System.config({
  "paths": {
    "*": "*.js",
    "system-litjs/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "chai": "npm:chai@1.10.0",
    "marked": "npm:marked@0.3.2",
    "github:jspm/nodelibs@0.0.8": {
      "Base64": "npm:Base64@0.2.1",
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.4",
      "inherits": "npm:inherits@2.0.1",
      "json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:chai@1.10.0": {
      "assertion-error": "npm:assertion-error@1.0.0",
      "deep-eql": "npm:deep-eql@0.1.3"
    },
    "npm:deep-eql@0.1.3": {
      "type-detect": "npm:type-detect@0.1.1"
    }
  }
});

