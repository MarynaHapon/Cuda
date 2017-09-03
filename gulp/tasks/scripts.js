module.exports = function() {
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(['node_modules/svg4everybody/dist/svg4everybody.min.js'])
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                           '!./dev/static/js/libs.min.js'])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    var uglify = require('gulp-uglifyjs');
    $.gulp.task('js:uglify', () => {
        return $.gulp.src('./build/static/js/main.js')
            .pipe(uglify())
            .pipe($.gulp.dest('./build/static/js/'))
    });

    var concat = require('gulp-concat');
    $.gulp.task('js:concat', () => {
        return $.gulp.src(['./build/static/js/jquery.js', './build/static/js/jquery.pagepiling.min.js', './build/static/js/progressbar.min.js', './build/static/js/main.js'])
            .pipe(concat('script.min.js'))
            .pipe($.gulp.dest('./build/static/js/'));
    });

};
