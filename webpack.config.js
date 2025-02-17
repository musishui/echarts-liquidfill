module.exports = (env, options) => {
    return {
        entry: {
            'echarts-liquidfill': __dirname + '/index.js'
        },
        output: {
            libraryTarget: 'umd',
            library: ['echarts-liquidfill'],
            path: __dirname + '/dist',
            filename: options.mode === 'production' ? '[name].min.js' : '[name].js'
        },
        optimization: {
            concatenateModules: true
        },
        externals: {
            'echarts/core': 'echarts'
        },
        devtool: 'source-map',
        resolve: {
            alias: {
                'echarts/core': 'echarts'
            }
        }
    }
};
