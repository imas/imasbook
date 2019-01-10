module.exports = function (grunt) {

    const configJson = grunt.file.readJSON('config.json')

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        markdown: {
            all: {
                files: [
                    {
                        expand: true,
                        src: 'articles/*.md',
                        dest: 'dist/',
                        ext: '.html'
                    }
                ],
                options: {
                    template: 'templates/section.jst',
                    markdownOptions: {
                        gfm: true
                    }
                }
            }
        },
        watch: {
            files: ['articles/**', 'templates/**'],
            tasks: ['markdown', 'htmlbuild', 'copy'],
        },
        htmlbuild: {
            dist: {
                src: 'templates/index.html',
                dest: 'dist/',
                options: {
                    beautify: true,
                    basePath: false,
                    sections: {
                        views: configJson.articles.map(v => `dist/articles/${v}.html`)
                    },
                }
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'articles/images/', src: ['**'], dest: 'dist/images/'},
                    { expand: true, cwd: 'templates/assets/',src: ['**'], dest: 'dist/assets/' }
                ],
            },
        }
    });

    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['markdown', 'htmlbuild', 'copy']);
}
