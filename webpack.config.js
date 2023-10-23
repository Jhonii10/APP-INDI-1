// webpack.config.js

module.exports = {
  // ...
  optimization: {
    splitChunks: {
      maxSize: 10000000, // 10 MB
    },
  },
};