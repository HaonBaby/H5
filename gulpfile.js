var gulp = require('gulp');
//var sass = require('gulp-sass');
gulp.task('copyallfile',function(){
	gulp.src('./**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\ZDF'));
});

gulp.task("copy-html",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF"))
})
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/css/"))
})
gulp.task("images",function(){
	gulp.src("img/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/img/"))
})
gulp.task("html",function(){
	gulp.src("html/*.html")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/html/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/js/"))
})
gulp.task("font",function(){
	gulp.src("font/**")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/font/"))
})
gulp.task("php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/php"))
})

gulp.task("sass",function(){
	gulp.src("scss/*.scss")
	
	.pipe(gulp.dest("D:/phpStudy/WWW/ZDF/scss/"))
})
gulp.task('all',function(){//copy这些项目收文件到服务器下
	gulp.src(['*/**','index.html','!node_modules/**','!*.json','!*.project']).pipe(gulp.dest('D:\\phpStudy\\WWW\\ZDF'));
});
gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy-html"]);
	gulp.watch("css/*.css",["copy-css"]);
	gulp.watch("img/*.{jpg,png,gif,bmp}",["images"]);
	gulp.watch("html/*.html",["html"]);
	gulp.watch("js/*.js",["js"]);
	gulp.watch("font/**",["font"]);
	gulp.watch("php/*.php",["php"]);
	gulp.watch("scss/*.scss",["sass"]);
})


