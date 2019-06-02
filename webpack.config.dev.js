const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devtool: 'inline-source-map',
    target: 'web',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?noInfo=true?reload=true?path=//localhost:3000/__webpack_hmr',
        path.resolve(__dirname, './src/index.js')
    ],
    output: {
        path: path.resolve(__dirname, '.tmp'),
        filename: 'app.js',
        publicPath: '/'
    },
    devServer: {
        contentBase: './src',
        hot: true
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.ejs'),
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        })
    ],
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: ['babel-loader']
        },
        {
            test: /\.eot(\?v=\d+.\d+.\d+)?$/,
            use: ['file-loader']
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/font-woff'
                }
            }]
        },
        {
            test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'application/octet-stream'
                }
            }]
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    mimetype: 'image/svg+xml'
                }
            }]
        },
        {
            test: /\.(jpe?g|png|gif|ico)$/i,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }]
        },
        {
            test: /(\.css|\.scss|\.sass)$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('autoprefixer')
                        ],
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [path.resolve(__dirname, 'src', '/assets/scss')],
                        sourceMap: true
                    }
                }
            ]
        },
        { test: /\.html/, loader: 'file?name=[name].[ext]' }
        ]
    }
}