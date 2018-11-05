const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : {
        app : ['./app/js/viewport.js','./app/js/main.js']
    },
    module: {
        loaders: [
            {
                test : /\.html$/,
                loader : 'html-loader'
            },
            {
                test : /\.scss$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                })
            },
            {
                test : /\.css$/,
                use : ExtractTextPlugin.extract({
                    fallback : 'style-loader',
                    use : 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8'
                })
            },
            {
                test : /\.vue$/,
                loader : 'vue-loader',
                options : {
                    cssModules : {
                        localIdentName : '[path][name]---[local]---[hash:base64:5]',
                        camelCase : true
                    },
                    extractCss : true,
                    loaders : {
                        css : ExtractTextPlugin.extract({use : 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8', fallback: 'vue-style-loader'}),
                        scss :ExtractTextPlugin.extract({use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader', fallback: 'vue-style-loader'})
                    }
                }
            },
            {
                test : /\.(eot|woff2|woff|ttf|svg)$/,
                use: {
                    loader :'file-loader',
                    options : {
                        outputPath : 'font/',
                        publicPath : '/font'
                    }
                }
            },
            {
                test : /\.(png|jpg|jpeg|gif)$/,
                use : [
                    {
                        loader :'url-loader',
                        options :{
                            limit : 1000,
                            outputPath : 'img/',
                            publicPath : '/img'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/views/index.html',
        }),
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin("style.min.css",{ignoreOrder: true})

    ],
    resolve: {
        extensions: [
            '.js', '.vue', '.json'
        ],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    output: {
        filename: "[name].min.js",
        path: path.resolve(__dirname,'dist')
    }
};