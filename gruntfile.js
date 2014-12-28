/**
 * Created by Fred on 12/27/2014.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            all: ["./public/js/**/*.js"],
            options: {unused: true}
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerInitTask("default", ["jshint"]);
};