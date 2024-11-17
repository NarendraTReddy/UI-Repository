// webpack.config.js
module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(react-i18next)\/).*/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };
  