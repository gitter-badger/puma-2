/*
 * pumascript-grunt
 *
 * Copyright (c) 2015 UTN-LIS
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask('puma', 'Meta-programming features for Javascript', function () {

        var puma = require('../dist/pumascript.js');

        // Iterate over all specified files in gruntfile.
        this.files.forEach(function (file) {
            var res = "";
            file.src.filter(function(filepath){
                //Concatenate them
                res = grunt.file.read(filepath);
            });

            // Eval all the file concatenation
            console.log("INPUT :" + res);

            // Eval all the file concatenation
            var result = puma.evalPuma(res);
            grunt.log.writeln("PumaScript run: SUCCESSFUL!");

            // Write the destination file the result
            grunt.file.defaultEncoding = 'utf8';
            grunt.file.write(file.dest, result.output, grunt.file.defaultEncoding);

            // Print a success message.
            grunt.log.writeln('File with the result of PumaScript: "' + file.dest + '" was created.');
        });
    });

};
