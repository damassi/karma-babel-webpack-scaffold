
module.exports = function (config) {

  config.set({
    browsers: ['Chrome'],

    frameworks: [
      'jasmine',
      'jasmine-matchers'
    ],

    reporters: ['progress', 'beep'],

    files: [
      { pattern: 'karma.webpack.tests.js', watched: true }
    ],

    preprocessors: {
      'karma.webpack.tests.js': [
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
