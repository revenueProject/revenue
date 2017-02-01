const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, './client');
const staticsPath = path.join(__dirname, './public');

module.exports = {
  devtool: 'eval',
  context: sourcePath,
  entry: {
    js: './app.js',
    vendor: ['react'],
  },
  output: {
    path: staticsPath,
    filename: '[name].bundle.js',
  },
  plugins: [
    new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js',
    }),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('development')},
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
      options: {
        postcss: [
          require('autoprefixer'),
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'css-loader',
          loader: 'css-loader',
        }),
        include: [
          path.join(__dirname, 'node_modules'),
          path.join(__dirname, 'client/style.css'),
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader',
        }),
        include: path.join(__dirname, 'client'),
        exclude: path.join(__dirname, 'client/style.css'),
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
};
