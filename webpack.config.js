const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// There are four key concepts in web pack 
// i.e entry, output, loader and plugin 
// we will use all the four key concepts here

module.exports = {
	// Our entry module which will be used by the webpack
	// to build out its internal dependency graph
	entry: "./src/application/index.ts"
	
	
	// Webpack will use this path to store the emited files
	, output: {
		filename: "main.js",
		path: path.resolve(__dirname, 'dest')
	}
	
	
	// Set some loader to transform the source code modules
	, module: {
		rules: [
			// Add ts loader
			{ test: /\.ts$/, use: 'ts-loader' }
		]
	}
	
	
	// We are adding HtmlWebpackPlugin plugin which will have 
	// an access to the entire compilation lifecycle to 
	// its apply property/method
	, plugins: [

		// This will create a html from given template to serve
		// the webpack bundles 
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
		
		
		, new webpack.NamedModulesPlugin()
		, new webpack.HotModuleReplacementPlugin()
	]
	
	// Lets set the development server
	// For this you need to install `webpack-dev-server`
	// to run it use `npx webpack-dev-server` command 
    , devServer: {
		// Lets Serve our build dir `dest`
		contentBase: './dest',
		
		// Turn on Hot Module replacement
		hot: true
    }
}