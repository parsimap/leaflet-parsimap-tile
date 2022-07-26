import { Configuration } from 'webpack'
import * as path from 'path'
import { externals, resolveAlias } from './webpack.util'
import webpack = require('webpack')

const configuration: Configuration = {
  mode: 'development',
  output: {
    globalObject: 'L',
    libraryTarget: 'umd',
    filename: process.env.OUTPUT_FILENAME,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: externals(),
  devtool: 'inline-source-map',
  devServer: {
    port: 8090,
    injectHot: true,
    injectClient: true,
    contentBase: [path.resolve('public')],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_API_URL': JSON.stringify(process.env.BASE_API_URL),
      'process.env.TOKEN_REGISTRATION_URL': JSON.stringify(
        process.env.TOKEN_REGISTRATION_URL,
      ),
    }),
  ],
}

// noinspection JSUnusedGlobalSymbols
export default configuration
