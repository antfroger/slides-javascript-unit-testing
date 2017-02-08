module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['src/**/*.js'],
        // the location of the resulting JS file
        dest: 'dist/<%= pkg.main %>'
      }
    },
    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      tasks: ['concat']
    },
    qunit: {
      files: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['concat']);
  grunt.registerTask('test', ['qunit']);
};