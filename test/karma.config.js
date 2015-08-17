
module.exports = function (config) {

  config.set({
    browsers: ['Chrome'],

    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],

    reporters: ['progress', 'beep'],

    files: [
      { pattern: 'unit.webpack.loader.js', watched: true }
    ],

    preprocessors: {
      'unit.webpack.loader.js': [
        'webpack',
        'sourcemap'
      ]
    },

    webpack: {
      cache: true,
      watch: true,
      devtool: 'eval',

      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }
  });
};
