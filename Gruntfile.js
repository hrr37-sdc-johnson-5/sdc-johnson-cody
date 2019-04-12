module.exports = (grunt) => {

  grunt.loadNpmTasks('grunt-aws');

  grunt.loadNpmTask('grunt-contrib-connect');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    aws: grunt.file.readJSON('.aws.json'),
    s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        bucket: "<%= aws.bucket %>"
      },
      build: {
        cwd: "public",
        src: "**"
      }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: "public",
          keepalive: true
        }
      }
    }
  });

  grunt.registerTask("default", ["connect"]);
}