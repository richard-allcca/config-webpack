const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // =====================
  //?  VARIOS puntos de entrada y salida 
  // =====================
  entry: {
    js: "./src/index.js",
    react: "./src/index_react.js",
    ts: "./src/index_ts.js"
  },
  output: {
    filename: "[name].[chunkhash].js"
  },

  // =====================
  //?  reglas loader y plugin
  // =====================
  module: {
    rules: [
      // =====================
      //? loader o regla para javascript
      // =====================
      {
        test: /\.(js|jsx)$/i,// all los archivos js  
        exclude: /node_modules/,
        use: { // cual es el loader que vamos a usar
          loader: "babel-loader"
        }
      },
      // =====================
      //? loader o regla para typescript
      // =====================
      {
        test: /\.tsx?$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // =====================
      //? loader o regla para html
      // =====================
      {
        test: /\.html$/i,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      // =====================
      //? loader o regla para css
      // =====================
      {
        test: /\.css$/i,
        // use: [ // este USE no indica donde se agregaran los llamados con url()
        //   MiniCssExtractPlugin.loader,
        //   "css-loader" // este loader siempre al final
        // ],
        use: [// este USE es indica donde te ubicara los archivos llamados con url() 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./"
            }
          },
          "css-loader" // este loader siempre al final
        ]
      },
      // =====================
      //? loader o regla para imagenes
      // =====================
      {
        // type: "asset", //? usa esto si quieres imagenes com url en tu proyecto
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ["file-loader?name=assets/[name].[ext]", "image-webpack-loader"]
      },
      // =====================
      //? loader o regla para tipos de texto
      // =====================
      {
        test: /\.(woff|ttf)$/i,
        use: ["file-loader?name=assets/[name].[ext]"]// toma el name y la extensión de forma dinamica en los []
      }
    ]
  },
  // ==========================================
  //? configuración para plugins
  // ==========================================
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: "./src/index.html",//? ruta donde esta el archivo base
  //     filename: "./index.html"//? el nombre del archivo que se creara en la distrbución
  //   }),
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",//? archivo base
      filename: "./index.html",//? salida en  dist
      chunks: ["js"],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",//? archivo base
      filename: "./react.html",//? salida en  dist
      chunks: ["react"],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",//? archivo base
      filename: "./ts.html",//? salida en  dist
      chunks: ["ts"],
      hash: true
    }),
    new MiniCssExtractPlugin(),
  ]
}