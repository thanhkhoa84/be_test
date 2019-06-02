const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devtool: 'source-map',
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        publicPath: '/',
        filename: 'assets/js/app.js',
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.ejs'),
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css'
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
                    name: 'assets/images/[name].[ext]'
                }
            }]
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [
                            require('cssnano'),
                            require('autoprefixer'),
                        ],
                        sourceMap: true
                    }
                }, {
                    loader: 'sass-loader',
                    options: {
                        includePaths: [path.resolve(__dirname, 'src', 'scss')],
                        sourceMap: true
                    }
                }
            ]
        }
        ]
    }
}