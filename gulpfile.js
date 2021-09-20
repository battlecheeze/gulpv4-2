const    gulp = require('gulp'),
         autoprefixer = require('gulp-autoprefixer'),
         browserSync = require('browser-sync').create(),
         typescript = require('gulp-typescript'),
         gulpWebpack = require('webpack-stream'),
         sass = require('gulp-sass'),
         cleanCSS = require('gulp-clean-css'),
         sourcemaps = require('gulp-sourcemaps'),
         babel = require('gulp-babel'),
         concat = require('gulp-concat'),
         rename = require('gulp-rename'),
         imagemin = require('gulp-imagemin'),
         changed = require('gulp-changed'),
         uglify = require('gulp-uglify'),
         htmlmin = require('gulp-htmlmin'),
         del = require('del'),
         lineec = require('gulp-line-ending-corrector');

// file watch, destination and distribution

const    // source
         mapURL = './',
         globDir = "**/*",
         sassWatch = "src/sass/" + globDir + ".scss",
         htmlWatch = "src/html/" + globDir + ".html",
         tsWatch = "src/ts/" + globDir+ ".ts",
         jsWatch = "src/js/" + globDir +".js",
         imgWatch = "src/img/" + globDir ,
         // destination
         cssDest = "src/css/",
         jsDest = "src/js/",
         htmlDest = "src/html/",
         imgDest = "src/img/",
         // distribution
         imageDist = 'dist/images/'
         cssDist = "dist/css/",
         htmlDist = "dist/html/",
         jsDist = "dist/js/",
         // archive
         imgArchive = "!src/img/archive/*",
         tsArchive = "!src/ts/archive/*.ts",
         jsArchive = "!src/js/archive/*.js",
         htmlArchive = "!src/html/archive/*.html",
         sassArchive = "!src/sass/archive/*.scss";


// compile scss into css
function editorCSS() {
   return gulp.src(sassWatch)
   .pipe(sass.sync({
      outputStyle: 'expanded'
   }).on('error', sass.logError))
   .pipe(autoprefixer('last 2 versions'))
   .pipe(gulp.dest(cssDest))
   .pipe(browserSync.stream());
}

function outputCSS() {
   return gulp.src(sassWatch)
   .pipe( sourcemaps.init() )
   .pipe(sass({
      outputStyle: 'compressed'
   }).on('error', sass.logError))
   .pipe(autoprefixer('last 2 versions'))
   .pipe(rename ( { suffix: '.min'}))
   .pipe( sourcemaps.write( mapURL ))
   .pipe(gulp.dest(cssDist))
}

function editorTS() {
   return gulp.src(tsWatch)
   .pipe(typescript({
      target: 'ES6',
      module: 'ES2015',
      strict: true,
      noImplicitAny: true,
      //outFile: 'output.js'
   }))
   .pipe(gulp.dest(jsDest));
}

function outputJS() {
   return gulp.src(jsWatch)
   .pipe( sourcemaps.init({ loadMaps: true }) )
   .pipe(babel())
   .pipe(uglify())
   .pipe( rename( { extname: '.min.js' }))
   .pipe( sourcemaps.write( '.') )
   .pipe(gulp.dest(jsDist));
}

function outputHTML() {
   return gulp.src(htmlWatch)
   .pipe(htmlmin({ collapseWhitespace: true }))
   .pipe(gulp.dest(htmlDist));
}

function imgmin() {
    return gulp.src(imgWatch)
    .pipe(imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ progressive: true }),
        imagemin.svgo({ 
            plugins: [
               {
                  removeViewBox: true
               }
            ]
        }),
        imagemin.optipng({ optimizationLevel: 5 })
    ]))
    .pipe(gulp.dest(imgDest));
}

function clean() {
   return del([
      htmlDist + globDir,
      jsDist + globDir,
      cssDist + globDir,
      imageDist + globDir
   ]);
}

function browserSYNC(done) {
   browserSync.init({
      server:{
         baseDir: 'src',
         index: '/html/index.html',
      },
      browser: '/opt/firefox-developer/firefox/firefox'
   });
   done();
}

function watchFiles() {
   gulp.watch(sassWatch, editorCSS);
   gulp.watch(htmlWatch).on('change', browserSync.reload);
   gulp.watch(tsWatch, editorTS);
   gulp.watch(imgWatch, imgmin);
   gulp.watch(jsWatch).on('change', browserSync.reload);
}

//function watchFiles() {
//  gulp.watch('./src/sass/**/*.scss', editorCSS);
//   gulp.watch('./src/html/**/*.html').on('change', browserSync.reload);
//   gulp.watch('./src/ts/**/*.ts', editorTS);
//   gulp.watch('./src/js/**/*.js').on('change', browserSync.reload);
//}


exports.editorCSS = editorCSS;
exports.outputCSS = outputCSS;
exports.editorTS = editorTS;
exports.outputHTML = outputHTML;
exports.outputJS = outputJS;
exports.browserSYNC = browserSYNC;
exports.watchFiles = watchFiles;
exports.clean = clean;
exports.build = gulp.parallel(gulp.series(clean, imgmin, outputHTML, outputCSS, outputJS), browserSYNC, watchFiles);
exports.default = gulp.parallel(browserSYNC, watchFiles);
//gulp.task("editorCSS", editorCSS);
//gulp.task("outputCSS", outputCSS);
//gulp.task("editorTS", editorTS);
//gulp.task("outputJS", outputJS);
//gulp.task("build", gulp.series(outputHTML, outputCSS, outputJS));
//gulp.task("watch", gulp.parallel(watchFiles, browserSYNC));
