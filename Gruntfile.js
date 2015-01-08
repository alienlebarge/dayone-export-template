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
    }
  });

  // Load the plugin that provides the "compass" task.
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass']);

};
