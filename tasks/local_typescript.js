/*
 * grunt-local-typescript
 * https://github.com/yyamaguchi/grunt-local-typescript
 *
 * Copyright (c) 2018 Yutaka Yamaguchi
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {
  grunt.registerMultiTask('local_typescript', 'Compile ts files with local installed TypeScript', function() {
    var done = this.async();

    var options = this.options({
      typescript: path.resolve(process.cwd(), '/node_modules/.bin/tsc')
    });

    var args = [];
    for (var propName in options) {
      if (options.hasOwnProperty(propName)) {
        if (propName !== 'typescript') {
          args.push('--' + propName, options[propName]);
        }
      }
    }

    grunt.util.spawn({
      cmd: options.typescript,
      args: args
    }, function(error, result, code) {
      if (result.stdout) {
        grunt.log.writeln(result.stdout);
      }
      if (error) {
        grunt.warn(error, code);
      }
      done(code === 0);
    });
  });

};
