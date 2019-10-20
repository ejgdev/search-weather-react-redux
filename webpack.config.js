const DotenvPlugin = require('webpack-dotenv-plugin');

const port = process.env.PORT || 3000;
module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react'],
          plugins: ['@babel/proposal-class-properties'],
        },
      },
    ],
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    https: false,
    port,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
};
