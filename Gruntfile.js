module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      // dist: {                   // Target
      //   options: {              // Target options
      //     sassDir: 'sass',
      //     cssDir: 'stylesheets',
      //     environment: 'production'
      //   }
      // },
      dev: {                    // Another target
        options: {
          sassDir: 'sass',
          cssDir: 'stylesheets'
        }
      }
    },
    browserSync: {
      bsFiles: {
        src : 'stylesheets/*.css'
      },
      options: {
        server: {
          baseDir: "./"
        }
      }
    }
  });

  // Load the plugin that provides the "compass" task.
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-browser-sync');

  // Default task(s).
  grunt.registerTask('default', ['compass']);

};
