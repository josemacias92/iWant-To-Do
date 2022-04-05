const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    printer: './src/js/printer.js',
    modelos: './src/js/modelos.js',
    viewmodel: './src/js/viewmodel.js',
    dialogos: './src/js/dialogos.js',
    weatherservice: './src/js/weatherservice.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'iWant To-Do App',
    }),
  ],
  watch: true,
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
     {
       test: /\.(woff|woff2|eot|ttf|otf)$/i,
       type: 'asset/resource',
     },
    ],
  },
};