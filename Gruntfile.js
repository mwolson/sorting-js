module.exports = function(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        force: true,
        configFile: '.eslintrc',
        ignores: [],
        ignorePath: '.eslintignore'
      },
      target: ['lib/**/*.js', 'test/**/*.js']
    }
  });

  require('load-grunt-tasks')(grunt, { pattern: ['grunt-*', '!grunt-lib-*'] });

  grunt.registerTask('test', [
    'eslint'
  ]);
};
