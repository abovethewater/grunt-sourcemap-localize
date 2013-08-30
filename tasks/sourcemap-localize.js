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

    if (typeof options.localize_to !== "string") {
        grunt.log.error("Missing required option!");
        return false;
    }

    grunt.log.writeln('ok');


  });

};