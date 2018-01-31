const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HappyPack = require('happypack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    entry: ['react-hot-loader/patch', './src/index.tsx' ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'dist/bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json' ]
    },
    module: {
        rules: [
            { test: /\.(tsx|ts)?$/, loader: 'happypack/loader?id=ts', exclude: /(node_modules|bower_components|test)/ },
            {
                // Capture eot, ttf, woff, and woff2
                test: /\.(eot|ttf|woff|woff2|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                // Capture eot, ttf, woff, and woff2
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            }
        ]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new ProgressBarPlugin(),
        new HappyPack({
            id: 'ts',
            threads: 2,
            loaders: [
                {
                    path: 'ts-loader',
                    query: { happyPackMode: true }
                }
            ]
        }),
        new ForkTsCheckerWebpackPlugin({ checkSyntacticErrors: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        hot: true
    }
};
