var webpack=require('webpack');
var ExTxtPlugin=require('extract-text-webpack-plugin');

module.exports={
	entry:'./js/main.jsx',
	output:{
		path:'dist/js/',
		filename:'[name].js',
		publicPath:'dist/js/'
	},
	module:{
		loaders:[
			{ test:/\.jsx$/,loader:'jsx-loader' },
			{ test:/\.js$/,loader:'jsx-loader' },
			{ test:/\.css$/,loader:ExTxtPlugin.extract('style-loader','css-loader') },
			{ test:/\.scss$/,loader:ExTxtPlugin.extract('style-loader','css-loader') }
		
		]
	},
	plugins:[
		new ExTxtPlugin('../css/index.css')
	]
}