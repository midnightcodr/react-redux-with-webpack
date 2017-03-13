module.exports = {
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    devtool: 'source-maps', 
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    plugins: ['transform-class-properties'],
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}
