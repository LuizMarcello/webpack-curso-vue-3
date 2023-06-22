const path = require("path");
/* Plugin do loader do webpack para trabalhar com o vue */
const { VueLoaderPlugin } = require("vue-loader");
/* Plugin que coloca em um arquivo separado todos os css´s criados nos componentes */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { fileURLToPath } = require("url");

/* Aqui é onde tudo vai acontecer */
module.exports = {
  /* Ponto de entrada */
  entry: "./src/main.js",
  /* Para onde será compilado, o ponto de saída(no caso, para a raíz do projeto) */
  output: {
    path:
      process.env.NODE_ENV == "development"
        ? __dirname
        : path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  /* Plugins utilizados */
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],

  /* Se for importar algum componente, e não colocar a extensão no nome
     do arquivo do componente, ele vai tentar estas daqui. */
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      vue: "vue/dist/vue.esm-bundler.js",
      //"@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  module: {
    /* Regras */
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      /* Regras do css */
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
