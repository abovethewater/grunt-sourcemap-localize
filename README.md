# grunt-sourcemap-localize

> Localize the file and sources relative to source

Work around the current (08/2013) issues with Uglify and the creation of sourcemaps in subdirs

## Getting Started
This plugin requires Grunt `~0.4.1`

Install the [grunt-sourcemap-localize](https://github.com/abovethewater/grunt-sourcemap-localize) plugin with this command:

```shell
npm install grunt-sourcemap-localize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-sourcemap-localize');
```

## The "sourcemap_localize" task

### Overview

After a successful uglify, pass the map to sourcemap_localize to make the file and sources relative

#### Uglify

Use basic options, defining the sourceMappingURL.

    uglify: {
      options: {
        sourceMap: 'dist/hello_world.min.map.js',
        sourceMappingURL: 'hello_world.min.map.js'
      },
      dist: {
        files: {
          'dist/hello_world.min.js': ['dist/hello_world.js']
        }
      }
    },


##### Example


    (function() {
        console.log("hello world");
    }());

produces

> dist/hello_world.min.js

    !function(){console.log("hello world")}();
    /*
    //@ sourceMappingURL=adsdk.min.map.js
    */

> dist/hello_world.min.map.js

    {"version":3,"file":"dist/hello_world.min.js","sources":["dist/hello_world.js"],"names":["console","log"],"mappings":"CAAC,WAEGA,QAAQC,IAAI"}


#### Localizing

In your project's Gruntfile, add a section named `sourcemap-localize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sourcemap_localize: {
    options: {
      // Task-specific options go here.
      localize_to : 'dist/',
    },
    all: {
      files: {
        src: ['dist/*.min.map.js'],
      }
    },
  },
})
```

produces

> dist/hello_world.min.map.js

    {"version":3,"file":"hello_world.min.js","sources":["hello_world.js"],"names":["console","log"],"mappings":"CAAC,WAEGA,QAAQC,IAAI"}



### Options

#### options.localize_to
Type: `String`
Default value: `none`
Required: `true`

A string value that defines the path to localize files to

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

* 0.1.0 Initial release to NPM
