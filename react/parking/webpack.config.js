const webpack = require('webpack');
const path = require('path');

module.exports = {
   entry: './src/server/server.js',
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "server.js",
      publicPath: '/'
   },
   target: 'node',
   module: {
       rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         }
      ]
   }
}
