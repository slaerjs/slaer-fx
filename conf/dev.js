
var webpack = require('webpack');

module.exports = function () {
  return {
    entry: './src/index.js',
    output: {
      filename: './dist/slaerfx.js',
      library: 'slaer'
    },
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(require("../package.json").version)
      })
    ]
  };
};
