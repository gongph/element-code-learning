# build:theme

```js
  {
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
  }
```

补充下：
- `&` 符连接的是并行执行的任务，即同时的平行执行互不影响
- `&&` 符连接的是继发执行的任务，即只有前一个任务成功，才执行下一个任务

可以看到，该命令有三个继发任务，分别是：

- `node build/bin/gen-cssfile`
- `gulp build --gulpfile packages/theme-chalk/gulpfile.js`
- `cp-cli packages/theme-chalk/lib lib/theme-chalk`

让我们一个一个文件开始看。

## gen-cssfile.js 文件
在 `build/bin` 目录下，内容并不是很长：

```js
var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var themes = [
  'theme-chalk'
];
Components = Object.keys(Components);
var basepath = path.resolve(__dirname, '../../packages/');

// ↑ 以上都不用说了吧，很简单的代码
// ------------------------------
// ↓ 重点是下面的处理流程

// 校验文件是否存在
function fileExists(filePath) {
  try {
    // fs.statSync 是 fs.stat 的同步版
    // 获取文件信息
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// 遍历主题数组
themes.forEach((theme) => {
  // 判断主题是否是 scss 格式的文件夹
  var isSCSS = theme !== 'theme-default';
  var indexContent = isSCSS ? '@import "./base.scss";\n' : '@import "./base.css";\n';
  // 遍历
  Components.forEach(function(key) {
    // 排除这三个文件
    // TODO: 暂时还看不出为啥要排除这三个文件
    if (['icon', 'option', 'option-group'].indexOf(key) > -1) return;
    
    // 例如：`alert.scss`
    var fileName = key + (isSCSS ? '.scss' : '.css');
    indexContent += '@import "./' + fileName + '";\n';
    // 生成文件完成路径
    var filePath = path.resolve(basepath, theme, 'src', fileName);
    // 如果该文件不存在
    if (!fileExists(filePath)) {
      // 新建
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
  
  // 最后把生成的 indexContent 一堆 `@import "./xxx.scss"`
  // 写入到 `packages/theme-xxx/src/index.s?css` 中
  // 所以大家现在看到的 `src/index.scss` 就是生成的了
  // 以后大家再写项目的时候也可以借鉴这样来做了
  fs.writeFileSync(path.resolve(basepath, theme, 'src', isSCSS ? 'index.scss' : 'index.css'), indexContent);
});
```
这个文件的目的是，根据根目录下的 `components.json` 文件动态生成主题入口文件，即 `index.s?css` 。


## gulp build 命令
这是个 gulp 构建工具命令，如果对它还不熟悉，可以先到 [Gulp中文网](https://www.gulpjs.com.cn/) 快速了解一下。

可以看到：

`gulp build --gulpfile packages/theme-chalk/gulpfile.js` 命令运行后执行的是主题文件下的 gulpfile.js 并携带了一个参数 `--gulpfile`。其实这个参数没用到，不排除以后不用。代码也不长：

```js
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');

// 编译
gulp.task('compile', function() {
  // 1. 先找到 scss 源码文件
  return gulp.src('./src/*.scss')
    // 2. 再把 scss 编译成 css 文件
    .pipe(sass.sync())
    // 3. 自动补全浏览器前缀，例如：-webkit、-moz、-o, etc.
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    // 4. 压缩 css 文件
    .pipe(cssmin())
    // 5. 输出到 `packages/theme-chalk/lib/` 目录
    .pipe(gulp.dest('./lib'));
});

// 拷贝字体
gulp.task('copyfont', function() {
  // 1. 也是先找到字体文件
  return gulp.src('./src/fonts/**')
    // 2. 压缩字体文件
    // 还真不知道 cssmin 可以处理字体文件的压缩，学到了！
    .pipe(cssmin())
    // 3. 输出到 `packages/theme-chalk/lib/fonts/` 目录
    .pipe(gulp.dest('./lib/fonts'));
});

// 从这里开始执行
// 先执行编译命令'compile'，后执行拷贝字体命令 'copyfont'
gulp.task('build', ['compile', 'copyfont']);
```

这个文件的目的是有两个：
- 把编译压缩后的 scss 输出到 `./lib/`
- 把压缩后的字体文件输出到 `./lib/fonts`

## cp-cli 命令
Node.js的 UNIX 脚手架命令行工具，对跨平台支持很有用。可以在 `package.json` 项目开发依赖 `devDependencies` 配置中看到当前依赖的 `cp-cli` 版本是 `1.0.2` 。如果对它还不熟悉，可以先到它的 [Github](https://github.com/screendriver/cp-cli#readme) 上快速了解一下。

可以看到：

`cp-cli packages/theme-chalk/lib lib/theme-chalk"` 命令执行后，其实是把 `packages/theme-chalk/lib` 目录下的文件拷贝到 `lib/theme-chalk`

这个命令的目的是把 `./lib` 下的文件拷贝到 `lib/theme-chalk` 

::: tip
注意拷贝的目标文件夹 `lib` 和 `packages` 是同级的
:::

## 总结

- 上面三个命令是按顺序执行的，只有前一个命令执行完后一个才开始执行
- 其实全都是对主题文件夹的处理，其中：
- `node build/bin/gen-cssfile` 是把 `packages/theme-chalk` 下的 scss 文件合并成 index.scss 或 index.css
- `gulp build --gulpfile packages/theme-chalk/gulpfile.js` scss和字体文件的处理
- `cp-cli packages/theme-chalk/lib lib/theme-chalk` css和字体文件的复制