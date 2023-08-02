const { src, dest } = require('gulp');
const jsMin = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const concat = require('gulp-concat');

function js() {
  return src('src/**/*.js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(jsMin())
    .pipe(dest('build'))
}

module.exports = js;
