const { src, dest } = require('gulp');

function vendorCss() {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.css',
  ];

  return src(modules)
    .pipe(dest('build/css'))
}

module.exports = vendorCss;
