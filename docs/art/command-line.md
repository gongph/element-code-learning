# 构建命令行总览

弄清楚 Element 各个目录结构的作用之后，接下来就是来大概了解下 `package.json` 中的构建命令了。

打开根目录下的 `package.json` ，找到 `scripts` :

```js
{
  "scripts": {
    // 安装项目依赖
    "bootstrap": "yarn || npm i",
    // 文件相关的构建
    "build:file": "node build/bin/iconInit.js & node build/bin/build-entry.js & node build/bin/i18n.js & node build/bin/version.js",
    // 主题相关的构建
    "build:theme": "node build/bin/gen-cssfile && gulp build --gulpfile packages/theme-chalk/gulpfile.js && cp-cli packages/theme-chalk/lib lib/theme-chalk",
    // 工具文件的相关构建
    "build:utils": "cross-env BABEL_ENV=utils babel src --out-dir lib --ignore src/index.js",
    // 构建 umd 文件
    "build:umd": "node build/bin/build-locale.js",
    // 删除目录
    "clean": "rimraf lib && rimraf packages/*/lib && rimraf test/**/coverage",
    // 官网构建打包
    "deploy:build": "npm run build:file && cross-env NODE_ENV=production webpack --config build/webpack.demo.js && echo element.eleme.io>>examples/element-ui/CNAME",
    // 开发构建
    "dev": "npm run bootstrap && npm run build:file && cross-env NODE_ENV=development webpack-dev-server --config build/webpack.demo.js & node build/bin/template.js",
    "dev:play": "npm run build:file && cross-env NODE_ENV=development PLAY_ENV=true webpack-dev-server --config build/webpack.demo.js",
    // 生产构建
    "dist": "npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme",
    // 国际化构建
    "i18n": "node build/bin/i18n.js",
    // 校验
    "lint": "eslint src/**/* test/**/* packages/**/* build/**/* --quiet",
    // 发布到 github
    "pub": "npm run bootstrap && sh build/git-release.sh && sh build/release.sh && node build/bin/gen-indices.js && sh build/deploy-faas.sh",
    // 测试构建
    "test": "npm run lint && npm run build:theme && cross-env CI_ENV=/dev/ karma start test/unit/karma.conf.js --single-run",
    // 自动化测试构建
    "test:watch": "npm run build:theme && karma start test/unit/karma.conf.js"
  }
}
```

接下来让我们一一说起，哦不，让我们从第二个命令开始学习，因为第一个没啥可说的。