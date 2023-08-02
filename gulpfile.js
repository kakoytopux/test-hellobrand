const { parallel } = require('gulp');
const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.default = parallel(
  exports.html = tasks.html,
  exports.js = tasks.js,
  exports.vendorJs = tasks.vendorJs,
  exports.sass = tasks.sass,
  exports.vendorCss = tasks.vendorCss,
  exports.image = tasks.image,
  exports.font = tasks.font,
);

exports.startBs = tasks.startBs;
