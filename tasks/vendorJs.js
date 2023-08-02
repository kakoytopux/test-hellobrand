const { src, dest } = require('gulp');

function vendorJs() {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.js',
    'node_modules/swiper/swiper-bundle.min.js.map',
  ];

  return src(modules)
    .pipe(dest('build/js'))
}

module.exports = vendorJs;
