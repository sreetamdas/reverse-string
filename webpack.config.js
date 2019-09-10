const path = require("path");

module.exports = {
	entry: {
		bundle: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		libraryTarget: "umd",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader",
			},
		],
	},
};
