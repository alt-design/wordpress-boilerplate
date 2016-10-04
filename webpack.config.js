module.exports = {
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime', 'transform-vue-jsx']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }]
    },
    resolve: {
        alias: {vue: 'vue/dist/vue.js'}
    },
    vue: {
        loaders: {
            scss: 'style!css!sass'
        }
    }
};
