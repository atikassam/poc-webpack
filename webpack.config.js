const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

// There are four key concepts in webpack 
// i.e entry, output, loader and plugin 
// we will try to use all the four key concepts here

module.exports = {
	// Entry section
	// Our entry module which will be used by the webpack
	// to build out its internal dependency graph
	entry: "./src/application/index.ts"
	
	
	// Output section
	// Webpack will use this path to store the emited files
	, output: {
		filename: "main.js",
		path: path.resolve(__dirname, 'dest')
	}
	
	
	// Loader section
	// Set some loader to transform the source code modules
	, module: {
		rules: [
			// Add ts loader
			{ test: /\.ts$/, use: 'ts-loader' }
		]
	}
	
	// Plugin section
	// We can add a plugin(instance of a class) here which will have 
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
	// And to run it use `npx webpack-dev-server` command 
    , devServer: {
		// Lets Serve our build directory `dest`
		contentBase: './dest',
		
		// Turn on Hot Module replacement 
		hot: true
    }
}