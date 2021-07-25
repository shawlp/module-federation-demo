const path = require("path");
const Mfp = require("webpack").container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("@babel/preset-react")]
        }
      }
    ]
  },
  devServer: {
    port: 3001,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new Mfp({
      filename: "remoteEntry.js",
      name: "application_a",
      exposes: {
        "./SayHelloFromA": "./src/app_a.js"
      },
      remotes: {
        application_b: "application_b@http://localhost:3002/remoteEntry.js"
      },
      shared: ["react", "react-dom"]
    })
  ]
};
