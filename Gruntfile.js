module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dev: {
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets'
        }
      }
    },
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['compass']
      }
    },
    browserSync: {
      bsFiles: {
        src : 'stylesheets/*.css'
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    },
    html_pdf: {
    dist: {
      options: {
        height: '30cm',
        width: '30cm',
        orientation: 'portrait',
        "border": {
          "top": "2in",
          "right": "1in",
          "bottom": "2in",
          "left": "1.5in"
        },
        quality: '75',
      },
      files: {
        'mypdf.pdf': ['index.html',],
      },
    }
  },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-html-pdf');

  // Task(s).
  grunt.registerTask('default', ['compass']);
  grunt.registerTask('dev', ['compass', 'browserSync', 'watch']);

};
