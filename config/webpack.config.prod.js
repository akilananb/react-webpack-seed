const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HappyPack = require('happypack');
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
    entry: ['./src/index.tsx' ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: '../dist/bundle.js'
    },
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.json' ]
    },
    module: {
        rules: [
          {
            test: /\.(tsx|ts)?$/,
            loaders: [
              'react-hot-loader/webpack',
              'cache-loader',
              'awesome-typescript-loader'
            ],
            exclude: /(node_modules|bower_components|test)/
          },
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
        new CheckerPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          uglifyOptions: {
            ie8: false,
            ecma: 8,
            output: {
              comments: false,
              beautify: false
            },
            compress: true,
            warnings: false
          }
        })
    ]
};
