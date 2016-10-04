const devURL = 'DEVELOPMENT URL HERE';

// == == == == == == == == == == == == == == ==
// This gulpfile uses the Laravel Elixir API ==
// For Elixir documentation, look here == == ==
// https://laravel.com/docs/elixir  == == == ==
// == == == == == == == == == == == == == == ==

const elixir = require("laravel-elixir");
const del = require('del');
require('laravel-elixir-imagemin');
require('laravel-elixir-vueify');


elixir.config.publicPath = './dist/';
elixir.config.assetsPath = './src/';

elixir.extend('delete', function (path) {
    new elixir.Task('delete', function () {
        del(path);
    });
});

elixir(function (mix) {
    mix.delete('dist/build')
        .browserify('vue-main.js')
        .sass('main.scss')
        .sass('admin.scss')
        .browserSync({
            files: ["./**/*.css", "./**/*.js", './**/*.php'],
            proxy: devURL
        })
        .imagemin()
        .version(['css/main.css', 'css/admin.css', 'js/vue-main.js']);
});