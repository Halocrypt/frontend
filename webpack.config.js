const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HTMLInlineCSSWebpackPlugin =
  require("html-inline-css-webpack-plugin").default;
const webpack = require("webpack");
const {
  HtmlWebpackEsmodulesPlugin,
  FontInlineWebpackPlugin,
} = require("@hydrophobefireman/module-nomodule");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const {autoPrefixCSS} = require("catom/dist/css");
const babel = require("./.babelconfig");
const uiConfig = require("./ui.config.json");
const mode = process.env.NODE_ENV;
const isProd = mode === "production";
const {outputDir, staticFilePrefix, inlineCSS, enableCatom, fonts} = uiConfig;
const path = require("path");
const science = require("./inject/science");

require("dotenv").config();

function prodOrDev(a, b) {
  return isProd ? a : b;
}

function srcPath(subdir) {
  return path.join(__dirname, subdir);
}

const jsLoaderOptions = (isLegacy) => ({
  test: /\.(m?js|tsx?)$/,
  exclude: /(node_modules\/(?!(@hydrophobefireman|statedrive)))|(injectables)/,
  use: {
    loader: "babel-loader",
    options: babel.env[isLegacy ? "legacy" : "modern"],
  },
});
const cssLoaderOptions = {
  test: /\.css$/,
  use: [
    {loader: MiniCssExtractPlugin.loader},
    {
      loader: "css-loader",
    },
  ],
};
const contentLoaderOptions = {
  test: /\.(png|jpg|gif|ico|svg)$/,
  use: uiConfig.preferBase64Images
    ? [{loader: "url-loader", options: {fallback: "file-loader"}}]
    : [{loader: "file-loader"}],
};

function getEnvObject(isLegacy) {
  const prod = !isLegacy;
  return {
    arrowFunction: prod,
    const: prod,
    destructuring: prod,
    forOf: prod,
    dynamicImport: prod,
    module: prod,
  };
}
/**
 * @returns  {import("webpack").Configuration}
 */
function getCfg(isLegacy) {
  return {
    cache: enableCatom
      ? {type: "memory"}
      : {
          type: "filesystem",
          buildDependencies: {
            config: [__filename],
          },
        },
    devServer: {
      static: {
        directory: path.join(__dirname, uiConfig.staticDir),
      },
      compress: true,
      port: 4200,
      historyApiFallback: true,
    },
    module: {
      rules: [
        jsLoaderOptions(isLegacy),
        cssLoaderOptions,
        contentLoaderOptions,
      ],
    },
    entry: path.join(__dirname, "/src/App.tsx"),
    output: {
      publicPath: "/",
      environment: getEnvObject(isLegacy),
      path: `${__dirname}/${outputDir}/`,
      filename: `${staticFilePrefix}/${
        isLegacy ? "legacy" : "es6"
      }/[name]-[contenthash].js`,
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {"@": srcPath("src"), "@kit": "@hydrophobefireman/kit"},
    },
    mode,
    optimization: {
      concatenateModules: false,
      minimizer: prodOrDev(
        [
          new TerserWebpackPlugin({parallel: true}),
          new CssMinimizerPlugin({
            minify: CssMinimizerPlugin.lightningCssMinify,
            parallel: Math.floor(require("os").cpus()?.length / 2) || 1,
          }),
        ],
        [],
      ),
      splitChunks: {
        chunks: "all",
      },
      runtimeChunk: "single",
      realContentHash: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateParameters: async function templateParametersGenerator(
          compilation,
          files,
          tags,
          options,
        ) {
          let css = uiConfig.enableCatom
            ? `<style>
                ${await autoPrefixCSS()}
               </style>
          `
            : "";
          return {
            compilation,
            webpackConfig: compilation.options,
            htmlWebpackPlugin: {
              tags,
              files,
              options: Object.assign(options, {
                css,
                script: await science.script(),
              }),
            },
          };
        },
        inject: "body",
        template: `${__dirname}/index.html`,
        xhtml: true,
        favicon: "./favicon.ico",
        minify: prodOrDev(
          {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            html5: true,
            minifyCSS: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeComments: true,
          },
          !1,
        ),
      }),
      new MiniCssExtractPlugin({
        filename: `${staticFilePrefix}/main-[contenthash].css`,
      }),
      isProd && inlineCSS && new HTMLInlineCSSWebpackPlugin({}),
      new HtmlWebpackEsmodulesPlugin({
        mode: isLegacy ? "legacy" : "modern",
      }),
      new FontInlineWebpackPlugin({fonts}),
      new webpack.EnvironmentPlugin({
        NODE_ENV: process.env.NODE_ENV,
        IS_INTRA: "",
      }),
    ].filter(Boolean),
  };
}

module.exports = getCfg(false);
