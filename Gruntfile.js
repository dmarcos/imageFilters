  module.exports = function(grunt) {
    "use strict";

    // Project configuration.
    grunt.initConfig({
      watch: {
        livereload: {
          options: { livereload: true },
          files: ['src/*.js'],
        }
      },
      jshint: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        gruntfile: {
          src: 'Gruntfile.js'
        },
        src: {
          src: ['src/*.js']
        }
      },
      pkg: grunt.file.readJSON('package.json'),
      banner: '/**\n' +
              '* <%= pkg.name %>.js v<%= pkg.version %> by @dmarcos \n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              '*/\n',
      uglify: {
        options: {
          report: 'gzip'
        },
        jpegjs: {
          files: {
            'imageFilters.min.js': [
              'lib/almond.js',
              'src/imageFilters.js'
            ]
          }
        }
      },
      concat: {
        options: {
          banner: '<%= banner %><%= jqueryCheck %>',
          stripBanners: false
        },
        jpegjs: {
          src: [
            'lib/almond.js',
            'src/imageFilters.js'
          ],
          dest: 'imageFilters.js'
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task.
    grunt.registerTask('default', ['jshint', 'concat']);

  };