// // 获取 gulp
var gulp = require('gulp');
// // 获取 uglify 模块（用于压缩 JS）
// var uglify = require('gulp-uglify');
// // 获取 cleancss 模块（用于压缩 CSS）
 var cleanCSS = require('gulp-clean-css');
 var rename = require("gulp-rename");
// // 压缩 js 文件
// // 在命令行使用 gulp jscompress 启动此任务
// gulp.task('jscompress', function() {
//     // 1. 找到文件
//    return gulp.src('js/HomePage.js')
//        .pipe(rename({suffix: '.min'}))
//     // 2. 压缩文件
//         .pipe(uglify())
//         // 3. 另存压缩后的文件
//         .pipe(gulp.dest('js'));
// });
// 压缩 css 文件
// 在命令行使用 gulp csscompress 启动此任务
gulp.task('csscompress', function() {
    // 1. 找到文件
   return gulp.src('css/HomePage.css')
        .pipe(rename({suffix: '.min'}))
    // 2. 压缩文件
        .pipe(cleanCSS())
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('css'));
});
// // 在命令行使用 gulp auto 启动此任务
// gulp.task('auto', function () {
//     // 监听文件修改，当文件被修改则执行 script 任务
//     gulp.watch('js/HomePage.js', ['jscompress']);
//     gulp.watch('css/HomePage.css', ['csscompress']);
// });
// // 使用 gulp.task('default') 定义默认任务
// // 在命令行使用 gulp 启动 script 任务和 auto 任务
// gulp.task('default', ['auto']);

// //引入依赖
// var gulp = require("gulp");
// //引入插件
// var imagemin = require('gulp-imagemin'); //压缩图片
// //配置任务

//  gulp.task('imagemin', function() {
//     gulp.src('img/*.{jpg,png,gif}') 
//         .pipe(imagemin())
// 　　　　　　　　//压缩后放在那个文件夹
//         .pipe(gulp.dest("img"))
// });

// //注册默认任务
// //gulp.task('default', ['imagemin']);

// //引入依赖
// var gulp = require("gulp");
// //引入插件

// var htmlmin = require('gulp-htmlmin'); //压缩html

//  gulp.task('htmlmin', function() {
//     var options = {
//         removeComments: true, //清除HTML注释
//         collapseWhitespace: true, //压缩HTML
//         minfyJS: true,//压缩JS
//         minfyCss: true,//压缩CSS
//     };
//     gulp.src('index.html')
// 　　　　　　　//压缩html
//         .pipe(htmlmin(options))
//         //压缩后的名字44         .pipe(gulp.dest('htmlmin'))
// });

// //注册默认任务
// gulp.task('default', ['htmlmin']);

// var gulp=require('gulp');
// var revReplace=require('gulp-rev-replace');/*更新引用*/
// var useref=require('gulp-useref');/*合并文件*/
// var filter=require('gulp-filter');/*过滤器：筛选，恢复*/
// var uglify=require('gulp-uglify');/*压缩js*/
// var csso=require('gulp-csso');/*压缩css*/
// gulp.task('task-name',function(){
// var jsFilter=filter('js/*.js',{restore:true});
// var cssFilter=filter('css/*.css',{restore:true});
// var indexHtmlFilter=filter(['index.html'],{restore:true});

// return gulp.src('index.html')/*需要处理的文件*/
// .pipe(indexHtmlFilter)/*筛选html文件*/
// .pipe(indexHtmlFilter.restore)/*放回流里*/
// .pipe(revReplace())/*更新index引用*/
// .pipe(gulp.dest('dist'));/*文件流放到dist目录下*/
// });
// gulp.task('task-js',function(){
    
// var jsFilter=filter('css/*.js',{restore:true});
// var cssFilter=filter('js/*.css',{restore:true});
// var indexHtmlFilter=filter(['index.html'],{restore:true});
// return gulp.src(['js/*'])/*需要处理的文件*/
// .pipe(useref())/*处理注释压缩*/
// .pipe(jsFilter)/*筛选js文件*/
// .pipe(jsFilter.restore)/*放回流里*/
// .pipe(revReplace())/*更新index引用*/
// .pipe(gulp.dest('dist/js'));/*文件流放到dist目录下*/
// });
// gulp.task('task-js',function(){
    
// var jsFilter=filter('css/*.js',{restore:true});
// var cssFilter=filter('js/*.css',{restore:true});
// var indexHtmlFilter=filter(['index.html'],{restore:true});
// return gulp.src(['img/*'])/*需要处理的文件*/
// .pipe(useref())/*处理注释压缩*/
// .pipe(cssFilter)/*筛选js文件*/
// .pipe(cssFilter.restore)/*放回流里*/
// .pipe(revReplace())/*更新index引用*/
// .pipe(gulp.dest('dist/js'));/*文件流放到dist目录下*/
// });
// gulp.task('task-css',function(){
    
// var jsFilter=filter('css/*.js',{restore:true});
// var cssFilter=filter('js/*.css',{restore:true});
// var indexHtmlFilter=filter(['index.html'],{restore:true});
// return gulp.src(['css/*','img/*'])/*需要处理的文件*/
// .pipe(useref())/*处理注释压缩*/
// .pipe(jsFilter)/*筛选js文件*/
// .pipe(jsFilter.restore)/*放回流里*/
// .pipe(revReplace())/*更新index引用*/
// .pipe(gulp.dest(['dist/css','dist/img']));/*文件流放到dist目录下*/
// });

//  gulp.task('default', ['task-css','task-js']);




/**
 * 打包js
 * 输入：controls/common/*.js
 * 输出：controls/common.min.js
 */
// gulp.task('control_common', function(){
//     console.log('打包controls/common/*.js -> controls/common.min.js');
//     gulp.src([
//             './controls/common/utils.js',   //第一个
//             './controls/common/Components.js',
//             './controls/common/MarkWidget/MarkManager.js',
            
//             ...
                        
//             './controls/common/MarkWidget/MarkWidget.js',   //有依赖
//         ])
//         .pipe(concat('common.min.js'))
//         .pipe(gulp.dest('controls/'));
// });


