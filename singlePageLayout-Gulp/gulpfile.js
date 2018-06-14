const gulp = require("gulp");
const gutil = require("gulp-util");
const coffee = require("gulp-coffee");
const concat = require("gulp-concat");

// gulp.task('log', () => {
//     gutil.log('Workflows are working just fine!'); //in CMD run: gulp log
// });

const coffeeSources = ['components/coffee/tagline.coffee'];
const jsSources = [
                    'components/scripts/rightClick.js',
                    'components/scripts/pixgrid.js',
                    'components/scripts/tagline.js',
                    'components/scripts/template.js',
                  ]

gulp.task('coffee', ()=> {
    gulp.src(coffeeSources)
        .pipe(coffee({ bare: true })          //bare:true -> it compiles to JavaScript without putting it in a safety wrapper like it normally would.
            .on('error', gutil.log))
                .pipe(gulp.dest('components/scripts')) //gulp destination -> this would mean where we want to send the file to once this process is done.
}); //in CMD type: gulp coffee


gulp.task('js', ()=> {
    gulp.src(jsSources)
        .pipe(concat('script.js'))
            .pipe(gulp.dest('builds/dev/js')) //Create a new file called script.js -> check builds/dev/js/script.js
}); //in CMD type: gulp js