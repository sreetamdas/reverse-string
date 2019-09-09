const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		bundle: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	// plugins: [new HtmlWebpackPlugin()],
	module: {
		rules: [
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				use: "eslint-loader",
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
