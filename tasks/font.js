const { src, dest } = require('gulp');

function font() {
  return src('src/vendor/fonts/**/*')
    .pipe(dest('build/fonts'))
}

module.exports = font;
