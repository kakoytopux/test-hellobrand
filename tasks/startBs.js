const { watch, parallel } = require('gulp');
const bs = require('browser-sync');

function startBs() {
  bs.init({
      server: 'build/',
      host: '192.168.1.34',
  });

  watch('src/**/*.html', parallel('html'));
  watch('src/**/*.scss', parallel('sass'));
  watch('src/**/*.js', parallel('js'));
}

module.exports = startBs;
