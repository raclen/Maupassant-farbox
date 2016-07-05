console.log('begin ...');
var gulp = require('gulp');


/**
 * 需要使用什么插件当然要先引入它的模块啦
 */
var uglify = require('gulp-uglify'),
    concat= require('gulp-concat');//提示信息

gulp.task('buildjs', function() {
    return gulp.src(['js/yunlogo.js','js/rotate.js','js/jquery.pjax.js','js/app.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify({
            mangle: true, //类型：Boolean 默认：true 是否修改变量名
            compress: true //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(gulp.dest('js/dist/'));

});



/**
 *gulp 命令会执行defalut
 *我们只需要把要执行执行的函数都放在这个函数（或者事件，就像jquery的ready）里面
 *
 */
gulp.task('default', function () {
    console.log('common in default');
    gulp.run('buildjs');


})
console.log('end ...');//
