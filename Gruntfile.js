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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Task(s).
  grunt.registerTask('default', ['compass']);
  grunt.registerTask('dev', ['compass', 'browserSync', 'watch']);

};
