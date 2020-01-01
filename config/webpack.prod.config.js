const paths = require("./paths");
const common = require("./webpack.common.config");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  output: {
    filename: "[name].[contenthash].js",
    path: paths.dist,
    publicPath: ""
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: "file-loader",
        options: {
          name: "[name][contenthash].[ext]",
          context: "src",
          outputPath: "images"
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: "url-loader",
        options: {
          limit: 8192,
          name: "[name][contenthash].[ext]",
          context: "src",
          outputPath: "fonts"
        }
      }
    ]
  },
  devtool: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/[name].[contenthash].css`
    })
  ]
});
