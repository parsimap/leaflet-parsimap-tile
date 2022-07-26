import { Configuration } from 'webpack'
import { externals, resolveAlias } from './webpack.util'
import webpack = require('webpack')

const configuration: Configuration = {
  mode: 'production',
  output: {
    globalObject: 'L',
    libraryTarget: 'umd',
    filename: process.env.OUTPUT_FILENAME,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: resolveAlias(),
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: externals(),
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
