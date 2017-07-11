module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true,
        port: 3000
    },
    module: {
        loaders: [{
            test: /\.coffee$/,
            loader: 'coffee-loader'

        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.json$/,
            loader: "json-loader"
        },{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015','react']
            }
        }]
    }
};
