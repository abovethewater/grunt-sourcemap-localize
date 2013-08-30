/*
 * grunt-sourcemap-localize
 * https://github.com/abovethewater/grunt-sourcemap-localize
 *
 * Copyright (c) 2013 Joe Mathews
 * Licensed under the MIT license.
 * http://abovethewater.mit-license.org/
 */

'use strict';

 var fs = require('fs'),
    path = require('path');

 module.exports = function(grunt) {

  grunt.registerMultiTask('sourcemap_localize', function() {

    var options = this.options({});

    if (this.filesSrc.length === 0) {
      grunt.log.error("Requires src files.");
      return false;
    }

    if (typeof options.localize_to !== "string") {
        grunt.log.error("Missing required option!");
        return false;
    }

    this.filesSrc.forEach(function(f) {
    	var contents = grunt.file.readJSON(f);
    	var origFile = contents.file;
    	contents.file = path.relative(options.localize_to, contents.file);
    	if (origFile !== contents.file) {
    		grunt.log.writeln(f + '[file]: ' + origFile + ' -> ' + contents.file);
    	}
    	contents.sources = contents.sources.map(function(source) {
    		var origSource = source;
    		var newSource = path.relative(options.localize_to, source);
    		grunt.log.writeln(f + '[sources]: ' + origSource + ' -> ' + newSource);
    		return newSource;
    	});
    	grunt.file.write(f, JSON.stringify(contents));
    });


  });

};