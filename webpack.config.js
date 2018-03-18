
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});

module.exports = {
  entry:['./src/index.js'],
  output:{
    // Output path has to absolure path , will not work with relative path
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: '/dist'
  },
  module:{
    rules: [
      { 
        test: /\.js$/, 
        use:  [
          {
          loader:"babel-loader",
          options: {
            presets: ["es2015", "react"]
          }
        }
        ]
      },
      {
        test: /\.css/,
        use: extractPlugin.extract({
          use:['css-loader']
            })
        },
        {
          test:/.html$/,
          use:['html-loader']
        },
        {
          test: /.(jpeg|png|svg)$/,
          use:[{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputpath:'dist'
            }
          }]
        }
    ]
  },
  plugins: [
    extractPlugin
]
};
