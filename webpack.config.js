const webpack = require("webpack");
const dotenv = require("dotenv");

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});
  return {
    entry: "./src/index.js",
    output: {
      path: __dirname + "/dist",
      publicPath: "/",
      filename: "bundle.js",
    },
    devServer: {
      contentBase: "./",
      publicPath: "/dist/",
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};
