const gulp = require("gulp");
const gutil = require("gulp-util");
const coffee = require("gulp-coffee");

// gulp.task('log', () => {
//     gutil.log('Workflows are working just fine!'); //in CMD run: gulp log
// });



gulp.task('coffee', ()=> {
    gulp.src('components/coffee/tagline.coffee')
        .pipe(coffee({ bare: true })          //bare:true -> it compiles to JavaScript without putting it in a safety wrapper like it normally would.
            .on('error', gutil.log))
                .pipe(gulp.dest('components/scripts')) //gulp destination -> this would mean where we want to send the file to once this process is done.
}); //in CMD type: gulp coffee