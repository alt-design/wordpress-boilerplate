const devURL = 'http://womble.dev';

// == == == == == == == == == == == == == == ==
// This gulpfile uses the Laravel Elixir API ==
// For Elixir documentation, look here == == ==
// https://laravel.com/docs/elixir  == == == ==
// == == == == == == == == == == == == == == ==

const elixir = require("laravel-elixir");
const del = require('del');
require('laravel-elixir-imagemin');
require('laravel-elixir-vue-loader');
require('laravel-elixir-webpack-official');


elixir.config.publicPath = './dist/';
elixir.config.assetsPath = './src/';

elixir.extend('delete', function (path) {
    new elixir.Task('delete', function () {
        del(path);
    });
});

//elixir.webpack.mergeConfig();

elixir(function (mix) {
    mix.delete('dist/build')
        .webpack('main.js')
        .sass('main.scss')
        .sass('admin.scss')
        .browserSync({
            files: ["./**/*.css", "./**/*.js", './**/*.php'],
            proxy: devURL
        })
        .imagemin()
        .copy('dist/css/**', 'dist/build/css')
        .version(['css/main.css', 'css/admin.css', 'js/main.js']);
});