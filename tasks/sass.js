const { src, dest } = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const bulk = require('gulp-sass-bulk-importer');
const autoPrefix = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const clean = require('gulp-clean-css');
const bs = require('browser-sync');

function sass() {
  return src('src/styles/*.scss')
    .pipe(bulk())
    .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', gulpSass.logError))
    .pipe(autoPrefix())
    .pipe(clean())
    .pipe(concat('main.css'))
    .pipe(dest('build'))
    .pipe(bs.stream());
}

module.exports = sass;
