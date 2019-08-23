var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const OUTPUT_PATH = path.resolve(__dirname, 'lib');
const ENTRY_POINT = path.resolve(__dirname, 'src/index.js');
const HTML_TEMPLATE_PATH = path.join(__dirname, "public/index.html")
const BUNDLE_NAME = 'bundle.js'

module.exports = {
    entry: ENTRY_POINT,
    output: {
        path: OUTPUT_PATH,
        filename: BUNDLE_NAME
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: HTML_TEMPLATE_PATH,
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        contentBase: OUTPUT_PATH,
        port: 8000,
        stats: "minimal"
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
