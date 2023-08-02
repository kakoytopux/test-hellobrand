const { src, dest } = require('gulp');
const htmlMin = require('gulp-htmlmin');
const replace = require('gulp-replace');

function html() {
  return src('src/**/*.html')
    .pipe(replace('<!-- inject:css -->', `
    <link rel="stylesheet" href="./css/swiper-bundle.min.css">
    <link rel="stylesheet" href="./main.css">
    `))
    .pipe(replace('<!-- inject:js -->', `
    <script src="./js/swiper-bundle.min.js" defer></script>
    <script src="./main.js" defer></script>
    `))
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(dest('build'))
}

module.exports = html;
