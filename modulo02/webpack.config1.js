module.exports = {
	entry: "./main1.js",
	output: {
		path: __dirname,
		filename: "bundle1.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
};
