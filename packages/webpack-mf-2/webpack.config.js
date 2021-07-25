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
    port: 3002,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new Mfp({
      filename: "remoteEntry.js",
      // library: { type: "var", name: "application_b" },
      name: "application_b",
      exposes: {
        "./SayHelloFromB": "./src/app_b.js"
      },
      remotes: {
        application_a: "application_a@http://localhost:3001/remoteEntry.js"
      },
      shared: ["react", "react-dom"]
    })
  ]
};
