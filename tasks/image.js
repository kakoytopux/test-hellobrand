const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

function image() {
  return src('src/images/**/*')
		.pipe(imagemin())
		.pipe(dest('build/images'))
}

module.exports = image;
