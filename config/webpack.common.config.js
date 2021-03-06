const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  entry: paths.src + "/index.js",
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack 4 boilerplate",
      description: "a simple webpack 4 boilerplate",
      filename: "index.html",
      template: `${paths.src}/index.html`
    }),
    new StylelintPlugin({
      configFile: ".stylelintrc",
      context: "src",
      files: "**/*.s?(a|c)ss",
      failOnError: true,
      emitErrors: true
    })
  ]
};
