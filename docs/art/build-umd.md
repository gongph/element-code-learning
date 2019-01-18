# build:umd

```js
{
  "build:umd": "node build/bin/build-locale.js"
}
```

找到对应的文件，代码不长，让我们逐行分析构建过程：

```js{17-25}
var fs = require('fs');
// 流式保存 https://www.npmjs.com/package/file-save
var save = require('file-save');
// Node.js 将路径或路径片段处理成绝对路径
// http://nodejs.cn/api/path.html#path_path_resolve_paths
var resolve = require('path').resolve;
// Node.js 模块获取文件名
// http://nodejs.cn/api/path.html#path_path_basename_path_ext
var basename = require('path').basename;
// 获取国际化文件路径
var localePath = resolve(__dirname, '../../src/locale/lang');
// 获取国际化文件列表
var fileList = fs.readdirSync(localePath);

// 这个方法是这个文件的重点
// 将所有的文件转换成 umd 模块化格式
var transform = function(filename, name, cb) {
  require('babel-core').transformFile(resolve(localePath, filename), {
    plugins: [
      'add-module-exports',
      ['transform-es2015-modules-umd', {loose: true}]
    ],
    moduleId: name
  }, cb);
};

fileList
  .filter(function(file) {
    // 必须是 .js 文件
    return /\.js$/.test(file);
  })
  .forEach(function(file) {
    // 获取文件名
    var name = basename(file, '.js');
    // -> 例如，name：'zh-CN'

    // 开始处理了
    // 例如，file: 'zh-CN.js', name: 'zh_CN'
    transform(file, name, function(err, result) {
      if (err) {
        console.error(err);
      } else {
        // 转换后的代码
        var code = result.code;

        // 这里替换掉生成的变量
        code = code
          .replace('define(\'', 'define(\'element/locale/')
          .replace('global.', 'global.ELEMENT.lang = global.ELEMENT.lang || {}; \n    global.ELEMENT.lang.');
        save(resolve(__dirname, '../../lib/umd/locale', file)).write(code);

        console.log(file);
      }
    });
  });
```

大家注意这行代码：

```js
...
code = code
    .replace('define(\'', 'define(\'element/locale/')
    .replace('global.', 'global.ELEMENT.lang = global.ELEMENT.lang || {}; \n    global.ELEMENT.lang.');
...
```

如果把上面这行代码去掉转换后的效果是下面这样：

```js
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define('ar', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.ar = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = { /* 省略了源文件中的国际化配置属性 */ };
  module.exports = exports['default'];
});
```

加上上面这行代码，文件转换后的代码是这样的：

```js
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    // 定义了一个命名模块
    // 如果不定义一个命名空间，页面上同时存在多个国际化文件的时候
    // 就会造成全局污染，导致错误

    // 如果你使用 requireJS 模块化引入的话，命名空间路径是相对于你的 baseUrl 配置的
    // 这就要求你的国际化文件必须放在 `baseUrl/element/locale/` 中
    define('element/locale/ar', ['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    // 相关链接：http://element-cn.eleme.io/2.4/#/zh-CN/component/i18n
    // 如果采用 CDN 方式引入的话，global 就是 window 对象
    // 那么国际化的调用方式就是:
    // ELEMENT.locale(ELEMENT.lang.en)
    global.ELEMENT.lang = global.ELEMENT.lang || {}; 
    global.ELEMENT.lang.ar = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.default = { /* 省略了源文件中的国际化配置属性 */ };
  module.exports = exports['default'];
});
```

其中用到了：

- [file-save](https://www.npmjs.com/package/file-save)，这个包的作用就是将数据以流的形式保存到目录，如果这个目录不存在，则自己创建。使用之前需要先安装：

```bash
npm i file-save -D # 或 yarn add file-save -D
```

- [babel-core](https://www.npmjs.com/package/babel-core) babel 插件的核心包。使用之前先安装：

```bash
npm i babel-core -D # 或 yarn add babel-core -D
```
- [babel-plugin-add-module-exports](https://www.npmjs.com/package/babel-plugin-add-module-exports) 更好的兼容高版本 babel 对 `export default {}` 支持问题。使用之前先安装：

```bash
npm i babel-plugin-add-module-exports -D
# or
yarn add babel-plugin-add-module-exports -D
```

- [babel-plugin-transform-es2015-modules-umd](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-umd) 将 ES2015 模块转换为通用模块定义（UMD）

此插件在 `babel@6.x` 中是内置插件，`babel@7.x` 将它剥离出来需单独安装：

```bash
npm i -D babel-plugin-transform-es2015-modules-umd
```


