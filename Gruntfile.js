/*global module:false*/
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
            uglify: {
                options: {
                    sourceMap: true
                },
                main: {
                    src: [
                        'Resources/Private/Scripts/main.js'
                    ],
                    dest: 'Web/Scripts/main.min.js'
                },
                compress: {
                    src: [
                        'Resources/Private/Scripts/Vendor/jquery.1.12.1.min.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/tooltip.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/affix.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/alert.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/button.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/carousel.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/collapse.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/dropdown.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/modal.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/popover.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/scrollspy.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/tab.js',
                        'Resources/Private/Scripts/Vendor/Bootstrap/transition.js',
                        'Resources/Private/Scripts/Vendor/jquery.flexslider.js',
                        'Resources/Private/Scripts/track-clicks.js'
                    ],
                    dest: 'Web/Scripts/compress.min.js'
                }
            },
            less: {
                main: {
                    options: {
                        paths: ["Less"],
                        compress: true,
                        plugins: [
                            new (require('less-plugin-autoprefix'))({browsers: ["> 1%", "last 2 versions", "Firefox ESR", "Opera 12.1"]}),
                        ]
                    },
                    src: ['Resources/Private/Less/main.less'],
                    dest: 'Web/Css/main.css'

                }
            }
        }
    );

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('beechit-javascript-main', 'Concatenates and minify main javascript file', ['uglify:main']);
    grunt.registerTask('beechit-javascript-compress', 'Concatenates and minify vendor javascript file', ['uglify:compress']);
    grunt.registerTask('beechit-less', 'Compiles the less files of the project', ['less']);

    // By default run all
    grunt.registerTask('default', ['uglify', 'less']);
};
