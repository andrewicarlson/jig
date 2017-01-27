// Plugin includes
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pug = require('gulp-pug');

// Gulpfile paths
var base = {

    before: './app/src',
    after: './app/build'
};

var paths = {

    css: {

        before: base.before + '/scss/**/*.scss',
        after: base.after
    },
    fonts: {

        before: base.before + '/fonts/**/*',
        after: base.after + '/fonts'
    },
    images: {

        before: base.before + '/images/**/*',
        after: base.after + '/images'
    },
    html: {

        before: base.before + '/templates/**/*.pug',
        after: base.after
    },
    server: base.after
};

// Browsersync server that watches CSS, HTML and Images.
gulp.task('server', ['css', 'images'], function() {

    browserSync.init({

        server: paths.server
    });

    gulp.watch(paths.css.before, ['css']);
    gulp.watch(paths.fonts.before, ['fonts']);
    gulp.watch(paths.images.before, ['images']);
    gulp.watch(paths.html.before, ['html']);
    gulp.watch(paths.html.after + '/**/*.html', ['html']).on('change', browserSync.reload);
});

// CSS Preprocessing. Uses Sass to pre-process and pipes stream to Browsersync.
gulp.task('css', function() {

    return gulp.src(paths.css.before)
        .pipe(sass())
        .pipe(gulp.dest(paths.css.after))
        .pipe(browserSync.stream());
});

// HTML Preprocessing. Uses pug to pre-process and pipes stream to Browsersync.
gulp.task('html', function() {

    return gulp.src(paths.html.before) //checkout path array
        .pipe(pug())
        .pipe(gulp.dest(paths.html.after))
});

// Font pipe.
gulp.task('fonts', function() {

    return gulp.src(paths.fonts.before)
        .pipe(gulp.dest(paths.fonts.after))
});

// Image Preprocessing. Minifies images and pipes to destination. No need to send stream to Browsersync.
gulp.task('images', function() {

    return gulp.src(paths.images.before)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.after));
});

gulp.task('default', ['server']);
