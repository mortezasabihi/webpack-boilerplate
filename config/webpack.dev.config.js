const paths = require("./paths");
const common = require("./webpack.common.config");
const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = merge(common, {
  output: {
    filename: "[name].bundle.js",
    path: paths.dist,
    publicPath: "/"
  },
  mode: "development",
  devServer: {
    contentBase: paths.dist,
    port: 8080,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          context: "src"
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "[path][name].[ext]",
          context: "src"
        }
      }
    ]
  },
  devtool: "eval-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
