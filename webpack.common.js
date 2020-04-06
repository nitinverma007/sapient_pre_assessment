const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require('stylelint-webpack-plugin');
module.exports = {
	entry: './src/js/index.js',
	module: {
		rules: [
			{
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                },
            }
		]
	},
	plugins: [
		new StylelintPlugin({
			options: {                
                configFile: '.stylelintrc',
                context: 'src',
                files: '**/*.s?(a|c)ss',
                failOnError: false,
                quiet: false,
                emitErrors: true,
                emitWarning: true,
                fix: true
            }
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		}),
		new CleanWebpackPlugin()
	]
};