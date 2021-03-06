const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(), new TerserPlugin()
        ]
    }
});