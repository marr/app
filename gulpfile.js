const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const rename = require('gulp-rename')
const source = require('vinyl-source-stream')

process.env.BROWSERIFYSHIM_DIAGNOSTICS = 1

gulp.task('default', build)

function build() {
  const bundler = browserify({
    debug: true,
    entries: ['./src/index.js'],
    paths: ['src']
  }).external([
    'react',
    'react-dom',
    'moment'
  ]).transform(babelify, {
    presets: [
      'es2015',
      'react'
    ]
  })

  return bundler.bundle()
    .pipe(source('index.js'))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('./'))
}
