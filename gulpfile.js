const { src, dest } = require('gulp');
const svgmin = require('gulp-svgmin');
const rename = require('gulp-rename');

// Build icons
function buildIcons() {
  return src('nodes/**/*.svg')
    .pipe(svgmin())
    .pipe(rename({ extname: '.svg' }))
    .pipe(dest('dist/nodes/'));
}

exports.build = buildIcons;
exports['build:icons'] = buildIcons; 