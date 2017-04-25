
var webpack = require('webpack');

module.exports = function () {
  return {
    entry: './src/index.js',
    output: {
      filename: './dist/slaerfx.min.js',
      library: 'slaer'
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require("../package.json").version)
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          //keep_fnames: true
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          unused: false,
          drop_console: true
        },
        comments: false
      })
    ]
  };
};
