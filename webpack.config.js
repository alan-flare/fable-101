const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  mode: 'none',
  entry: './src/App.fsproj',
  devServer: {
    contentBase: path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.fs(x|proj)?$/,
        use: 'fable-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.template.html'),
    }),
  ],
};
