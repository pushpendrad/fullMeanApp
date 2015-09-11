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
		/*No need to include HTML files in watch task*/
                files: ['app.js','routes/*.js','public/controllers/*.js','models/*.js','config/*'],
                tasks: [/*'jshint',*/ 'nodemon']
            }
        }
    });

	grunt.loadNpmTasks('grunt-nodemon');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.registerTask('analyse', ['jshint']);
        grunt.registerTask('default', ['nodemon','watch']);
};
