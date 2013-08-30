/*
 * grunt-sourcemap-localize
 * https://github.com/abovethewater/grunt-sourcemap-localize
 *
 * Copyright (c) 2013 Joe Mathews
 * Licensed under the MIT license.
 * http://abovethewater.mit-license.org/
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    sourcemap_localize: {
      options: {
        localize_to : 'dist/',
      },
      all: {
        files: {
          src: ['dist/*.min.map.js'],
        }
      },
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint']);

};
