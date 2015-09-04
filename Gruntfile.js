module.exports = function(grunt) {
      	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: {
        	dev: {
                script: 'app.js'
            }
        },
        jshint: {
		files: ['public/controllers/*.js', 'public/service.js','public/views/**',
                        'public/index.html','models/*.js','config/**','routes/**.js','app.js',
                    'package.json','Gruntfile.js'],
	   	options : {
			"curly": true,
			"eqeqeq": true,
			"immed": false,
			"newcap": false,
			"sub": false,
			"eqnull": true,
			"node": true,
			"es5": false,
			reporter: require('jshint-html-reporter'),
		        reporterOutput: 'JSHintReport/jshint-report.html'
 		}
	},
        watch: {
            server: {
                files: ['/**/*.js', '/**/*.html'],
                tasks: ['jshint', 'nodemon'],
                options: {
                    interrupt: true
                }
            }
        }
    });

	grunt.loadNpmTasks('grunt-nodemon');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.registerTask('analyse', ['jshint','watch']);
        grunt.registerTask('default', ['nodemon']);
};